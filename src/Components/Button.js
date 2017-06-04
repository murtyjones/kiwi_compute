/*
 *
 * Button
 *
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

function Button(props) {
  const { onClick, label, icon, style } = props;
  return (
    <RaisedButton
      onClick={onClick}
      label={label}
      labelPosition="before"
      primary={true}
      icon={icon}
      style={style}
    />
  )
}

export default Button;
