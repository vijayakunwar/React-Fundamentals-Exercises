import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";

const App = () => {
  
  const[text, setText] = useState("");

 // manage state using setText

  const handleChange = (event)=>{setText(event.target.value)};

  
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input type="text" placeholder="Say Something" value ={text} onChange ={handleChange}  />
        <p className="echo">Echo:</p>

        <div>
        <p>{text}</p>
        </div>

      </div>
    </div>
  );
};

export default App;
