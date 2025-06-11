import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    productId: {type:String, required:true},
    UserId: {type:String, required:true},
    customer: {type:String},
    Product_Name: {type:String, required:true},
    img: {type:String, required:true},
    payment_mode: {type:String},
    Status: {type:String},
    isDelivered: {type:Boolean},
    itemcount:{type:String},
    price:{type:Number}
}, 
{timestamps:true}
)

const Orders = new mongoose.model("order", orderSchema);


export {Orders}