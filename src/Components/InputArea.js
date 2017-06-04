/*
 *
 * InputArea
 *
 */

import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/python/python';
import '../assets/css/codeMirrorOverrides.css';

const options = {
  lineNumbers: true,
  mode: 'python',
};

function InputArea (props) {
  const { editorInput, updateInput } = props;
  return (
    <CodeMirror
      value={editorInput}
      onChange={updateInput}
      options={options}
    />
  )
}

export default InputArea;
