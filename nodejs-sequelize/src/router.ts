import express from "express";
import demoController from "./demo.controller";
const router = express.Router();
router.get('/customer',demoController.getCustomer);
export {
    router
}
