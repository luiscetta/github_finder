import { Modal } from "react-bootstrap";
import Lottie from "lottie-react";
import { BsSearch } from "react-icons/bs";

import animationData from "../../assets/json/cat1.json";
import "./styles.scss";

type SearchModalProps = {
  show: boolean;
  onHide: () => void;
};

const SearchModal = ({ show, onHide }: SearchModalProps) => {
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
              />
              <button className="search-btn">
                Search
                <BsSearch className="search-icon"/>
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
