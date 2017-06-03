/*
 *
 * ExampleComponent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  base: {
    textDecoration: 'underline',
  },
  active: {
    color: '#494949',
    cursor: 'pointer',
  },
  disabled: {
    color: '#979797',
  },
};

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // Defining our functions as fat arrow functions
  // allow us not to need to .bind() functions in the constructor
  someMethodWeNeed = () => {

  }

  render() {
    return (
      <div
        id={props.id}
        style={[
          styles.base,
          props.disabled ? styles.disabled : styles.active,
          props.style,
        ]}
        tabIndex={props.tabIndex}
        onClick={props.disabled ? null : props.onClick}
      >
        { props.text }
      </div>
    );
  }
}

ExampleFunctionalComponent.propTypes = {
  id: PropTypes.string.isRequired,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  text: PropTypes.string,
};

export default Radium(ExampleComponent);
