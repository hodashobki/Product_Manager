const mongoose=require("mongoose");

const ProductShema= new mongoose.Schema({
    title:{type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters long"]},
    price: {
        type: Number,
        min: [1, "Price must be at least 1$"],
        max: [100, "Price must be at maximum 100$"]
      },

    description:{type: String,
        required: [true, "Description is required"],
        minlength: [2, "Description must be at least 2 characters long"]}
},{timestamps:true});
const Product = mongoose.model("Product",ProductShema);

module.exports= Product;