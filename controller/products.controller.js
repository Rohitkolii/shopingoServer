import { Product } from "../models/products.js";


export const productsList = async(req, res) => {
    try {
        const ProductList = await Product.find();
        res.json(ProductList)
    } catch (error) {
        console.error(error);
        res.status(500).json("Server Error")
    }
}

export const SingleProduct = async(req, res) => {
    try {
        const id = req.params.id;
        // console.log(id);
        // console.log(req.params.id);
        
        const SingleProduct = await Product.findOne({_id:id});
        res.json(SingleProduct)
    } catch (error) {
        console.error(error);
        res.status(500).json("Server Error")
    }
}

export const Addproduct = async(req, res) => {
    try {
        const {product_name, product_category, product_price, product_quantity, product_rating, product_desc} = req.body;

        if(!product_name || !product_category || !product_price || !product_quantity || !product_rating || !product_desc || !req.file){
                return res.status(400).json("All Fields are Mandatory!")
            }

            const imagePath = `/uploads/${req.file.filename}`;

            // const productCreated = 
            await Product.create({product_name,product_category,product_price,product_quantity,product_rating, product_desc, product_img : imagePath,isTrending:false})
        res.status(200).json("product Created Succesfully!")

    } catch (error) {
        console.error(error);
        res.status(500).json("Server Error")
    }
}


export const deleteProduct = async(req, res)=> {
    try {
        const { _id } = req.body;
        await Product.deleteOne({_id})
        res.json("Product deleted!")
    } catch (error) {
        console.error(error);
        res.status(500).json("Server Error")
    }
}