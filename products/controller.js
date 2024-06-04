const mongoose = require("mongoose");

const Products = require("../model/productsModel");

const ProductsAdd = async (req, res, next) => {
  try {
    const { title, description, price, sku, stock, image, isActive, onHome } = req.body;

    const products_response = await Products.create({
      title: title,
      description: description,
      price: price,
      sku: sku,
      stock: stock,
      isActive: isActive,
      onHome: onHome,
      image: image,
    });

    if (products_response) {
      console.log(products_response,"here22");
      return res.status(201).json({
        message: "Products Added Successfully",
        data: products_response,
        status: 201,
      });
    }
    return res.status(402).json({
      message: "unable to Add products",
      status: 402,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server Error",
      status: 500,
      data: err,
    });
  }
};

const ProductsGet = async(req, res, next) => {
    try{
        const products_response = await Products.find({});
        if(products_response){
            return res.status(201).json({
                message : "Products fetched sucees",
                data : products_response,
                status: 201
            })
        }
        return res.status(402).json({
            message : "Unable to fetch products",
            status : 402
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            message : "server error",
            data : err,
            status : 500
        })
    }
}

module.exports = {ProductsAdd, ProductsGet}