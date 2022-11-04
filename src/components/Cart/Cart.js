import React, { useContext } from "react";
import Modal from "../UI/Modal";

import styles from "./Cart.module.css";
import CartModalContext from "../../store/cart-modal-context";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartModalCtx = useContext(CartModalContext);
  const cartCtx = useContext(CartContext);

  // returns empty element
  if (!cartModalCtx.value) {
    return <React.Fragment />;
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      {...item}
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ));
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;
  return (
    <Modal>
      <ul className={styles.cartItems}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button
          className={styles.buttonAlt}
          onClick={cartModalCtx.onCartModalChanged}
        >
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
