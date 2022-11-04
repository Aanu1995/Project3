import React from "react";

const CartModalContext = React.createContext({
  value: false,
  onCartModalChanged: () => {},
});

export default CartModalContext;
