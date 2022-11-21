import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function TaskItem(props){

 


return(
    <div id={props.id} className="task-item">
            <div onClick={props.checkItem} className="checkbox">
            {props.isChecked && <FontAwesomeIcon className="check" icon={faCheck}/>}
            </div>
            {props.isChecked ?
                <p className="checked-task">{props.text}</p>:
                <p className="unchecked-task">{props.text}</p>
            }
        </div>
    )
}