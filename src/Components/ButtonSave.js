import React from 'react';

class ButtonSave extends React.Component {

  save() {
    alert('SAVE clicked');
  }

  render() {
    return (
      <button
        onClick={() => this.save()}
      >
        SAVE
      </button>
    )
  }
}
export default ButtonSave;
