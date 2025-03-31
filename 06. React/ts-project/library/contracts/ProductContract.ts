export interface ProductContract {
  name: string;
  price: number;
  qty: number;
  total(): number;
  print(): void;
}
