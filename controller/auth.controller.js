import { User } from "../models/userModel.js";

export const Register = async (req, res)=> {
    try {
        
        const {username, email, password} = req.body;
        
        const userExists = await User.findOne({email})
        
        if(userExists){
            return res.status(400).json({msg: "email exist"})
        }
        
        await User.create({username, email, password, isAdmin:false})
        res.status(200).json({msg: "User Created!"})
    } catch (error) {
        console.error(error);
        res.status(500).json("Server Error")
    }
}

export const Login = async (req, res) => {
    
    try {
        const {email, password} = req.body;
        const userexist = await User.findOne({email})

        if(!userexist){
            return res.status(400).json("User not exists!")
        }

        if(userexist.password !== password){
            return res.status(401).json("Invalid Password")
        }
        
        res.status(200).json({
            msg: "Login Successfull!",
            token: await userexist.generateToken(),
            userID: userexist._id.toString()})

    } catch (error) {
        res.status(500).json("Server Error")
    }

}