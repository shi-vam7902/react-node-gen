const express = require("express")
const ProductController = require('../controller/ProductController')
const router = express.Router()

router.post("/prod",ProductController.addProduct)
router.get("/prod",ProductController.getAllProducts)
router.delete("/prod",ProductController.deleteProductById)
module.exports = router