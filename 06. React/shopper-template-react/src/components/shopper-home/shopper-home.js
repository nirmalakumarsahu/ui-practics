import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function ShopperHome() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies["userId"] === undefined) {
      navigate("/login");
    }
  });

  function SignoutClick() {
    removeCookie("userId");
    navigate("/login");
  }

  return (
    <div className="container-fluid d-flex justify-content-between">
      <div>
        <div className="d-flex justify-content-between">
          <div>
            <img
              alt="electronics"
              src="/images/electronics.jpg"
              style={{ with: "200px", height: "200px" }}
            />
          </div>
          <div>
            <img
              alt="mensclothing"
              src="/images/mensclothing.jpg"
              style={{ with: "200px", height: "200px" }}
            />
          </div>
          <div>
            <img
              alt="womensclothing"
              src="/images/womensclothing.jpg"
              style={{ with: "200px", height: "200px" }}
            />
          </div>
          <div>
            <img
              alt="jewelery"
              src="/images/jewelery.jpg"
              style={{ with: "200px", height: "200px" }}
            />
          </div>
        </div>
      </div>
      <div>
        <h4>Hello! - {cookies["userId"]}</h4>
      </div>
      <button onClick={SignoutClick()} className="btn btn-link">
        Signout
      </button>
    </div>
  );
}
