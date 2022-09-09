const asyncHandler = require('express-async-handler'); //have functions in controller

const Movie = require('../models/movieModel');

// @desc  get movies
//@route  GET /api/movies
//@access Private
  const getAllMovies = asyncHandler(async (req, res) => {
    const schema = await Movie.find();
    res.status(200).json(schema);
  });




// By /:title
const getMovieByTitle = asyncHandler(async (req, res, next) => {
  try {
    const found = await Movie.findOne({fullTitle: req.params.fullTitle});
    (found)?res.send(found) : next(new Error("ERROR: There are no movies with that title!"));
  } catch (err) {
    next(new Error(err.message));
  }
})


const getMovieByQuery = asyncHandler(async (req, res, next) => {
  try {
    const found = await Movie.find({
      $or: [
        {fullTitle: new RegExp(req.params.query, 'i')},
        {actors: new RegExp(req.params.query, 'i')},
        {directors: new RegExp(req.params.query, 'i')},
      ]
    });
    res.send(found);
  } catch (err) {
    next(new Error(err.message));
  }
})

// @desc  post movies
//@route  POST /api/movies
//@access Private
const postMovie = asyncHandler(async (req, res) => {
    const movies = await Movie.create({
      fullTitle: req.body.fullTitle,
      poster: req.body.poster,
      classification: req.body.classification,
      actors: req.body.actors,
      directors: req.body.directors,
      showtimes: req.body.showtimes,
      description: req.body.description,
      dateReleased: req.body.dateReleased,
      ratings: req.body.ratings,
      genre: req.body.genre
    });
    res.status(201).json(movies);
});

// @desc  get movies
//@route  GET /api/movies/:id
//@access Private
const getMovieByID = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  });
  
// @desc  update movies
//@route  PUT /api/movies/:id
//@access Private
const updateMovie = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);
  
    if (!movie) {
      res.status(400).json({ message: `Movie not found` });
    }
  
    const updateSchema = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateSchema);
  });

// @desc   delete movies
//@route  DELETE /api/movies/:id
//@access Private
const deleteMovie = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      res.status(400).json({ message: `Movie not found` });
    }
  
    await movie.remove();
  
    res.status(204).json({ id: req.params.id });
  });


module.exports = {
    getAllMovies, getMovieByTitle,getMovieByQuery, postMovie, getMovieByID, updateMovie, deleteMovie
}