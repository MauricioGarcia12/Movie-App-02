import React,{Fragment} from 'react'
import Grid from './elements/Grid'
import HeroImage from './elements/HeroImage'
import LoadMoreBtn from './elements/LoadMoreBtn'
import MovieThumb from './elements/MovieThumb'
import SearchBar from './elements/SearchBar'
import Spinner from './elements/Spinner'

const HomePage = () => {
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