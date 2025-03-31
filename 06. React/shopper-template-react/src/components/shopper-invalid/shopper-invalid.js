import { Link } from "react-router-dom";

export function ShopperInvalid() {
  return (
    <div className="text-denget">
      <h3>Invalid User Name/ Password</h3>
      <div>
        <Link to="/login">Try Again</Link>
      </div>
    </div>
  );
}
