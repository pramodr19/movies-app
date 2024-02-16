import { DataTypes } from "sequelize";
//import the exported sequelize object
import { sequelize } from "../dbconfig";
import { Customer } from "./customer";
const Order = sequelize.define("order", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

});
Order.belongsTo(Customer);

export {
    Order
}
