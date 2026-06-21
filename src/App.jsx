import { useState } from 'react'
import Heading from './components/Heading'
import LangSection, { langs } from './components/languages'
import './App.css'

const WORDS = ["react", "javascript", "frontend", "interface", "component", "hook"];
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function App() {
  const [currentWord, setCurrentWord] = useState(() => WORDS[Math.floor(Math.random() * WORDS.length)]);
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Derived state
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length;
  const isGameLost = wrongGuessCount >= langs.length - 1;
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter));
  const isGameOver = isGameLost || isGameWon;

  function addGuessedLetter(letter) {
    if (!guessedLetters.includes(letter) && !isGameOver) {
      setGuessedLetters(prev => [...prev, letter]);
    }
  }

  function startNewGame() {
    setCurrentWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
    setGuessedLetters([]);
  }

  const wordDisplay = currentWord.split("").map((letter, index) => {
    const isRevealed = guessedLetters.includes(letter) || isGameLost;
    const isMissed = isGameLost && !guessedLetters.includes(letter);
    return (
      <span key={index} className={isMissed ? "missed" : ""}>
        {isRevealed ? letter : ""}
      </span>
    );
  });

  const keyboard = alphabet.map(letter => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    
    let className = "";
    if (isCorrect) className = "correct";
    if (isWrong) className = "wrong";

    return (
      <button 
        key={letter}
        onClick={() => addGuessedLetter(letter)}
        disabled={isGameOver || isGuessed}
        className={className}
      >
        {letter}
      </button>
    );
  });

  return (
    <div className='main'>
      <Heading />
      
      <div className="game-status-container" style={{ minHeight: '80px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        {isGameOver && (
          <div className={`game-status ${isGameWon ? "won" : "lost"}`}>
            {isGameWon ? "You win! Well done! 🎉" : "Game over! You lose! 😭"}
          </div>
        )}
      </div>

      <LangSection wrongGuessCount={wrongGuessCount} />

      <div className="word-display">
        {wordDisplay}
      </div>

      <div className="keyboard">
        {keyboard}
      </div>

      {isGameOver && (
        <button className="new-game" onClick={startNewGame}>
          New Game
        </button>
      )}
    </div>
  )
}

export default App
