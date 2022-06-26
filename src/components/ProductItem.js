import classes from "../styles/ProductItem.module.css";

const ProductItem = ({ product }) => {
  return (
    <div className={classes.container}>
      <div className={classes.productImage}>
        <img src={product.image} alt="product" />
      </div>
      <h3>{product.title}</h3>
      <div className={classes.footer}>
        <div className={classes.price}>
          <div className="font-secondary">Price</div>
          <div>{`$${product.price}`}</div>
        </div>
        <button className={classes.cartButton}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
