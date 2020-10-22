import React, { Component } from 'react';
import Nav from './Nav';
import Unity, { UnityContext } from "react-unity-webgl";
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import { Row } from 'reactstrap'; 

class Game extends Component {
  constructor() {
    super();

    this.state = {
      alert: false,
      showButton: false
    }

    this.unityContext = new UnityContext({
      loaderUrl: "Builds/Build/Dev.loader.js",
      dataUrl: "Builds/Build/Dev.data",
      frameworkUrl: "Builds/Build/Dev.framework.js",
      codeUrl: "Builds/Build/Dev.wasm"
    });

  }

  componentDidMount() {
    this.setState({ alert: true }, ()=>{
      window.setTimeout(()=>{
        this.setState({ 
          alert: false, 
          showButton: true
        })
      },1000)
    }); 
  }

  onFullScreen = () => {
    this.unityContext.setFullscreen(true); 
  };

  render() {
    console.log("Context: ", this.unityContext); 
    return (
      <div>
        <Nav />
        <Row style={{display: "flex", justifyContent: "center"}}>
        {
          this.state.alert ? 
          <Alert severity="info" style={{width: "70%"}}>
            Please wait a second for the Unity Game to load.
          </Alert> 
          : null
        } 
        </Row>
        <Row style={{display: "flex", justifyContent: "flex-end", margin: "0 145px 0 145px"}}>
          <Button 
            id="fullScreenButton" 
            onClick={this.onFullScreen}
            style={{display: this.state.showButton ? null : "none"}}
          >
            Full Screen
          </Button>
        </Row>
        <div style={{display: "flex", justifyContent: "center"}} id="game-container">
          <Unity unityContext={this.unityContext}/>
        </div>
      </div>
    );
  }
}

export default Game;