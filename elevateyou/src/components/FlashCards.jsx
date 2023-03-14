import React from "react";
import SelfDiscoveryFlashcards from "./SelfDiscoveryFlashcards";
import NumbersFlashcards from "./NumbersFlashcards";

const FlashCards = ({ selectedOption }) => {
  switch (selectedOption) {
    case "self-discovery":
      return <SelfDiscoveryFlashcards />;
    case "numbers":
      return <NumbersFlashcards />;
    default:
      return <div>Category not found.</div>;
  }
};

export default FlashCards;
