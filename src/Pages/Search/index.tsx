import { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

import SearchModal from "../../components/Modal/SearchModal";
import animationData from "../../components/assets/json/backBtn.json";
import GenericButton from "../../components/Buttons/GenericButton";
import { GithubUser, GithubRepo } from "../../types/user";
import { ErrorToast } from "../../utils/toaster";
import User from "../../components/User";
import Repositorys from "../../components/Repositories";
import GetUser from "../../services/Users";
import GetRepos from "../../services/Repos";
import "./styles.scss";

export default function Search() {
  const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [hasError, setHasError] = useState(false);
  const [searching, setSearching] = useState(false);

  const handleOpenModal = () => {
    setModalShow(true);
  };

  const loadUser = async (userName: string) => {
    try {
      setSearching(true);

      const user = await GetUser(userName);
      const repos = await GetRepos(userName);

      setUser(user);
      setRepos(repos);
      setSearching(false);
      setModalShow(false);
      setHasError(false);
    } catch (err) {
      console.error(err);
      setHasError(true);
      setSearching(false);
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
        <>
          <div className="search-result-container">
            <div className="search-result-layout">
              <User data={user} />
              <Repositorys data={repos} />
            </div>
            <div className="search-btn-content">
              <GenericButton
                onClick={handleOpenModal}
                className="search-btn"
                content="Search again"
              />
            </div>
          </div>
        </>
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
