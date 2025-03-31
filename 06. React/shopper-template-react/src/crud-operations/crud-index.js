import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function CrudIndex() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8989/product/all").then((response) => {
      setProducts(response.data);
    });
  }, []);

  function DeleteClick(e) {
    var flag = window.confirm("Are you sure \n Want to Delete?");
    console.log("Flag - " + flag);
    if (flag) {
      console.log("Condition true");
      axios.delete(
        `http://localhost:8989/product/delete/${e.currentTarget.value}`
      );

      alert("Product Deleted");
      navigate("/products");
    }
  }

  return (
    <div className="container-fluid">
      <h2>Products Grid</h2>
      <div className="mb-3">
        <Link to="/new-product" className="btn btn-primary">
          Add New Product
        </Link>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Stock</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productId}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock === true ? "Available" : "Out of stock"}</td>
              <td>
                <Link
                  className="btn btn-info"
                  to={"/crud-details/" + product.productId}
                >
                  <span className="bi bi-eye"></span>
                </Link>
                <Link
                  className="btn btn-warning ms-2"
                  to={"/crud-edit/" + product.productId}
                >
                  <span className="bi bi-pen"></span>
                </Link>
                <button
                  value={product.productId}
                  className="btn btn-danger ms-2"
                  onClick={DeleteClick}
                >
                  <span className="bi bi-trash"></span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
