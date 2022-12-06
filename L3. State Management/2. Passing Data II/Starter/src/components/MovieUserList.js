const MovieUserList =({userThatLikeMovie, allUsers})=>{

    
    if(!userThatLikeMovie || userThatLikeMovie.length === 0){
        return <p>No liked yet</p>
    }
    const userListForEachMovie =userThatLikeMovie.map((id) => (
        <li key = {id}>
            <p>{allUsers[id].name}</p>
        </li>
    ));
    

    return <ul>{userListForEachMovie}</ul>
};



export default MovieUserList;