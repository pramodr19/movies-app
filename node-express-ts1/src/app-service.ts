import { resolve } from "path";
import { connection } from "./model";

class BankService {
    async getAccountDetails(id: number): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            //if the id and password matches return the data
            const query = 'select userName,accountNumber,accountType ,balance from bank where id=?'
            connection.query(query, [id], (err, results) => {
                try {
                    console.log(results);
                    resolve(results);
                } catch (err) {
                    console.log('Error Executing query');
                    reject(err);
                }
            });
        });

        return promise;
    }

    //post() to check the user is a valid user or not
    async authenticationPost(body: any): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            const query = 'SELECT ID FROM BANK WHERE EMAIL=? AND password=? '
            connection.query(query, [body.email, body.password], (err, results) => {
                try {
                    console.log(results);
                    resolve(results);
                } catch (err) {
                    console.log('Error Executing query');
                    reject(err);
                }
            });
        });

        return promise;
    }

    async transactionUpdate(updateObject: any): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            const query = 'UPDATE bank SET balance=? WHERE id=?';
            console.log(updateObject.balance + " " + updateObject.id);
            //pass the parameters in the query order
            connection.query(query, [updateObject.balance, updateObject.id], (error, results) => {
                try {
                    resolve(results);
                } catch (error) {
                    console.log("Error executing query");
                    reject(error);
                }
            });
        });
        return promise;
    }

}

const bankService = new BankService();
export default bankService;