import React from "react";

const StartCard = ({ setShowStartCard }) => (
  <div className="start-card">
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <div className="card-front-content">
            <h3>Welcome Numbers Flashcards!</h3>
            <h5>
              In this game, you will be given a fact about a number and you will
              have to guess the number. You will have 15 seconds to answer each
              question. If you answer correctly, you will get 1 point. If you
              answer incorrectly, you will lose 1 point. If you run out of time,
              you will lose 1 point. You can also shuffle the cards, go to the
              previous card, or go to the next card. Good luck!
            </h5>
            <h6>Ready?</h6>
            <button onClick={() => setShowStartCard(false)}>Begin</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StartCard;
