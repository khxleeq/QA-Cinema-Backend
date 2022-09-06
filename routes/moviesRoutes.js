const express = require('express');
const router = express.Router();
const {
  getAllMovies,
  getMovieByTitle,
  getMovieByQuery,  
  postMovie,
  getMovieByID,
  updateMovie,
  deleteMovie,
} = require('../controllers/movieController');

router
.route('/')
.get(getAllMovies)
.post(postMovie)

router
.route('/:id')
.get(getMovieByID)
.put(updateMovie)
.delete(deleteMovie)

// router.route('/getCurrent')
// .get(getCurrentMovies)

router.route('/:title')
.get(getMovieByTitle)


router.route('/find/query')
.get(getMovieByQuery)
module.exports = router;