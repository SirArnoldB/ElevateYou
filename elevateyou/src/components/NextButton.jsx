import React from "react";
import "../styles/NextButton.css";

const NextButton = (props) => {
  const handleNextClick = () => {
    props.nextCard();
  };
  return (
    <div className="next-button-container">
      <button type="next" className="next-button" onClick={handleNextClick}>
        &#8594;
      </button>
    </div>
  );
};

export default NextButton;
