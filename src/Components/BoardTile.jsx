import React from 'react'

function BoardTile({letters, index, flipPosition}) {
  const test = "tile-back tile-green"
  return (
    <>
      <div className="flip-tile">
        <div className={!letters[index]?.flipLetter ? "flip-tile-inner" :
          flipPosition === 1 ? "flip-tile-inner flip-1" :
          flipPosition === 2 ? "flip-tile-inner flip-2" :
          flipPosition === 3 ? "flip-tile-inner flip-3" :
          flipPosition === 4 ? "flip-tile-inner flip-4" : "flip-tile-inner flip-5"           
          }>

          <div className="tile-front">{letters[index]?.letter}</div>
          <div className={!letters[index]?.inWord ? "tile-back" : letters[index]?.inPlace ? "tile-back tile-green" : "tile-back tile-yellow"}>{letters[index]?.letter}</div>
        </div>
      </div>
    </>
  )
}

export default BoardTile