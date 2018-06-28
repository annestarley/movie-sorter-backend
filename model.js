const knex = require('./db')

const createMovie = (title, drama, action, musical, kids, workout, comedy, rating, image, format, notes) => {
  let movie = { title, drama, action, musical, kids, workout, comedy, rating, image, format, notes }

  return knex('movies').insert(movie)
    .returning('*')
}

const getMovieByGenre = (genre) => {
  if (genre === 'drama') {
    return knex('movies').where('drama', 'true')
      .returning('*')
  }
  if (genre === 'action') {
    return knex('movies').where('action', 'true')
      .returning('*')
  }
  if (genre === 'musical') {
    return knex('movies').where('musical', 'true')
      .returning('*')
  }
  if (genre === 'kids') {
    return knex('movies').where('kids', 'true')
      .returning('*')
  }
  if (genre === 'workout') {
    return knex('movies').where('workout', 'true')
      .returning('*')
  }
  if (genre === 'comedy') {
    return knex('movies').where('comedy', 'true')
      .returning('*')
  }
}

module.exports = {
  createMovie,
  getMovieByGenre
}
