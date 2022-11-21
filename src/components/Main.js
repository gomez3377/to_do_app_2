import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "nanoid";

import TaskItem from "./TaskItem";


export default function Main() {
  const [tasks, setTasks] = React.useState([]);

  function checkTask(currentId) {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === currentId
          ? {
              ...prevTask,
              isChecked: !prevTask.isChecked,
            }
          : prevTask
      )
    );
  }

  function addTask() {
    const newTask = {
      id: nanoid(),
      taskText: "New Task",
      isChecked: false,
      editTaskTextOn: false,
    };
    setTasks((prevTasks) => [newTask, ...tasks]);
  }

  function changeToTextBox(currentId) {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === currentId
          ? {
              ...prevTask,
              editTaskTextOn: !prevTask.editTaskTextOn,
            }
          : prevTask
      )
    );
  }

  function updateText(currentId, text) {
    setTasks((oldTasks) =>
      oldTasks.map((oldTask) => {
        return oldTask.id === currentId
          ? {
              ...oldTask,
              taskText: text,
              editTaskTextOn: !oldTask.editTaskTextOn,
            }
          : oldTask;
      })
    );
  }


    const taskElements = tasks.map((task) => (
      <TaskItem
        id={task.id}
        key={task.id}
        checkItem={() => checkTask(task.id)}
        text={task.taskText}
        isChecked={task.isChecked}
        updateText={()=> updateText()}
        changeToTextBox={() => changeToTextBox(task.id)}
        editTaskText ={task.editTaskTextOn}
      />
    ));

  //   let displayTaskElements
  //        if(!props.isChecked) {
  //             if(props.editTaskText){
  //                displayTaskElements = <input
  //                value={props.text}
  //                className="task-input-box"
  //                type="text"
  //                name="task"
  //                onChange={() =>props.updateText(props.id)}/>
  //             }else{
  //                 displayTaskElements = <p className="unchecked-task" onClick={props.changeToTextBox} >{props.text}</p>

  //             }

  //        }else{

  //            displayTaskElements = <p className="checked-task">{props.text}</p>
  //        }

  //         console.log(props.text)

  {
    /* <div id={props.id} className="task-item">
            <div onClick={props.checkItem} className="checkbox">
            {props.isChecked && <FontAwesomeIcon className="check" icon={faCheck}/>}
            </div>
            {displayTaskElements}
        </div> */
  }

  return (
    <main className="list-section">
      <h1>The Office</h1>
      <div className="checklist">{taskElements}</div>
      <button className="add-task-button" onClick={addTask}>
        <FontAwesomeIcon icon={faPlus} />
        <p>Add Task</p>
      </button>
    </main>
  );
}
