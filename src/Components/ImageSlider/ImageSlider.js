import React from 'react';
import '../ImageSlider/imageslider.css';

const ImageSlider = ({ index, image }) => {
    return (
        <img key={index} src={image} className="sliderimg" alt={`img-${index}`} />
    );
}

export default ImageSlider;
