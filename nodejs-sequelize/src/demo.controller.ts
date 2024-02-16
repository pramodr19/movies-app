import customerService from "./customer.service";
import { Request, Response } from "express";

class DemoController {
    constructor() {
        this.getCustomer = this.getCustomer.bind(this);
    }

    async getCustomer(req: Request, res: Response) {
        if (req) {
            try {
                const results = await customerService.getCustomer();
                res.status(200).json({ data: results });
               
            } catch (err) {
                console.log("Internal server error");
            }
        }

    }

}
const demoController = new DemoController();
export default demoController;


// async getOrders(req: Request, res: Response) {
//     if (req) {
//         const res = await orderService.getOrders();
//         res.json(res);
//     } else {
//         throw error;
//     }
// }