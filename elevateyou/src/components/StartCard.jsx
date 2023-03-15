import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/StartCard.css";

const StartCard = ({ setShowStartCard }) => {
  return (
    <Card style={{ width: "50rem" }}>
      <Card.Body>
        <Card.Title>
          <h2>Welcome Numbers Flashcards!</h2>
        </Card.Title>
        <div className="start-card-text">
          <h4>
            In this game, you will be given a fact about a number and you will
            have to guess the number.
          </h4>
          <h5>Good Luck!</h5>
        </div>
        <Button variant="primary" onClick={() => setShowStartCard(false)}>
          Begin
        </Button>
      </Card.Body>
    </Card>
  );
};

export default StartCard;
