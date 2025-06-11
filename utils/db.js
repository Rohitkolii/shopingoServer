import mongoose from "mongoose";


// const URI = "mongodb://127.0.0.1:27017/shopingo"
const URI = "mongodb+srv://rohitkolisd:rohitkolisd@cluster0.hfc7bpg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const DBConnection = async () => {
    try {
        await mongoose.connect(URI)
        mongoose.set("debug", true)
    } catch (error) {
        console.error("DB Error", error);
        process.exit();
    }
}

export default DBConnection;