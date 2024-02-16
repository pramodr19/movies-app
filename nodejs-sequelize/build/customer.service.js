"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./model/customer");
class CustomerService {
    async getCustomer() {
        const promise = new Promise(async (resolve, reject) => {
            try {
                const result = await customer_1.Customer.findAll();
                resolve(result);
                console.log('result', result);
            }
            catch (error) {
                reject(error);
                console.log('error', error);
            }
        });
        return promise;
        // try {
        //     const result = await Customer.findAll();
        //     console.log('result', result)
        //     return result;
        // } catch (error) {
        //     throw error;
        // }
    }
}
const customerService = new CustomerService();
exports.default = customerService;
