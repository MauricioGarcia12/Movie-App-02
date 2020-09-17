import React,{Fragment} from 'react'
import Navigation from './elements/Navigation'
import MovieInfo from './elements/MovieInfo'
import Actor from './elements/Actor'
import Grid from './elements/Grid'
import MovieInfoBar from './elements/MovieInfoBar'
import Spinner from './elements/Spinner'



const Movie = ({movieId}) => {
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