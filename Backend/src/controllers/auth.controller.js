// import { sign } from "jsonwebtoken"
import bcrypt from "bcryptjs"
import newUser from "../models/loginModel.js"
import { generateToken } from "../lib/utils.js";

export const signup = async(req,res)=>{
    const{fullName,email,password}=req.body;
    try{
        if(!fullName || !email || !password){
            return res.status(400).json({msg:"Please provide valid Information"});
        }
        const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!passwordRegex.test(password)){
            return res.status(400).json({msg:"Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."})
        }
        const emailRegex =/^(?!.*\.\.)[A-Za-z0-9]+([._%+-]?[A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({msg:"Invalid email format. Please provide a valid email address (e.g., example@domain.com)."})
        }

        const existingUser = await newUser.findOne({email});
        if(existingUser){
            return res.status(400).json({msg:"Email already exists "});
        }

        // Hash Password
        const salt = await bcrypt.genSalt(12);
        const hashedPassword= await bcrypt.hash(password,salt);

        // Create new user
        const userNew = new newUser({
            fullName,
            email,
            password:hashedPassword
        });

        const savedUser = await userNew.save();

        generateToken(savedUser._id,res);
        res.status(201).json({
            _id:savedUser._id,
            fullName:savedUser.fullName,
            email:savedUser.email,
        })
    }catch(err){
        console.error(err);
        res.status(500).json({msg:"Internal server error"});
    }
};