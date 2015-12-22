var alt = require('../alt');
var LocationActions = require('../actions/LocationActions');
var LocationSource = require('../sources/LocationSource');

class LocationDetailStore {
  constructor() {
    this.location = {};

    this.bindListeners({
      onFetchedLocation:  LocationActions.fetchedLocation
    });

  }

  onFetchedLocation(location) {
    this.location =location; 
  }

}

module.exports = alt.createStore(LocationDetailStore, 'LocationDetailStore');
