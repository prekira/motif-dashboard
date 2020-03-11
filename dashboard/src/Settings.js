import React from 'react';
import { Button } from 'reactstrap';
import CameraComponent from './CameraComponent';

class Settings extends React.Component {
  constructor(props) {
    super();
    this.state = {
      exposure_time:0,
      gain:0,
      framerate:0
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
   
  }

  render() {
    const divStyle = {
      fontSize:15,
      padding: "1px 1px 1px 1px",
      margin: "1px 1px 1px 1px"
    };
    const divStylebutton = {
      backgroundColor:  "#61dafb",
      padding: "4px 4px 4px 4px",
      margin: "5px 5px 5px 5px",
      border: "none",
      borderRadius: "5px"
    };
    
    return (
     <div className="Settings">
      <h3>Settings</h3>
      <Button name="upload-settings" style={divStylebutton}>Upload Settings</Button>
      <br/>
      <p style={divStyle}>Exposure Time</p>
      <input name="exposure-time" type="number" onChange={this.handleInputChange}/>
      <p style={divStyle}>Gain</p>
      <input name="gain" type="number" onChange={this.handleInputChange}/>
      <p style={divStyle}>Frame Rate</p>
      <br/>
      <input name="frame-rate" type="number" onChange={this.handleInputChange}/>
      <br/>
      <Button name="upload-settings" style={divStylebutton} >Apply to All</Button>
      <br/>

      <Button name="upload-settings" style={divStylebutton}>Apply to Selected</Button>
      <br/>

      <Button name="upload-settings" style={divStylebutton}>Apply to Home-cage Top</Button>
      <br/>
      <Button name="upload-settings" style={divStylebutton}>Apply to Home-cage Middle</Button>
      <br/>
      <Button name="upload-settings" style={divStylebutton}>Apply to Home-cage Bottom</Button>
      <br/>

      <Button name="upload-settings" style={divStylebutton}>Apply to Operant Chambers</Button>


      
    </div>
    );
  }
  
}

export default Settings;

/*
constructor(props) {
  super();
  this.id = props.id;

  this.state = {
    selectedCam: false
  } 
  this.handleInputChange = this.handleInputChange.bind(this);
}
//if camera checked, register change
handleInputChange() {
  this.setState({
    selectedCam: !this.state.selectedCam
  });
 
}
render() {
  
 // const CameraComponent = props => <h1>{props.id}</h1>;
  
  return (
    <div className="camera-button">
      <Button className="camera-button-style">Cam: {this.props.id} </Button>{' '}
      <input name="selectCam" type="checkbox" defaultChecked={this.state.selectedCam} onChange={this.handleInputChange}/>
    </div>
  );
}


}*/