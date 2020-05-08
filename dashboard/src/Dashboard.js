import React, {Component} from 'react';
import Notifications from './Notifications'
import ProjectList from './ProjectList'
import { Button, ModalFooter } from 'reactstrap';
import CameraComponent from './CameraComponent';
import UnitComponent from './Unit_component';
import {Container, Row, Col } from 'reactstrap';
import Settings from './Settings';
import MotifTest from './MotifTest';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
  var unit_number =1;
  var behav_number =1;

  var home_unit = "Unit";
  var behavior_unit = "Operant";
  var nor_unit = "NOR";

  
    return (
      <div className="outer-dash">
        <div className="main-dash">
          <div className="dashboard">
              <MotifTest/>
              <h1>PNCL Motif Operational Dashboard</h1>
              <h5>Available Cameras</h5>
              <br/>
              <h2>Home-Cage</h2>
              <Container>
                <div className="UnitRow">
                  <Col><UnitComponent type_name={home_unit} start_id={unit_number++}/></Col>
                  <Col><UnitComponent type_name={home_unit} start_id={unit_number++}/></Col>
                  <Col><UnitComponent type_name={home_unit} start_id={unit_number++}/></Col>
                </div>
                <div className="UnitRow">
                  <Col><UnitComponent type_name={home_unit} start_id={unit_number++}/></Col>
                  <Col><UnitComponent type_name={home_unit} start_id={unit_number++}/></Col>
                  <Col><UnitComponent type_name={home_unit} start_id={unit_number++}/></Col>
                </div>
                <div className="UnitRow">
                  <Col><UnitComponent type_name={home_unit} start_id={unit_number++}/></Col>
                  <Col><UnitComponent type_name={home_unit} start_id={unit_number++}/></Col>
                </div>
              </Container>
              <h2>Behavior</h2>
              <Container>
                <div className="UnitRow">
                  <Col><UnitComponent type_name={behavior_unit} start_id={behav_number++}/></Col>
                  <Col><UnitComponent type_name={behavior_unit} start_id={behav_number++}/></Col>
                  <Col><UnitComponent type_name={nor_unit} start_id={1}/></Col>

                </div>
              </Container>
              
            </div>
            <Settings/>


        </div>
      
      </div>
            
      
    );
  }
  

}

export default Dashboard;
