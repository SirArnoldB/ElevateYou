import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "../styles/RestartModal.css";

const RestartModal = ({
  showRestartModal,
  handleHideModal,
  handleRestartCurrent,
  handleStartNew,
}) => {
  return (
    <Modal
      show={showRestartModal}
      onHide={handleHideModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>
          Restart Cards
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={handleHideModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Do you want to restart the current set of cards, or start a new set?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleRestartCurrent}>
          Restart Current Set
        </Button>
        <Button variant="primary" onClick={handleStartNew}>
          Start New Set
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

{
  /* <Modal.Header>
  <Modal.Title>
    Restart Cards
    <span
      className="float-end"
      onClick={handleClose}
      style={{ cursor: "pointer" }}
    >
      X
    </span>
  </Modal.Title>
</Modal.Header>; */
}

export default RestartModal;
