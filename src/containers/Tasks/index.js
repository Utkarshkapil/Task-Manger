import React , { useState  } from "react";
import Task from "../../components/Task";
import Modal from "../../components/Modal";
import styles from "./Tasks.module.css";
const Tasks = ( props ) => {
    const [ tasks , updateTasks ] = useState([]);
    const [ show , setShowModal ] = useState(false);
    const [ inputText , setInputText ] = useState("");
    const addTask = () => {
        let currentTasks = [...tasks];
        currentTasks.push(inputText);
        updateTasks(currentTasks);
        setShowModal(false);
        setInputText("");
    }
    const deleteTask = (index) => {
        let currentTasks = [...tasks];
        currentTasks.splice(index,1);
        updateTasks( currentTasks );
    }
    const getTasks = () => {
     return tasks.map( (task , index) => {
        return <Task key={index} name={task} delete={ () => deleteTask(index)  } />
     } )
    }
    const showModal = () => {
      setShowModal(true);
    }
    const hideModal = () => {
        setInputText("");
       setShowModal(false);
    }
    return (
       <div className={ styles.container }>
           <Modal show={show} >
            <div className={ styles.modalContainer } >
               <input type="text" value={inputText} onChange = { (evt) => setInputText(evt.target.value) }  />
               <div className={ styles.modalActions }>
                  <button disabled={ inputText.trim() === "" } onClick={ addTask } > Add </button>
                  <button onClick={hideModal}> Close </button>
               </div>
            </div>
        </Modal>
        <div className={ styles.header }>
          <h1> List of Tasks </h1>
           <button onClick={ showModal }>  Add Task </button>
        </div>
        <div className={ styles.tasksContainer  }>
         {  tasks.length > 0 ? (
           <div className={ styles.tasksContainer } >
             { getTasks() }    
           </div>
         )  : (
         <h2>  No Tasks for today </h2>
         )  }
        </div>
       </div>
   )
}
export default Tasks;