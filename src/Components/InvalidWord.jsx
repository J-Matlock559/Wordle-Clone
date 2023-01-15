import React from 'react'

function InvalidWord({showInvalid, setShowInvalid}) {
  if (showInvalid === false) return null

  return (
    <div className='win-container'>
      <div className='win-card'>
        <h2>Word not in word list.</h2>
        <button style={{padding: '20px'}} onClick={() => {setShowInvalid(false)}}>Okay</button>
      </div>
    </div>
  )
}

export default InvalidWord