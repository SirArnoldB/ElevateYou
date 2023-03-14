import { useState, useEffect } from "react";
import "./styles/App.css";
import SelfDiscoveryFlashcards from "./components/SelfDiscoveryFlashcards";
import { db } from "./config/firebase";
import { get, ref } from "firebase/database";
import OptionCard from "./components/OptionCard";
import FlashCards from "./components/FlashCards";

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

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
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getCards();
  }, []);

  const updateCard = () => {
    const newCardIndex = (currentCardIndex + 1) % cards.length;
    setCurrentCardIndex(newCardIndex);
  };

  const handleStart = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <div className="header-row">
        <h1>Elevate You</h1>
        <h3>Empower Yourself, One Card At A Time!</h3>
        <h4>
          Improve yourself with daily positive affirmations, goal-setting, and
          life-changing insights.
        </h4>
      </div>
      <div className="card-row">
        {selectedOption ? (
          <FlashCards selectedOption={selectedOption} />
        ) : (
          <div className="flashcard-options">
            <OptionCard
              title="Self-Discovery Flashcards"
              description="Learn more about yourself and your inner thoughts with our Self-Discovery Flashcards."
              onStart={() => handleStart("self-discovery")}
            />
            <OptionCard
              title="Numbers Flashcards"
              description="Improve your knowledge of math and numbers with our Numbers Flashcards."
              onStart={() => handleStart("numbers")}
            />
          </div>
        )}
      </div>
    </div>
  );
}

/**
 *   return (
    <div className="App">
      <div className="header-row">
        <h1>Elevate You</h1>
        <h3>Empower Yourself, One Card At A Time!</h3>
        <h4>
          Improve yourself with daily positive affirmations, goal-setting, and
          life-changing insights.
        </h4>
      </div>
      <div className="card-row">
        {loading ? (
          <div style={{ marginTop: "30px", marginBottom: "30px" }}>
            Loading...
          </div>
        ) : cards.length > 0 ? (
          <SelfDiscoveryFlashcards
            key={currentCardIndex}
            card={cards[currentCardIndex]}
          />
        ) : (
          <div style={{ marginTop: "30px", marginBottom: "30px" }}>
            No cards found.
          </div>
        )}
      </div>
      <div className="button-row">
        <NextButton nextCard={updateCard} />
      </div>
    </div>
  );
}
 */

export default App;
