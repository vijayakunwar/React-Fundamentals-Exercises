//import PropTypes from "prop-types";

const DeleteLastItem = ({deleteLastItem,btnDisable})=>{
   // const noItemsFound = () => items.length === 0;
    const removeLastItem = (event) => {
        deleteLastItem();
      };

    return(
        <button onClick={removeLastItem} disabled ={btnDisable} >
        Delete Last Item
      </button>
    );


    
      


}
export default DeleteLastItem