import { useState, useEffect } from 'react'
import Keyboard from './Components/Keyboard';
import { validWords } from './Utilities/wordList';
import './App.css'

function App() {

  const [letters, setLetters] = useState([]);
  const [keyboardLetters, setKeyboardLetters] = useState([]);
  const [clickedLetters, setClickedLetters] = useState([]);
  const [keyboardWord, setKeyboardWord] = useState([]);
  const [wordNumber, setWordNumber] = useState(0);
  const [secretWord, setSecretWord] = useState([]);

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
    setLetters([...letters, {letter: e.target.innerText, inWord: false, inPlace: false}])
    setKeyboardLetters([...keyboardLetters, e.target.innerText])
    console.log(keyboardLetters);
  }

  const checkWord = () => {
    if (inputCount !== 5) {return}
    const checkedWord = [...letters];
    setClickedLetters(keyboardLetters);
    setKeyboardWord(secretWord);
    setInputCount(0);

    checkedWord.map((letter, index) => {
      if (secretWord.includes(letter.letter)) {letter.inWord = true};
      if (secretWord[index - wordNumber] === letter.letter) {letter.inPlace = true};
    })

    setLetters(checkedWord);
    setWordNumber(wordNumber + 5);
  }

  const getNewWord = () => {
    const newWordIndex = Math.floor(Math.random() * validWords.length);
    const newWord = validWords[newWordIndex].toUpperCase();
    const newWordArray = newWord.split('');
    setSecretWord(newWordArray);
    console.log(newWordArray);
  }


  return (
    <div className="App">

      <div className='header'>
        <b>Turdle</b>
        <button onClick={getNewWord}>Get a New Word</button>
      </div>

      <div className='board'>
        <div className="board-row">
          <div className={!letters[0]?.inWord ? "board-tile" : letters[0]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[0]?.letter}</div>
          <div className={!letters[1]?.inWord ? "board-tile" : letters[1]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[1]?.letter}</div>
          <div className={!letters[2]?.inWord ? "board-tile" : letters[2]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[2]?.letter}</div>
          <div className={!letters[3]?.inWord ? "board-tile" : letters[3]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[3]?.letter}</div>
          <div className={!letters[4]?.inWord ? "board-tile" : letters[4]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[4]?.letter}</div>
        </div>
        <div className="board-row">
          <div className={!letters[5]?.inWord ? "board-tile" : letters[5]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[5]?.letter}</div>
          <div className={!letters[6]?.inWord ? "board-tile" : letters[6]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[6]?.letter}</div>
          <div className={!letters[7]?.inWord ? "board-tile" : letters[7]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[7]?.letter}</div>
          <div className={!letters[8]?.inWord ? "board-tile" : letters[8]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[8]?.letter}</div>
          <div className={!letters[9]?.inWord ? "board-tile" : letters[9]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[9]?.letter}</div>
        </div>
        <div className="board-row">
          <div className={!letters[10]?.inWord ? "board-tile" : letters[10]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[10]?.letter}</div>
          <div className={!letters[11]?.inWord ? "board-tile" : letters[11]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[11]?.letter}</div>
          <div className={!letters[12]?.inWord ? "board-tile" : letters[12]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[12]?.letter}</div>
          <div className={!letters[13]?.inWord ? "board-tile" : letters[13]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[13]?.letter}</div>
          <div className={!letters[14]?.inWord ? "board-tile" : letters[14]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[14]?.letter}</div>
        </div>
        <div className="board-row">
          <div className={!letters[15]?.inWord ? "board-tile" : letters[15]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[15]?.letter}</div>
          <div className={!letters[16]?.inWord ? "board-tile" : letters[16]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[16]?.letter}</div>
          <div className={!letters[17]?.inWord ? "board-tile" : letters[17]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[17]?.letter}</div>
          <div className={!letters[18]?.inWord ? "board-tile" : letters[18]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[18]?.letter}</div>
          <div className={!letters[19]?.inWord ? "board-tile" : letters[19]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[19]?.letter}</div>
        </div>
        <div className="board-row">
          <div className={!letters[20]?.inWord ? "board-tile" : letters[20]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[20]?.letter}</div>
          <div className={!letters[21]?.inWord ? "board-tile" : letters[21]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[21]?.letter}</div>
          <div className={!letters[22]?.inWord ? "board-tile" : letters[22]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[22]?.letter}</div>
          <div className={!letters[23]?.inWord ? "board-tile" : letters[23]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[23]?.letter}</div>
          <div className={!letters[24]?.inWord ? "board-tile" : letters[24]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[24]?.letter}</div>
        </div>
        <div className="board-row">
          <div className={!letters[25]?.inWord ? "board-tile" : letters[25]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[25]?.letter}</div>
          <div className={!letters[26]?.inWord ? "board-tile" : letters[26]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[26]?.letter}</div>
          <div className={!letters[27]?.inWord ? "board-tile" : letters[27]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[27]?.letter}</div>
          <div className={!letters[28]?.inWord ? "board-tile" : letters[28]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[28]?.letter}</div>
          <div className={!letters[29]?.inWord ? "board-tile" : letters[29]?.inPlace ? "board-tile tile-green" : "board-tile tile-yellow"}>{letters[29]?.letter}</div>
        </div>
      </div>

      <Keyboard handleLetter={handleLetter} backSpace={backSpace} checkWord={checkWord} clickedLetters={clickedLetters} secretWord={keyboardWord} />
      
    </div>
  )
}

export default App
