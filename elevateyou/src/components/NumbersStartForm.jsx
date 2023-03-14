import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/NumbersStartForm.css";

const NumbersStartForm = ({ onStart }) => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [isRandom, setIsRandom] = useState(true);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [numQuestions, setNumQuestions] = useState(
    import.meta.env.VITE_DEFAULT_QUESTION_COUNT
  );

  const handleStart = (event) => {
    event.preventDefault();
    if (isRandom) {
      onStart("random", null, null, isTimerOn, numQuestions);
    } else {
      onStart("custom", parseInt(min), parseInt(max), isTimerOn, numQuestions);
    }
  };

  const showNote = !isRandom && max - min + 1 > 100;

  return (
    <Form onSubmit={handleStart}>
      <Form.Group className="mb-3" controlId="rangeSelector">
        <Form.Label>Pick a range:</Form.Label>
        <Form.Select
          defaultValue="random"
          size="lg"
          onChange={(event) =>
            event.target.value === "random"
              ? setIsRandom(true)
              : setIsRandom(false)
          }
        >
          <option value="random">Random</option>
          <option value="custom">Custom</option>
        </Form.Select>
        {!isRandom && (
          <>
            <Form.Label>Minimum:</Form.Label>
            <Form.Control
              type="number"
              min="-999999999"
              max="999999999"
              value={min}
              onChange={(event) => setMin(event.target.value)}
              required
            />
            <Form.Label>Maximum:</Form.Label>
            <Form.Control
              type="number"
              min="-999999999"
              max="999999999"
              value={max}
              onChange={(event) => setMax(event.target.value)}
              required
            />
            {showNote && (
              <div className="note">Showing at most 100 numbers</div>
            )}
          </>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="numQuestionsSelector">
        <Form.Label>Number of Questions:</Form.Label>
        <Form.Control
          type="number"
          min={import.meta.env.VITE_MIN_QUESTION_COUNT}
          max={import.meta.env.VITE_MAX_QUESTION_COUNT}
          value={numQuestions}
          onChange={(event) => setNumQuestions(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="timerSelector">
        <Form.Label>Timer:</Form.Label>
        <div>
          <Form.Check
            type="switch"
            id="timer-switch"
            label=""
            checked={isTimerOn}
            onChange={() => setIsTimerOn(!isTimerOn)}
          />
        </div>
      </Form.Group>
      <Button variant="primary" type="submit" className="form-start-btn">
        Start
      </Button>
    </Form>
  );
};

export default NumbersStartForm;
