import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const Navbar = (props: any) => {
  const name = ["navbar", " navbar-expand-md", "bg-dark", "navbar-dark"];
  let name2 = name.join(" ");

  const selector = useSelector((store) => store);
  console.log(selector);
  return (
    <React.Fragment>
      <nav className={`${name2}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/laptop">
              Laptop
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mobile">
              Mobile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <ShoppingCartOutlined />
              <span>{props.cartQuantity}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
