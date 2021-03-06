const express = require('express')
const app = express()
const port = process.env.PORT || 6000
const bodyParser = require('body-parser')
const morgan = require('morgan')
app.use(bodyParser.json())

app.disable('x-powered-by')

const controller = require('./controller')

app.get('/allMovies', controller.getAllMoviesController)
app.get('/:genre', controller.getMovieByGenreController)
app.post('/createMovie', controller.movieCreaterController)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: "Not found" }})
})

const listener = () => console.log(`Listening on port ${port}!`)
app.listen(port, listener)
