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
  console.log( myGarage );
}; // end showCars
