import React, { useState } from "react";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/image-link-form/image-link-form";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

import Clarifai from "clarifai";
import Particles from "react-particles-js";
import "./App.css";

const app = new Clarifai.App({ apiKey: "e53f5684461a45728201ae16aa2d2468" });
const options = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
  },
};

const App = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState({});


  const calculateFaceLocation = (boundingBoxData) => {
    const clarifaiFace =
      boundingBoxData.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage"); //Gets the image that is being displayed in FaceRecognition component
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const displayFaceBox = (box) => {
    setBox(box);
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onButtonSubmit = () => {
    setImageUrl(input);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((response) => displayFaceBox(calculateFaceLocation(response)))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Particles className="particles" params={options} />
        <div>
          <Logo />
          <ImageLinkForm
          onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
          />
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
    </div>
  );
};

export default App;
