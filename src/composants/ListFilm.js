import MovieCard from "./MovieCard"

export const ListFilm = ({ users }) => {
   
    return (
        <div style={{display: "flex"}}>
            {
                users.length>0 && users.map((user, key) => 
            <div key={key}>
                <MovieCard user={user}/>
            </div>)
            }
        </div>
    )
}