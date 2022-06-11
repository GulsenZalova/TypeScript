// function sa(param:number) {
//     return param;
// }

// console.log(sa(12));
//  console.log("salam")

// function DeclareName(){
//     let name:string= "Gulsen";
//     let age : Number=45;
//     let isMarried:Boolean=false;
//     let hobbies:string[]=["a","b","c"];
//     let value:number|string|boolean=false;
// }
// DeclareName()

interface infoBlok{
    name:string,
    age:number,
    isMarried:boolean
}
// type infoBloks={
//     name:string,
//     age:number,
//     isMarried:boolean
// } 

let infoobject: Combine={
    name:"Arzu",
    age:23,
    isMarried:true,

}

let infoobject2:Combine={
    name:"Gulsen",
    age:25,
    isMarried:false,
}

let infoobject3={
    name:"Gulsen",
    age:25,
    isMarried:false,
} as Combine

let infoobject4=<Combine>{
    name:"Gulsen",
    age:25,
    isMarried:false,
}

type infoBloks={
    name:string,
    age:number,
    isMarried:boolean
} 

type infoBloks2={
    isMarried:boolean
    name:string,
}

type Combine=infoBloks | infoBloks2




function adTekrarla(ad:string, n:number){
    for(let i=0; i<n; i++){
        console.log(ad,n)
    }
}

adTekrarla("Gülşən",10)



interface Point{
    x: number,
    y: number
}

interface Passenger{
    name: string;
    nurname:string
}

interface Veicle{
    currentlocation:Point;
    travelTo(Point: Point): void;
    getDistance(PointA: Point, PointB: Point): number;
    addPassenger(Passenger: Passenger):void;
}