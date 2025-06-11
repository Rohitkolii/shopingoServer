import mongoose from "mongoose"

const cartsSchema = new mongoose.Schema({
    userId : {type:String, required:true},
    cart_name : {type:String, required: true},
    cart_category : {type:String, required: true},
    cart_price : {type:String, required: true},
    cart_img : {type:String, required: true},
    itemcount:{type:String, required:true},
    productid : {type:String, required: true},
},{
    timestamps:true,
}
)

const Cart = new mongoose.model("cart", cartsSchema)

export { Cart }