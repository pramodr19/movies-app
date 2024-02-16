"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//"controller -->manager , service-->worker(perform all the operatios),Model-->Db config"
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app_routing_1 = require("./app-routing");
const app = (0, express_1.default)();
// Middleware to parse JSON in the request body
app.use(express_1.default.json());
//middleware
app.use((0, cors_1.default)({ origin: 'http://localhost:4200' }));
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
app.use('/', app_routing_1.router);
// import express, { Express, Application, Request, Response } from 'express';
// import * as fs from 'fs';
// const app: Application = express();
// //specify to  'utf-8' encoding  to use json data as string
// //to give the file path use ./
// let movies = JSON.parse(fs.readFileSync('./src/data/movies.json', 'utf-8'))
// //middleware -->add the request body to the request object
// //its a function modify the incoming data (lies between req and resp )
// app.use(express.json());
// import express, { Application, Request, Response } from 'express';
// import cors from 'cors';
// // import * as fs from 'fs';
// import { router } from './app-routing';
// const app: Application = express();
// // Middleware to parse JSON in the request body
// app.use(express.json());
// app.use(cors({ origin: 'http://localhost:4200' }))
// const port: number = 3000;
// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });
// //
// app.use('/',router);
// //specify to  'utf-8' encoding  to use json data as string
// let movies = JSON.parse(fs.readFileSync('./src/data/movies.json', 'utf-8'))
// app.get('/api/v1/movies', (req: Request, res: Response) => {
//     res.status(200).json({
//         // message: "List of movies ",
//         // m: {
//         movies: movies
//         // }
//     })
// });
// //Get -/api/v1/movies/:id
// app.get('/api/v1/movies/:id', (req: Request, res: Response) => {
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
// });
// //Post -/api/v1/movies
// app.post('/api/v1/movies', (req: Request, res: Response) => {
//     console.log(req.body);
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
//     // res.send("created");
// });
// //patch (to update the existing object)
// app.patch('/api/v1/movies/:id', (req: Request, res: Response) => {
//     //convert the requested id into number
//     let id = Number(req.params.id);
//     //get the object for the given id
//     let movieToUpdate = movies.find((el: any) => el.id == id);
//     //if the movie for the id is not found return
//     // if (!movieToUpdate) {
//     //     return res.status(404).json({
//     //         status: "Fail",
//     //         message: "There is no movie found for the id " + id
//     //     });
//     // }
//     //get the index for the object so we can chnge the property of that object
//     let movieIndex = movies.indexOf(movieToUpdate);
//     //merge the objects and store it in a var
//     let movieObject = Object.assign(movieToUpdate, req.body);
//     //reinitialize the array for the  index we need to update
//     console.log("movieObject", movieObject)
//     movies[movieIndex] = movieObject;
//     //write into the file
//     fs.writeFile('./src/data/movies.json', JSON.stringify(movies), (err) => {
//         //update the response
//         res.status(200).json({
//             // status: "success",
//             // data: {
//             movies: movieToUpdate
//             // }
//         });
//     });
// });
// //delete api (delete movie for the given id)
// app.delete('/api/v1/movies/:id',(req:Request,res:Response)=>{
//     //get the id from the url and convert it to number data type
//     const id=Number(req.params.id);                                            //find the element using the id
//     const movieToDelete=movies.find((el:any)=>el.id===id);
//     const index=movies.indexOf(movieToDelete);                                 //find the index of the element in the movie array
//     movies.splice(index,1);                                                    //remove the index from the array using splice method
//     fs.writeFile('./src/data/movies.json', JSON.stringify(movies), (err) => {   //overwrite the existing movie object //assign null value
//         //update the response
//         console.log("inside write file");
//         res.status(204).json({
//             status: "success",
//             // data: {
//             movies: null                                                        //assign null value for the current index pf movies
//             // }
//         });
//     });
// });
// import express, { Express, Application, Request, Response } from 'express';
// import * as fs from 'fs';
// const app: Application = express();
// //specify to  'utf-8' encoding  to use json data as string
// //to give the file path use ./
// let movies = JSON.parse(fs.readFileSync('./src/data/movies.json', 'utf-8'))
// //middleware -->add the request body to the request object
// //its a function modify the incoming data (lies between req and resp )
// app.use(express.json());
