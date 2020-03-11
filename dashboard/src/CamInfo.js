import React from 'react';
import CameraComponent from './CameraComponent';
import {DefaultButton, PrimaryButton, DangerButton, BrandButton} from 'pivotal-ui/react/buttons';
import { Player } from 'video-react';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';

import "../node_modules/video-react/dist/video-react.css";
class CamInfo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      exposure_time:0,
      gain:0,
      framerate:0
    }
    
  }
 

  render() {
    const divStylebutton = {
      padding: "5px 5px 5px 5px",
      margin: "5px 5px 5px 5px",
      alignItems: "left" 

    };
    const wrapperstyle = {
      position: "relative",
      width:"250px", 
      height:"250px"
    }
    const playerstyle = {
      position:"absolute",
      top: "0",
      left: "0"
      
    }
    const textstyle = {
      color: "navy",
      textAlign: "center",
      fontWeight: "bold",
      padding: "0px 0px 0px 0px",
      margin: "0px 0px 0px 0px"
      
    }
    const blockstyle = {
      textAlign: "Left",
      alignItems: "top",
      justifyContent: "center"
      
    }
    return (
     <div className="CamInfo">
       <div className="advanced-info">
          
          
        <div className="info-block">
          <PrimaryButton name="camera-button-style" style={divStylebutton}>Native Camera Controls</PrimaryButton>
          <br/>
          <DefaultButton name="camera-button-style" style={divStylebutton}>Live Camera Feed</DefaultButton>
          <br/>

          <PrimaryButton name="camera-button-style" style={divStylebutton}>Start Recording</PrimaryButton>
          
        </div>
        <div className="player-wrapper" style={wrapperstyle}>
          <Player
            style = {playerstyle}
            width = "100%"
            height = "100%"

            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>
      
      </div>
      <div style={textstyle}>Advanced Information</div>
      <Grid style={blockstyle}>
          <FlexCol fixed>
            <div className="info-block">
              <p>IP address: </p>
              <p>MAC address: </p>
              <p>Temperature: </p>
              <p>Framerate: </p>
              <p>Frames Saved: </p>
              <p>Frames Skipped: </p>
            </div>
          </FlexCol>
          <FlexCol fixed>
            <div className="info-block">
              <p>Buffer Usage: </p>
              <p>Free Space: </p>
              <p>CPU Usage: </p>
              <p>Disk Usage: </p>
              <p>GPU Usage: </p>
            </div>
          </FlexCol>
      </Grid>
      
        
    </div>
    );
  }
  
}

export default CamInfo;
