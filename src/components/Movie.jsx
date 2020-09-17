import React,{Fragment} from 'react'
import Navigation from './elements/Navigation'
import MovieInfo from './elements/MovieInfo'
import Actor from './elements/Actor'
import Grid from './elements/Grid'
import MovieInfoBar from './elements/MovieInfoBar'
import Spinner from './elements/Spinner'
import useMovieFetch from './hooks/useMovieFetch';


const Movie = ({movieId}) => {
    const [movie,loading,error]= useMovieFetch(movieId)
    console.log(movie)

    return ( 
        <Fragment>
            <Navigation/>
            <MovieInfo/>
            <MovieInfoBar/>
            <Grid>
                <Actor/>
            </Grid>
            <Spinner/>
        </Fragment>
     );
}
 
export default Movie;