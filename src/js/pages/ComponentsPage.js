var React = require('react');
var AltContainer = require('alt/AltContainer');
var AutoComplete = require('../components/AutoComplete');
var $ = require('jquery');  

var ComponentsPage = React.createClass({ // creating a parent component that defines and alt container component

  render() {
    return (
      <div className='six'>
        <h4>Components Page</h4>
        <AutoComplete />
      </div>
    );
  }
});

module.exports = ComponentsPage; //export the component
