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
exports.deleteProductById = (req,res)=>{
    const id = req.body.id
    ProductSchema.findByIdAndDelete(id,(err,data)=>{
        if(err)
        {
            console.log(err);
            res.status(500).json({
                message:"product not deleted",
                error:err
            })
        }
        else
        {
            res.status(201).json({
                message:"product Deleted",
                data:data
            })
        }
    })
}