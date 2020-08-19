import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/image-link-form/image-link-form";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import SignIn from "./components/SignInForm/SignIn";
import Register from "./components/Register/Register";

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
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setSignedInStatus] = useState(false);

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

  const onRouteChange = (route) => {
    if (route === 'signout') {
      setSignedInStatus(false);
    } else if (route === 'home') {
      setSignedInStatus(true);
    }
    setRoute(route);
  };

  return (
    <div className="App">
      <Particles className="particles" params={options} />
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
      {route === "home" ? (
        <div>
          <Logo />
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
          />
          <Rank />
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
      ) : route === "signin" ? (
        <SignIn onRouteChange={onRouteChange} />
      ) : (
        <Register onRouteChange={onRouteChange} />
      )}
    </div>
  );
};

export default App;
