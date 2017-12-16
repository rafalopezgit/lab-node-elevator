const Elevator = require('./elevator.js');


let myElevator = new Elevator();


for (let p = myElevator.floor; p < myElevator.MAXFLOOR; p++ ) {
  myElevator.floorUp();
  myElevator.log()
};


for (let p = myElevator.floor; p > 0; p--) {
  myElevator.floorDown();
  myElevator.log()
};
