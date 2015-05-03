var flight = require('./flight/index');

flight.setOrigin('LAX');
flight.setDestination('DCA');
flight.setNumber(462);

console.log(flight.getInfo());

var anotherFlight = require('./flight/index');

console.log(anotherFlight.getInfo());