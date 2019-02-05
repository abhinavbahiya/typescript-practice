// let area = function (rect: { h: number, w: number }) {
//     return rect.h * rect.w;
// }

// let s1 = { h: 10, w: 20 };
// console.log(area(s1));

// let s2 = { h: 100, w: 200, d: 300 };
// console.log(area(s2));

// interface Rectangle {
//     h: number;
//     w?: number;
// }

// let area = function (rect: Rectangle) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1: Rectangle = { h: 10, w: 20 };
// console.log(area(s1));

// let s2: Rectangle = { h: 100, w: 200 };
// console.log(area(s2));

// let s3: Rectangle = { h: 100 };
// console.log(area(s3));

interface IPerson {
    name: string; // we can make this as readonly as well
    age: number;
    greet: (msg: string) => string;
}


var p1: IPerson = {
    name: "Abhijeet",
    age: 30,
    greet: function (m) {
        return "Hi";
    }
};


var p2: IPerson = {
    name: "Ramakant",
    age: 30,
    greet: function (m) {
        return "Hello";
    }
};


console.log(typeof p1);
console.log(typeof p2);