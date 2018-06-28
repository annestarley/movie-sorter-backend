const model = require('./model')

const movieCreaterController = (req, res, next) => {
  const { title, drama, action, musical, kids, workout, comedy, rating, image, format, notes } = req.body

  model.createMovie(title, drama, action, musical, kids, workout, comedy, rating, image, format, notes)
    .then(movie => {
      res.status(201).json(movie)
    })
}

module.exports = {
  movieCreaterController
}
