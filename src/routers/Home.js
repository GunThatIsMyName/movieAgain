import React from "react"
import Movie from "../components/Movie"

class Home extends React.Component{
    state={
        isLoading:true
    }
    getMovies=async()=>{
        const Movies = await fetch('https://yts-proxy.nomadcoders1.now.sh/list_movies.json')
        const {data:{movies}} = await Movies.json()
        this.setState({movies,isLoading:false})

    }
    componentDidMount(){
        this.getMovies()
    }
    render(){
        const {isLoading,movies}=this.state
        return(
            <div>
                {isLoading? "LOADING  . . . " : movies.map(movie=>{
                return <Movie key={movie.id} id={movie.id} title={movie.title} summary={movie.summary} poster={movie.small_cover_image} genres={movie.genres}/>
                }   
            )}
            </div>
        )
    }
}

export default Home;