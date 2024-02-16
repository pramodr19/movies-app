import { connection } from "./models";

export class AppService {

    async getAllMovies(): Promise<any> {
        //declare and return the promise 
        const promise = new Promise((resolve, reject) => {
            const query = 'SELECT * FROM movies';
            //pass id as parameter
            connection.query(query, (error: any, results: any) => {
                try {
                    resolve(results);
                    console.log(results);
                } catch (error) {
                    console.error('Error executing query:', error);
                    reject(error);
                }
            });
        });

        return promise;
    }

    async getMovieById(id: number): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            const query = 'SELECT * FROM movies WHERE ID=?'
            connection.query(query, [id], (error: any, results: any) => {
                try {
                    resolve(results);
                    console.log(results);
                } catch (error) {
                    console.error('Error executing query:', error);
                    reject(error);
                }
            });
        });

        return promise;
    }

    async addNewMovie(addObject: any): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            const query = 'INSERT INTO movies (name, price) VALUES (?, ?)';
            //pass the properties of body as parameters for the query
            connection.query(query, [addObject.name, addObject.price], (error: any, results: any) => {
                try {
                    resolve(results);
                    console.log('Movie added successfully for the id', results?.insertId);
                } catch (error) {
                    console.error('Error executing query:', error);
                    reject(error);
                }
            })
        });
        return promise;
    }

    async updateMovie(id: number, updateObject: any) {
        const promise = new Promise((resolve, reject) => {
            const query = 'UPDATE movies SET name = ?,price = ? WHERE id=?'
            connection.query(query, [updateObject.name, updateObject.price, id], (error, results) => {
                try {
                    resolve('Updated the Movie details successfully');
                } catch (error) {
                    console.error('Error executing query:', error);
                    reject(error);
                }
            });
        });
        return promise;
    }

    async deleteMovie(id: number) {
        const promise = new Promise((resolve, reject) => {
            const query = 'DELETE FROM movies WHERE ID=?';
            connection.query(query, [id], (error: any, results: any) => {
                try {
                    resolve('Deleted successfully');
                } catch (error) {
                    console.error('Error executing query:', error);
                    reject(error);
                }
            });
        });
        return promise;
    }
}
const appService = new AppService();
export default appService;