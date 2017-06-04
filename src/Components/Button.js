/*
 *
 * Button
 *
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

function Button(props) {
  const { onClick, label, icon, dataIntro, dataStep, style } = props;
  return (
    <RaisedButton
      onClick={onClick}
      label={label}
      labelPosition="before"
      secondary={true}
      icon={icon}
      data-intro={dataIntro}
      data-step={dataStep}
      style={style}
    />
  )
}

export default Button;
