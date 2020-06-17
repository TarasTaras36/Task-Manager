import React, { useState } from "react";

import { ReactComponent as DeleteIcon } from "../../assets/trash.svg";
import { ReactComponent as EditIcon } from "../../assets/pencil.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserTask, editUserTask } from "../../redux/user/user.actions";

import "./task.styles.scss";
import { Button, Input } from "@material-ui/core";
import API from "../../API";
import { useEffect } from "react";

const Task = ({ task, id }) => {
  const [edit, setEdit] = useState(false);
  const [newTask, setTask] = useState("");

  const { tasks } = useSelector((state) => state.userData);

  const dispatch = useDispatch();

  return (
    <>
      <div className="task-wrap">
        <div className='task'>
          {edit ? (
            <input
              autoFocus
              className="input-edit"
              type="text"
              defaultValue={task}
              onChange={(e) => setTask(e.target.value)}
            />
          ) : (
            <p onClick={() => setEdit(true)}>{task}</p>
          )}
        </div>

        <div className="task-buttons">
          <div className="edit-icon" onClick={() => setEdit(!edit)}>
            {edit ? (
              <Button
                size="small"
                className="edit-submit"
                onClick={() => newTask && dispatch(editUserTask(newTask, id))}
              >
                Submit
              </Button>
            ) : (
              <EditIcon />
            )}
          </div>

          <div
            className="delete-icon"
            onClick={() => dispatch(deleteUserTask(id))}
          >
            <DeleteIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
