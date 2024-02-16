"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const app_service_1 = __importDefault(require("./app-service"));
//query written in service and with the help of promises 
//send the result of query to controller if its resolved else reject  
// const getAllMovies = async (req: Request, res: Response) => {
//     try {
//         //get the result by passing the params to the service method
//         const results = await appService.getAllMovies();
//         //send the response ,which is from service
//         res.status(200).json(results);
//     } catch (err) {
//         console.log('Unexpected error:', error);
//         res.status(500).json({ error: 'Internal Error' })
//     }
// }
class MovieController {
    constructor() {
        this.getAllMovies = this.getAllMovies.bind(this);
        this.getMovieById = this.getMovieById.bind(this);
        this.addNewMovie = this.addNewMovie.bind(this);
        this.updateMovie = this.updateMovie.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this);
    }
    getAllMovies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req) {
                    const result = yield app_service_1.default.getAllMovies();
                    res.json(result);
                }
                else {
                    throw new Error("Invalid Request");
                }
            }
            catch (err) {
                console.log('Unexpected error:', console_1.error);
                res.status(500).json({ error: 'Internal Error' });
            }
        });
    }
    getMovieById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req) {
                    const id = Number(req.params.id);
                    const results = yield app_service_1.default.getMovieById(id);
                    res.json(results);
                }
                else {
                    throw new Error("Invalid Request");
                }
            }
            catch (err) {
                console.log('Unexpected error:', console_1.error);
                res.status(500).json({ error: 'Internal Error' });
            }
        });
    }
    addNewMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req) {
                    //body object from the user  i.e name,price
                    const addObject = req.body;
                    const results = yield app_service_1.default.addNewMovie(addObject);
                    res.status(200).json({ message: 'Movie inserted successfully', data: 'Movie InsertedId =' + results });
                }
                else {
                    throw new Error("Invalid Request");
                }
            }
            catch (err) {
                console.error('Unexpected Error:', err);
                res.status(500).send('Internal Server Error');
            }
        });
    }
    updateMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req) {
                    //get the id and update body from the request
                    const id = Number(req.params.id);
                    const updateObject = req.body;
                    const results = yield app_service_1.default.updateMovie(id, updateObject);
                    res.status(200).json({ message: results });
                }
                else {
                    throw new Error("Invalid Request");
                }
            }
            catch (err) {
                console.error('Unexpected Error:', err);
                res.status(500).send('Internal Server Error');
            }
        });
    }
    deleteMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req) {
                    const id = Number(req.params.id);
                    const results = yield app_service_1.default.deleteMovie(id);
                    res.status(200).json({ message: results });
                }
                else {
                    throw new Error('Invalid Request');
                }
            }
            catch (err) {
                console.error('Unexpected Error:', err);
                res.status(500).send('Internal Server Error');
            }
        });
    }
}
const movieController = new MovieController();
exports.default = movieController;
// const getMovieById = async (req: Request, res: Response) => {
//     const id: number = Number(req.params.id);
//     try {
//         const results = await appService.getMovieById(id);
//         res.status(200).json(results);
//     } catch (err) {
//         console.error('Unexpected Error:', err);
//         res.status(500).send('Internal Server Error');
//     }
// }
// const addNewMovie = async (req: Request, res: Response) => {
//     //body object from the user  i.e name,price
//     const addObject = req.body;
//     try {
//         //get the inserted id
//         const results = await appService.addNewMovie(addObject);
//         res.status(201).json({ message: 'Movie inserted successfully', data: 'Movie InsertedId =' + results });
//     } catch (err) {
//         console.error('Unexpected Error:', err);
//         res.status(500).send('Internal Server Error');
//     }
// }
// const updateMovie = async (req: Request, res: Response) => {
//     //get the id and the body object from the user (url)
//     const id: number = Number(req.params.id);
//     const updateObject = req.body;
//     try {
//         const results = await appService.updateMovie(id, updateObject);
//         res.status(200).json({ message: results })
//     } catch (err) {
//         console.error('Unexpected Error:', err);
//         res.status(500).send('Internal Server Error');
//     }
// }
// const deleteMovie = async (req: Request, res: Response) => {
//     //get the id from the user (url)
//     const id: number = Number(req.params.id);
//     try {
//         const results = await appService.deleteMovie(id);
//         res.status(200).json({ message: results })
//     } catch (err) {
//         console.error('Unexpected Error:', err);
//         res.status(500).send('Internal Server Error');
//     }
// }
// export {
//     // getAllMovies,
//     getMovieById,
//     addNewMovie,
//     updateMovie,
//     deleteMovie
// }
// import * as fs from 'fs';
// let movies = JSON.parse(fs.readFileSync('./src/data/movies.json', 'utf-8'));
// const getMovies = (req: Request, res: Response) => {
//     res.status(200).json({
//         movies: movies
//     });
// }
// const getMovieById = (req: Request, res: Response) => {
//     console.log(req.params);
//     const id: any = Number(req.params.id);
//     let movie = movies.find((el: any) => el.id === id)
//     if (!movie) {
//         res.status(404).send("Movie with the given id " + id + " doesn't exists");
//     }
//     else {
//         res.status(200).json({
//             movie: movie
//         });
//     }
// }
// const addNewMovie = (req: Request, res: Response) => {
//     //  console.log(req.body);
//     // console.log("length of the object")
//     // console.log(movies.length);
//     const newId: number = movies[movies.length - 1].id + 1;
//     //Object.assign() accepts two object as args ,it is used to merge two objects
//     const newMovie = Object.assign({ id: newId }, req.body);
//     //push the new object to the existing object
//     movies.push(newMovie);
//     //write into the file using writeFile and also convert the json data into stirng and add a callback
//     //function for the response //path,convert to string using JSON.stringify(),error handler
//     fs.writeFile('./src/data/movies.json', JSON.stringify(movies), (err) => {
//         res.status(201).json({
//             //assign newMovie
//             movies: newMovie,
//         })
//     });
// }
// const updateMovie = (req: Request, res: Response) => {
//     let id = Number(req.params.id);
//     console.log(id);
//     let movieToUpdate = movies.find((el: any) => el.id === id);
//     let index = movies.indexOf(movieToUpdate);
//     let movieObject = Object.assign(movieToUpdate, req.body);
//     console.log(movieObject);
//     movies[index] = movieObject;
//     fs.writeFile('./src/data/movies.json', JSON.stringify(movies), (err) => {
//         //update the response
//         res.status(200).json({
//             // status: "success",
//             // data: {
//             movies: movieToUpdate
//             // }
//         });
//     });
// }
// //find the element using the id
// //find the index of the element in the movie array
// // remove the index from the array using splice method
// // overwrite the existing movie object //assign null value
// const deleteMovie = (req: Request, res: Response) => {
//     //get the id from the url and convert it to number data type
//     const id = Number(req.params.id);
//     const movieToDelete = movies.find((el: any) => el.id === id);
//     const index = movies.indexOf(movieToDelete);
//     movies.splice(index, 1);
//     fs.writeFile('./src/data/movies.json', JSON.stringify(movies), (err) => {
//         //update the response
//         console.log("inside write file");
//         if (err) {
//             console.error('Error executing query:', err);
//         }
//         else {
//             res.status(204).json({
//                 status: "success",
//                 // data: {
//                 movies: null
//                 // }
//             });
//         }
//     });
// }
// const getData = (req: Request, res: Response) => {
//     const query = 'SELECT * FROM movies';
//     connection.query(query, (err: any, results: any) => {
//         //  const data=results;
//         try {
//             res.json(results);
//         }
//         catch (err) {
//             console.error('Error executing query:', err);
//             res.status(500).send('Internal Server Error');
//         }
//     });
// }
// const getData = (req: Request, res: Response) => {
//     const query = 'SELECT * FROM movies';
//     connection.query(query, (err: any, results: any) => {
//         //  const data=results;
//         try {
//             res.json(results);
//         }
//         catch (err) {
//             console.error('Error executing query:', err);
//             res.status(500).send('Internal Server Error');
//         }
//     });
// }
// const getDataById = (req: Request, res: Response) => {
//     const id: any = Number(req.params.id);
//     const query = 'SELECT * FROM movies WHERE ID=?';
//     //pass id as parameter
//     connection.query(query, [id], (err: any, results: any) => {
//         try {
//             res.json(results);
//             console.log(results);
//         }
//         catch (err) {
//             console.error('Error executing query:', err);
//             res.status(500).send('Internal Server Error');
//             return;
//         }
//     });
// }
// const addNewData = (req: Request, res: Response) => {
//     try {
//         const addObject = req.body;
//         console.log(addObject);
//         // Insert the new data for the autouncrement id
//         const insertQuery = 'INSERT INTO movies (name, price) VALUES (?, ?)';
//         connection.query(insertQuery, [addObject.name, addObject.price], (error, results) => {
//             if (error) {
//                 console.error('Error executing query:', error);
//                 return res.status(500).json({ error: 'Internal Server Error' });
//             }
//             res.status(201).json({ message: 'Data inserted successfully', data: 'Data InsertedId =' + results.insertId });
//         });
//     } catch (error) {
//         console.error('Unexpected error:', error);
//         res.status(500).json({ error: 'Internal Error' });
//     }
// };
// const updateData = (req: Request, res: Response) => {
//     try {
//         //get the  id
//         const id = Number(req.params.id);
//         const name = req.body.name;
//         const price = req.body.price;
//         const query = 'UPDATE movies SET name = ?,price = ? WHERE id=?'
//         const values = [name, price, id];
//         connection.query(query, values, (error, results) => {
//             if (error) {
//                 console.error('Error executing query:', error);
//                 res.status(500).send('Internal Server Error');
//                 return;
//             }
//             else {
//                 res.json(results);
//             }
//         });
//     }
//     catch (error) {
//         console.error('Unexpected error:', error);
//         res.status(500).json({ error: 'Internal  Error' });
//     }
// }
// const deleteData = (req: Request, res: Response) => {
//     try {
//         const id = Number(req.params.id);
//         const query = 'DELETE FROM movies WHERE ID=?';
//         connection.query(query, [id], (error, results) => {
//             if (error) {
//                 console.error('Error executing query:', error);
//                 res.status(500).send('Internal Server Error');
//                 return;
//             }
//             else {
//                 res.status(200).json({ message: 'Data deleted successfully' });
//             }
//         });
//     }
//     catch (err) {
//         console.log('Unexpected error:', error);
//         res.status(500).json({ error: 'Internal Error' });
//     }
// }
