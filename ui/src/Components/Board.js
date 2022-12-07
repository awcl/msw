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
    let clicked = e.target.getAttribute('clicked');
    e.target.disabled = true;
    // console.log('type ::: ',typeof temp[0], '/', typeof mineCoord[0][0])

    // console.log('temp: ', temp, '\n', 'mineCoord: ', mineCoord)

    for (var i = 0; i < mineCoord.length; i++) {
      if (mineCoord[i][0] === +x && mineCoord[i][1] === +y) {
        console.log('match');
        e.target.innerHTML = '🧨';
        document.getElementById('GameName').innerHTML = `You've Lost 🙁`;
        disableField();
        return;
      }
      e.target.innerHTML = '🙂';
      }
    }

    const disableField = () => {
      for (var x = 0; x < gameData.length; x++) {
        for (var y = 0; y < gameData[x].length; y++) {
          document.getElementById(`${x}-${y}`).disabled = true;
        }
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