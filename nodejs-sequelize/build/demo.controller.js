"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_service_1 = __importDefault(require("./customer.service"));
class DemoController {
    constructor() {
        this.getCustomer = this.getCustomer.bind(this);
    }
    async getCustomer(req, res) {
        if (req) {
            try {
                const results = await customer_service_1.default.getCustomer();
                res.status(200).json({ data: results });
            }
            catch (err) {
                console.log("Internal server error");
            }
        }
    }
}
const demoController = new DemoController();
exports.default = demoController;
// async getOrders(req: Request, res: Response) {
//     if (req) {
//         const res = await orderService.getOrders();
//         res.json(res);
//     } else {
//         throw error;
//     }
// }
