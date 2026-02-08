import express from "express";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routers/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(helmet());
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}));
app.use(express.json({limit:"25mb"}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.send("api is running");
});

app.use("/api/auth",authRoutes);



export default app
