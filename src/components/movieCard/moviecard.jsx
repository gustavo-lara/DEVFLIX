import styles from "./moviecard.module.css";

const Moviecard = ({movies}) => {
    const movie = movies;
    return(
        <div className={styles.movie}>
            <div> 
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster != "N/A" ? movie.Poster : "https://via.placehoder.com/400"} alt={movie.Title} />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
} 
export default Moviecard;