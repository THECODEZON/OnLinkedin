import mongoose from "mongoose";

const connectDb=async ()=>{
    try {
      await mongoose.connect(process.env.MONGODB_URL)
        console.log("db connected")
    } catch (error) {
        console.log("db error:", error.message);
        console.log("MongoDB URL:", process.env.MONGODB_URL ? "Set" : "Not set");
        
    }
}
export default connectDb
