import { Modal } from "react-bootstrap";

import "./styles.scss";

type SearchModalProps = {
  show: boolean;
  onHide: () => void;
};

export default function SearchModal({ show, onHide }: SearchModalProps) {
  return (
    <>
      <Modal
        size="lg"
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title>Finder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="input-title">Enter the user you want to search for below</h4>
          <div className="search-input-field">
            <input className="search-input" type="text" />
            <button className="search-btn">BUSCAR</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
