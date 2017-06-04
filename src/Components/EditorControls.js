/*
 *
 * EditorControls
 *
 */

import React from 'react';
import Button from './Button';
import ActionAndroid from 'material-ui/svg-icons/action/android';

import { introStart, introSave, introDemo, introResources } from '../intro';

const styles = {
  base: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  button: {
    marginRight: '10px',
  },
}

function EditorControls(props) {
  const { runCode, runIntro, showResources } = props;
  return (
    <div style={styles.base}>
      <Button
        label={'Start Program'}
        style={styles.button}
        onClick={runCode}
        dataIntro={introStart}
        dataStep={2}
      />
      <Button
        label={"Save Your Code"}
        style={styles.button}
        dataIntro={introSave}
        dataStep={4}
      />
      <Button
        label={"How to use this Kiwi Editor"}
        style={styles.button}
        onClick={runIntro}
        dataIntro={introDemo}
        dataStep={6}
      />
      <Button
        label={"Basic Tips"}
        style={styles.button}
        onClick={showResources}
        dataIntro={introResources}
        dataStep={5}
      />
    </div>
  )
}

export default EditorControls;
