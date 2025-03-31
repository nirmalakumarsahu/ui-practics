import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function CrudEdit() {
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
      <h2>Edit Product</h2>
      <Formik
        initialValues={{
          productId: product.productId,
          name: product.name,
          price: product.price,
          stock: product.stock,
        }}
      >
        {
          <Form>
            <dl>
              <dt>Name</dt>
              <dd>
                <Field type="text" name="name" value={product.name}></Field>
              </dd>
              <dt>Price</dt>
              <dd>
                <Field type="number" name="price" value={product.price}></Field>
              </dd>
              <dt>Stock</dt>
              <dd>
                <Field
                  type="checkbox"
                  name="stock"
                  checked={product.stock}
                ></Field>
                Available
              </dd>
            </dl>
            <button className="btn btn-success">Edit</button>
            <div>
              <Link to="/products">Back to Products</Link>
            </div>
          </Form>
        }
      </Formik>
    </div>
  );
}
