import '../App.css';
import Board from './Board';

const Home = () => {
  return (
    <div className="Home">
      <span className="GameName" id="GameName">Minesweeper</span>
      <Board/>
    </div>
  )
}

export default Home;