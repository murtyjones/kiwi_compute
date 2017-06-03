import RaisedButton from 'material-ui/RaisedButton';
const React = require('react');

class ButtonTips extends React.Component {

  showTips() {
    alert('TIPS & TRICKS clicked');
  }

  render() {
    return (
      <RaisedButton
        label="Tips & Tricks"
        labelPosition="before"
        primary={true}
      />
    )
  }
}

export default ButtonTips;