import React from 'react';
import { Button } from 'reactstrap';
import UnitPanel from './UnitPanel';
import {Container, Col } from 'reactstrap';
import Settings from './Settings';

/**
 * Main Dashboard page, contains unit panels with id and settings panel with csv parser
 */
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var unit_number = 1;
    var behav_number = 1;

    var home_unit = "Home-Cage";
    var behavior_unit = "Behavioral";
    var nor_unit = "NOR";

    const divStylebutton = {
      backgroundColor:  "#61dafb",
      padding: "4px 4px 4px 4px",
      margin: "5px 5px 5px 5px",
      border: "none",
      borderRadius: "5px"
    };

    return (
      
      <div className="outer-dash">
        <div className="main-dash">
          <div className="dashboard">
              
              <h1>PNCL Motif Operational Dashboard</h1>
              <h5>Available Cameras</h5>
              <br/>
              <h2>Home-Cage</h2>
              <Container>
                <div className="UnitRow">
                  <Col><UnitPanel type_name={home_unit} start_id={unit_number++} /></Col>
                  <Col><UnitPanel type_name={home_unit} start_id={unit_number++}/></Col>
                  <Col><UnitPanel type_name={home_unit} start_id={unit_number++}/></Col>
                </div>
                <div className="UnitRow">
                  <Col><UnitPanel type_name={home_unit} start_id={unit_number++}/></Col>
                  <Col><UnitPanel type_name={home_unit} start_id={unit_number++}/></Col>
                  <Col><UnitPanel type_name={home_unit} start_id={unit_number++}/></Col>
                </div>
                <div className="UnitRow">
                  <Col><UnitPanel type_name={home_unit} start_id={unit_number++}/></Col>
                  <Col><UnitPanel type_name={home_unit} start_id={unit_number++}/></Col>
                  <Col><br></br></Col>

                </div>
              </Container>
              <br></br>
              <h2>Behavior</h2>
              <br></br>
              <Button href="/operant" style={divStylebutton}>Operant MultiView</Button>
              <br></br>
              <Container>
                <div className="UnitRow">
                  <Col><UnitPanel type_name={behavior_unit} start_id={behav_number++}/></Col>
                  <Col><UnitPanel type_name={behavior_unit} start_id={behav_number++}/></Col>
                  <Col><UnitPanel type_name={nor_unit} start_id={1}/></Col>
                </div>
              </Container>
              
            </div>
            <div>
              <Settings/>
            </div>


        </div>
      
      </div>
            
      
    );
  }
  

}

export default Dashboard;
