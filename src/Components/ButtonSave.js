import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


class ButtonSave extends React.Component {

  save() {
    alert('SAVE clicked');
  }

  render() {
    return (
      <RaisedButton
        label="SAVE"
        labelPosition="before"
        primary={true}
      />
    )
  }
}
export default ButtonSave;
