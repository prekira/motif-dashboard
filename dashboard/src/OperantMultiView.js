import React, {Component} from 'react';
import Notifications from './Notifications'
import ProjectList from './ProjectList'
import { Button, ModalFooter } from 'reactstrap';
import CameraComponent from './CameraComponent';
import UnitComponent from './Unit_component';
import {Container, Row, Col } from 'reactstrap';
import Settings from './Settings';
import MotifTest from './MotifTest';

class OperantMultiView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(<UnitComponent  start_id={20}/>);
  }
  

}

export default OperantMultiView;
