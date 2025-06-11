import express from "express";
import { NewOrder, OrdersList, GetUserOrders } from "../controller/order.controller.js";

const router = express.Router()

router.get("/get", OrdersList)
router.get("/get/:id", GetUserOrders)
router.post("/add", NewOrder)
// router.delete("/delete", deleteCartProduct)

export { router };