const ProductSchema = require("../model/ProductModel")
exports.addProduct = (req,res)=>{
 
    const products = new ProductSchema(req.body)
 
    products.save((err,data)=>{
        if(err)
        {
            res.status(500).json({
                message: "something went wrong"
            })
        }
        else{
            res.status(201).json({
                data:data,
                message:"Product Added"
            })
        }
    })
}
exports.getAllProducts = (req,res)=>{
    
    ProductSchema.find((err,data)=>{
        if(err)
        {
            res.status(500).json({
                message:"SomeThing Went Wrong"
            })
        }
        else{
            
            res.status(201).json({
                message: "data Retrived",
                data: data
            })
        }
    })
}