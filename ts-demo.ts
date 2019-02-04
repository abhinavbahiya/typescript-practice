// function Show() {
//     console.log("Show Completed...");
//     return 10;
// }

// Show();
// var r = Show();

// function Show(): void {
//     console.log("Show Completed...");
//     return 10;
// }

// Show();
// var r = Show();

// Function Declaration Syntax
function Add1(a: number, b: number): number {
    return a + b;
}

// Function Expression Syntax
var Add2 = function (a: number, b: number): number {
    return a + b;
}

var Add3: (x: number, y: number) => number;
Add3 = function (a: number, b: number): number {
    return a + b;
}

var f: number;
f = 10;

var Add4: (x: number, y: number) => number;
Add4 = function (a, b) {
    return a + b;
}


var Add5: (x: number, y: number) => number;
Add5 = (a, b) => {
    return a + b;
}

var Add6: (x: number, y: number) => number;
Add6 = (a, b) => a + b;

var Add7: (x: number, y: number) => number = (a, b) => a + b;

// console.log(Add1(2, 3));
// console.log(Add2(2, 3));
// console.log(Add3(2, 3));
// console.log(Add4(2, 3));
// console.log(Add5(2, 3));
// console.log(Add6(2, 3));
// console.log(Add7(2, 3));

// Dev1
function Display(logic: (a: number, b: number) => number) {
    console.log(logic(2, 3));
}

// Dev2
function f1(x: number, y: number) {
    return x * y;
};

Display(f1);
Display(function (x: number, y: number) { return x * y; });
Display(function (x, y) { return x * y; });
Display((x, y) => { return x * y; });
Display((x, y) => x * y);

// function hello(name: string) {
//     console.log("Hello,", name);
// }

// hello("Manish");
// hello();
// hello("Manish", "Sharma");

// function hello(name?: string) {
//     console.log("Hello,", name);
// }

// hello("Manish");
// hello();

// Optional Parameters (?)
// function Add(a?: number, b?: number): number {
//     a = a || 0;
//     b = b || 0;
//     return a + b;
// }

// Default Parameters
function Add(a = 0, b = 0): number {
    return a + b;
}

console.log(Add(2, 3));
console.log(Add(2));
console.log(Add());

