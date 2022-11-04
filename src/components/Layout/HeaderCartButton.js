import React, { useContext } from "react";
import styles from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";
import CartModalContext from "../../store/cart-modal-context";
import CartContext from "../../store/cart-context";

const HeaderCartButton = () => {
  const cartModalCtx = useContext(CartModalContext);
  const cartCtx = useContext(CartContext);

  const numOfCartItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={cartModalCtx.onCartModalChanged}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
