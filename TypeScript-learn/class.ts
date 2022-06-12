interface Point{
    x: number;
    y: number
}

interface Veicle{
    // currentLocation:Point;
    travelTo(point: Point): void;
}


class Taxi implements Veicle{
    constructor(private location:Point, private color?: string){}
    travelTo(point: Point): void{
        console.log(`Taxi X:${this.location.x} Y:${this.location.y};`)
    }
}


let taxi_1: Taxi=new Taxi({x:1,y:2});
taxi_1.travelTo({x:1,y:3})
