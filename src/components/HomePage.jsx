import React,{Fragment,useState} from 'react'
import {
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE,
    POPULAR_BASE_URL,
    SEARCH_BASE_URL
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

    const {movies,currentPage,heroImage,totalPages}=state;

    const searchMovies = search => {
        const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;
    
        setSearchTerm(search);
        fetchMovies(endpoint);
    
      }

   const  loadMoreMovies = () => {
        const { searchTerm, currentPage } = state;
        //obteniendo 
        const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage +1}`;
        const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;
    
        const endpoint = searchTerm ? searchEndpoint : popularEndpoint;
    
        fetchMovies(endpoint);
      };
    

    if(error) return <div>Something Went Wrong...</div>
    if(!movies[0]) return <Spinner/>

    return ( 
        <Fragment>
            {!searchTerm &&(
                <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
                title={heroImage.original_title}
                text={heroImage.overview}
                />
            )}
            

            <SearchBar
                callback={searchMovies}
            />
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
            {//si loading es true carga el spinner
            loading && <Spinner /> 
            }

            {currentPage < totalPages && !loading && (
                <LoadMoreBtn 
                text="Load More" 
                callback={loadMoreMovies} 
                />
                )
             }
        </Fragment>
     );
}
 
export default HomePage;