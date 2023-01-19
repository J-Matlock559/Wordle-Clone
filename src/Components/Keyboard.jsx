import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

function Keyboard({handleLetter, backSpace, checkWord, clickedLetters, secretWord}) {
  return (
    <div className='keyboard'>

        <div className="keyboard-row">
          <div className={secretWord.includes('Q') && clickedLetters.includes('Q') ? "keyboard-key keyboard-green" : clickedLetters.includes('Q') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>Q</div>
          <div className={secretWord.includes('W') && clickedLetters.includes('W') ? "keyboard-key keyboard-green" : clickedLetters.includes('W') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>W</div>
          <div className={secretWord.includes('E') && clickedLetters.includes('E') ? "keyboard-key keyboard-green" : clickedLetters.includes('E') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>E</div>
          <div className={secretWord.includes('R') && clickedLetters.includes('R') ? "keyboard-key keyboard-green" : clickedLetters.includes('R') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>R</div>
          <div className={secretWord.includes('T') && clickedLetters.includes('T') ? "keyboard-key keyboard-green" : clickedLetters.includes('T') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>T</div>
          <div className={secretWord.includes('Y') && clickedLetters.includes('Y') ? "keyboard-key keyboard-green" : clickedLetters.includes('Y') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>Y</div>
          <div className={secretWord.includes('U') && clickedLetters.includes('U') ? "keyboard-key keyboard-green" : clickedLetters.includes('U') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>U</div>
          <div className={secretWord.includes('I') && clickedLetters.includes('I') ? "keyboard-key keyboard-green" : clickedLetters.includes('I') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>I</div>
          <div className={secretWord.includes('O') && clickedLetters.includes('O') ? "keyboard-key keyboard-green" : clickedLetters.includes('O') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>O</div>
          <div className={secretWord.includes('P') && clickedLetters.includes('P') ? "keyboard-key keyboard-green" : clickedLetters.includes('P') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>P</div>
        </div>
        <div className="keyboard-row">
          <div className="keyboard-empty"></div>
          <div className={secretWord.includes('A') && clickedLetters.includes('A') ? "keyboard-key keyboard-green" : clickedLetters.includes('A') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>A</div>
          <div className={secretWord.includes('S') && clickedLetters.includes('S') ? "keyboard-key keyboard-green" : clickedLetters.includes('S') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>S</div>
          <div className={secretWord.includes('D') && clickedLetters.includes('D') ? "keyboard-key keyboard-green" : clickedLetters.includes('D') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>D</div>
          <div className={secretWord.includes('F') && clickedLetters.includes('F') ? "keyboard-key keyboard-green" : clickedLetters.includes('F') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>F</div>
          <div className={secretWord.includes('G') && clickedLetters.includes('G') ? "keyboard-key keyboard-green" : clickedLetters.includes('G') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>G</div>
          <div className={secretWord.includes('H') && clickedLetters.includes('H') ? "keyboard-key keyboard-green" : clickedLetters.includes('H') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>H</div>
          <div className={secretWord.includes('J') && clickedLetters.includes('J') ? "keyboard-key keyboard-green" : clickedLetters.includes('J') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>J</div>
          <div className={secretWord.includes('K') && clickedLetters.includes('K') ? "keyboard-key keyboard-green" : clickedLetters.includes('K') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>K</div>
          <div className={secretWord.includes('L') && clickedLetters.includes('L') ? "keyboard-key keyboard-green" : clickedLetters.includes('L') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>L</div>
          <div className="keyboard-empty"></div>
        </div>
        <div className="keyboard-row">
          <div className="keyboard-key keyboard-big-key" onClick={() => checkWord()}>Enter</div>
          <div className={secretWord.includes('Z') && clickedLetters.includes('Z') ? "keyboard-key keyboard-green" : clickedLetters.includes('Z') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>Z</div>
          <div className={secretWord.includes('X') && clickedLetters.includes('X') ? "keyboard-key keyboard-green" : clickedLetters.includes('X') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>X</div>
          <div className={secretWord.includes('C') && clickedLetters.includes('C') ? "keyboard-key keyboard-green" : clickedLetters.includes('C') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>C</div>
          <div className={secretWord.includes('V') && clickedLetters.includes('V') ? "keyboard-key keyboard-green" : clickedLetters.includes('V') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>V</div>
          <div className={secretWord.includes('B') && clickedLetters.includes('B') ? "keyboard-key keyboard-green" : clickedLetters.includes('B') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>B</div>
          <div className={secretWord.includes('N') && clickedLetters.includes('N') ? "keyboard-key keyboard-green" : clickedLetters.includes('N') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>N</div>
          <div className={secretWord.includes('M') && clickedLetters.includes('M') ? "keyboard-key keyboard-green" : clickedLetters.includes('M') ? "keyboard-key keyboard-dark" : "keyboard-key"} onClick={(e) => {handleLetter(e)}}>M</div>
          <div className="keyboard-key keyboard-big-key" style={{fontSize: "1.5rem"}} onClick={(e) => {backSpace()}}><FontAwesomeIcon icon={faDeleteLeft}/></div>
        </div>
      </div>
  )
}

export default Keyboard