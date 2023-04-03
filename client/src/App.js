import './App.css';
import { createContext, useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
      fetch('http://localhost:8080/movies/', {
        method:'GET',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
          
        },
      })
      .then(res => res.json())
      .then(data => setMovies(data))
   
  }, [])

  const movieArray = movies.map((movie)=> <li>{movie.title}</li>)


  return (
    <div className="App">
      <header className="App-header">
        <ul>
        {movieArray}
        </ul>
      </header>
    </div>
  );
}

export default App;
