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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Restart Cards
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

export default RestartModal;
