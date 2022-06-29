import { Link } from "react-router-dom";
import classes from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <Link to="/">
        <h1>FakeStore</h1>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
    </div>
  );
};

export default NavBar;
