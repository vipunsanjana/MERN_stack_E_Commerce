import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);

        console.log(`Connected to MongoDB: ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`.bgRed.white);
        process.exit(1); // Exit the application on a database connection error
    }
}

export default connectDB;
