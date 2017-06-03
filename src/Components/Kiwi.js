const React = require('react');
const Header = require('./Header');
const SkulptIO = require('./SkulptIO');

class Kiwi extends React.Component {
  render() {
    return (
      <div className="kiwi">
        <Header />
        <SkulptIO />
      </div>
    )
  }
}

module.exports = Kiwi;
