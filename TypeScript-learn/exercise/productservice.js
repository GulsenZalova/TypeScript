"use strict";
exports.__esModule = true;
exports.ProductService = void 0;
var simpledatasource_1 = require("./simpledatasource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new simpledatasource_1.SimpleDataSource;
        this.products = new Array;
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); });
    }
    ProductService.prototype.getByID = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0];
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateİd();
            this.products.push(product);
        }
        else {
            var index = this.products.indexOf(product);
            this.products.splice(index, 1, product);
        }
    };
    ProductService.prototype.deletePriduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1);
        }
    };
    ProductService.prototype.generateİd = function () {
        var key = 1;
        while (this.getByID(key) !== null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
