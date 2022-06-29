import { useContext, useState } from "react";
import { CartContext } from "../CartContext";

import classes from "../styles/Cart.module.css";
import cartIcon from "../assets/shopping-cart.svg";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.product.price) * item.quantity,
    0
  );

  return (
    <>
      {showCart ? (
        <div className={classes.backdrop}>
          <div className={classes.cart}>
            {cartItems.length > 0 ? (
              <>
                <ul>
                  {cartItems.map((cartItem) => (
                    <li key={cartItem.product.id}>
                      <CartItem cartItem={cartItem} />
                    </li>
                  ))}
                </ul>
                {cartItems.length > 0 && (
                  <div className={classes.totalPrice}>
                    <h2>Total Price:</h2>
                    <div>{`$${totalPrice.toFixed(2)}`}</div>
                  </div>
                )}
              </>
            ) : (
              <h2>Nothing in the cart</h2>
            )}
            <div className={classes.cartButtons}>
              {cartItems.length > 0 && (
                <button className={classes.checkoutButton}>Checkout</button>
              )}
              <button
                onClick={() => setShowCart(false)}
                className={classes.closeButton}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.cartButton}>
          <span>
            {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </span>
          <button onClick={() => setShowCart(true)}>
            <img src={cartIcon} alt="cart" />
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;

const CartItem = ({ cartItem }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const { title, image, price } = cartItem.product;

  const quantityChangeHandler = (e) => {
    addToCart(cartItem.product, parseInt(e.target.value));
  };

  return (
    <div className={classes.cartItem}>
      <div className={classes.imgContainer}>
        <img src={image} alt={title} />
      </div>
      <div className={classes.info}>
        <h3>{title}</h3>
        <div className={classes.advancedButton}>
          <button onClick={() => removeFromCart(cartItem.product)}>-</button>
          <input
            type="number"
            value={cartItem.quantity}
            onChange={quantityChangeHandler}
          />
          <button
            onClick={() => addToCart(cartItem.product, cartItem.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className={classes.price}>{`$${(
        parseFloat(price) * cartItem.quantity
      ).toFixed(2)}`}</div>
    </div>
  );
};
