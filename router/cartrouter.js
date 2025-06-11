import express from "express";
import { AddCartProduct, deleteCartProduct, getCartProduct, getUserCart } from "../controller/cart.controller.js";

const router = express.Router()

router.get("/get", getCartProduct)
router.get("/get/:id", getUserCart)
router.post("/add", AddCartProduct)
router.delete("/delete", deleteCartProduct)

export {router}