import React from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartModalProvider from "./store/CartModalProvider";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartModalProvider>
      <CartProvider>
        <Cart />
        <Header />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </CartModalProvider>
  );
}

export default App;
