import '../App.css';
import Context from './Context';
import { useState, useEffect } from 'react';

const Board = () => {
  const GRID = 10;
  const MINES = 10;
  let defaultValue = { clicked: false, hot: false, text: '' };
  const [gameData, setGameData] = useState(new Array(GRID));

  for (let i = 0; i < GRID; i++) { // fill y of x
    gameData[i] = new Array(GRID).fill(defaultValue);
  }

  console.log(gameData);

  const handleClick = (e) => {
    e.target.innerHTML = 'X';
    console.log('Coord: ', e.target.getAttribute('x'),'x',e.target.getAttribute('y'))
  }


  return (
    <>
    <div className="Board">
      {/* <button className="GameButton" key="[0][0]" onClick={(e)=>{console.log(e.target.innerHTML = "e")}}>&nbsp;</button>
      <button className="GameButton" key="[1][0]" onClick={(e)=>{console.log(e.target.innerHTML = "e")}}>&nbsp;</button><br/>
      <button className="GameButton" key="[0][1]" onClick={(e)=>{console.log(e.target.innerHTML = "e")}}>&nbsp;</button>
      <button className="GameButton" key="[1][1]" onClick={(e)=>{console.log(e.target.innerHTML = "e")}}>&nbsp;</button>

      {if (xidx !== GRID && yidx === (GRID - 1)) {<br/>}}
      */}
      {gameData.map((xval, xidx) => {
        return gameData[xidx].map((yval, yidx) => (<button className="GameButton" onClick={(e)=> handleClick(e)} x={xidx} y={yidx}>&nbsp;</button>)
        )
      })}
    </div>
    <button className="ResetButton" onClick={() => window.location.reload(true)}>Reset</button>
    </>
  )
}

export default Board;