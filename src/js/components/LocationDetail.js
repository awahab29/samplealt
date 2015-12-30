var React = require('react');
var LocationDetailStore = require('../stores/LocationDetailStore');
var AltContainer = require('alt/AltContainer');
var ListenerMixin = require('alt/mixins/ListenerMixin');
var LocationActions = require('../actions/LocationActions');
var cookie = require('react-cookie');

var FetchedDetail = React.createClass({
    loadLastLocation(){
        var lastSelectedLoc = cookie.load('selectedLocation');
        return lastSelectedLoc;
    },

    render() {

        var lastSelectedLoc = this.loadLastLocation();

        return (
            <div className="five">  
                <h4>Detail page for the location key: <b>{this.props.locationId}</b></h4>
                <h5>Data Id got from server:  <b>{this.props.location.id}</b></h5>
                <h5>Data Name got from server:  <b>{this.props.location.name}</b></h5>

                <h5>Last selected location taken from cookie:  <b>{lastSelectedLoc.name}</b></h5>
            </div>
        );
    }
});

var LocationDetail = React.createClass({
	
	componentDidMount() {
	    LocationActions.fetchLocation(this.props.params.locationId);
    },
    
    render() {
        return (
                <AltContainer store={LocationDetailStore}>
		          <FetchedDetail locationId={this.props.params.locationId} />
		        </AltContainer>
        );
    }
});

module.exports = LocationDetail;