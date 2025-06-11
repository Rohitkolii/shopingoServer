import mongoose from "mongoose";
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean}
})

userSchema.methods.generateToken = function (){
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email
        },
        "BHEEMKISHAKTI",
        {
            expiresIn: "3d"
        }
    )
    } catch (error) {
        console.log(error);
    }
}

const User = new mongoose.model("user", userSchema);

export {User};