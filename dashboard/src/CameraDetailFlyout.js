import React from 'react';
import {Flyout} from 'pivotal-ui/react/flyout';

import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import {DefaultButton} from 'pivotal-ui/react/buttons';

/**
 * Popout that grabs preview and details from Motif for this camera
 */
class CameraDetailFlyout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.name = props.name;
    this.serial = props.serial;
    this.ip = props.ip;
  }

  render() {
    const {created, show, disableAnimation} = this.state;
    const divStylebutton = {
        margin: "2px 2px 2px 2px",
        display: 'flex',  
        alignItems: 'center',
        width: "69px"
      };
    const divStyleFlex = {
      width: '100%',
      height: '50%',
      display: 'block',
      resize: 'both'
    };
    const divStyleFlyout = {
      
        position: 'fixed',
        width: '100%',
        height: '100%'
    
    }
    var link_motif = "http://" + this.props.ip + "/camera/" + this.props.serial ;

    return (
      <div>
        <Grid>
          <FlexCol fixed>
            <DefaultButton style={divStylebutton} onClick={() => this.setState({show: true}) } >
              {this.props.name}
            </DefaultButton>
          </FlexCol>
        </Grid>
        {created && <p className="mtl">Last task created: {created.toLocaleString()}</p>}

        <Flyout {...{
          animationDuration: disableAnimation ? 0 : undefined,
          show,
          header:  <div className="info-block2">{this.props.type} {this.props.name} </div>,
          headerClassName: 'header-class',
          bodyClassName: 'body-class',
          onHide: () => this.setState({show: false})
          
        }}>
          <div style={divStyleFlyout}>
            <iframe src={link_motif} style={divStyleFlex} />
          </div>
        </Flyout>
      </div>
    );
  }
}
export default CameraDetailFlyout;