import React from "react";
import { Modal } from "react-bootstrap";

const RestartModal = ({ showModal, hideModal, restartCurrent, startNew }) => {
  return (
    <Modal show={showModal} onHide={() => hideModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Restart Cards</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Do you want to restart the current set of cards, or start a new set?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button
          variant="secondary"
          onClick={() => {
            restartCurrent();
          }}
        >
          Restart Current Set
        </button>
        <button
          variant="primary"
          onClick={() => {
            startNew();
          }}
        >
          Start New Set
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default RestartModal;
