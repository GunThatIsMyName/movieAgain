import PropTypes from 'prop-types';
import {Link} from"react-router-dom"

function Movie({title,summary,poster,genres,id}){
    return (
        <Link to={{
            pathname:"/movie-detail",
            state:{
                title,
                summary,
                poster,
                genres,id
            }
        }}>
            <div id={id}>
                <h1>{title}</h1>
                <p>{summary}</p>
                <img src={poster} alt={title}/>
                {genres.map((genre,index)=> <li key={index}>{genre}</li>)}
            </div>
        </Link>
    )
}

Movie.propTypes={
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired

}
export default Movie;