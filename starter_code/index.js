const Elevator = require('./elevator.js');
const Person = require('./person.js');


let elevator = new Elevator();

let person1 = new Person(Mary, 1, 3);
let person2 = new Person(John, 4, 1);
let person3 = new Person(Peter, 1, 9);

//El elevador sube
/*
for (let p = elevator.floor; p < elevator.MAXFLOOR; p++ ) {
  elevator.floorUp();
  elevator.log()
};
*/

//El elevador baja
/*
for (let p = elevator.floor; p > 0; p--) {
  elevator.floorDown();
  elevator.log()
};
*/

elevator.call(person1)
elevator.call(person2)
elevator.call(person3)
