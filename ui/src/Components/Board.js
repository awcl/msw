import '../App.css';
import Context from './Context';
import { useState, useEffect } from 'react';

const Board = () => {
  const GRID = 10;
  const MINES = 10;
  let defaultValue = { clicked: 0 };
  const [gameData, setGameData] = useState(new Array(GRID));
  const [mineCoord, setMineCoord] = useState([]);

  for (let i = 0; i < GRID; i++) { // fill y of x
    gameData[i] = new Array(GRID).fill(defaultValue);
  }

  useEffect(() => {
    if (GRID * GRID >= MINES) {
      var coordArr = [];
      do {
        let rx = Math.floor(Math.random() * MINES);
        let ry = Math.floor(Math.random() * MINES);
        let temp = [rx, ry];
        if (!coordArr.includes(temp)) { coordArr.push(temp); }
      } while (coordArr.length !== MINES);
      console.log('setting mines at: ', coordArr)
      setMineCoord(coordArr);
    } else console.log('Too Many Mines');
    console.log('mine coord: ', mineCoord);
  }, [])

  const handleClick = (e) => {
    let x = e.target.getAttribute('x');
    let y = e.target.getAttribute('y');
    e.target.disabled = true;
    for (var i = 0; i < mineCoord.length; i++) {
      if (mineCoord[i][0] === +x && mineCoord[i][1] === +y) { // check if it's mined
        console.log('match');
        e.target.innerHTML = '🧨';
        document.getElementById('GameName').innerHTML = `You've Lost 🙁`;
        for (var r = 0; r < gameData.length; r++) { // disable field
          for (var s = 0; s < gameData[r].length; s++) {
            document.getElementById(`${r}-${s}`).disabled = true;
          }
        }
        return;
      }
      //TODO Adjacency
      e.target.innerHTML = '🙂';
      }
    }

    return (
      <>
        <div className="Board" id="Board">
          {gameData.map((xval, xidx) => {
            return gameData[xidx].map((yval, yidx) => (<button id={`${xidx}-${yidx}`} x={xidx} y={yidx} key={`${xidx}-${yidx}`} className="GameButton" onClick={(e) => handleClick(e)} clicked={gameData[xidx][yidx].clicked}>&nbsp;</button>)
            )
          })}
        </div>
        <button className="ResetButton" onClick={() => window.location.reload(true)}>Reset</button>
      </>
    )
  }

  export default Board;