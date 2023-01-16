const express = require('express')
const router= express.Router()
const userController = require('../controller/UserController')
const auth = require('../middleware/AuthMiddleWare')

router.post("/user",userController.createUser)
router.get("/user/auth",auth.Auth("ADMIN"),userController.getAllUser)
// router.route('/').get('/auth', auth.Auth("ADMIN"));
router.delete("/user/:id",userController.deleteUser)
router.put("/user/:id",userController.updateUser)
router.get("/user",userController.getUserById)

module.exports  = router;

