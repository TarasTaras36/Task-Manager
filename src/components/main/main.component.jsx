import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import TaskList from "../task-list/task-list.component";
import RecivedTasks from '../recived-tasks/recived-tasks.component'
import './main.styles.scss'


const Main = () => {
  const { userLoggedIn, currentUser } = useSelector((state) => state.userData);

  

  return (
    <React.Fragment>
       {!userLoggedIn && <Redirect to="sign-in" />}
      <div className='task-manager'>
        <h1 className='task-manager-title'>Hello <span> {currentUser.name} </span></h1>
        <div className='task-boards'>
        <TaskList/>
        <RecivedTasks/>
        </div>
       
      </div>

     
    </React.Fragment>
  );
};

export default Main;