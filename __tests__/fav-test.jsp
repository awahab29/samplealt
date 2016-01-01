"use strict";
jest.dontMock('../src/js/stores/FavoritesStore');
jest.dontMock('../src/js/actions/LocationActions');
jest.dontMock('../src/js/alt');

import alt from '../src/js/alt';
var fav =require('../src/js/stores/FavoritesStore');
var callback;
var  LocationActions = require('../src/js/actions/LocationActions');
 // var sinon =require('sinon');
 //var a = new alt();
describe('fav', function() {
 
	beforeEach(function() {
  alt.dispatcher = { register: jest.genMockFunction() };
  console.log(alt.dispatcher.register.mock.calls);
  callback = alt.dispatcher.register.mock.calls[0][0];
});
  afterEach(function() {
    // clean up our sinon spy so we do not affect other tests
    
   
  });
  it('registers a callback with the dispatcher', function() {
    expect(alt.dispatcher.register.mock.calls.length).toBe(1);
  });
  it('add a location to favorites list ', function() {
  
      var id: 15, name: 'San Francisco' ,
          action = LocationActions.FAVORITE_LOCATION;
		
      // fire the action
      //LocationActions.favoriteLocation({id:15, name:'khi'});
      callback(action,{id:15, name:'khi'});
       expect(alt.dispatcher.register.mock.calls.length).toBe(1);
      // use our spy to ensure that the illegal action was NOT called
      
    });

});
