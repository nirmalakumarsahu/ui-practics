import { useDispatch } from "react-redux";
import { ProductContract } from "../contracts/ProductContract";
import { useFetch } from "../hooks/useFetch";
import { addToCart } from "../slicers/slicer";
import { CartComponent } from "./cart.component";

export function ShoppingComponent() {
  const categories: string[] = useFetch(
    "http://fakestoreapi.com/products/categories"
  );
  const products: ProductContract[] = useFetch(
    "http://fakestoreapi.com/products"
  );

  const dispatch = useDispatch();
  function addToCartClick(product: any) {
    dispatch(addToCart(product));
  }

  return (
    <div style={{ margin: "20px" }}>
      <h2>
        Shopping Online - <CartComponent />
      </h2>
      <div>
        <select name="categories">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px" }}
            />
            <div>
              <button onClick={() => addToCartClick(product)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
