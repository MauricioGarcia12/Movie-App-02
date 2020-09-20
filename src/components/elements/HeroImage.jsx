import React from 'react';
import {StyledHeroImage, } from '../styles/StyledHeroImage'
import PropTypes from 'prop-types';

const HeroImage = ({image,title,text}) => {
    return ( 
        <StyledHeroImage image={image}>
            <div className="heroimage-content">
                <div className="heroimage-text">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </StyledHeroImage>

     );
}

HeroImage.propTypes ={
    image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired
}
 
export default HeroImage;