"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const sequelize_1 = require("sequelize");
//import the exported sequelize object
const dbconfig_1 = require("../dbconfig");
const customer_1 = require("./customer");
const Order = dbconfig_1.sequelize.define("order", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
});
exports.Order = Order;
Order.belongsTo(customer_1.Customer);
