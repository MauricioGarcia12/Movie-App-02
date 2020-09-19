import React, {Fragment} from 'react'
import Navigation from './elements/Navigation'
import MovieInfo from './elements/MovieInfo'
import Actor from './elements/Actor'
import Grid from './elements/Grid'
import MovieInfoBar from './elements/MovieInfoBar'
import Spinner from './elements/Spinner'
import useMovieFetch from './hooks/useMovieFetch';


const Movie = ({movieId}) => {
    const [movie,loading,error]= useMovieFetch(movieId)
    
    if(error) return <div>Something went wrong</div>
    if(loading) return <Spinner/>

    
    return ( 
        <Fragment>
            <Navigation
            movie={movie.original_title}
            />
            <MovieInfo
            movie={movie}
            />
            <MovieInfoBar
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue}
            />
            <Grid header="Actors">
                {movie.actors.map( actor =>(
                    <Actor
                    key={actor.credit_id}
                    actor={actor}
                    />
                ))}
                
            </Grid>
            <Spinner/>
        </Fragment>
     );
}
 
export default Movie;