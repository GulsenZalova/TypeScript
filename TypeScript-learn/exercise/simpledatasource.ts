import { Product } from "./product";


 export class SimpleDataSource{
    private products: Array<Product>;

    constructor(){
        this.products=new Array<Product>(
            new Product(1,"Samsung S5","Telefon",1000),
            new Product(2,"Samsung S5","Telefon",2000),
            new Product(3,"Samsung S5","Telefon",3000),
            new Product(4,"Samsung S5","Telefon",4000)
        )

    }

    getProducts():Product[]{
        return this.products
    }
}