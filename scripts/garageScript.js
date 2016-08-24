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
  // updated to display better info for the cars than just an ul
  // empty carsOut div (was a ul in previous versions)
  document.getElementById( 'carsOut' ).innerHTML = '';
  // for each car in the garage array, add a list item with it's text
  for( var i = 0; i < myGarage.length; i++ ){
    // write HTML for this car in a variable
    var carInfo = '<b>' + myGarage[ i ].year + ' ' + myGarage[ i ].make + ' ' + myGarage[ i ].model + '</b><br />' + myGarage[ i ].description + '<br /><img src="' + myGarage[ i ].picURL + '">';
    // append html variable to div
    document.getElementById( 'carsOut' ).innerHTML += carInfo;
  } // end for
}; // end showCars
