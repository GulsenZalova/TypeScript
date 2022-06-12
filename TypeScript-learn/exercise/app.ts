import { Product } from "./product";
import {ProductService} from "./productservice";


let _productService=new ProductService()

let result;

result = _productService.getByID(2)
// let p=new Product()
// p.name="Nokia",
// p.catagory="telefon",
// p.price=50000,
// _productService.saveProduct(p)
_productService.deletePriduct(result)
result=_productService.getProducts()




console.log(result)