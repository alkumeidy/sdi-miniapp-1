import './App.css';

function App() {

  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

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
