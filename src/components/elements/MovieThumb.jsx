import React from 'react'
import {StyledMovieThumb} from '../styles/StyledMovieThumb'
const MovieThumb = ({image,movieID,clickable,movieName}) => {
    return ( 
        <StyledMovieThumb>
            {
                clickable 
                ?(<img className="clickable" src={image} alt="moviethumb"/>)
                
                :(<img src={image} alt="moviethumb"/>)

            }
            <h2 className="">{movieName}</h2>
        </StyledMovieThumb>
     );
}
 
export default MovieThumb;