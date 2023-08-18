import styles from "./movieDescription.module.css"

const MovieDesc = ({movies}) => {
    const movie = movies;
    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.movieModal}>
                <div className={styles.movieInfo}>
                    <img src="https://placeholder.com/400" alt="{movie.Title}" />
                    <button className={styles.btn}>X</button>
                    
                </div>
            </div>
        </div>
    )
}

export default MovieDesc;