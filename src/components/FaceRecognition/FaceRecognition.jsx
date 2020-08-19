import React from "react";
import "./FaceRecognition.styles.scss";

const FaceRecognition = ( {imageUrl, box} ) => {
  return (
    <div className='image-container'>
      <figure className='absolute'>
        <img className='image' id='inputImage' src={imageUrl} alt="Face detection" />
        <div className='bounding-box' style={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}}></div>
      </figure>
    </div>
  );
};

export default FaceRecognition;
