import express from "express";
import bankController from "./app-controller";
const router = express.Router();
router.get('/account/details/:id', bankController.getAccountDetails);
router.post('/account/details/verify', bankController.authenticationPost);
//passing id and blance in body for the patch api
router.patch('/account/details/deposit/withdraw', bankController.transactionUpadte);

export {
    router
}