import React, { useState, useEffect } from "react";
import NextButton from "./NextButton";
import "../styles/Card.css";
import NumbersStartForm from "./NumbersStartForm";
import axios from "axios";
import {
  BsArrowRight,
  BsArrowLeft,
  BsShuffle,
  BsArrowRepeat,
} from "react-icons/bs";
import "../styles/NumbersFlashcards.css";
import RestartModal from "./RestartModal";
import {
  getRandomNumFacts,
  getCustomNumFacts,
} from "../utils/fetchNumbersFacts";
import shuffleArray from "../utils/shuffleArray";
import StartCard from "./StartCard";
import NumbersCard from "./NumbersCard";
import CardControls from "./CardControls";
import fetchCards from "../utils/fetchNumbersCards";

const NumbersFlashCards = () => {
  // states
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  //   const [timerSeconds, setTimerSeconds] = useState(15);
  //   const [customRange, setCustomRange] = useState(false);
  //   const [minValue, setMinValue] = useState(0);
  //   const [maxValue, setMaxValue] = useState(0);
  const [loading, setLoading] = useState(false);
  //   const [progress, setProgress] = useState(0);
  //   const [bestScore, setBestScore] = useState(0);
  //   const [currentScore, setCurrentScore] = useState(0);
  const [showStartForm, setShowStartForm] = useState(true);
  const [flipped, setFlipped] = useState(false);
  const [showStartCard, setShowStartCard] = useState(false);
  const [previousCardIndex, setPreviousCardIndex] = useState(currentCardIndex);
  const [currentCard, setCurrentCard] = useState({});
  const [showRestartModal, setShowRestartModal] = useState(false);

  const getCards = async (rangeType, min, max, numQuestions) => {
    setLoading(true);

    const numbersCards = await fetchCards(rangeType, min, max, numQuestions);

    if (numbersCards.length) {
      setCards(numbersCards);
    } else {
      // No cards found
      console.log("No Cards Found.");
    }

    setLoading(false);
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
      setPreviousCardIndex(currentCardIndex);
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setPreviousCardIndex(currentCardIndex);
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  useEffect(() => {
    if (currentCardIndex !== previousCardIndex) {
      setCurrentCard(cards[currentCardIndex]);
    }
  }, [currentCardIndex]);

  const handleStart = (rangeType, min, max, isTimer, numQuestions) => {
    setTimerOn(isTimer);
    setShowStartForm(false);
    setShowStartCard(true);
    getCards(rangeType, min, max, numQuestions);
  };

  console.log(currentCard);

  const handleRestartCurrent = () => {
    setShowRestartModal(false);
    setCurrentCardIndex(0);
  };

  const handleStartNew = () => {
    setShowRestartModal(false);
    setShowStartForm(true);
  };

  const renderProgressBar = () =>
    // TODO: render the progress bar
    console.log("renderProgressBar");

  const renderScore = () =>
    // TODO: render the current score and best score
    console.log("renderScore");

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
          {renderProgressBar()}
          {renderScore()}
          <NumbersCard
            currentCard={cards[currentCardIndex]}
            flipped={flipped}
            setFlipped={setFlipped}
          />
          <CardControls
            cards={cards}
            currentCardIndex={currentCardIndex}
            handleNextCard={handleNextCard}
            handlePrevCard={handlePrevCard}
            handleShuffle={handleShuffle}
            showRestartModal={showRestartModal}
            setShowRestartModal={setShowRestartModal}
            handleRestartCurrent={handleRestartCurrent}
            handleStartNew={handleStartNew}
          />
        </>
      )}
    </>
  );
};

export default NumbersFlashCards;
