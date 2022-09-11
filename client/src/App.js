
// thrid party

// internal source
import './App.css';
import Menu from './components/Menu';
import MovieList from './components/MovieList';

// css

function App() {
  return (
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
          <MovieList />
        </div>
      </div>
    </div>
  );
}

export default App;
