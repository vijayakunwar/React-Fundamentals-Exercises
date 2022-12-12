import User from "./User";
import { useState } from "react";
import PropTypes from "prop-types"

const UserList = ({ users }) => {
    const [showGamesPlay, setShowGamesPlay] = useState(true);

    const toggleGamesPlayedButton = () => {
        setShowGamesPlay(!showGamesPlay);

    }


    const gamesPlayButton = (
        <div>
            <button onClick={toggleGamesPlayedButton}>{showGamesPlay ? "Hide" : "Show"} the number of game played</button>
        </div>

    );


    return (
        <div>
            {users && users.length > 0 ? gamesPlayButton : ""}
            <ol >
                {/* username && username.map  is used to  remove TypeError problem  are we are getting blank array*/}
                {/** https://stackoverflow.com/questions/69080597/%C3%97-typeerror-cannot-read-properties-of-undefined-reading-map*/}
                {/* {users && users.map((uname, index) => (
                    <User key={index} user={uname} showGamesPlay={showGamesPlay} />

                ))} */}

                { users.map((user)=>(
                    <User
                    key ={user.username}
                    user ={user}
                    showGamesPlay = {showGamesPlay}
                    />

                ))}

            </ol>

        </div>
    );
};
UserList.propTypes = {
    users: PropTypes.array.isRequired,
  };
export default UserList;