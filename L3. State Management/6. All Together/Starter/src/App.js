import logo from "./logo.svg";
import "./App.css";
import UserForm from "./components/UserForm";
import Users from "./components/UserList";
import { useState } from "react";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  

  const createUser = (user) => {
    user.numGamesPlayed = 0;
    //add numGamesPlayed to user
    setUsers([...users, user]);  
    //console.log(user);
  };
  
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <UserForm addUser={createUser} users = {users} />
      <UserList users = {users} />
    </div>
  );
};

export default App;
