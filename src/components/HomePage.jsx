import React,{Fragment,useState,useEffect} from 'react'
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

const HomePage = () => {

    const [{state,loading,error},fetchMovies] = useHomeFetch();
    console.log(state);

    if(error) return <div>Something Went Wrong...</div>
    if(!state.movies[0]) return <Spinner/>

    return ( 
        <Fragment>

            <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
            title={state.heroImage.original_title}
            text={state.heroImage.overview}
            />
            <SearchBar/>
            <Grid/>
            <MovieThumb/>
            <Spinner/>
            <LoadMoreBtn/>

        </Fragment>
     );
}
 
export default HomePage;