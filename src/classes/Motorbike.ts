// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle{
  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
  // TODO: Create a constructor that accepts the properties of the Motorbike class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    super();

    // Initialize properties of the Car class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
  }
  wheelie(bikey: Motorbike): void {
    if (bikey.vin != '' ) {
      console.log(bikey.make);
    }
    if (bikey.model != '' ) {
      console.log(bikey.model);
    }
    console.log(`Motorbike ${bikey.make} ${bikey.model} is doing a wheelie!`);
  }
  // TODO: Override the printDetails method from the Vehicle class
    override printDetails(): void {
      // Call the printDetails method of the parent class, Vehicle
      super.printDetails();

      // Print details of the Car class
      console.log(`VIN: ${this.vin}`);
      console.log(`Color: ${this.color}`);
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Weight: ${this.weight} lbs`);
      console.log(`Top Speed: ${this.topSpeed} mph`);

      // Print details of the wheels
      console.log(
        `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
      );
      console.log(
        `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
      );

    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Motorbike
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
  }
}

// Export the Motorbike class as the default export
export default Motorbike;