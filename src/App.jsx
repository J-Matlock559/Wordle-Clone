import { useState, useEffect, createContext } from 'react'
import Keyboard from './Components/Keyboard';
import { validWords } from './Utilities/wordList';
import './App.css'
import WinScreen from './Components/WinScreen';
import GameBoard from './Components/GameBoard';

export const DuplicateContext = createContext();

function App() {

  const [letters, setLetters] = useState([]);
  const [keyboardLetters, setKeyboardLetters] = useState([]);
  const [clickedLetters, setClickedLetters] = useState([]);
  const [keyboardWord, setKeyboardWord] = useState([]);
  const [wordNumber, setWordNumber] = useState(0);
  const [secretWord, setSecretWord] = useState([]);
  const [checkWinWord, setCheckWinWord] = useState('')
  const [showWin, setShowWin] = useState(false);
  const [secretWordDupes, setSecretWordDupes] = useState([]);
  const [keyedDupes, setKeyedDupes] = useState([]);
  const [dupeInPlace, setDupeInPlace] = useState(false);

  const [inputCount, setInputCount] = useState(0);

  useEffect(() => {
    getNewWord();
  }, [])
  

  const checkDuplicates = wordArray => wordArray.filter((item, index) => wordArray.indexOf(item) !== index);

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
    let duplicate = false;
    if (secretWordDupes.includes(e.target.innerText)) {duplicate = true}; 
    setLetters([...letters, {letter: e.target.innerText, inWord: false, inPlace: false, flipLetter: false, isDupe: duplicate, keyedDupe: false}])
    setKeyboardLetters([...keyboardLetters, e.target.innerText])
    console.log(letters);
  }

  const checkWord = () => {
    if (inputCount !== 5) {return}

    const currentWord = letters.slice(-5);
    const checkValidWord = currentWord[0].letter + currentWord[1].letter + currentWord[2].letter + currentWord[3].letter + currentWord[4].letter;
    if (!validWords.includes(checkValidWord.toLowerCase())) {alert('Word not in word list'); return}

    let duplicateInPlace = false;

    const duplicateLetters = checkDuplicates(checkValidWord.split(''));
    setKeyedDupes(duplicateLetters);

    const checkedWord = [...letters];
    setClickedLetters(keyboardLetters);
    setKeyboardWord(secretWord);
    setInputCount(0);

    checkedWord.map((letter, index) => {
      letter.flipLetter = true;
      if (secretWord.includes(letter.letter)) {letter.inWord = true};
      if (secretWord[index - wordNumber] === letter.letter) {letter.inPlace = true};
      if (duplicateLetters.includes(letter.letter)) {letter.keyedDupe = true};
    })
    console.log(keyedDupes);
    console.log(checkedWord);
    
    checkedWord.map((letter) => {
      
      if (letter.keyedDupe && letter.inPlace) {duplicateInPlace = true};
    })

    setDupeInPlace(duplicateInPlace);
    setLetters(checkedWord);
    setWordNumber(wordNumber + 5);
    console.log(duplicateInPlace);
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

    console.log(newWordArray);

    
    const duplicateLetters = checkDuplicates(newWordArray);

    setSecretWordDupes(duplicateLetters);
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
      <DuplicateContext.Provider value={[secretWordDupes, keyedDupes, dupeInPlace]}>

        <GameBoard letters={letters} />

        <WinScreen getNewWord={getNewWord} showWin={showWin} setShowWin={setShowWin} />

        <Keyboard handleLetter={handleLetter} backSpace={backSpace} checkWord={checkWord} clickedLetters={clickedLetters} secretWord={keyboardWord} />
      </DuplicateContext.Provider>
      
    </div>
  )
}

export default App
