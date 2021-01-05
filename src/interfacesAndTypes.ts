/*

Alternative to an interface

type IHome = {
    doors: number;
    windows: number;

    enter(): void;
}

*/

interface IHome {
    doors: number;
    windows: number;

    enter(): void;
}


class MyHome implements IHome {
    get doors(): number {
        return this._doors;
    }

    set doors(value: number) {
        this._doors = value;
    }
    private _doors: number;
    windows: number;

    constructor(doors: number, windows: number) {
        this._doors = doors;
        this.windows = windows;
    }

    enter(): void {
    }

}