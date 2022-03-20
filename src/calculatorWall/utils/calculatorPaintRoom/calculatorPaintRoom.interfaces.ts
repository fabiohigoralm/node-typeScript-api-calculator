export interface wall {
    widthWall: number;
    wallHeight: number;
    quantityDoor: number;
    quantityWindow: number;
}

export interface responseWall {
    lata2l: number;
    lata5l: number;
}

export interface objMessage {
    wall: wall;
    message: Array<string>;
    error: boolean;
    totalMeters: number;
}
export interface messageError { [x: string]: string[]; }
