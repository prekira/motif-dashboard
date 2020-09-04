import React from 'react';
import { Button } from 'reactstrap';
import CameraDetailFlyout from './CameraDetailFlyout';


/**
 * Contains button with camera flyout, as well as recording status button and number.
 * TODO: updating recording status button using Motif
 */
class CameraComponent extends React.Component {
  constructor(props) {
    super();
    this.id = props.id;
    this.type_name = props.type_name;
    this.serial = props.serial;
    this.ip = props.ip;

    this.state = {
      selectedCam: false,
      isRecording: false
    } 
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  //if camera checked, register change
  handleInputChange() {
    this.setState({
      selectedCam: !this.state.selectedCam,
      // below is temporary just to test dynamic rendering of colors
        isRecording: !this.state.isRecording
    });
   
  }
  myColor() {
    if (this.state.isRecording === true ) {
      return "#45ba45";
    }
    return "#ba4545";
  }
  render() {
    const divStylebutton = {
      padding: "0px 0px 0px 0px",
      margin: "2px 2px 2px 2px",
      border: "none",
      height: "10px",
      width: "10px",
      borderRadius: "5px",
      backgroundColor: this.myColor(),
    };
    const divStylebutton2 = {
      padding: "0px 0px 0px 0px",        
      margin: "2px 2px 2px 2px",
      border: "none",
      height: "8px",
      width: "8px",
      borderRadius: "10px"
    };
    
    return (
      <div className="camstats">
        <input name="selectCam" type="checkbox" defaultChecked={this.state.selectedCam} onChange={this.handleInputChange} style={divStylebutton2}/>
        <Button style={{color: this.myColor()},divStylebutton}> </Button>{' '}
        <div>
        <CameraDetailFlyout name={"Cam: "+this.props.id} ip={this.props.ip} serial={this.props.serial}></CameraDetailFlyout>
        </div>
      </div>
    );
  }
  

}

export default CameraComponent;
