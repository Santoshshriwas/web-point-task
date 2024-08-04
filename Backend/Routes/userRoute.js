const express = require("express");
const userController = require("../Controllers/userController.js")
const userRouter = express.Router();

userRouter.post("/register",userController.userRegister)
userRouter.post("/login",userController.userLogin)
userRouter.post("/admin",userController.userLogin)
userRouter.get("/profile/:id",userController.Profile)
userRouter.get("/alluser",userController.allUser)
userRouter.get("/search",userController.searchUser)
userRouter.put("/update",userController.updatePassword)
userRouter.put("/user/update",userController.UserupdatePassword)


module.exports= userRouter;

