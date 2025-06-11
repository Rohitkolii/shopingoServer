import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    product_name : {type:String, required: true},
    product_category : {type:String, required: true},
    product_price : {type:String, required: true},
    product_quantity : {type:String, required: true},
    product_rating : {type:String, required: true},
    product_img : {type:String, required: true},
    product_desc : {type:String, required: true},
    isTrending : {type:Boolean},
},{
    timestamps:true,
}
)

const Product = new mongoose.model("product", productsSchema)

export { Product }