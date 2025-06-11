import { Orders } from "../models/orderModel.js";

export const NewOrder = async(req, res) => {
    try {
        const orederList = req.body;

        // if(!productId || !UserId || !customer || !Product_Name || !img || !payment_mode){
        //     return res.json("All field Required!")
        // }

        const Saveditems = await Orders.insertMany(orederList);
        res.status(200).json(Saveditems);
    } catch (error) {
        res.status(500).json("Server Error", error)
    }
}

export const OrdersList = async (req,res) => {
    try {
        const AllOrders = await Orders.find();
        if(!AllOrders){
            return res.status(401).json("No Orders Found!")
        }

        res.status(200).json(AllOrders);
    } catch (error) {
        console.log("Server Error",error);
    }
}

export const GetUserOrders = async(req, res)=> {
    try {
        const {_id} = res.params;
        const UserOrder = await find({_id})

        if(!UserOrder){
            return res.status(401).json("Your Order Not Find!")
        }

        res.status(200).json(UserOrder)
    } catch (error) {
        console.log(error);
    }
}