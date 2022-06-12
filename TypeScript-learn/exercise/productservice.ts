import { IproductService } from "./Iproductservic";
import {Product} from "./product";
import {SimpleDataSource} from "./simpledatasource";

export class ProductService implements IproductService{
    private dataSource: SimpleDataSource;
    private products: Array<Product>;

    constructor(){
        this.dataSource=new SimpleDataSource;
        this.products=new Array<Product>;
        this.dataSource.getProducts().forEach(p=>this.products.push(p))
    }

    getByID(id: number): Product {
        return this.products.filter(p=> p.id===id)[0];
    }
    getProducts(): Product[] {
        return this.products;

    }
    saveProduct(product: Product): void {
        if(product.id==0 || product.id==null){
            product.id=this.generateİd();
            this.products.push(product)
        }else{
            let index=this.products.indexOf(product)
            this.products.splice(index,1,product)
        }
    }
    deletePriduct(product: Product): void {
        let index=this.products.indexOf(product)
        if(index>0){
            this.products.splice(index,1)
        }
    }

    private generateİd():number{
        let key =1

        while(this.getByID(key)!==null){
            key++
        }
        return key
    }

    
}


