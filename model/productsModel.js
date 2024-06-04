const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title : {
        type: String,
        required : true
    },
    description : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    image : {
        type : String,
        requires : false,
        default : "https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80"
    },
    stock : {
        type : Number,
        default : 10,
        required : true
    },
    sku : {
        type : String,
        required : true,
        unique : true,
    },
    onHome :{
        type : Boolean,
        required : true,
        default : false
    },
    isActive : {
        type : Boolean,
        default : true,
        required : true
    }
},{timestamps: {
    createdAt : 'created_at',
    updatedAt : 'updated_at'
}}
)

const Products = mongoose.model("ProductSchema" , productSchema)
module.exports = Products