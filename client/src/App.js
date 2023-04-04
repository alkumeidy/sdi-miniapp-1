import './App.css';
import { createContext, useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [update, setUpdate] = useState('');


  useEffect(()=>{
      fetch('http://localhost:8080/movies/', {
        method:'GET',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      })
      .then(res => res.json())
      .then(data => setMovies(data))

  }, [addMovie, deleteMovie, setUpdate])

  const movieArray = movies.map((movie)=>
  <div>
    <li>
      {movie.title+" "}<input id={movie.id} onClick={e => deleteMovie(movie.id)} type="button" value="X" />
      <hr></hr>
    </li></div>)

  function handleSearch(){
    console.log(search)
    let filteredArray = movies.filter(movie => movie.title.includes(search));
    console.log(filteredArray);
    setMovies(filteredArray);
    //setSearch("");
  }

  function addMovie(movie){
    fetch('http://localhost:8080/movies/', {
      method:'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({title: movie})

    })
    //setUpdate("");
  }

  function deleteMovie(id){
    console.log(id)
    fetch(`http://localhost:8080/movies/${id}`, {
      method:'DELETE',
    })
  }



  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>Search Movies</h3>
          <input id="searchBar" value={search} onChange={e => setSearch(e.target.value)} type="search"/>
          <input id='searchBarBtn' type="button" onClick={handleSearch} value='Search'/>
          <input id='resetBtn' type="button" onClick={() =>window.location.href=window.location.href} value='Reset'/>
          <ul>
            {movieArray}
          </ul>
        </div>

        <div>
          <h3>Updates Movies</h3>
            <input id="updateMovieInput" value={update} onChange={e => setUpdate(e.target.value)} type="text"/>
            <input id='addBtn' type="button" onClick={() => addMovie(update)} value='  Add  '/>
            <input id='removeBarBtn' type="button" onClick={handleSearch} value='Remove'/>
        </div>

      </header>
    </div>
  );
}

export default App;