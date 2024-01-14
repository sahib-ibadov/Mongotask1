const express=require("express")
require('dotenv').config()
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
const PORT=8080
const ProductRouter=require("./routes/Product.routes")
app.use(cors())
app.use(express.json())
app.use("/products",ProductRouter)




mongoose.connect("mongodb+srv://tu7ljr8ww:Allahverdi123@cluster0.hlwgpfm.mongodb.net/").then(res=>{
    console.log("connect to db")
})


app.listen(PORT,()=>{
    console.log("back running on 8080")
})