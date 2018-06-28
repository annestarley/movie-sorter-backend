const knex = require('./db')

const createMovie = (title, drama, action, musical, kids, workout, comedy, rating, image, format, notes) => {
  let movie = { title, drama, action, musical, kids, workout, comedy, rating, image, format, notes }

  return knex('movies').insert(movie)
    .returning('*')
}

module.exports = {
  createMovie
}
