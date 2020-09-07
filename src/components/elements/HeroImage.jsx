import React from 'react';
import {StyledHeroImage, } from '../styles/StyledHeroImage'
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
 
export default HeroImage;