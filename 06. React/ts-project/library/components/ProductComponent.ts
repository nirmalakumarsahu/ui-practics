import { ProductTemplate } from "../templates/ProductTemplate";

export class ProductComponent extends ProductTemplate {
  name = "Samsung TV";
  price = 56000.45;
  qty = 3;
  public total(): number {
    return this.price * this.qty;
  }
  public print(): void {
    console.log(`Product Name: ${this.name}\n
            Price: ${this.price}\n
            Quantity: ${this.qty}\n
            Total: ${this.total()}
            `);
  }
}
