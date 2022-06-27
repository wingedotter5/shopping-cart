import { useContext } from "react";
import { CartContext } from "../CartContext";
import classes from "../styles/ProductItem.module.css";

const ProductItem = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  let count = 0;
  const cartItem = cartItems.find(
    (cartItem) => cartItem.product.id === product.id
  );
  if (cartItem) count = cartItem.quantity;

  const quantityChangeHandler = (e) => {
    addToCart(product, parseInt(e.target.value));
  };

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
        {count === 0 ? (
          <button
            className={classes.cartButton}
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        ) : (
          <div className={classes.advancedButton}>
            <button onClick={() => removeFromCart(product)}>-</button>
            <input
              type="number"
              value={count}
              onChange={quantityChangeHandler}
            />
            <button onClick={() => addToCart(product, count + 1)}>+</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
