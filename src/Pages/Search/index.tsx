import { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

import SearchModal from "../../components/Modal/SearchModal";
import animationData from "../../components/assets/json/backBtn.json";
import "./styles.scss";

export default function Search() {
  const [modalShow, setModalShow] = useState(false);

  const handleOpenModal = () => {
    setModalShow(true);
  };

  return (
    <div className="search-container">
      <Link to="/" className="back-btn">
        <Lottie
          className="back-btn-animation"
          animationData={animationData}
          loop={true}
          autoplay={true}
        />
      </Link>
      <div className="search-content">
        <h2 className="search-title">
          Do you already know which user you're going to search for? If so, just
          click the button below!
        </h2>
        <a className="search-btn" onClick={handleOpenModal}>
          Click here to search
        </a>
      </div>
      <SearchModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
