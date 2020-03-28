const ProductController = require('../controllers/product.controller');


// const item = (req, res, next) => {
//     console.log(req.url);
//     next();
// }



module.exports = function(app){
    app.post("/product", ProductController.createProduct);
    app.get("/product", ProductController.allProducts);
    // app.get("/product", item, ProductController.allProducts);
    app.get("/product/:id", ProductController.getProduct);
    app.put("/product/:id", ProductController.updateProduct);
    app.delete("/product/:id", ProductController.deleteProduct);
    // app.delete("/product/:id", item, ProductController.deleteProduct);
}
