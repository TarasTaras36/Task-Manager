import React, { useState} from "react";

import { ReactComponent as DeleteIcon } from "../../assets/trash.svg";
import { ReactComponent as EditIcon } from "../../assets/pencil.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserTask } from "../../redux/user/user.actions";

import "./task.styles.scss";

const Task = ({ task, id }) => {
  const [newTask, setTask] = useState();

  const { tasks } = useSelector((state) => state.userData);

  const dispatch = useDispatch();

 
  const editTask = (task) => {



    document.getElementById(task).focus();
  };

  return (
    <div className="task">
      <textarea
        id={id}
        className={task}
        type="text-area"
        defaultValue={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <div className="edit-icon" onClick={() => editTask(id)}>
        <EditIcon />
      </div>

      <div className="delete-icon" onClick={() => dispatch(deleteUserTask(id))}>
        <DeleteIcon />
      </div>
    </div>
  );
};

export default Task;
