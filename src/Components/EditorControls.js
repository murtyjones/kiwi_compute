/*
 *
 * EditorControls
 *
 */

import React from 'react';
import Button from './Button';
import ActionAndroid from 'material-ui/svg-icons/action/android';

const styles = {
  base: {
    marginTop: '10px',
  },
  button: {
    marginRight: '10px',
  },
}

function EditorControls(props) {
  const { runCode } = props;
  return (
    <div style={styles.base}>
      <Button
        onClick={runCode}
        label={'START'}
        style={styles.button}
        icon={<ActionAndroid />}
      />
      <Button
        onClick={runCode}
        label={"SAVE"}
        style={styles.button}
      />
      <Button
        onClick={runCode}
        label={"Tips & Tricks"}
        style={styles.button}
      />
    </div>
  )
}

export default EditorControls;
