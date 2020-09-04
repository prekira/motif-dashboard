import React from 'react';
import CsvParse from '@vtex/react-csv-parse'

/**
 * Takes in CSV with metadata, intended to apply metadata to specified cameras (see specification ppt for format)
 * TODO: finish parsing functionality and connect to motif calls
 */
class CsvParser extends React.Component {
  constructor(props) {
    super();
    
    this.state = {
      data: null,
      error: null,
    }
  }
  handleData = data => {
    this.setState({ data })
  }
  
  handleError = error => {
    this.setState({ error })
  }
  render() {
    const keys = [
      "Cage",
      "Study",
      "Replicate",
      "PigID",
      "Diet",
      "CamStart",
      "CamStop",
    ]

    return (
      <div>
        
        <CsvParse 
          keys={keys}
          onDataUploaded={this.handleData}
          onError={this.handleError}
          render={onChange => <input type="file" onChange={onChange} />}
        >Uploading</CsvParse>

        {this.state.data && (
          <pre>PIG ID {this.state.data[0]}</pre>
        )}

        {this.state.error && (
          <pre>{JSON.stringify(this.state.error, null, 2)}</pre>
        )}
      </div>

    )
  }
  

}

export default CsvParser;
