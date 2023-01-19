import {useContext, useEffect, useState} from 'react'
import { DuplicateContext } from '../App'

function BoardTile({letters, index, flipPosition}) {
  const [secretWordDupes, keyedDupes, dupeInPlace] = useContext(DuplicateContext);
  const [color, setColor] = useState("");

  const letter = letters[index]

  const falseDupe = () => {
    if (keyedDupes.includes(letter?.letter) && !secretWordDupes.includes(letter?.letter) && dupeInPlace && !letter?.inPlace ) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    let tempColor = "";
    if (letter?.inWord && !letter?.inPlace) tempColor = "yellow"
    if (!letter?.inWord || falseDupe()) tempColor = "dark"
      if (letter?.inPlace) tempColor = "green"
      setColor(tempColor);
  }, [letter?.isUsed]);
  

  return (
    <>
      <div className="flip-tile">
        <div className={!letters[index]?.flipLetter ? "flip-tile-inner" :
          flipPosition === 1 ? "flip-tile-inner flip-1" :
          flipPosition === 2 ? "flip-tile-inner flip-2" :
          flipPosition === 3 ? "flip-tile-inner flip-3" :
          flipPosition === 4 ? "flip-tile-inner flip-4" : "flip-tile-inner flip-5"           
          }>

          <div className="tile-front"><b>{letters[index]?.letter}</b></div>
          <div className={
            color === "dark" ? "tile-back" : 
            color === "green" ? "tile-back tile-green" :
             "tile-back tile-yellow"
            }><b>{letters[index]?.letter}</b>
          </div>

        </div>
      </div>
    </>
  )
}

export default BoardTile



// import {useContext} from 'react'
// import { DuplicateContext } from '../App'

// function BoardTile({letters, index, flipPosition}) {
//   const [secretWordDupes, keyedDupes, dupeInPlace] = useContext(DuplicateContext);

//   const letter = letters[index]

//   const falseDupe = () => {
//     if (keyedDupes.includes(letter?.letter) && !secretWordDupes.includes(letter?.letter) && dupeInPlace && !letter?.inPlace ) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   const color = () => {
//     if (!letter?.inWord || falseDupe()) return "dark"
//     if (letter?.inWord && !letter?.inPlace) return "yellow"
//     if (letter?.inPlace) return "green"
//   }

//   // console.log(letter?.letter + " " + color());

//   return (
//     <>
//       <div className="flip-tile">
//         <div className={!letters[index]?.flipLetter ? "flip-tile-inner" :
//           flipPosition === 1 ? "flip-tile-inner flip-1" :
//           flipPosition === 2 ? "flip-tile-inner flip-2" :
//           flipPosition === 3 ? "flip-tile-inner flip-3" :
//           flipPosition === 4 ? "flip-tile-inner flip-4" : "flip-tile-inner flip-5"           
//           }>

//           <div className="tile-front">{letters[index]?.letter}</div>
//           <div className={
//             color() === "dark" ? "tile-back" : 
//             color() === "green" ? "tile-back tile-green" :
//              "tile-back tile-yellow"
//             }>{letters[index]?.letter}
//           </div>

//         </div>
//       </div>
//     </>
//   )
// }

// export default BoardTile