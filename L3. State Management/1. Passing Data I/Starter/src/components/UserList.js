const UserList =({profile,user,movie})=>{
    return(
       
        <div>
            { profile.map( (profile) =>{
                const userName = user[profile.userID].name;
                const favMovie = movie[profile.favoriteMovieID].name;

                return <li key = {profile.id}>
                    {`${userName} favorite movie is "${favMovie}".`}
                    
                </li> 
                
                })
            }
        </div>
        

    );

};

export default UserList;