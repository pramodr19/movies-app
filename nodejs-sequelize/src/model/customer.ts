import { DataTypes } from "sequelize";
import { sequelize } from "../dbconfig";
const Customer = sequelize.define("customer", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export {Customer}