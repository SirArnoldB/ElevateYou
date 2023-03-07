import React, { useState } from "react";
import "../styles/Card.css";

const Card = (props) => {
  const [flipped, setFlipped] = useState(false);

  const prompt = props.card.prompt;
  const actionSteps = props.card.actionSteps.map((action_step) => (
    <li>{action_step}</li>
  ));
  const books = props.card.resources.Books.map((book) => <li>{book}</li>);
  const onlineResources = props.card.resources.Online.map((item) => (
    <li>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        {item.title}
      </a>
    </li>
  ));
  const category = props.card.category;

  return (
    <div className="card-container">
      <div
        className={`card ${category} ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="card-front">
          <div className="card-front-content">{prompt}</div>
        </div>
        <div className="card-back">
          <div className="card-back-content">
            <div>
              <p>Action Steps 🚀</p>
              <ul>{actionSteps}</ul>
            </div>
            <div>
              <p>Books 📖</p>
              <ul>{books}</ul>
            </div>
            <div>
              <p>Online Resources 💻</p>
              <ul>{onlineResources}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
