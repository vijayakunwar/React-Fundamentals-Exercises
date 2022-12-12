const User = ({ user , showGamesPlay}) => {
    const numOfGamePlayed = 0;
    return (
        <li>
            <span>Username: </span>{user.username}
            <br/>
            <span>Number of game played: {showGamesPlay ? user.numGamesPlayed : "*"}</span>
           {/*  <span>Number of game played: {showGamesPlay ? numOfGamePlayed : "*"}</span> */}
                    
        </li>

    );
}
export default User;