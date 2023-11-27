import { useState } from "react";
import { Modal } from "react-bootstrap";
import Lottie from "lottie-react";
import { BsSearch } from "react-icons/bs";

import { UserProps } from "../../../types/user";
import animationData from "../../assets/json/cat1.json";
import "./styles.scss";

type SearchModalProps = {
  show: boolean;
  onHide: () => void;
  loadUser: (userName: string) => Promise<void>;
};

const SearchModal = ({ show, onHide, loadUser }: SearchModalProps) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [inputName, setInputName] = useState("");

  const loadUserName = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    const {
      avatar_url,
      login,
      location,
      followers,
      following,
      name,
      bio,
      blog,
    } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
      name,
      bio,
      blog,
    };

    setUser(userData);
  };

  return (
    <>
      <Modal
        size="xl"
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title>Finder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-area">
            <h4 className="input-title">
              Use the field below to do your search
            </h4>
            <div className="search-input-field">
              <input
                className="search-input"
                type="text"
                placeholder="Enter the user name."
                onChange={(e) => setInputName(e.target.value)}
              />
              <button
                className="search-btn"
                onClick={() => loadUserName(inputName)}
              >
                Search
                <BsSearch className="search-icon" />
              </button>
            </div>
          </div>
          <div className="input-animation-area">
            <Lottie
              className="cat-animation"
              animationData={animationData}
              loop={true}
              autoplay={true}
            />
            <h2 className="subtitle-animation">Found it!</h2>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SearchModal;
