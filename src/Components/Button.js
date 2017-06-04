/*
 *
 * Button
 *
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

function Button(props) {
  const { onClick, label, icon, style, dataIntro, dataStep } = props;
  return (
    <RaisedButton
      onClick={onClick}
      label={label}
      labelPosition="before"
      primary={true}
      icon={icon}
      style={style}
      data-intro={dataIntro}
      data-step={dataStep}
    />
  )
}

export default Button;
