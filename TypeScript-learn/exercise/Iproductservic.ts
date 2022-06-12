import {Product} from "./product"


 export interface IproductService{
    getByID(id:number):Product,
    getProducts():Array<Product>,
    saveProduct(product:Product):void,
    deletePriduct(product:Product):void
}