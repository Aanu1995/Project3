import React, { useContext } from "react";
import ReactDom from "react-dom";
import CartModalContext from "../../store/cart-modal-context";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  const cartModalCtx = useContext(CartModalContext);

  return (
    <div
      className={styles.backdrop}
      onClick={cartModalCtx.onCartModalChanged}
    ></div>
  );
};
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
