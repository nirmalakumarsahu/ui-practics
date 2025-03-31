import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function ShopperRegister() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [userError, setUserError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((response) => {
      setUsers(response.data);
    });
  });

  function VerifyUserId(e) {
    for (var user of users) {
      if (user.userId === e.target.value) {
        setUserError("User ID already exists");
        return;
      }
    }
  }
  return (
    <div className="container-fluid">
      <h3>Register User</h3>
      <Formik
        initialValues={{
          userId: "",
          userName: "",
          password: "",
          email: "",
          age: "",
          mobile: "",
        }}
        validationSchema={yup.object({
          userId: yup.string().required("User ID is required"),
          userName: yup.string().required("User Name is required"),
          password: yup
            .string()
            .required("Password is required")
            .matches(
              /(?=.*[A-Z])\w{4,15}/,
              "Password 4 to 15 characters with at least one upper case letter"
            ),
          email: yup
            .string()
            .email("Invalid email")
            .required("Email is required"),
          age: yup.number().required("Age is required"),
          mobile: yup
            .string()
            .required("Mobile is required")
            .matches(/\+91\d{10}/, "Invalid mobile +91 and 10 digits"),
        })}
        onSubmit={(values) => {
          console.log("coming to here = ", values);
          axios({
            method: "POST",
            url: "http://localhost:5000/registeruser",
            data: values,
          }).then(() => {
            alert("Register SuccessFully..");
            navigate("/login");
          });
        }}
      >
        {
          <Form>
            <dl>
              <dt>User Id</dt>
              <dd>
                <Field type="text" onKeyUp={VerifyUserId} name="userId" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="userId" />
              </dd>
              <dd>{userError}</dd>
              <dt>User Name</dt>
              <dd>
                <Field type="text" name="userName" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="userName" />
              </dd>
              <dt>Password</dt>
              <dd>
                <Field type="password" name="password" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="password" />
              </dd>
              <dt>Email</dt>
              <dd>
                <Field type="email" name="email" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="email" />
              </dd>
              <dt>Age</dt>
              <dd>
                <Field type="number" name="age" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="age" />
              </dd>
              <dt>Mobile</dt>
              <dd>
                <Field type="text" name="mobile" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="text" />
              </dd>
            </dl>
            <button className="btn btn-primary">Register</button>
            <div>
              <Link to="/login">Existing user? Login</Link>
            </div>
          </Form>
        }
      </Formik>
    </div>
  );
}
