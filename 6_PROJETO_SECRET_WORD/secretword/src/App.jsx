//react
import { useState, useEffect, useCallback } from 'react'

//css
import './App.css'

//components
import StartScreen from './components/startScreen.jsx'
import Game from './components/Game.jsx'
import GameOver from './components/GameOver.jsx'

//data
import { wordsList } from './data/words.jsx'
import { use } from 'react'

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' }
]

const guessesQty = 3;

function App() {
  const [count, setCount] = useState(0)
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    //pegar uma categoria aleatória
    const categories = Object.keys(words)
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)]

    //pegar uma palavra aleatória
    const word =
      words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category }
  }, [words])

  //iniciar o jogo
  const startGame = useCallback(() => {
    clearLetterStates();

    const { word, category } = pickWordAndCategory();

    console.log(word, category);

    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  }, [pickWordAndCategory])

  //processa a letra inputada
  const verifyLetter = (letter) => {
    const normalizedletter = letter.toLowerCase();
    if (guessedLetters.includes(normalizedletter) || wrongLetters.includes(normalizedletter)) {
      return;
    }

    if (letters.includes(normalizedletter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedletter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedletter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  }

  function clearLetterStates() {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    if (guesses <= 0) {
      //resetar todos os estados
      clearLetterStates()

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  //resetar o jogo
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);

    setGameStage(stages[0].name);
  }

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    //condição de vitória
    if (guessedLetters.length === uniqueLetters.length && gameStage === 'game') {
      //adicionar pontuação
      setScore((actualScore) => (actualScore += 100));

      //reinciar o jogo com uma nova palavra
      clearLetterStates();

      startGame();
    }

  }, [guessedLetters, letters, startGame]);

  return (
    <>
      <div className="App">
        {gameStage === 'start' && <StartScreen startGame={startGame} />}
        {gameStage === 'game' && <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score} />}
        {gameStage === 'end' && <GameOver retry={retry} score={score} />}
      </div>
    </>
  )
}

export default App
