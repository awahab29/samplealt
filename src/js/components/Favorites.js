var React = require('react');
var { RouteHandler, Link } = require('react-router');

var Favorites = React.createClass({
  render() {
    return (
      <ul>
        {this.props.locations.map((location, i) => {
          return (
            <Link to='locationDetail' params={{locationId: location.id}}>
              <li key={i}>{location.name}</li>
            </Link>
          );
        })}
      </ul>
    );
  }
});

module.exports = Favorites;