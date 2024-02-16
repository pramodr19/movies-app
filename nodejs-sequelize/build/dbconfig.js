"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
//install  sequelize package
const sequelize_1 = require("sequelize");
//create object for sequelize and pass the dbname username and password
const sequelize = new sequelize_1.Sequelize("crud", "root", "root", {
    //dialect is optional
    dialect: "mysql",
    host: "localhost",
    port: 3306
});
exports.sequelize = sequelize;
