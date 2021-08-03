const ProductController =require("../controllers/product.controller");

module.exports=app=>{
    app.get('/api', ProductController.index);
    app.get("/api/products",ProductController.findAllProduct);
    app.get("/api/products/:id",ProductController.findOneProduct);
    app.put("/api/products/update/:id",ProductController.updateExistingProduct);
    app.post("/api/products/new",ProductController.creatProduct);
    app.delete("/api/products/delete/:id",ProductController.deleteProduct);
};