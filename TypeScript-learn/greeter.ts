function greeter(ad:string) {
    console.log("hello" + ad)
}

greeter("Gülşən")



enum Payment{kredit,havale,nft}

let kredit=Payment.kredit;
let havale=Payment.havale
let nft=Payment.nft

function getAverage(a:number,b:number,c:number){
    let total=a+b
    let count=2
    if(typeof c !=="undefined"){
        total+=c
        count++
    }

    let reult=total/count
    return reult

}

getAverage(10,20,30)


