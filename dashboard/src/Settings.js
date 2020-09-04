import React from 'react';
import { Button } from 'reactstrap';
import CsvParser from './CsvParser';

/**
 * Settings Panel
 * Contains component to upload CSV
 * TODO: add functionality to buttons and use to make mass changes to cameras using motif
 */
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
       <br/>
       <CsvParser style={divStylebutton}>Upload Settings</CsvParser>
      
      <br/>
      <h2>Settings</h2>

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