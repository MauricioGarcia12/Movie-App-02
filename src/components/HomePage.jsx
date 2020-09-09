import React,{Fragment,useState} from 'react'
import {
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
} from '../config';

//Importing Components
import Grid from './elements/Grid'
import HeroImage from './elements/HeroImage'
import LoadMoreBtn from './elements/LoadMoreBtn'
import MovieThumb from './elements/MovieThumb'
import SearchBar from './elements/SearchBar'
import Spinner from './elements/Spinner'

//custom hook
import {useHomeFetch} from './hooks/useHomeFetch';

import NoImage from './images/no_image.jpg';


const HomePage = () => {

    const [{state,loading,error},fetchMovies] = useHomeFetch();
    const [searchTerm, setSearchTerm] = useState('');

    const {movies,currentPage,TotalPages,heroImage}=state;


    if(error) return <div>Something Went Wrong...</div>
    if(!movies[0]) return <Spinner/>

    return ( 
        <Fragment>

            <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
            title={heroImage.original_title}
            text={heroImage.overview}
            />
            <SearchBar/>
            <Grid
            header={searchTerm ? 'Search Result':'Popular Movies'}
            >
                {
                movies.map( movie =>(
                    <MovieThumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                            ?
                            `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                        }
                        movieId={movie.id}
                        movieName={movie.original_title}
                    />
                ))
            }

            </Grid>
            <Spinner/>
            <LoadMoreBtn/>

        </Fragment>
     );
}
 
export default HomePage;