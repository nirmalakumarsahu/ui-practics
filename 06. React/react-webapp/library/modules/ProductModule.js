export class Product {
    _productName = "Samsung TV";
    _price = 45000.44;
    _qty = 2;
    _rating = {
        vendorRating: {rate: 4.3, count: 40},
        customerRating: {rate: 3.5, count: 5700}
    };

    get CustomerRating() {
        return this._rating.customerRating.rate;
    }
    
    total() {
        return this._qty * this._price;
    }
}

export default class Category {
    _categoryName = "electronics";
}
