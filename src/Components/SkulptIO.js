const React = require('react');
const ErrorMessage = require('./ErrorMessage');
const Input = require('./InputArea');
const Output = require('./OutputArea');

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
    )
  }
}

module.exports = SkulptIO;
