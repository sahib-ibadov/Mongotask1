const {Product}=require("../models/Product.model")

const ControllerProduct={
    getAll:async(req,res)=>{
        try{
            const product=await Product.find()
            res.send(product)

        }
        catch(error){
            res.send("item is not a find")
        }
    },
    getById:async(req,res)=>{
        try{
            const {id}=req.params
            const target= await Product.findById(id)
        }
        catch(error){
            res.send("item is not a find")
        }
    },
    add:async(req,res)=>{
        try{
           const {title,price,description,image}=req.body
           const newProduct=new Product ({title,price,description,image})
           await newProduct.save()
           res.send("create new product")
        }
        catch(error){
            res.send("item is not a find")
        }
    },
    edit:async(req,res)=>{
        try{
            const {id}=req.params
            const {title,price,description,image}=req.body
             await Product.findByIdAndUpdate(id,{title,price,description,image})
            res.send("data updated")
        }
        catch(error){
            res.send("item is not a find")
        }
    },
    delete:async(req,res)=>{
        try{
            const {id}=req.params
            await Product.findByIdAndDelete(id)
            res.send("deleted")

        }
        catch(error){
            res.send("item is not a find")
        }
    }
}
module.exports={ControllerProduct}