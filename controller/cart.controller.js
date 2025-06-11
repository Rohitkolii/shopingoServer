import { Cart } from "../models/cartModel.js"
import { Product } from "../models/products.js"

export const getCartProduct = async (req, res) => {
    try {
        const cartlist = await Cart.find()
        if(!cartlist){
            res.status(400).json("Cart is empty!")
        }
        
        res.status(200).json(cartlist)
    } catch (error) {
        console.error(error);
        res.status(500).json("Server Error")
    }
}


export const AddCartProduct = async (req, res) => {
    try {
        const {cart_name, cart_category, cart_price, cart_img, productid, itemcount, userId} = req.body;

        if(!cart_name || !cart_category || !cart_price || !cart_img || !productid || !itemcount || !userId){
            return res.status(400).json("Fields Are Empty!");
        }

        //Cecking if item is already added increase cart item
        const checkcart = await Cart.findOne({productid, userId})
        if(checkcart){
            const newitemcount = Number(checkcart.itemcount) + Number(itemcount);
            await Cart.updateOne({productid}, {$set:{itemcount: newitemcount}})
            return res.status(200).json("Item Updated!")
        }

        //Adding to cart
        const newCartItem = await Cart.create({
            userId,
            cart_name,
            cart_category,
            cart_price,
            cart_img,
            itemcount,
            productid
        })

        // const myproduct = await Product.findById(productid);
        // const newQty = myproduct.product_quantity - Number(itemcount);
        
        // await Product.updateOne({_id:productid}, {$set:{product_quantity: newQty}})

        res.status(200).json("Item Added to Cart!", newCartItem)
    } catch (error) {
        console.error(error);
        res.status(500).json("Server Error")
    }
}

export const getUserCart = async(req,res) => {
    try {
        const { id } = req.params;
        console.log(id);
        // res.json(id)
        
        const UserCartList = await Cart.find({userId : id})
        res.status(200).json(UserCartList)
    } catch (error) {
        console.log(error);
    }
}


export const deleteCartProduct = async (req, res) => {
    try {
        const id = req.params;
        // console.log(id.id);
        
        await Cart.deleteOne({_id:id.id})

        res.status(200).json("Cart item Deleted")
    } catch (error) {
        console.error(error);
        res.status(500).json("Server Error")
    }
}