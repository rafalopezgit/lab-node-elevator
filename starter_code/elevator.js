class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";
    this.movement;

  }

  start() {
    this.movement = setInterval(() => this.update(), 1000);
  }

  stop() {
    clearInterval(this.movement)
  }
  update() {
    this.log(this.floor)
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.direction = "up";
      this.floor++
    }
  }
  floorDown() {
    if (this.floor > 0) {
      this.direction = "down";
      this.floor--
    }
  }
  call(person) { this.request.push(person)}

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
