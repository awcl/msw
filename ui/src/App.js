import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Context from './Components/Context';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Context.Provider value={{}}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
