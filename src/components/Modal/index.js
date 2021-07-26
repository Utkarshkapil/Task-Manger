import React from "react";
import styles from "./Modal.module.css";
const Modal = ({ handleClose, show, children }) => {
    const classes = show ? [styles.modal,styles.displayBlock] : [styles.modal , styles.displayNone];
  
    return (
      <div className={classes.join(" ")}>
        <section className={ styles.modalMain }>
          {children}
          
        </section>
      </div>
    );
  };
export default Modal;