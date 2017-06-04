/*
 *
 * EditorControls
 *
 */

import React from 'react';
import Button from './Button';
import ActionAndroid from 'material-ui/svg-icons/action/android';

import { introStart, introSave, introHelp } from '../intro';

const styles = {
  base: {
    marginTop: '10px',
  },
  button: {
    marginRight: '10px',
  },
}

function EditorControls(props) {
  const { runCode, runIntro } = props;
  return (
    <div style={styles.base}>
      <Button
        label={'START'}
        style={styles.button}
        icon={<ActionAndroid />}
        onClick={runCode}
        dataIntro={introStart}
        dataStep={2}
      />
      <Button
        label={"SAVE"}
        style={styles.button}
        dataIntro={introSave}
        dataStep={4}
      />
      <Button
        label={"Tips & Tricks"}
        style={styles.button}
        onClick={runIntro}
        dataIntro={introHelp}
        dataStep={5}
      />
    </div>
  )
}

export default EditorControls;