import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";

const NumbersCard = ({ cards, currentCard, flipped, setFlipped }) => {
  const [answer, setAnswer] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    setAnswer("");
  }, [currentCard]);

  const handleFlip = () => {
    if (flipped) {
      setFlipped(!flipped);
    }
  };

  const handleFormClick = (event) => {
    event.stopPropagation(); // prevent click event from propagating up to card
  };

  const handleAnswerSubmit = (event) => {
    event.preventDefault();
    setFlipped(!flipped);
  };

  const handleAnswerChange = (event) => {
    const value = event.target.value;
    if (value.toLowerCase() == currentCard.number) {
      setCorrect(true);
      setCurrentScore((prevScore) => prevScore + 1);
      setBestScore((prevBestScore) => {
        if (currentScore + 1 > prevBestScore) {
          return currentScore + 1;
        } else {
          return prevBestScore;
        }
      });
    }
    setAnswer(value);
  };

  return (
    <>
      <div>
        <p>{`Current Score: ${currentScore}/${cards.length}`}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <div className="card-container">
        <Card
          className={`card ${flipped ? "flipped" : ""}`}
          onClick={handleFlip}
        >
          <div className="card-front">
            <div className="card-front-content">
              {" "}
              <Card.Body>
                <Card.Title>{currentCard.text}</Card.Title>
                <Form onSubmit={handleAnswerSubmit} onClick={handleFormClick}>
                  <Form.Group controlId="formAnswer">
                    <Form.Label>Answer:</Form.Label>
                    <Form.Control
                      type="text"
                      value={answer}
                      onChange={handleAnswerChange}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Check
                  </Button>
                </Form>
              </Card.Body>
            </div>
          </div>
          <div className="card-back">
            <div className="card-back-content">
              {" "}
              <Card.Body>
                <Card.Title>
                  {correct ? (
                    <h4>Correct</h4>
                  ) : (
                    <>
                      <h4>Incorrect</h4>
                      <h6>{`Correct Answer: ${currentCard.number}`}</h6>
                    </>
                  )}
                </Card.Title>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default NumbersCard;
