import React from "react";
import "./image-link-form.styles.scss";

const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
  return (
    <div className='detect-form-container'>
      <p className='form-text'>{"Input an image link to detect the faces!"}</p>
      <div>
        <input className = 'input' type="text" onChange={onInputChange}/>
        <button className ='button' onClick={onButtonSubmit}>Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
