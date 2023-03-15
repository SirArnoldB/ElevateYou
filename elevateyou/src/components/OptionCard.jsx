import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/OptionCard.css";

const OptionCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        style={{ height: "250px", width: "250px" }}
        variant="top"
        src={props.image_url}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary" onClick={props.onStart}>
          Explore
        </Button>
      </Card.Body>
    </Card>
  );
};

export default OptionCard;
