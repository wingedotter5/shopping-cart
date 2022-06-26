import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ProductItem from "../components/ProductItem";
import classes from "../styles/Products.module.css";

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
      <h1>products page</h1>
      <div className={classes.container}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
