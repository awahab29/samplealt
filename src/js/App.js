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
                <h4>Menu of route pages</h4>
                <ul className="navigation">
                    <Link to='default'><li className="navigation-item">Counter</li></Link>
                    <Link to='locations'><li className="navigation-item">Locations</li></Link>
                    <Link to='test'><li className="navigation-item">Jest Testing Component</li></Link>
                    <Link to='simple'><li className="navigation-item">Simple Component</li></Link>
                    <Link to='todos'><li className="navigation-item">Todos</li></Link>
                </ul>
                <RouteHandler {...this.props} />
            </div>
        );
    }
});

module.exports = App;