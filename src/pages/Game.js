import React, { Component } from 'react';
import Nav from './Nav';
import Unity, { UnityContext } from "react-unity-webgl";

class Game extends Component {
  constructor() {
    super();

    this.unityContext = new UnityContext({
      loaderUrl: "Builds/Build/Builds.loader.js",
      dataUrl: "Builds/Build/Builds.data",
      frameworkUrl: "Builds/Build/Builds.framework.js",
      codeUrl: "Builds/Build/Builds.wasm"
    });
  }

  render() {

    return (
      <div>
        <Nav />
        <Unity unityContext={this.unityContext} />
      </div>
    );
  }
}

export default Game;