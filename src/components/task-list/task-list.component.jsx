import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserTask, restartUserSetion } from "../../redux/user/user.actions";

import { v4 as uuidv4 } from "uuid";

import "./tasks.styles.scss";
import Task from "../task/task.component";
import { TextField, Button } from "@material-ui/core";

const TaskList = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.userData);

  const useFakeFetching = (someAction) => {
    useEffect(() => {
      dispatch(someAction);
    }, []);
  };

  useFakeFetching(restartUserSetion());

  const newTask = {
    id: uuidv4(),
    task,
  };

  return (
    <div className="task-list">
      <div className="tasks">
        <h1>Your task-list for today </h1>
        {tasks.length == 0 && <h3>No tasks yet</h3>}
        {tasks &&
          tasks.map((el) => <Task key={el.id} id={el.id} task={el.task} />)}
        <div className="create-task">
          <div className='create-task-field'>
          <TextField
            
            id="standard-basic"
            label="Type task"
            onChange={(e) => setTask(e.target.value)}
          />
          </div>

          <div className="create-task-button">
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => task && dispatch(addUserTask(newTask))}
            >
              Create Task
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;