console.log( 'garageScript.js sourced' );
// myGarage array
var myGarage=[];

var addCar = function( year, make, model, picURL, description ){
  console.log( 'in addCar' );
  // create new car Object
  var newCar={
    year: document.getElementById( 'yearIn' ).value,
    make: document.getElementById( 'makeIn' ).value,
    model: document.getElementById( 'modelIn' ).value,
    picURL: document.getElementById( 'picURLIn' ).value,
    description: document.getElementById( 'descriptionIn' ).value
  }; // end new car object
  // push into array
  myGarage.push( newCar );
  // show cars
  showCars();
}; // end addCar

var showCars = function(){
  console.log( 'in showCars');
  // write each record of the array to an ul element on dom with id "carsOut"
  // empty carsOut ul
  document.getElementById( 'carsOut' ).innerHTML = '';
  // for each car in the garage array, add a list item with it's text
  for( var i = 0; i < myGarage.length; i++ ){
    // create a new list item
    var listItem = document.createElement( 'li' );
    // assemble text for the current car
    var carInfo = myGarage[ i ].year + ' ' + myGarage[ i ].make + ' ' + myGarage[ i ].model + ': ' + myGarage[ i ].description + ', picURL: ' + myGarage[ i ].picURL;
    // create text node for text within list item with the car info
    var textNode = document.createTextNode( carInfo );
    // append text node to list item
    listItem.appendChild( textNode );
    // append list item to ul
    document.getElementById( 'carsOut' ).appendChild( listItem );
  } // end for
}; // end showCars
