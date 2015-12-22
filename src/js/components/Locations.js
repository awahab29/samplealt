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
        <h2>Locations Page</h2>
        
        <h3>Mark favorite from following available locations</h3>
        <AltContainer store={LocationStore}>
          <AllLocations />
        </AltContainer>

        <h3>Favorite List</h3>
        <AltContainer store={FavoritesStore}>
          <Favorites />
        </AltContainer>
      </div>
    );
  }
});

module.exports = Locations;
