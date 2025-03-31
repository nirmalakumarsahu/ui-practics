import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export function ShopperCategory() {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies["userId"] === undefined) {
      navigate("/login");
    }
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/category/${params.catname}`,
    }).then((response) => {
      setProducts(response.data);
    });
  }, [params.catname]);

  return (
    <div className="container-fluid">
      <h2>
        Shopper Category {params.catname} - {cookies["userId"]}
      </h2>
      <div className="d-flex flex-wrap">
        {products.map((product) => (
          <div className="card m-2 p-2" style={{ width: "200px" }}>
            <img
              className="card-img-top"
              src={product.image}
              style={{ height: "150px" }}
            />
            <div className="card-header" style={{ height: "150px" }}>
              <p>{product.title}</p>
            </div>
            <div className="card-footer">
              <Link
                to={"/details/" + product.id}
                className="btn btn-primary w-100"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
