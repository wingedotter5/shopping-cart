import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ProductItem from "../components/ProductItem";
import classes from "../styles/Products.module.css";
import Cart from "../components/Cart";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <NavBar />
      <div className={classes.container}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <Cart />
    </>
  );
};

export default Products;
