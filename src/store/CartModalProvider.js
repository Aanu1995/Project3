import React, { useState } from "react";
import CartModalContext from "./cart-modal-context";

const CartModalProvider = (props) => {
  const [cartModalState, setCartModalState] = useState(false);

  const onCartModalChanged = () => {
    setCartModalState((state) => {
      return !state;
    });
  };

  const data = {
    value: cartModalState,
    onCartModalChanged: onCartModalChanged,
  };
  return (
    <CartModalContext.Provider value={data}>
      {props.children}
    </CartModalContext.Provider>
  );
};

export default CartModalProvider;
