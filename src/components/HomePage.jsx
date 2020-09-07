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

    

    return ( 
        <Fragment>

            <HeroImage/>
            <SearchBar/>
            <Grid/>
            <MovieThumb/>
            <Spinner/>
            <LoadMoreBtn/>

        </Fragment>
     );
}
 
export default HomePage;