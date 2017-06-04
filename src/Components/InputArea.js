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

import { introEditorInput } from '../intro';

const options = {
  lineNumbers: true,
  mode: 'python',
};

class InputArea extends React.Component {
  componentWillReceiveProps() {
    if (this.props.errorLine > -1) {
      // TODO add highlighting to line with error
      // this.refs.editor.codeMirror.addLineClass(this.props.errorLine, 'wrap', 'some-class');
    } else {
      // TODO clear error highlighting
    }
  }

  render() {
    const { editorInput, updateInput } = this.props;
    return (
      <div
        data-intro={introEditorInput}
        data-step={1}
      >
        <CodeMirror
          ref="editor"
          value={editorInput}
          onChange={updateInput}
          options={options}
        />
      </div>
    )
  }
}

export default InputArea;
