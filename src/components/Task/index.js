import React from "react";
import styles from "./Task.module.css";
import cancelIcon from "../../static/images/cancel.png";
const Task = ( props ) => {
  return (
      <div className={styles.container}>
          <h3> {props.name} </h3>
          <img src={ cancelIcon } width="24" height="24" onClick={ props.delete } />
      </div>
  )
}
export default Task;