"use strict";
exports.__esModule = true;
var productservice_1 = require("./productservice");
var _productService = new productservice_1.ProductService();
var result;
result = _productService.getByID(2);
// let p=new Product()
// p.name="Nokia",
// p.catagory="telefon",
// p.price=50000,
// _productService.saveProduct(p)
_productService.deletePriduct(result);
result = _productService.getProducts();
console.log(result);
