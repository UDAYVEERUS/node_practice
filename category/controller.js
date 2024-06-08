const Category = require("../model/categoriesSchema");

const categoryAdd = async (req, res, next) => {
  try {
    const { title, description, onHome, isActive, image } = req.body;

    const category_response = await Category.create({
      title: title,
      description: description,
      onHome: onHome,
      isActive: isActive,
      image: image,
    });

    if (category_response) {
      console.log("Category Added Successfully");
      return res.status(201).json({
        messag: "Category Added Successfully",
        status: 201,
        data: category_response,
      });
    }
    console.log("Unable to Add category");
    return res.status(402).json({
      messag: "unable to add category",
      status: 402,
    });
  } catch (err) {
      console.log(err);
    return res.status(500).json({
      message: "Server error",
      data: err,
      status: 500,
    });
  }
};

const categoriesGet = async (req, res, next) => {
    try {
      
  
      const category_response = await Category.find({});
  
      if (category_response) {
        console.log("Category Fetched Successfully");
        return res.status(201).json({
          messag: "Category Fetched Successfully",
          status: 201,
          data: category_response,
        });
      }
      console.log("Unable to fetch category");
      return res.status(402).json({
        messag: "unable to fetch category",
        status: 402,
      });
    } catch (err) {
        console.log(err);
      return res.status(500).json({
        message: "Server error",
        data: err,
        status: 500,
      });
    }
  };

module.exports = {categoryAdd, categoriesGet};
