class Car {
    private _model!: string;

    get model(): string {
        return this._model;
    }
    set model(value: string) {
        this._model = value;
    }

    constructor(model: string) {
        this.model = model
    }
}

let car = new Car('Duster')

console.log(car.model)
