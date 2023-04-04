const express = require('express');

const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 8080;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);

const postNewMovie = (movie) => {
    return knex("movies").insert(movie);
  };

app.use(express.json());
app.use(cors())

app.get('/movies', function(req, res) {
  knex
    .select('*')
    .from('movies')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.post("/movies", (req, res) => {
    postNewMovie(req.body)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        console.error(err);
        res.send(err);
      });
  });

  app.delete('/movies/:id', (req, res) => {
    //var id = req.params;
    knex('movies')
    .where(id=req.params)
    .del()
    .catch(err =>
      console.log(err)
    );

    res.send("Resource has been deleted.")
})

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});