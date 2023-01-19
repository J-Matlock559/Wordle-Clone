import React from 'react'

function LoseScreen({getNewWord, showLose, setShowLose, secretWord}) {

  if (showLose === false) return null

  console.log(secretWord);

  const theWord = secretWord[0] + secretWord[1] + secretWord[2] + secretWord[3] + secretWord[4];

  console.log(theWord);

  const stats = JSON.parse(localStorage.getItem('Stats'));
  const winRate = Math.round((stats.wins / stats.plays)*100);

  return (
    <div className='win-container'>
      <div className='win-card'>
        <button className="win-close" onClick={() => {setShowLose(false)}}>X</button>
        <div>Statistics</div>
        <div className="stats">
          <div>
            <p className='stat-number'>{stats.plays}</p>
            <p className='stat-title'>Played</p></div>
          <div>
            <p className='stat-number'>{winRate}</p>
            <p className='stat-title'>Win %</p></div>
          <div>
            <p className='stat-number'>{stats.currentStreak}</p>
            <p className='stat-title'>Current<br />Streak</p></div>
          <div>
            <p className='stat-number'>{stats.maxStreak}</p>
            <p className='stat-title'>Max<br />Streak</p></div>
        </div>
        <h1>You Lose!</h1>
        <h2>The word was {theWord}</h2>
        <button style={{padding: '20px'}} onClick={() => {getNewWord()}}>Play Again</button>
      </div>
    </div>
  )
}

export default LoseScreen