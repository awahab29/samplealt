var React = require('react');


var About = React.createClass({
   
    render: function() {

        return (
            <div className="one">  
                <h2>About page</h2>
                <p> This is about page with static content</p>
            </div>
        );
    }
});

module.exports = About;