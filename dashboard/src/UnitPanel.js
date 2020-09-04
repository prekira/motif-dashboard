import React from 'react';
import CameraComponent from './CameraComponent';
import camconfig from './camconfig.json';

/**
 * Contains access to each of Unit's cameras
 * Number of cameras set based on type of unit
 * Camera details set using json value (obtained from PNCL Networking spreadsheet)
 */

class UnitPanel extends React.Component {
  constructor(props) {
    super();
    this.type_name = props.type_name;
    
    if(this.type_name == "Home-Cage") {
      this.num_cams = 6;
      this.num_cam_per_row = 2;
      this.data = camconfig.HomeCage;
      this.unit_name = "Home Cage";

    } else if(this.type_name == "Behavioral") {
      this.num_cams = 4;
      this.num_cam_per_row = 2;
      this.data = camconfig.Behavioral;
      this.unit_name = "Operant";

    } else {
      this.num_cams = 1;
      this.num_cam_per_row =1;
      this.data = camconfig.Nor;
      this.unit_name = "NOR";

    }
    this.start_id = (props.start_id - 1) * this.num_cams;
  }
  

  render() {
    let items = []
    //make rows of cameras in unit
    for(var i = 1; i <= this.num_cams/this.num_cam_per_row; i++) {
      let row = []
      for(var j = 1; j <= this.num_cam_per_row; j++ ) {
        var index = 0;
        var serial = this.data[index].serial;
        var ip = this.data[index].ip;

        row.push(<CameraComponent id={this.start_id + (i-1)*this.num_cam_per_row + j } type_name={this.props.type_name} serial={serial} ip={ip}/>)
      }
      items.push(<div className="Cam-row"> {row} </div>);
    }
    return (
     <div className="Unit">
      <div className="unit-text">{this.unit_name} {this.props.start_id} </div>
      {items}
    </div>
    );
  }
  
}

export default UnitPanel;
