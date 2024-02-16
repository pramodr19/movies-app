
// let i=require('./appService.js')

// i.doStuff(40).then((data)=>{
// console.log(data)
// }).catch((err)=>{
//     console.log(err)
// });

let a={
    x:10,
    y:20,
    z:30
}

let b={
    x:2,
    y:3,
    z:4

}

function coOrdinates(){
    console.log(this.x+","+this.y);
}
let c1=coOrdinates.bind(a);
let c2=coOrdinates.bind(b);
c1();
c2();