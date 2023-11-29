import { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import axios from "axios";

import SearchModal from "../../components/Modal/SearchModal";
import animationData from "../../components/assets/json/backBtn.json";
import GenericButton from "../../components/Buttons/GenericButton";
import { UserProps } from "../../types/user";
import { ErrorToast } from "../../utils/toaster";
import User from "../../components/User";
import "./styles.scss";

export default function Search() {
  const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState<UserProps | null>(null);
  const [hasError, setHasError] = useState(false);
  const [searching, setSearching] = useState(false);

  const handleOpenModal = () => {
    setModalShow(true);
  };

  const loadUser = async (userName: string) => {
    try {
      const res = await axios.get(`https://api.github.com/users/${userName}`);
      const data = res.data as UserProps;

      setSearching(true);
      setUser(data);
      setModalShow(false);
      setSearching(false);
      setHasError(false);
    } catch (err) {
      console.error(err);
      setHasError(true);
      ErrorToast();
    }
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
      {user ? (
        <div className="search-result-container">
          {/* <GenericButton
            onClick={handleOpenModal}
            className="search-btn"
            content="Search again"
          /> */}
          <User {...user} />
        </div>
      ) : (
        <div className="search-content">
          <h2 className="search-title">
            Do you already know which user you're going to search for?
            <br />
            If so, just click the button below!
          </h2>
          <GenericButton
            onClick={handleOpenModal}
            className="search-btn"
            content="Click here to search"
          />
        </div>
      )}
      <SearchModal
        loadUser={loadUser}
        show={modalShow}
        onHide={() => setModalShow(false)}
        hasError={hasError}
        searching={searching}
      />
    </div>
  );
}
