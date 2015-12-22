var LocationActions = require('../actions/LocationActions');
var $ = require('jquery');

var mockData = [
  { id: 0, name: 'Abu Dhabi' },
  { id: 1, name: 'Berlin' },
  { id: 2, name: 'Bogota' },
  { id: 3, name: 'Buenos Aires' },
  { id: 4, name: 'Cairo' },
  { id: 5, name: 'Chicago' },
  { id: 6, name: 'Lima' },
  { id: 7, name: 'London' },
  { id: 8, name: 'Miami' },
  { id: 9, name: 'Moscow' },
  { id: 10, name: 'Mumbai' },
  { id: 11, name: 'Paris' },
  { id: 12, name: 'San Francisco' },
];


var LocationSource = {
  fetchLocations() {

        return new Promise(function (resolve, reject) {
          // simulate an asynchronous flow where data is fetched on
          // a remote server somewhere.
          $.get( "index.php/getLocations", function( data ) {
      
            resolve( data );
          });

        });

  },
  
  fetchLocation(locationId) {
   
    var url = 'index.php/getLocation/'+ String(locationId);
    console.log(url);

        return new Promise(function (resolve, reject) {
          // simulate an asynchronous flow where data is fetched on
          // a remote server somewhere.
          $.get( url, function( data ) {
            //console.log(data);
            resolve( data );
          });

        });
      
  }
};

module.exports = LocationSource;
