import React, {Component} from 'react';
import Notifications from './Notifications'
import ProjectList from './ProjectList'
import { Button, ModalFooter } from 'reactstrap';
import CameraComponent from './CameraComponent';
import UnitComponent from './Unit_component';
import {Container, Row, Col } from 'reactstrap';
import Settings from './Settings';
import MotifTest from './MotifTest';
import {DefaultButton, PrimaryButton, DangerButton, BrandButton} from 'pivotal-ui/react/buttons';
import { Player } from 'video-react';
import HLSSource from './HLSSource';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
class NORCam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {    
        
    const response = await fetch('/camfeed');
    const data = await response.json();
    this.setState({ ip: (data.ip),serial: data.serial});
    //doesnt work: this.props.ip = data.ip;
    //doesnt work: this.serial = data.serial;
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
      height:"250px",
      
      padding: "0px 0px 0px 0px",
      margin: "0px 0px 0px 0px"      

    }
    const playerstyle = {
      position:"absolute",
      top: "0",
      left: "0",
      
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
      justifyContent: "center",
      padding: "0px 0px 0px 0px",
      margin: "0px 0px 0px 0px"

      
    }
    return (
      <div className="CamInfo" style={blockstyle}>
        <div className="advanced-info">
           
           
         <div className="info-block2">
           <PrimaryButton name="camera-button-style" style={divStylebutton} onClick={this.state.recording=true}>Native Camera Controls </PrimaryButton>
           <br/>
           <DefaultButton name="camera-button-style" style={divStylebutton}>Live Camera Feed</DefaultButton>
           <br/>
 
           <PrimaryButton name="camera-button-style" style={divStylebutton}>Start Recording</PrimaryButton>
           
         </div>
         <div className="player-wrapper" style={wrapperstyle}>
           
           <img id="motionjpeg" src="http://172.22.131.188:8310/stream" style={wrapperstyle} width = "90%" height = "90%"/>
            
         </div>
         
       
       </div>
       <Grid style={blockstyle}>
         <div style={textstyle}>Advanced Information</div>
 
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

export default NORCam;
