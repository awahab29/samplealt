var React = require('react');
var { Route, DefaultRoute } = require('react-router');

var App = require('./App');

var Default = require('./components/Default');
var About = require('./components/About');
var Simple = require('./components/Simple');
var Locations = require('./components/Locations');
var LocationDetail = require('./components/LocationDetail');
var Todos = require('./components/Todos');
var ComponentsPage = require('./pages/ComponentsPage');
var CheckboxWithLabel = require('./components/CheckboxWithLabel');

var routes = (
    <Route name="home" path='/' handler={App}>
        <DefaultRoute name="default" handler={Todos} />
        <Route name="about" path="/about" handler={About} />
        <Route name="simple" path="/simple" handler={Simple} />
        <Route name="locations" path="/locations" handler={Locations} />
        <Route name="test" path="/test" handler={CheckboxWithLabel} />
        <Route name="todos" path="/todos" handler={Todos} />
        <Route name="components" path="/components" handler={ComponentsPage} />
        <Route name="counter" path="/counter" handler={Default} />
        <Route name="locationDetail" path="/location/:locationId" handler={LocationDetail} /> 
    </Route>
);

module.exports = routes;