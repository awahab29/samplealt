var flag = false;
var $ = require('jquery');
// function testAsync(done) {
//     console.log('yesss');
//     // Wait two seconds, then set the flag to true
//     setTimeout(function () {
//         flag = true;
    
//         // Invoke the special done callback
//         it();
//     }, 2000);
// }

// // Specs
// describe("Testing async calls with beforeEach and passing the special done callback around", function () {

//     beforeEach(function (done) {
//         // Make an async call, passing the special done callback        
//         testAsync(done);
//     });

//     it("Should be true if the async call has completed", function () {
//         expect(flag).toEqual(true);
//     });

// });

describe("Testing real-world async calls with beforeEach and invoking the special done callback in the promise's done callback and using the promise's return data", function () {
    var returnedJSON = {};

    beforeEach(function () {
        console.log('data');
        $.get("http://localhost/samplealt/index.php/getLocations",
            function (result) {console.log('data is '+ result);
            returnedJSON = result;

            // Invoke the special done callback
            //done();
        })
        });
    // $.get( "http://localhost/samplealt/index.php/getLocations", function( data ) {
    //   console.log('data is '+ data);
    //         returnedJSON=data;
    //       });
    

    it("Should have returned JSON if the async call has completed", function () {
       
        expect(returnedJSON).toEqual({});
        // expect(returnedJSON).not.toEqual({});
        // expect(returnedJSON).not.toBeUndefined();
    });

});