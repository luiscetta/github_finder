import { useState } from "react";

import "./styles.scss";

export default function Homepage() {
  // const [modalShow, setModalShow] = useState(false);

  const handleOpenModal = () => {
    setModalShow(true);
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="text-content">
          <h1 className="home-title">
            Welcome to <span>Github Finder</span>.
          </h1>
          <p>
            Do you like to follow the commits of the users most loved by the
            devs? That really robust project that he usually posts on his
            profile? You can find it here!
          </p>
          <a href="/" className="home-search-btn" onClick={handleOpenModal}>
            Search for user
          </a>
        </div>
      </div>
    </div>
  );
}
