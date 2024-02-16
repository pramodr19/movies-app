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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const models_1 = require("./models");
class AppService {
    getAllMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            //declare and return the promise 
            const promise = new Promise((resolve, reject) => {
                const query = 'SELECT * FROM movies';
                //pass id as parameter
                models_1.connection.query(query, (error, results) => {
                    try {
                        resolve(results);
                        console.log(results);
                    }
                    catch (error) {
                        console.error('Error executing query:', error);
                        reject(error);
                    }
                });
            });
            return promise;
        });
    }
    getMovieById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => {
                const query = 'SELECT * FROM movies WHERE ID=?';
                models_1.connection.query(query, [id], (error, results) => {
                    try {
                        resolve(results);
                        console.log(results);
                    }
                    catch (error) {
                        console.error('Error executing query:', error);
                        reject(error);
                    }
                });
            });
            return promise;
        });
    }
    addNewMovie(addObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => {
                const query = 'INSERT INTO movies (name, price) VALUES (?, ?)';
                //pass the properties of body as parameters for the query
                models_1.connection.query(query, [addObject.name, addObject.price], (error, results) => {
                    try {
                        resolve(results);
                        console.log('Movie added successfully for the id', results === null || results === void 0 ? void 0 : results.insertId);
                    }
                    catch (error) {
                        console.error('Error executing query:', error);
                        reject(error);
                    }
                });
            });
            return promise;
        });
    }
    updateMovie(id, updateObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => {
                const query = 'UPDATE movies SET name = ?,price = ? WHERE id=?';
                models_1.connection.query(query, [updateObject.name, updateObject.price, id], (error, results) => {
                    try {
                        resolve('Updated the Movie details successfully');
                    }
                    catch (error) {
                        console.error('Error executing query:', error);
                        reject(error);
                    }
                });
            });
            return promise;
        });
    }
    deleteMovie(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => {
                const query = 'DELETE FROM movies WHERE ID=?';
                models_1.connection.query(query, [id], (error, results) => {
                    try {
                        resolve('Deleted successfully');
                    }
                    catch (error) {
                        console.error('Error executing query:', error);
                        reject(error);
                    }
                });
            });
            return promise;
        });
    }
}
exports.AppService = AppService;
const appService = new AppService();
exports.default = appService;
