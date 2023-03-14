import React, { useState, useEffect } from "react";
import NextButton from "./NextButton";
import { db } from "../config/firebase";
import { get, ref } from "firebase/database";
import "../styles/Card.css";

const SelfDiscoveryFlashcards = () => {
  const [flipped, setFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCards = async () => {
      try {
        const query = ref(db, "selfDiscoveryCards");
        const snapshot = await get(query);
        const cardsData = snapshot.val().selfDiscoveryCards;

        if (cardsData) {
          const newCards = Object.values(cardsData.selfDiscoveryCards).map(
            (card) => {
              return {
                prompt: card.prompt,
                actionSteps: card.action_steps,
                resources: card.resources,
                category: card.category,
              };
            }
          );
          setCards(newCards);
          setCurrentCard(newCards[0]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getCards();
  }, []);

  const updateCard = () => {
    const newCardIndex = (currentCardIndex + 1) % cards.length;
    setCurrentCardIndex(newCardIndex);
    setCurrentCard(cards[newCardIndex]);
  };

  const prompt = currentCard.prompt ? currentCard.prompt : null;

  const actionSteps = currentCard.actionSteps
    ? currentCard.actionSteps.map((action_step, index) => (
        <li key={`step-${index}`}>{action_step}</li>
      ))
    : null;

  const books =
    currentCard.resources && currentCard.resources.Books
      ? currentCard.resources.Books.map((book, index) => (
          <li key={`book-${index}`}>{book}</li>
        ))
      : null;

  const onlineResources =
    currentCard.resources && currentCard.resources.Online
      ? currentCard.resources.Online.map((item, index) => (
          <li key={`resource-${index}`}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))
      : null;

  const category = currentCard.category ? currentCard.category : null;

  return (
    <>
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
      <div className="button-row">
        <NextButton nextCard={updateCard} />
      </div>
    </>
  );
};

export default SelfDiscoveryFlashcards;
