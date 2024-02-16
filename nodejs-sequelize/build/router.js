"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const demo_controller_1 = __importDefault(require("./demo.controller"));
const router = express_1.default.Router();
exports.router = router;
router.get('/customer', demo_controller_1.default.getCustomer);
