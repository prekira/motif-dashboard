import React from 'react';
import { Button } from 'reactstrap';
import PopUp from './popUp';



class CameraComponent extends React.Component {
  constructor(props) {
    super();
    this.id = props.id;

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
      //below is temporary just to test dynamic rendering of colors
      isRecording: !this.state.isRecording
    });
   
  }
  myColor() {
    if (this.state.isRecording === true) {
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
   // const CameraComponent = props => <h1>{props.id}</h1>;
    
    return (
      <div className="camstats">
        <input name="selectCam" type="checkbox" defaultChecked={this.state.selectedCam} onChange={this.handleInputChange} style={divStylebutton2}/>
        <Button style={{color: this.myColor()},divStylebutton}> </Button>{' '}
        <div>
        <PopUp name={"Cam: "+this.props.id} ></PopUp>
        </div>
      </div>
    );
  }
  

}

export default CameraComponent;
