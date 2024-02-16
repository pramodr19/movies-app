//install  sequelize package
import { Sequelize } from "sequelize";
//create object for sequelize and pass the dbname username and password
const sequelize = new Sequelize("crud", "root", "root", {
    //dialect is optional
    dialect: "mysql",
    host: "localhost",
    port: 3306
});
   

export {
    sequelize
}