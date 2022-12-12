import UserList from "./UserList";
import { useState } from "react";
const UserForm = ({ addUser, users }) => {

      /*  const [value, setValue] = useState(""); */

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        username: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        addUser(user);
        // setValue("");
    };

  

    const handleInputChange = (event) => {
        /* setValue(event.target.value); */
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };


    const inputIsEmpty = () => user === "";



    return (
        <div>
            <h1>New User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name ="firstName"
                        placeholder="Enter First Name"
                        value={user.firstName}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter last name"
                        value ={user.lastName}
                        onChange={handleInputChange}
                    />
                    
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        value ={user.username}
                        onChange={handleInputChange}
                    />

                </div>
                <button disabled={inputIsEmpty()}>Add</button>

            </form>
            <h1> User List</h1>

            {/*  <UserList users={users} /> */}
        </div>


    );
}
export default UserForm;