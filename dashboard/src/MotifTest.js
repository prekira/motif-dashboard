import ReactDOM from 'react-dom';
import React, {Component} from 'react';

/**
 * Not currently being called anywhere - use to test calling flask to access motif api
 */
class MotifTest extends Component{
    constructor(props) {
        super(props);
        this.state = {
          ip:'defaultip',
          serial: 'defaultserial'
        }
        this.id = 0;
        this.type='home-cage';
        this.ip='defaultip';
        this.serial= 'defaultserial';
      }
     
    async componentDidMount() {    
        
        const response = await fetch('/caminfo?&id='+this.id + 'type='+this.type);
        const data = await response.json();
        this.setState({ ip: (data.ip),serial: data.serial});
    }


    render(){
        return (
           <div>
           </div>
        );
    }
}

export default MotifTest;
