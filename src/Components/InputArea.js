/*
 *
 * InputArea
 *
 */

import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/python/python';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint.css';
import '../assets/css/codeMirrorOverrides.css';
import { Card } from 'material-ui';

import { introEditorInput } from '../intro';


class InputArea extends React.Component {
  componentWillReceiveProps() {
    if (this.props.errorLine > -1) {
      // TODO add highlighting to line with error
      // this.refs.editor.codeMirror.addLineClass(this.props.errorLine, 'wrap', 'some-class');
    } else {
      // TODO clear error highlighting
    }
  }

  autoComplete = cm => {
    const codeMirror = this.refs.editor.getCodeMirrorInstance();

    const orig = codeMirror.hint.javascript;
    codeMirror.hint.javascript = function(cm) {
      const inner = orig(cm) || {from: cm.getCursor(), to: cm.getCursor(), list: []};
      inner.list = [ "print", "def", "class" ];
      return inner;
    };
    codeMirror.showHint(cm, orig);
  }

  render() {
    const options = {
      lineNumbers: true,
      lineWrapping: true,
      mode: 'text/x-python',
      extraKeys: {
        'Ctrl-Space': this.autoComplete
      }
    };

    const { editorInput, updateInput } = this.props;
    
    return (
      <Card
        data-intro={introEditorInput}
        data-step={1}
      >
        <CodeMirror
          ref="editor"
          value={editorInput}
          onChange={updateInput}
          options={options}
        />
      </Card>
    )
  }
}

export default InputArea;
