import { useState, useEffect, createContext } from 'react'
import Keyboard from './Components/Keyboard';
import { validWords, playableWords } from './Utilities/wordList';
import './App.css'
import WinScreen from './Components/WinScreen';
import LoseScreen from './Components/LoseScreen';
import InvalidWord from './Components/InvalidWord';
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
  const [showLose, setShowLose] = useState(false);
  const [showInvalid, setShowInvalid] = useState(false);
  const [secretWordDupes, setSecretWordDupes] = useState([]);
  const [keyedDupes, setKeyedDupes] = useState([]);
  const [dupeInPlace, setDupeInPlace] = useState(false);

  const [inputCount, setInputCount] = useState(0);

  if (!localStorage.getItem("Stats")){
  localStorage.setItem("Stats", JSON.stringify({wins: 0, losses: 0, currentStreak: 0, maxStreak: 0, plays: 0, win1: 0, win2: 0, win3: 0, win4: 0, win5: 0, win6: 0}));}

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
    setLetters([...letters, {letter: e.target.innerText, inWord: false, inPlace: false, flipLetter: false, isDupe: duplicate, keyedDupe: false, isUsed: false}])
    setKeyboardLetters([...keyboardLetters, e.target.innerText])
  }

  const checkWord = () => {
    if (inputCount !== 5) {return}

    const currentWord = letters.slice(-5);
    const checkValidWord = currentWord[0].letter + currentWord[1].letter + currentWord[2].letter + currentWord[3].letter + currentWord[4].letter;
    if (!playableWords.includes(checkValidWord.toLowerCase())) {isInvalid(); return}

    let duplicateInPlace = false;

    const duplicateLetters = checkDuplicates(checkValidWord.split(''));
    setKeyedDupes(duplicateLetters);

    const checkedWord = [...letters];
    setKeyboardWord(secretWord);
    setInputCount(0);

    checkedWord.map((letter, index) => {
      letter.flipLetter = true;
      letter.isUsed = true;
      if (secretWord.includes(letter.letter)) {letter.inWord = true};
      if (secretWord[index - wordNumber] === letter.letter) {letter.inPlace = true};
      if (duplicateLetters.includes(letter.letter)) {letter.keyedDupe = true};
    })
    
    checkedWord.map((letter) => {
      
      if (letter.keyedDupe && letter.inPlace) {duplicateInPlace = true};
    })

    setDupeInPlace(duplicateInPlace);
    setLetters(checkedWord);
    setWordNumber(wordNumber + 5);

    setTimeout(() => {
      keyboardColors();
    }, 2000);
  
    if (checkWinWord === checkValidWord) {
      const statsObject = JSON.parse(localStorage.getItem('Stats'));
      statsObject.wins += 1;
      statsObject.currentStreak +=1;
      statsObject.plays += 1;
      if (statsObject.currentStreak > statsObject.maxStreak){ statsObject.maxStreak = statsObject.currentStreak };
      if ( wordNumber === 0 ) { statsObject.win1  += 1 };
      if ( wordNumber === 5 ) { statsObject.win2  += 1 };
      if ( wordNumber === 10 ) { statsObject.win3  += 1 };
      if ( wordNumber === 15 ) { statsObject.win4  += 1 };
      if ( wordNumber === 20 ) { statsObject.win5  += 1 };
      if ( wordNumber === 25 ) { statsObject.win6  += 1 };
      localStorage.setItem("Stats", JSON.stringify(statsObject));

      setTimeout(() => {
        youWin()
      }, 2500);
    };

    if (checkWinWord !== checkValidWord && wordNumber === 25) {
      const statsObject = JSON.parse(localStorage.getItem('Stats'));
      statsObject.losses += 1;
      statsObject.currentStreak = 0;
      statsObject.plays += 1;
      console.log(wordNumber);
      

      localStorage.setItem("Stats", JSON.stringify(statsObject));

      setTimeout(() => {
        youLose()
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
    setShowLose(false);

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

  const youLose = () => {
    setShowLose(true);
  }

  const isInvalid = () => {
    setShowInvalid(true);
  }

  const keyboardColors = () => {
    setClickedLetters(keyboardLetters);
  }


  return (
    <div className="App">

      <div className='header'>
        <h2>NEWordle</h2>
        <button style={{padding: "7px"}} onClick={getNewWord}>Get a New Word</button>
      </div>
      <DuplicateContext.Provider value={[secretWordDupes, keyedDupes, dupeInPlace]}>

        <GameBoard letters={letters} />

        <WinScreen getNewWord={getNewWord} showWin={showWin} setShowWin={setShowWin} />
        <LoseScreen getNewWord={getNewWord} showLose={showLose} setShowLose={setShowLose} secretWord={secretWord} />
        <InvalidWord showInvalid={showInvalid} setShowInvalid={setShowInvalid} />

        <Keyboard handleLetter={handleLetter} backSpace={backSpace} checkWord={checkWord} clickedLetters={clickedLetters} secretWord={keyboardWord} />
      </DuplicateContext.Provider>
      
    </div>
  )
}

export default App
