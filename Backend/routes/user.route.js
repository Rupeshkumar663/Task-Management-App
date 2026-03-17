import express from "express"
import { googleAuth, login, logOut, resetpassword, sendOTP, signUp, verifyOTP,updateProfile  } from "../controllers/user.controller.js"
import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() });
const authRouter= express.Router()

authRouter.post("/signup", signUp)
authRouter.post("/login", login)
authRouter.post("/logout", logOut) 
authRouter.post("/sendotp",sendOTP) 
authRouter.post("/verifiedotp",verifyOTP)
authRouter.post("/resetpassword",resetpassword)
authRouter.post("/googleauth",googleAuth)
authRouter.post("/profile", upload.single("photoUrl"), updateProfile);

export default authRouter