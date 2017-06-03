import React from 'react';
import ErrorMessage from './ErrorMessage';
import Input from './InputArea';
import Output from './OutputArea';

class SkulptIO extends React.Component {

  render() {
    return (
      <div>
        <ErrorMessage msg="Ya done goofed"/>
        <Input />
        <Output
          msg="this.props.output ? this.props.output : placeholder output"
        />
      </div>
    );
  }
}

export default SkulptIO;
