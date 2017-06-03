const React = require('react');

class ButtonTips extends React.Component {

  showTips() {
    alert('TIPS & TRICKS clicked');
  }

  render() {
    return (
      <button
        onClick={() => this.showTips()}
      >
        Tips & Tricks
      </button>
    )
  }
}

module.exports = ButtonTips;
