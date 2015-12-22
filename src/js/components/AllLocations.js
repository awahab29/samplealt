var React = require('react');
var LocationStore = require('../stores/LocationStore');
var LocationActions = require('../actions/LocationActions');
var cookie = require('react-cookie');

var AllLocations = React.createClass({
  addFave(ev) {
    var location = LocationStore.getLocation(
      Number(ev.target.getAttribute('data-id'))
    );

    cookie.save('selectedLocation', location);

    LocationActions.favoriteLocation(location);
  },

  render() {
    if (this.props.errorMessage) {
      return (
        <div>{this.props.errorMessage}</div>
      );
    }

    return (
      <ul>
        {this.props.locations.map((location, i) => {
          var faveButton = (
            <button onClick={this.addFave} data-id={location.id}>
              Favorite
            </button>
          );
          var heart = (<img src='./src/img/heart.png' />);

          return (
            <li key={i}>
              {location.name} {location.has_favorite ? heart : faveButton}
            </li>
          );
        })}
      </ul>
    );
  }
});

module.exports = AllLocations;