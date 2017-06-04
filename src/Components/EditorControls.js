/*
 *
 * EditorControls
 *
 */

import React from 'react';
import Button from './Button';

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
        secondary={true}
        onClick={runCode}
        dataIntro={introStart}
        dataStep={2}
      />
      <Button
        label={"Save Your Code"}
        style={styles.button}
        secondary={true}
        dataIntro={introSave}
        dataStep={4}
      />
      <Button
        label={"How to use this Kiwi Editor"}
        style={styles.button}
        secondary={true}
        onClick={runIntro}
        dataIntro={introDemo}
        dataStep={6}
      />
      <Button
        label={"Basic Tips"}
        style={styles.button}
        secondary={true}
        onClick={showResources}
        dataIntro={introResources}
        dataStep={5}
      />
    </div>
  )
}

export default EditorControls;
