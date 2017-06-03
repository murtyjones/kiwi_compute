

import React, { Component } from 'react';
import axios from 'axios';


class ListSavedText extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }

//jobTitle jobLink companyName jobLocation jobDescription
  render() {
          return (
            <div className="ListSavedText">
              {this.props.returnedText}
            </div>
          );
        }
}

export default ListSavedText;
