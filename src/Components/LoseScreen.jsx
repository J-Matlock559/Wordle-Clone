import React from 'react'

function LoseScreen({getNewWord, showLose, setShowLose, secretWord}) {

  if (showLose === false) return null

  console.log(secretWord);

  const theWord = secretWord[0] + secretWord[1] + secretWord[2] + secretWord[3] + secretWord[4];

  console.log(theWord);

  return (
    <div className='win-container'>
      <div className='win-card'>
        <button className="win-close" onClick={() => {setShowLose(false)}}>X</button>
        <h1>You Lose!</h1>
        <h2>The word was {theWord}</h2>
        <button style={{padding: '20px'}} onClick={() => {getNewWord()}}>Play Again</button>
      </div>
    </div>
  )
}

export default LoseScreen