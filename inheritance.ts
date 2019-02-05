abstract class Vehicle {
    private _id: number;
    protected _make: string;

    constructor(id: number, make?: string) {
        this._id = id;
        this._make = make;
    }

    start() {
        return `Vehicle with id: ${this._id}, make as ${this._make} started...`;
    }

    abstract move(): string;
}

class FourWheeler extends Vehicle {

    private _model: string;

    constructor(id = 0, make = "Honda", model = "Civic") {
        super(id);
        this._make = make;
        this._model = model;
    }

    start() {
        var baseStart = super.start();
        return `${baseStart}, model is ${this._model}`;
    }

    move(): string {
        return "Moving like a car.";
    }
}

var v: Vehicle = new FourWheeler(1, "Ford", "Mustang");
console.log(v.start());
console.log(v.move());