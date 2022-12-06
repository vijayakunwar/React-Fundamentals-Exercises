import MovieUserList from "./MovieUserList";

const MovieCard = ({users,userThatLikeMovie, movies}) => {
    return (<li key={movies.id}>
        <h2>{movies.name}</h2>
        <h3>Below users like this movie:</h3>
        <MovieUserList 
            
            userThatLikeMovie ={userThatLikeMovie}
            allUsers = {users}
        />
        </li>);
};

export default MovieCard;