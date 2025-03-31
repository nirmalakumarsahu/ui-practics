import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function CrudDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8989/product/${params.id}`).then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  }, []);

  return (
    <div className="container-fluid">
      <h2> Product Details</h2>
      <dl>
        <dt>Product ID:</dt>
        <dd>{product.productId}</dd>
        <dt>Product Name:</dt>
        <dd>{product.name}</dd>
        <dt>Product Price:</dt>
        <dd>{product.price}</dd>
        <dt>Product Stock:</dt>
        <dd>{product.stock === true ? "Available" : "Out of Stock"}</dd>
      </dl>
      <Link to="/products">Back to Products</Link>
    </div>
  );
}
