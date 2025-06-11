import { Cart } from "../models/cartModel.js";
import { Orders } from "../models/orderModel.js";

export const NewOrder = async(req, res) => {
    try {
    const userCart = req.body; // assuming array from frontend

    const transformedOrders = userCart.map(item => ({
      productId: item.productid,
      UserId: item.userId,
      customer: item.userId, // replace with actual customer name if needed
      Product_Name: item.cart_name,
      img: item.cart_img,
      itemcount:item.itemcount,
      price:item.cart_price,
      payment_mode: "Cash on Delivery", // or item.payment_mode if passed
      Status: "Pending",
      isDelivered: false
    }));

    // console.log(transformedOrders);
    

    // Save all transformed orders to the database
    const savedOrders = await Orders.insertMany(transformedOrders);

    // Delete from cart where userId and productid match
    const deleteConditions = userCart.map(item => ({
      userId: item.userId,
      productid: item.productid
    }));

    await Promise.all(deleteConditions.map(condition =>
      Cart.deleteOne(condition)
    ));

    res.status(200).json({ message: "Orders placed", data: savedOrders });
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
        const id = req.params.id;
        // console.log(id);
        
        const UserOrder = await Orders.find({UserId:id})

        if(!UserOrder){
            return res.status(401).json("Your Order Not Find!")
        }

        res.status(200).json(UserOrder)
    } catch (error) {
        console.log(error);
    }
}