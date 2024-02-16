"use strict";
// import { sequelize } from "./dbconfig";
// import { Order } from "./model/order";
// import { Customer } from "./model/customer";
// Customer.hasMany(Order);
// let customerId: null = null;
// sequelize
//     .sync({ force: true })
//     .then((result) => {
//         console.log(result);
//         return Customer.create({ name: "Pramod", email: "pramod@g.in" });
//     })
//     .then((customer: any) => {
//         customerId = customer.id;
//         console.log("First customer created", customer)
//         return customer.createOrder({ total: 45 });
//     })
//     .then((order: any) => {
//         console.log("Order is " + order)
//         return Order.findAll({ where: { customerId } });
//     })
//     .catch((err) => {
//         console.log(err);
//     });
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./router");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: 'http://localhost:4200' }));
const port = 3000;
app.listen(port, () => {
    console.log("server started");
});
app.use('/', router_1.router);
