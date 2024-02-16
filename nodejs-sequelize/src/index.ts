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

import express from "express";
import { router } from "./router";
import cors from "cors";
const app = express();
app.use(express.json())
app.use(cors({ origin: 'http://localhost:4200' }));
const port: number = 3000;
app.listen(port, () => {
    console.log("server started")
})
app.use('/', router);