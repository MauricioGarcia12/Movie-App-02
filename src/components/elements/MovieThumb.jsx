import React from 'react'
import {StyledMovieThumb} from '../styles/StyledMovieThumb'
import {Link} from '@reach/router'
import PropTypes from 'prop-types';

const MovieThumb = ({image,movieId,clickable,movieName}) => {
    return ( 
        <StyledMovieThumb>
            {
                clickable 
                ?
                <Link to ={`/${movieId}`}>
                    <img className="clickable" src={image} alt="moviethumb"/>

                </Link>
                
                :
                (<img src={image} alt="moviethumb"/>)

            }
            <h2 className="">{movieName}</h2>
        </StyledMovieThumb>
     );
}
 
MovieThumb.propTypes ={
    image:PropTypes.string,
    movieId:PropTypes.number,
    clickable:PropTypes.bool
}
export default MovieThumb;