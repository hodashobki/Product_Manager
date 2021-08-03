const Product=require("../models/product.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Product Manager "
    });
}

module.exports.findAllProduct=(req,res)=>{
Product.find()
.then(allProducts=>res.json({products:allProducts}))
.catch(err=>res.json({message:"Somthing went wrong in retrieving Products", error: err}))
};

module.exports.findOneProduct=(req,res)=>{
    Product.findOne({_id:req.params.id})
    .then(oneProduct=>res.json({product:oneProduct}))
    .catch(err=>res.json({message:"Somthing Went wrong in finding one Product", error: err}))
};
module.exports.creatProduct=(req,res)=>{
    
    Product.create(req.body)
    .then(newProduct=>res.json({product:newProduct} ))
    .catch(err=>res.status(400).json({message:"Somthing went wrong at creating new Product", error: err}))
};

module.exports.updateExistingProduct=(req,res)=>{
    Product.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    .then(updatedProduct=>res.json({product:updatedProduct}))
    .catch(err=>res.status(400).json({message:"Somthing went wrong in updating Product", error: err}))

};

module.exports.deleteProduct=(req,res)=>{
    Product.deleteOne({_id:req.params.id})
    .then(result=>res.json({result:result}))
    .catch(err=>res.json({message:"Somthing went wrong in deleting Product", error: err}))
};