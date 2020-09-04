import React from 'react';

/**
 * Added as per request to have separate view to allow every operant camera feed to show up in one page
 */
class OperantMultiView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return(
      <div>
        <h3>Operant Cameras</h3>
        <div>
        <iframe src={"http://172.22.131.187:8354/stream"} />
          <iframe src={"http://172.22.131.187:8372/stream"} />
          <iframe src={"http://172.22.131.187:8345/stream"} />
        </div>
        <div>
        <iframe src={"http://172.22.131.187:8336/stream"} />
        <iframe src={"http://172.22.131.187:8327/stream"} />
        <iframe src={"http://172.22.131.187:8309/stream"} />
        </div>
        <div>
        <iframe src={"http://172.22.131.187:8318/stream"} />
        <iframe src={"http://172.22.131.187:8363/stream"} />
        </div>
      </div>
    );
  }
  

}

export default OperantMultiView;