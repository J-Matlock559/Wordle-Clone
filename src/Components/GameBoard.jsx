import React from 'react'

function GameBoard() {
  return (
    <div className='board'>
        <div className="board-row">
          <div className="board-tile">{let1}</div>
          <div className="board-tile">{let2}</div>
          <div className="board-tile">{let3}</div>
          <div className="board-tile">{let4}</div>
          <div className="board-tile">{let5}</div>
        </div>
        <div className="board-row">
          <div className="board-tile"></div>
          <div className="board-tile"></div>
          <div className="board-tile"></div>
          <div className="board-tile"></div>
          <div className="board-tile"></div>
        </div>
        <div className="board-row">
          <div className="board-tile"></div>
          <div className="board-tile"></div>
          <div className="board-tile"></div>
          <div className="board-tile"></div>
          <div className="board-tile"></div>
        </div>
        <div className="board-row">
          <div className="board-tile"></div>
          <div className="board-tile"></div>
          <div className="board-tile"></div>
          <div className="board-tile"></div>
          <div className="board-tile"></div>
        </div>
        <div className="board-row">
          <div className="board-tile"></div>
          <div className="board-tile"></div>
          <div className="board-tile"></div>
          <div className="board-tile"></div>
          <div className="board-tile"></div>
        </div>
        <div className="board-row">
          <div className="board-tile"></div>
          <div className="board-tile"></div>
          <div className="board-tile"></div>
          <div className="board-tile"></div>
          <div className="board-tile"></div>
        </div>
      </div>
  )
}

export default GameBoard