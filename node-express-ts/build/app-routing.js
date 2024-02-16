"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const app_controller_1 = __importDefault(require("./app-controller"));
//declare a const router and assgn express router function
const router = express_1.default.Router();
exports.router = router;
router.get('/api/v2/movies', app_controller_1.default.getAllMovies);
router.get('/api/v2/movies/:id', app_controller_1.default.getMovieById);
router.post('/api/v2/movies', app_controller_1.default.addNewMovie);
router.patch('/api/v2/movies/:id', app_controller_1.default.updateMovie);
router.delete('/api/v2/movies/:id', app_controller_1.default.deleteMovie);
