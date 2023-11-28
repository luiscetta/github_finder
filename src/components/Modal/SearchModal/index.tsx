import { useState } from "react";
import { Modal } from "react-bootstrap";
import Lottie from "lottie-react";
import { BsSearch } from "react-icons/bs";

import animationData from "../../assets/json/cat1.json";
import "./styles.scss";

type SearchModalProps = {
  show: boolean;
  onHide: () => void;
  loadUser: (userName: string) => Promise<void>;
  hasError: boolean;
};

const SearchModal = ({
  show,
  onHide,
  loadUser,
  hasError,
}: SearchModalProps) => {
  const [userName, setUsername] = useState("");

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
                className={`search-input ${hasError ? "error" : ""}`}
                type="text"
                placeholder="Enter the user name"
                onChange={(e) => setUsername(e.target.value)}
                autoFocus={true}
              />
              {hasError && (
                <span className="error-span">Enter a valid username!</span>
              )}
              <button className="search-btn" onClick={() => loadUser(userName)}>
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
