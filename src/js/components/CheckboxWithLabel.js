import React from 'react';

class CheckboxWithLabel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isChecked: false};

    // since auto-binding is disabled for React's class model
    // we can prebind methods here
    // http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({isChecked: !this.state.isChecked});
  }

  render() {
    return (
      <div className='one'>
      <h4>A checkbox component to test with Jest</h4>
        <label>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.onChange}
          />
          {this.state.isChecked ? 'ON' : 'OFF'}
        </label>
      </div>
    );
  }
}

module.exports = CheckboxWithLabel;
