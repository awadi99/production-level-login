import app from "./app.js";
import dotenv from "dotenv";
import {connectionDb} from "./lib/db.js";

dotenv.config();


const PORT =process.env.PORT || 3000;

connectionDb();
const server = app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
})


