import express from "express";
import { Register, Login } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/register", Register)
router.post("/login", Login)

export { router };