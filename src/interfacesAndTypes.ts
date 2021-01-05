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
    detonatorButton?: boolean;

    enter(): void;
    explode?(): void;
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

    constructor(doors: number, windows: number, optionalParam?: string) {
        this._doors = doors;
        this.windows = windows;
        if (optionalParam) {
            console.log(optionalParam);
        }
    }

    enter(): void {
    }

}