class Vehicle {
    constructor(id, make) {
        this._id = id;
        this._make = make;
    }
    start() {
        return `Vehicle with id: ${this._id}, make as ${this._make} started...`;
    }
}
class FourWheeler extends Vehicle {
    constructor(id = 0, make = "Honda", model = "Civic") {
        super(id);
        this._make = make;
        this._model = model;
    }
    start() {
        var baseStart = super.start();
        return `${baseStart}, model is ${this._model}`;
    }
    move() {
        return "Moving like a car.";
    }
}
var v = new FourWheeler(1, "Ford", "Mustang");
console.log(v.start());
console.log(v.move());
//# sourceMappingURL=inheritance.js.map