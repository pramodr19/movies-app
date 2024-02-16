import * as mysql from 'mysql';
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'crud',
    user: 'root',
    password: 'root',
});
connection.connect((err) => {
    if (err) {
        console.log('Error connecting: ', err);
        return;
    }
    console.log('connected as id(threadID) ' + connection.threadId);
});
export { connection };
