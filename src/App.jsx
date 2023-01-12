import { useState, useEffect } from 'react'
import Keyboard from './Components/Keyboard';
import { validWords } from './Utilities/wordList';
import './App.css'
import WinScreen from './Components/WinScreen';
import GameBoard from './Components/GameBoard';

function App() {

  const [letters, setLetters] = useState([]);
  const [keyboardLetters, setKeyboardLetters] = useState([]);
  const [clickedLetters, setClickedLetters] = useState([]);
  const [keyboardWord, setKeyboardWord] = useState([]);
  const [wordNumber, setWordNumber] = useState(0);
  const [secretWord, setSecretWord] = useState([]);
  const [checkWinWord, setCheckWinWord] = useState('')
  const [showWin, setShowWin] = useState(false);

  const [inputCount, setInputCount] = useState(0);

  useEffect(() => {
    getNewWord();
  }, [])
  


  const backSpace = () => {
    if (inputCount === 0) {return}
    setInputCount(inputCount - 1);
    const deleteLetter = [...letters]
    const deleteKeyboardLetter = [...keyboardLetters]
    deleteLetter.pop();
    deleteKeyboardLetter.pop();
    setLetters(deleteLetter);
    setKeyboardLetters(deleteKeyboardLetter);
  }

  const handleLetter = (e) => {
    if (inputCount === 5) {return}
    setInputCount(inputCount + 1);
    setLetters([...letters, {letter: e.target.innerText, inWord: false, inPlace: false, flipLetter: false}])
    setKeyboardLetters([...keyboardLetters, e.target.innerText])
    console.log(keyboardLetters);
  }

  const checkWord = () => {
    if (inputCount !== 5) {return}

    const currentWord = letters.slice(-5);
    const checkValidWord = currentWord[0].letter + currentWord[1].letter + currentWord[2].letter + currentWord[3].letter + currentWord[4].letter;
    if (!validWords.includes(checkValidWord.toLowerCase())) {alert('Word not in word list'); return}

    console.log(checkValidWord);

    const checkedWord = [...letters];
    setClickedLetters(keyboardLetters);
    setKeyboardWord(secretWord);
    setInputCount(0);

    checkedWord.map((letter, index) => {
      letter.flipLetter = true;
      if (secretWord.includes(letter.letter)) {letter.inWord = true};
      if (secretWord[index - wordNumber] === letter.letter) {letter.inPlace = true};
    })

    setLetters(checkedWord);
    setWordNumber(wordNumber + 5);

    if (checkWinWord === checkValidWord) {
      setTimeout(() => {
        youWin()
      }, 2500);
    };
  }

  const getNewWord = () => {
    setSecretWord([]);
    setClickedLetters([]);
    setLetters([]);
    setInputCount(0);
    setKeyboardLetters([]);
    setKeyboardWord([]);
    setWordNumber(0);
    setShowWin(false);

    const newWordIndex = Math.floor(Math.random() * validWords.length);
    const newWord = validWords[newWordIndex].toUpperCase();
    const newWordArray = newWord.split('');
    setSecretWord(newWordArray);
    setCheckWinWord(newWord);
  }

  const youWin = () => {
    setShowWin(true);
  }


  return (
    <div className="App">

      <div className='header'>
        <b>Turdle</b>
        <button onClick={getNewWord}>Get a New Word</button>
      </div>

      <GameBoard letters={letters} />

      <WinScreen getNewWord={getNewWord} showWin={showWin} setShowWin={setShowWin} />

      <Keyboard handleLetter={handleLetter} backSpace={backSpace} checkWord={checkWord} clickedLetters={clickedLetters} secretWord={keyboardWord} />
      
    </div>
  )
}

export default App
