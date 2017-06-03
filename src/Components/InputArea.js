import React from 'react';
import Autosuggest from 'react-autosuggest';
import pythonKeywords from './Helpers';

const getSuggestions = value => {
  const inputValue = truncatePrevWords(value);
  const inputLength = inputValue.length;
  
  return inputLength === 0 ? [] : pythonKeywords.filter(lang =>
    lang.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const truncatePrevWords = input => {
  return input.split(" ").slice(-1)[0].toLowerCase();
};

const getSuggestionValue = suggestion => suggestion;

const renderSuggestion = suggestion => (
  <div>
    {suggestion}
  </div>
);

class InputArea extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'foo',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default InputArea;
