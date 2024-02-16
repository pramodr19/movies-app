import express from 'express';
import movieController from './app-controller';
//declare a const router and assgn express router function
const router = express.Router();
router.get('/api/v2/movies', movieController.getAllMovies);
router.get('/api/v2/movies/:id', movieController.getMovieById);
router.post('/api/v2/movies', movieController.addNewMovie);
router.patch('/api/v2/movies/:id', movieController.updateMovie);
router.delete('/api/v2/movies/:id', movieController.deleteMovie);
export {
    router,
}