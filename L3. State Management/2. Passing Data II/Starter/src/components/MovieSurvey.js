import MovieCard from "./MovieCard";

const MovieSurvey =({movieWatchedByUser,users,movies})=>{

    const movieCards = Object.keys(movies).map((id) => (
        <MovieCard
            key={id}
            users={users}
            userThatLikeMovie ={movieWatchedByUser[id]}
            movies={movies[id]}      
        />
    ));
            

    return <ul>
        {movieCards}
    </ul>;

};

export default MovieSurvey;