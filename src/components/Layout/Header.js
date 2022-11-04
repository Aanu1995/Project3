import React from "react";
import styles from "./Header.module.css";

import mealImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles.mainImage}>
        <img src={mealImage} alt="A table full of delicious meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
