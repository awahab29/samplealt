import React from 'react';
var { RouteHandler, Link } = require('react-router');
var { PropTypes } = React;

var App = React.createClass({

    propTypes: {
        params: PropTypes.object.isRequired,
        query: PropTypes.object.isRequired 
    },

    render: function() {
        return (
            <div>
                <ul className="collection with-header row">
                    <li className="collection-item"><h5>Menu of route pages</h5></li>
                    <Link to='todos'><li className="collection-item col s1">Todos</li></Link>
                    <Link to='counter'><li className="collection-item col s1">Counter</li></Link>
                    <Link to='locations'><li className="collection-item col s1">Locations</li></Link>
                    <Link to='test'><li className="collection-item col s1">Jest Testing Component</li></Link>
                    <Link to='simple'><li className="collection-item col s1">Simple Component</li></Link>
                    <Link to='components'><li className="collection-item col s1">Components Page</li></Link>
                </ul>
                <RouteHandler {...this.props} />
            </div>
        );
    }
});

module.exports = App;