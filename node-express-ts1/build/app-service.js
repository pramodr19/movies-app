"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class BankService {
    async getAccountDetails(id) {
        const promise = new Promise((resolve, reject) => {
            //if the id and password matches return the data
            const query = 'select userName,accountNumber,accountType ,balance from bank where id=?';
            model_1.connection.query(query, [id], (err, results) => {
                try {
                    console.log(results);
                    resolve(results);
                }
                catch (err) {
                    console.log('Error Executing query');
                    reject(err);
                }
            });
        });
        return promise;
    }
    //post() to check the user is a valid user or not
    async authenticationPost(body) {
        const promise = new Promise((resolve, reject) => {
            const query = 'SELECT ID FROM BANK WHERE EMAIL=? AND password=? ';
            model_1.connection.query(query, [body.email, body.password], (err, results) => {
                try {
                    console.log(results);
                    resolve(results);
                }
                catch (err) {
                    console.log('Error Executing query');
                    reject(err);
                }
            });
        });
        return promise;
    }
    async transactionUpdate(updateObject) {
        const promise = new Promise((resolve, reject) => {
            const query = 'UPDATE bank SET balance=? WHERE id=?';
            console.log(updateObject.balance + " " + updateObject.id);
            //pass the parameters in the query order
            model_1.connection.query(query, [updateObject.balance, updateObject.id], (error, results) => {
                try {
                    resolve(results);
                }
                catch (error) {
                    console.log("Error executing query");
                    reject(error);
                }
            });
        });
        return promise;
    }
}
const bankService = new BankService();
exports.default = bankService;
