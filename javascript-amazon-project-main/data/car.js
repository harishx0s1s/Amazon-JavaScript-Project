class Car {
  #brand;
  #model;
  #speed=0;
  isTrunckOpen = false;
  constructor(carDetails){
    this.#brand = carDetails.brand
    this.#model = carDetails.model
  }
  go(){
    if (!this.isTrunckOpen){
      this.#speed +=5
    }
  }

  break(){
    this.#speed-=5

    if (this.#speed < 0){
      this.#speed = 0
      
    }
  }

  openTrunk(){
    if(this.#speed===0){
      this.isTrunckOpen = true;
    }
  }

  closeTrunk(){
    this.isTrunckOpen = false;
  }

  displayInfo(){
    const trunkStatus = this.isTrunckOpen ? 'open' : 'closed'
    console.log(`${this.#brand}\n${this.#model}\nSpeed: ${this.#speed} km/h\nTrunk : ${trunkStatus}`)
  }
}

class RaceCar extends Car{
  acceleration;
  constructor(carDetails){
    super(carDetails)
    this.acceleration = carDetails.acceleration
  }
  go(){
    this.speed += this.acceleration

    if (this.speed > 300){
      this.speed = 300
    }
  }

  openTrunk(){
    console.log('race car do not have trunk')
  }

  closeTrunk(){
    console.log('race car do not have trunk')
  }

  // displayInfo(){
  //   //const trunkStatus = this.isTrunckOpen ? 'open' : 'closed'
  //   console.log(`${this.brand}\n${this.model}\nSpeed: ${this.speed} km/h`)
  // }

}

const car1 = new Car({brand: 'toyata', model: 'corolla'})
const car2 = new Car({brand: 'Tesla', model: 'model 3'})
const raceCar = new RaceCar({
  brand:'McLaren',
  model:'f1',
  acceleration:20
})

// raceCar.displayInfo()
// raceCar.openTrunk()
// raceCar.go()
// raceCar.go()
// raceCar.go()
// raceCar.go()
// raceCar.break()
// raceCar.displayInfo()

car1.displayInfo()
car1.go()
car1.displayInfo()
car1.break()
car1.displayInfo()
car1.go()
car1.go()
car1.go()
car1.displayInfo()

raceCar.displayInfo()
raceCar.go()      // we cant access the privated property by in different class only private properties allowed to access indside or in same class
raceCar.displayInfo()