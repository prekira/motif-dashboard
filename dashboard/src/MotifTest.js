import ReactDOM from 'react-dom';
import React, {Component} from 'react';
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
        
        const response = await fetch('/caminfo?type='+this.type+'&id='+this.id);
        const data = await response.json();
        this.setState({ ip: (data.ip),serial: data.serial});
        //doesnt work: this.props.ip = data.ip;
        //doesnt work: this.serial = data.serial;
    }

    // componentDidMount() {
        
    //     fetch('/caminfo?type='+this.type+'&id='+this.id)
    //         .then(response => response.json())
    //         .then(data => this.setState({ ip: JSON.stringify(data), displayint:'69'}))
    //         .then(data=> this.setData(data));
    // }
    render(){
        return (
           <div>
              
           </div>
        );
    }
}

export default MotifTest;
/* <div class="form">
                
            </div><form action="http://localhost:5000/result" method="get">
                    Place: <input type="text" name="place"/>
                    <input type="submit" value="Submit"/>
                </form>*/