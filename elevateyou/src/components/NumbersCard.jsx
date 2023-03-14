const NumbersCard = ({ currentCard, flipped, setFlipped }) => (
  <div className="card-container">
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-front">
        <div className="card-front-content">{currentCard.text}</div>
      </div>
      <div className="card-back">
        <div className="card-back-content">{currentCard.number}</div>
      </div>
    </div>
  </div>
);

export default NumbersCard;
