const model = require('./model')

const movieCreaterController = (req, res, next) => {
  const { title, drama, action, musical, kids, workout, comedy, rating, image, format, notes } = req.body

  model.createMovie(title, drama, action, musical, kids, workout, comedy, rating, image, format, notes)
    .then(movie => {
      res.status(201).json(movie)
    })
    .catch(err => {
      console.log(err)
    })
}

const getMovieByGenreController = (req, res, next) => {
  let genre = req.params.genre

  model.getMovieByGenre(genre)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err)
    })
}

const getAllMoviesController = (req, res, next) => {
  model.getAllMovies()
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = {
  movieCreaterController,
  getMovieByGenreController,
  getAllMoviesController
}
