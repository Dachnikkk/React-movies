function Movie(props) {
    const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster
    } = props;

    return(
        <div className="card" id={id}>
            <div className="card-image waves-effect waves-block waves-light">
                {
                    poster === 'N/A' ? <img className="activator" src={`https://via.placeholder.com/568x850?text=${title}`} alt={title}/> : <img className="activator" src={poster} alt={title}/>
                }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right">{type}</i></span>
                <p><span>{year}</span></p>
            </div>
        </div>
    )
}

export default Movie