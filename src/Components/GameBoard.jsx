import React from 'react'
import BoardTile from './BoardTile'

function GameBoard({letters}) {
  const pos1 = "flip-tile-inner flip"
  const pos2 = "flip-tile-inner flip"
  const pos3 = "flip-tile-inner flip"
  const pos4 = "flip-tile-inner flip"
  const pos5 = "flip-tile-inner flip"
  return (
    <div className='board'>
        <div className="board-row">
          <BoardTile letters={letters} index={0} flipPosition={1} />
          <BoardTile letters={letters} index={1} flipPosition={2} />
          <BoardTile letters={letters} index={2} flipPosition={3} />
          <BoardTile letters={letters} index={3} flipPosition={4} />
          <BoardTile letters={letters} index={4} flipPosition={5} />       
        </div>
        <div className="board-row">
          <BoardTile letters={letters} index={5} flipPosition={1} />
          <BoardTile letters={letters} index={6} flipPosition={2} />
          <BoardTile letters={letters} index={7} flipPosition={3} />
          <BoardTile letters={letters} index={8} flipPosition={4} />
          <BoardTile letters={letters} index={9} flipPosition={5} />
        </div>
        <div className="board-row">
          <BoardTile letters={letters} index={10} flipPosition={1} />
          <BoardTile letters={letters} index={11} flipPosition={2} />
          <BoardTile letters={letters} index={12} flipPosition={3} />
          <BoardTile letters={letters} index={13} flipPosition={4} />
          <BoardTile letters={letters} index={14} flipPosition={5} />
        </div>
        <div className="board-row">
          <BoardTile letters={letters} index={15} flipPosition={1} />
          <BoardTile letters={letters} index={16} flipPosition={2} />
          <BoardTile letters={letters} index={17} flipPosition={3} />
          <BoardTile letters={letters} index={18} flipPosition={4} />
          <BoardTile letters={letters} index={19} flipPosition={5} />
        </div>
        <div className="board-row">
          <BoardTile letters={letters} index={20} flipPosition={1} />
          <BoardTile letters={letters} index={21} flipPosition={2} />
          <BoardTile letters={letters} index={22} flipPosition={3} />
          <BoardTile letters={letters} index={23} flipPosition={4} />
          <BoardTile letters={letters} index={24} flipPosition={5} />
        </div>
        <div className="board-row">
          <BoardTile letters={letters} index={25} flipPosition={1} />
          <BoardTile letters={letters} index={26} flipPosition={2} />
          <BoardTile letters={letters} index={27} flipPosition={3} />
          <BoardTile letters={letters} index={28} flipPosition={4} />
          <BoardTile letters={letters} index={29} flipPosition={5} />
        </div>
      </div>
  )
}

export default GameBoard