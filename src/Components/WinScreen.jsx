import React from 'react'

function WinScreen({getNewWord, showWin, setShowWin}) {

  if (showWin === false) return null

  return (
    <div className='win-container'>
      <div className='win-card'>
        <button className="win-close" onClick={() => {setShowWin(false)}}>X</button>
        <h1>You Win!</h1>
        <button style={{padding: '20px'}} onClick={() => {getNewWord()}}>Play Again</button>
      </div>
    </div>
  )
}

export default WinScreen