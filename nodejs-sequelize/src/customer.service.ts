import { Customer } from "./model/customer";

class CustomerService {

    async getCustomer(): Promise<any> {
        const promise = new Promise(async (resolve, reject) => {
            try {
                const result = await Customer.findAll();
                resolve(result);
                console.log('result', result);
            } catch (error) {
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
export default customerService;