import React, {Component} from 'react';
import {Flyout} from 'pivotal-ui/react/flyout';

import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import {DefaultButton, PrimaryButton, DangerButton, BrandButton} from 'pivotal-ui/react/buttons';
import {FormUnit} from 'pivotal-ui/react/forms';
import CamInfo from './CamInfo';


import {Toggle} from 'pivotal-ui/react/toggle';


class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.name = props.name;
  }

  render() {
    const {created, show, disableAnimation} = this.state;
    const divStylebutton = {
        margin: "2px 2px 2px 2px",
        display: 'flex',  
        alignItems: 'center',
        width: "69px"
      };
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
          header:  <h1>{this.props.name}</h1>,
          headerClassName: 'header-class',
          bodyClassName: 'body-class',
          onHide: () => this.setState({show: false})
        }}>
         <CamInfo/>
        </Flyout>
      </div>
    );
  }
}
export default PopUp;
