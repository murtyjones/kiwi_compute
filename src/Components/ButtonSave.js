const React = require('react');

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

module.exports = ButtonSave;
