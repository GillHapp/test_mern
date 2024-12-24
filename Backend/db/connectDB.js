import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected...");
        console.log(conn.connection.host);
    } catch (error) {
        console.error("Error connecting to MongoDB", error.message);
        process.exit(1);
    }
}