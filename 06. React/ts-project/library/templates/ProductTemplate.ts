import { ProductContract } from "../contracts/ProductContract";

export abstract class ProductTemplate implements ProductContract {
  public name: string = "";
  public price: number = 0;
  public qty: number = 0;
  public abstract total(): number;
  public abstract print(): void;
}
