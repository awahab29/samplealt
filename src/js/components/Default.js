var React = require('react');
var LocalStorageMixin = require('react-localstorage');

var Default = module.exports = React.createClass({
  displayName: 'DefaultComponent',
  // This is all you need to do
  mixins: [LocalStorageMixin],

  getInitialState: function() {
    return {counter: 0};
  },

  onClick: function() {
    this.setState({counter: this.state.counter + 1});
  },

  render: function() {
    return (
      <div className='three'>
      <h2>Counter Page</h2>
      <h3 onClick={this.onClick}>Counter using local storage: {this.state.counter}</h3>
      </div>
    );
  }
});

module.exports = Default;