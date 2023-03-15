import React, { useState, useEffect } from "react";
import "../styles/Card.css";
import NumbersStartForm from "./NumbersStartForm";
import "../styles/NumbersFlashcards.css";
import shuffleArray from "../utils/shuffleArray";
import StartCard from "./StartCard";
import NumbersCard from "./NumbersCard";
import CardControls from "./CardControls";
import fetchCards from "../utils/fetchNumbersCards";

const NumbersFlashCards = () => {
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showStartForm, setShowStartForm] = useState(true);
  const [flipped, setFlipped] = useState(false);
  const [showStartCard, setShowStartCard] = useState(false);
  const [previousCardIndex, setPreviousCardIndex] = useState(currentCardIndex);
  const [currentCard, setCurrentCard] = useState({});
  const [showRestartModal, setShowRestartModal] = useState(false);

  const getCards = async (rangeType, min, max, numQuestions) => {
    const numbersCards = await fetchCards(rangeType, min, max, numQuestions);

    if (numbersCards.length) {
      setCards(numbersCards);
    } else {
      console.log("No Cards Found.");
    }
  };

  const handleShuffle = () => {
    const remainingCards = cards.slice(currentCardIndex + 1);
    const shuffledRemainingCards = shuffleArray(remainingCards);
    setCards([
      ...cards.slice(0, currentCardIndex + 1),
      ...shuffledRemainingCards,
    ]);
  };

  const handleNextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setFlipped(false);
      setPreviousCardIndex(currentCardIndex);
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setFlipped(false);
      setPreviousCardIndex(currentCardIndex);
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleStart = (rangeType, min, max, numQuestions) => {
    setShowStartForm(false);
    setShowStartCard(true);
    getCards(rangeType, min, max, numQuestions);
  };

  const handleRestartCurrent = () => {
    setShowRestartModal(false);
    setCurrentCardIndex(0);
  };

  const handleStartNew = () => {
    setShowRestartModal(false);
    setShowStartForm(true);
  };

  const handleShowModal = () => {
    setShowRestartModal(true);
  };

  const handleHideModal = () => {
    setShowRestartModal(false);
  };

  useEffect(() => {
    if (currentCardIndex !== previousCardIndex) {
      setCurrentCard(cards[currentCardIndex]);
    }
  }, [currentCardIndex]);

  return (
    <>
      {showStartForm && (
        <div className="start-form">
          <NumbersStartForm onStart={handleStart} />
        </div>
      )}
      {showStartCard && <StartCard setShowStartCard={setShowStartCard} />}
      {!showStartForm && !showStartCard && (
        <>
          <NumbersCard
            cards={cards}
            currentCard={cards[currentCardIndex]}
            flipped={flipped}
            setFlipped={setFlipped}
          />
          <CardControls
            showRestartModal={showRestartModal}
            cards={cards}
            currentCardIndex={currentCardIndex}
            handleNextCard={handleNextCard}
            handlePrevCard={handlePrevCard}
            handleShuffle={handleShuffle}
            handleShowModal={handleShowModal}
            handleHideModal={handleHideModal}
            handleRestartCurrent={handleRestartCurrent}
            handleStartNew={handleStartNew}
          />
        </>
      )}
    </>
  );
};

export default NumbersFlashCards;
