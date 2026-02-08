import mongoose from "mongoose";
import dotevn from "dotenv"
import path from "path";
import { fileURLToPath } from "url";

const __filename =fileURLToPath(import.meta.url);
const __dirname =path.dirname(__filename);

dotevn.config({path:path.resolve(__dirname,"../../.env")});

const mongoUrl = process.env.MONGO_URL;

if(!mongoUrl){
    console.error("MONGO_URL is not defined in your .env");
    process.exit(1);
}
export const connectionDb = async ()=>{
    try{
    await mongoose.connect(mongoUrl);
    console.log("Database connected");
    }catch(err){
        console.error("Database Connection Error",err);
        process.exit(1);
    }
};

