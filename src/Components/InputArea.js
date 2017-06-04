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
import { Card } from 'material-ui';

import { introEditorInput } from '../intro';

const options = {
  lineNumbers: true,
  lineWrapping: true,
  mode: 'python'
};

class InputArea extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.errorLine) {
      this.refs.editor.codeMirror.addLineClass((nextProps.errorLine - 1), 'wrap', 'error-highlight');
    } else {
      this.refs.editor.codeMirror.addLineClass((this.props.errorLine - 1), 'wrap', 'error-fixed');
    }
  }

  render() {
    const { editorInput, updateFocus, updateInput } = this.props;
    return (
      <Card
        data-intro={introEditorInput}
        data-step={1}
      >
        <CodeMirror
          ref="editor"
          value={editorInput}
          onChange={updateInput}
          onFocusChange={updateFocus}
          options={options}
        />
      </Card>
    )
  }
}

export default InputArea;
