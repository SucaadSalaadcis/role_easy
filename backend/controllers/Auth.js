const userModel = require("../models/user.js");
const bcryptjs = require('bcryptjs');

const jwt = require('jsonwebtoken');


// register user
const register=async(req,res)=>{
    try {
        const {name,email,password}=req.body
           
        const existUser= await userModel.findOne({email})
        if (existUser) {
            return res.status(401).json({success:false,message:"User already Exist"})
        }
            const hasepassword = await bcryptjs.hashSync(password,10)

        const newUser= new userModel({
            name,email,password:hasepassword
        })
        
          await newUser.save()

          res.status(200).json({message:"user register successfully",newUser})
    } catch (error) {
        res.status(500).json({success:false,message:"interanl server error"})
        console.log(error)
    }
}
// login
const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(404).json({ success: false, message: "Invalid email" })
        }

        const ispassaowrdValid = bcryptjs.compareSync(password, user.password);
        // console.log(ispassaowrdValid);

        if (!ispassaowrdValid) {
            return res.status(404).json({ success: false, message: "Invalid password" })

        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRETE, { expiresIn: '1hr' })

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            maxAge: 3600000, // 1 hour

        });

        res.status(200).json({ success: true, message: "Login successfully", user, token })

    } catch (error) {
        res.status(500).json({ success: false, message: "interanl server error" })
        console.log(error);
    }
}

// logout
const Logout = async (req, res) => {
    try {
        res.clearCookie('token')
        res.status(200).json({ message: "user Logout successfully" })
    } catch (error) {
        res.status(500).json({ success: false, message: "interanl server ereo" })
        console.log(error)
    }
}


module.exports = { register, login, Logout }