import { useEffect } from "react";
import store from "../stores/store";

export function CartComponent() {
  const count = store.getState().store.cartItemsCount;
  useEffect(() => {}, [count]);

  return (
    <div>
      <button>Your cart [{count}]</button>
    </div>
  );
}
