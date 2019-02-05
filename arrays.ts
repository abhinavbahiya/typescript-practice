// var arr1: number[];
// var arr2: Array<number>;

// var nArr = [10, 20, 30, 40, 50];
// var dataArr = [10, "ABC", true];
// dataArr = [10, 20, 30, 40];
// dataArr = ["ABC", "PQR"]

// var myArr: (string | number | boolean)[];
// myArr = [10, 20, "ABC", true];

// var numArr = [10, 20, 30, 40, 50];

// for (let i = 0; i < numArr.length; i++) {
//     console.log(numArr[i]);    
// }

// for (const key in numArr) {
//     // console.log(key + " -------- " + numArr[key]);    
//     // Template Literal
//     console.log(`${key} -------- ${numArr[key]}`);    
// }

var employees = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Ram" },
    { id: 3, name: "Abhijeet" },
    { id: 4, name: "Pravin" },
    { id: 5, name: "Subodh" }
];

// for (const key in employees) {
//     console.log(`${key} -------- ${employees[key].id}, ${employees[key].name}`);    
// }

// employees.forEach(function (item) {
//     console.log(item.id, item.name);
// });

// employees.forEach((item)  => {
//     console.log(item.id, item.name);
// });

// for (const item of employees) {
//     console.log(item.id, item.name);
// }

var result = employees.find(item => item.id == 3);
// var result = employees.filter(item => item.id == 3);
console.log(result);