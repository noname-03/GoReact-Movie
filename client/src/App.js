
// thrid party

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";


// internal source
import Menu from './components/Menu';
import Home from './pages/Home'
import Genres from './pages/Genres'
import Admin from './pages/Admin'
import Movies from './pages/Movies'

// css
import './App.css';
import DetailMovie from "./components/movie/DetailMovie";
import ShowMovie from "./pages/Movies/show";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Go React Movie Project</h1>
          <hr className="mt3" />
        </div>
        <div className="row">
          <div className="col-2">
            <Menu />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route exact path="/movies/:id" element={<ShowMovie />} />
              <Route path="/genres" element={<Genres />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
