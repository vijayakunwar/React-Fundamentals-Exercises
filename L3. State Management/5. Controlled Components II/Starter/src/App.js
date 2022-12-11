import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ShoppingForm from "./Components/ShoppingForm";
import DeleteLastItem from "./Components/DeleteLastItem";

const App = () => {
  //  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  /* const handleChange = (event) => {
    setValue(event.target.value);
  }; */
  //handle callback function to retrieve data from the child compo 
  const handleAddItem = (item) => {

    setItems([...items, item]);

  }

  /* const addItem = (event) => {
    event.preventDefault();
    setItems([...items, value]);
    setValue("");
  }; */

  const handleDeleteLastItem = (event) => {
    setItems(items.slice(0, -1));
  };

  // const inputIsEmpty = () => value === "";

   const noItemsFound = () => items.length === 0;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>Shopping List</h2>

      <DeleteLastItem deleteLastItem ={handleDeleteLastItem} btnDisable ={noItemsFound()}/>
      {/* <button onClick={handleDeleteLastItem} disabled={noItemsFound()}>
        Delete Last Item
      </button> */}

      <ShoppingForm addListItem={handleAddItem} items ={items}  />


    </div>
  );
};

export default App;
