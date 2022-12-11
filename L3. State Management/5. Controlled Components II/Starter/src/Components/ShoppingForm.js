import { useState } from "react";
import ItemList from "./ItemList";
const ShoppingForm = ({ addListItem, items }) => {

    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const addItem = (event) => {
        event.preventDefault();
        addListItem(value);
        setValue("");
    };
    const inputIsEmpty = () => value === "";

    /* const Item = ({ items }) => {
      return <li>{item}</li>;
    }; */


    return (
        <div>
            <form onSubmit={addItem}>
                <input
                    type="text"
                    placeholder="Enter New Item"
                    value={value}
                    onChange={handleChange}
                />
                <button disabled={inputIsEmpty()}>Add</button>
            </form>
            <ItemList items ={items}/>
        </div>

    );

}
export default ShoppingForm;