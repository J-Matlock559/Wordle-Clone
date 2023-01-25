import React from 'react'

function InvalidWord({showInvalid, setShowInvalid}) {
  if (showInvalid === false) return null

  return (
    <div className='invalid-word'>
      <div className='invalid-card'>
        <p>Word not in word list</p>
      </div>
    </div>
  )
}

export default InvalidWord