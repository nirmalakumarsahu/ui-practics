import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ShopperCategory } from "../shopper-category/shopper-category";
import { ShopperDetails } from "../shopper-details/shopper-details";
import { ShopperHome } from "../shopper-home/shopper-home";
import { ShopperRegister } from "../shopper-register/shopper-register";
import { ShopperLogin } from "../shopper-login/shopper-login";
import { ShopperInvalid } from "../shopper-invalid/shopper-invalid";
import { CrudIndex } from "../../crud-operations/crud-index";
import { CrudCreate } from "../../crud-operations/crud-create";
import { CrudDetails } from "../../crud-operations/crud-details";
import { CrudEdit } from "../../crud-operations/crud-edit";

export function ShopperIndex() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header className="d-flex p-2 justify-content-between">
          <h2 className="">Shopper.</h2>
          <nav className="d-flex">
            <div className="me-3">
              <Link className="btn" to="home">
                Home
              </Link>
            </div>
            <div className="me-3">
              <Link className="btn" to="products">
                Products
              </Link>
            </div>
            <div className="me-3">
              <Link className="btn" to="register">
                Register
              </Link>
            </div>
            <div className="me-3">
              <Link className="btn" to="login">
                Login
              </Link>
            </div>
            <div className="me-3">
              <Link className="btn" to="category/men's clothing">
                Men's Fashion
              </Link>
            </div>
            <div className="me-3">
              <Link className="btn" to="category/women's clothing">
                Women's Fashion
              </Link>
            </div>
            <div className="me-3">
              <Link className="btn" to="category/jewelery">
                Jewellery
              </Link>
            </div>
            <div className="me-3">
              <Link className="btn" to="category/electronics">
                Electronics
              </Link>
            </div>
          </nav>
          <div>
            <span className="bi bi-search me-3"></span>
            <span className="bi bi-person me-3"></span>
            <span className="bi bi-heart me-3"></span>
            <span className="bi bi-cart4 me-3"></span>
          </div>
        </header>
        <div className="text-center text-white bg-dark mt-3 p-2">
          ⚡️ Happy Holiday Deals on Everything ⚡️
        </div>
        <div className="mt-3">
          <Routes>
            <Route path="/" element={<ShopperHome />} />
            <Route path="/home" element={<ShopperHome />} />
            <Route path="/category/:catname" element={<ShopperCategory />} />
            <Route path="details/:id" element={<ShopperDetails />} />
            <Route path="register" element={<ShopperRegister />} />
            <Route path="login" element={<ShopperLogin />} />
            <Route path="invalid" element={<ShopperInvalid />} />
            <Route path="/products" element={<CrudIndex />} />
            <Route path="new-product" element={<CrudCreate />} />
            <Route path="crud-details/:id" element={<CrudDetails />} />
            <Route path="crud-edit/:id" element={<CrudEdit />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
