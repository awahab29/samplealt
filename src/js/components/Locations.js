var React = require('react');
var AltContainer = require('alt/AltContainer');
var LocationStore = require('../stores/LocationStore');
var FavoritesStore = require('../stores/FavoritesStore');
var Favorites = require('./Favorites');
var AllLocations = require('./AllLocations');
var LocationActions = require('../actions/LocationActions');


var Locations = React.createClass({
  componentDidMount() {
    LocationActions.fetchLocations();
  },

  render() {
    return (
      <div className='two'>
        <h4>Locations Page</h4>
        
        <h5>Mark favorite from following available locations</h5>
        <AltContainer store={LocationStore}>
          <AllLocations />
        </AltContainer>

        <h5>Favorite List</h5>
        <AltContainer store={FavoritesStore}>
          <Favorites />
        </AltContainer>
      </div>
    );
  }
});

module.exports = Locations;
