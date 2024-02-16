"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_service_1 = __importDefault(require("./app-service"));
class BankController {
    constructor() {
        this.getAccountDetails = this.getAccountDetails.bind(this);
        this.authenticationPost = this.authenticationPost.bind(this);
        this.transactionUpadte = this.transactionUpadte.bind(this);
    }
    async getAccountDetails(req, res) {
        try {
            if (req) {
                const id = Number(req.params.id);
                if (id) {
                    const results = await app_service_1.default.getAccountDetails(id);
                    console.log(results);
                    res.status(200).json(results);
                }
            }
            else {
                throw new Error("Invalid request");
            }
        }
        catch (err) {
            console.log('Internal server error');
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    async authenticationPost(req, res) {
        try {
            if (req) {
                //request body contains email and password
                const body = req.body;
                if (!body.email || !body.password) {
                    throw new Error("Invalid Request please provide email and password");
                }
                else {
                    const results = await app_service_1.default.authenticationPost(body);
                    // console.log(typeof(results));
                    console.log(results[0].ID);
                    res.status(200).json({ id: results[0].ID });
                }
            }
            else {
                throw new Error("Invalid Request");
            }
        }
        catch (err) {
            console.log('Internal server error');
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    async transactionUpadte(req, res) {
        try {
            if (req) {
                const updateObject = req.body;
                const results = await app_service_1.default.transactionUpdate(updateObject);
                res.status(200).json({ results });
            }
            else {
                throw new Error("Internal Server Error");
            }
        }
        catch (err) {
            console.log('Internal server error');
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
const bankController = new BankController();
exports.default = bankController;
