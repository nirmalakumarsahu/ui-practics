import { useEffect, useState } from "react";

export function ShoppingCart() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    var currentCount = count + 1;
    setCount(currentCount);
  }, [count]);
  return (
    <div className="container m-4 p-4">
      <span className="bi bi-cart4"></span> {count}
    </div>
  );
}

export function EffectsComponent() {
  const [component, setComponent] = useState("");

  function AddToCart() {
    alert("Cart Requested");
    setComponent(<ShoppingCart />);
  }

  return (
    <div className="container-fluid mt-4">
      <div>
        <button onClick={AddToCart}>Add to cart</button>
      </div>
      <div>{component}</div>
    </div>
  );
}
