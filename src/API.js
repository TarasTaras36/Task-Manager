import storage from "./storage";
import { v4 as uuidv4 } from "uuid";

class API {
 
  static replaceUserData() {

    const loggedUser = storage.get("currentUser");
    const userAccounts = storage.get("users");
   
        const ids = userAccounts.map((el) => el.id);
        const elementIndex = ids.indexOf(loggedUser.id);
        if (elementIndex !== -1) {
          userAccounts[elementIndex] = loggedUser;
        }

        storage.set("users", userAccounts);
    }

  static signUp(user) {
    const { name, password } = user;
    if (!user) {
      return;
    }
    const userAccounts = storage.get("users") || [];
    const isUserExist = userAccounts.find((user) => user.name === name);

    if (isUserExist) return true;

    const newUser = {
      id: uuidv4(),
      name: name,
      password: password,
      tasks: [],
    };

    userAccounts.push(newUser);

    storage.set("users", userAccounts);

    alert("You account has been created, please log in");

    return newUser;
  }

  static signIn(user) {
    const { name, password } = user;
    const userAccounts = storage.get("users") || [];

    const userExist = userAccounts.find(
      (user) => user.name === name && user.password === password
    );

    if (!userExist) {
      
      return false;
    }

    storage.set("currentUser", userExist);

    storage.set("loggedIn", "true");

    return userExist;
  }

  static addTask(newTask) {
    const loggedUser = storage.get("currentUser");
    const userAccounts = storage.get("users");

    loggedUser.tasks.unshift(newTask);

    storage.set("currentUser", loggedUser);

    userAccounts.forEach((el) => {
      if (el.id === loggedUser.id) {
        el.tasks.unshift(newTask);
      }
    });

    storage.set("users", userAccounts);

    return newTask;
  }

  static deleteTask(taskId) {
    const loggedUser = storage.get("currentUser");
    const userAccounts = storage.get("users");

    loggedUser.tasks = loggedUser.tasks.filter((item) => item.id !== taskId);

    storage.set("currentUser", loggedUser);

  

  this.replaceUserData()

    return taskId;
  }

  static editTask = (editedTask, taskId) => {
    const loggedUser = storage.get("currentUser");

   

    loggedUser.tasks.map((item) => {
      if (taskId == item.id) {
        item.task = editedTask;
      }
    });

    storage.set("currentUser", loggedUser);

    this.replaceUserData()

    return { editedTask, taskId };
  };

  static restartUserSetion() {
    const loggedUser = storage.get("currentUser");

    return loggedUser.tasks;
  }
}

export default API;
