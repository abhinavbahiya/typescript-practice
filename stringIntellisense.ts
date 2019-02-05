// var data = "25.5asasas";

// var res1 = parseInt(data) + 10;
// console.log(res1);

// var res2 = parseFloat(data) + 10;
// console.log(res2);

// var res3 = Number(data) + 10;
// console.log(res3);

let myData:any = "This is just for check...";

let l1 = myData.length;
let l2 = (<string>myData).length;
let l3 = (myData as string).length;
let l4 = (myData as number).toFixed();

console.log(l1);
console.log(l2);
console.log(l3);
console.log(l4);