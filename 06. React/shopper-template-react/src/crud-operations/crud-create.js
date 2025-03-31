import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export function CrudCreate() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [idError, setIdError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8989/product/all").then((response) => {
      setProducts(response.data);
    });
  }, []);

  function VerifyId(e) {
    var id = parseInt(e.target.value);
    for (var product of products) {
      if (product.productId === id) {
        setIdError("ID already exists");
        break;
      } else {
        setIdError("");
      }
    }
  }
  return (
    <div className="container-fluid">
      <h2>Add New Product</h2>
      <Formik
        initialValues={{
          productId: 0,
          name: "",
          price: 0,
          stock: false,
        }}
        onSubmit={(values) => {
          axios({
            method: "post",
            url: "http://127.0.0.1:8989/product/add",
            data: values,
          }).then(() => {
            alert("Product Added");
            navigate("/products");
          });
        }}
      >
        {
          <Form>
            <dl>
              <dt>Product ID:</dt>
              <dd>
                <Field type="number" onKeyUp={VerifyId} name="productId" />
              </dd>
              <dd className="text-danger">{idError}</dd>
              <dt>Product Name:</dt>
              <dd>
                <Field type="text" name="name" />
              </dd>
              <dt>Product Price:</dt>
              <dd>
                <Field type="number" name="price" />
              </dd>
              <dt>Product Stock:</dt>
              <dd>
                <Field type="checkbox" name="stock" /> Available
              </dd>
            </dl>
            <button className="btn btn-primary">Add Product</button>
            <Link className="ms-2" to="/products">
              View Products
            </Link>
          </Form>
        }
      </Formik>
    </div>
  );
}
