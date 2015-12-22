var alt = require('../alt');
var LocationSource = require('../sources/LocationSource');

class LocationActions {
  updateLocations(locations) {
    this.dispatch(locations);
  }

  fetchLocations() {
    this.dispatch();
    var actionDispatcher = this;

    LocationSource.fetchLocations().then(function(items) {

        actionDispatcher.actions.updateLocations(items);

    });

  }

  locationsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  favoriteLocation(location) {
    this.dispatch(location);
  }

  fetchedLocation(location) {
    this.dispatch(location);
  }

  fetchLocation(locationId) {
    
    var actionDispatcher = this;

    actionDispatcher.dispatch();

    LocationSource.fetchLocation(locationId).then(function(item) {

        actionDispatcher.actions.fetchedLocation(item);

    });
  }
}

module.exports = alt.createActions(LocationActions);
