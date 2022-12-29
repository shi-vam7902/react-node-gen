const express = require('express')
const router = express.Router()
const userController = require('../controller/UserController')

router.post("/user",userController.createUser)
router.get("/user",userController.getAllUsers)
router.delete("/user/:id",userController.deleteUser)
router.put("/user/:id",userController.updateUser)
router.get("/user",userController.getUserById)

module.exports  = router;

