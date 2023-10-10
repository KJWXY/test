import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import Players from './Players';
import PlayerDetails from './PlayerDetails';
import Timeline from './Timeline';
import Watch from './Watch';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />} />
            <Route path="/players/:id" element={<PlayerDetails />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/watch" element={<Watch />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
