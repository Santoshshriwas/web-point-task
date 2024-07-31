const express = require("express");
const userController = require("../Controllers/userController.js")
const userRouter = express.Router();

userRouter.post("/register",userController.userRegister)
userRouter.post("/login",userController.userLogin)
userRouter.post("/admin",userController.userLogin)
userRouter.get("/user/:name",userController.Profile)
userRouter.get("/alluser",userController.allUser)
userRouter.get("/search",userController.searchUser)
userRouter.put("/update",userController.updatePassword)


module.exports= userRouter;