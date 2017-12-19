class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";
    this.waitingList = [];
    this.passengers = [];

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

  call(person, originFloor) {
    this.waitingList.push(person)
    this.requests.push(originFloor)
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }

  movement(){
    
  }
}

module.exports = Elevator;
