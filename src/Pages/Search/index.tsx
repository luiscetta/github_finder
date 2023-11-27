import { useState } from "react";

import SearchModal from "../../components/Modal/SearchModal";
import "./styles.scss";

export default function Search() {
  const [modalShow, setModalShow] = useState(false);

  const handleOpenModal = () => {
    setModalShow(true);
  };

  return (
    <div className="search-container">
      <div className="search-content">
        <h2>buscar</h2>
        <a className="search-btn" onClick={handleOpenModal}>
          Search for user
        </a>
      </div>
      <SearchModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
