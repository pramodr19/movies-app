"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const app_controller_1 = __importDefault(require("./app-controller"));
const router = express_1.default.Router();
exports.router = router;
router.get('/account/details/:id', app_controller_1.default.getAccountDetails);
router.post('/account/details/verify', app_controller_1.default.authenticationPost);
//passing id and blance in body for the patch api
router.patch('/account/details/deposit/withdraw', app_controller_1.default.transactionUpadte);
