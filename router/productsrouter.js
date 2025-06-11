import express from "express";
import { Addproduct, deleteProduct, productsList, SingleProduct } from "../controller/products.controller.js";
import multer from "multer"
import path from "path"

const router = express.Router()

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get("/productslist", productsList)
router.get("/product/:id", SingleProduct)
router.post("/addproduct", upload.single("image"), Addproduct)
// router.post("/addproduct",Addproduct)
router.delete("/deleteProduct", deleteProduct)

export { router };