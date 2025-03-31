import { Formik, Form, Field } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export function ShopperLogin() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();

  return (
    <div>
      <h2>User Login</h2>
      <Formik
        initialValues={{
          userId: "",
          password: "",
        }}
        onSubmit={(values) => {
          axios({
            method: "GET",
            url: "http://localhost:5000/users",
          }).then((response) => {
            for (var user of response.data) {
              if (
                user.userId === values.userId &&
                user.password === values.password
              ) {
                setCookie("userId", values.userId);
                navigate("/home");
                break;
              } else {
                navigate("/invalid");
              }
            }
          });
        }}
      >
        <Form>
          <dl>
            <dt>User Id:</dt>
            <dd>
              <Field type="text" name="userId" />
            </dd>
            <dt>Password:</dt>
            <dd>
              <Field type="password" name="password" />
            </dd>
          </dl>
          <button className="btn btn-success">Login</button>
          <div>
            <Link to="/register">New user? Register</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
