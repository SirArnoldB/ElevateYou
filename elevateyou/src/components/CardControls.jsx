import React from "react";
import {
  BsArrowRight,
  BsArrowLeft,
  BsShuffle,
  BsArrowRepeat,
} from "react-icons/bs";
import RestartModal from "./RestartModal";
import "../styles/CardControls.css";

const CardControls = ({
  showRestartModal,
  cards,
  currentCardIndex,
  handleNextCard,
  handlePrevCard,
  handleShuffle,
  handleShowModal,
  handleHideModal,
  handleRestartCurrent,
  handleStartNew,
}) => (
  <div className="controls">
    <button
      className="btn btn-icon btn-secondary restart-btn"
      onClick={handleShowModal}
    >
      <BsArrowRepeat size={30} />
    </button>
    <button
      className="btn btn-icon btn-secondary me-2 prev-btn"
      onClick={handlePrevCard}
      disabled={currentCardIndex === 0}
    >
      <BsArrowLeft size={30} />
    </button>
    <button
      className="btn btn-icon btn-secondary me-2 next-btn"
      onClick={handleNextCard}
      disabled={currentCardIndex === cards.length - 1}
    >
      <BsArrowRight size={30} />
    </button>
    <button
      className="btn btn-icon btn-secondary me-2 shuffle-btn"
      onClick={handleShuffle}
    >
      <BsShuffle size={30} />
    </button>
    {showRestartModal && (
      <RestartModal
        showRestartModal={showRestartModal}
        handleHideModal={handleHideModal}
        handleRestartCurrent={handleRestartCurrent}
        handleStartNew={handleStartNew}
      />
    )}
  </div>
);

export default CardControls;
