import { useState } from "react";
import "./styles/App.css";
import OptionCard from "./components/OptionCard";
import FlashCards from "./components/FlashCards";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleStart = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <div className="header-row">
        <h1>ElevateYou</h1>
        <h3>Empower Yourself, One Card At A Time!</h3>
        {selectedOption == "self-discovery" ? (
          <>
            <h4>Self-Discovery Flashcards</h4>
            <h5>
              Improve yourself with daily positive affirmations, goal-setting,
              and life-changing insights.
            </h5>
          </>
        ) : selectedOption == "numbers" ? (
          <>
            <h4>Numbers Flashcards</h4>
            <h5>
              Improve your knowledge of math and numbers with our Numbers
              Flashcards.
            </h5>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="card-row">
        {selectedOption ? (
          <FlashCards selectedOption={selectedOption} />
        ) : (
          <div className="flashcard-options">
            <OptionCard
              title="Self-Discovery Flashcards"
              description="Learn more about yourself and your inner thoughts with our Self-Discovery Flashcards."
              image_url="/src/assets/self-discovery.png"
              onStart={() => handleStart("self-discovery")}
            />
            <OptionCard
              title="Numbers Flashcards"
              description="Improve your knowledge of math and numbers with our Numbers Flashcards."
              image_url="/src/assets/guess-number.jpg"
              onStart={() => handleStart("numbers")}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
