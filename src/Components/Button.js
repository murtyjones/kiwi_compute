/*
 *
 * Button
 *
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

function Button(props) {
  const { onClick, label, icon, dataIntro, dataStep } = props;
  return (
    <RaisedButton
      onClick={onClick}
      label={label}
      labelPosition="before"
      secondary={true}
      icon={icon}
      data-intro={dataIntro}
      data-step={dataStep}
    />
  )
}

export default Button;
