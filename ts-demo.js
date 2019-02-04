function Add1(a, b) {
    return a + b;
}
var Add2 = function (a, b) {
    return a + b;
};
var Add3;
Add3 = function (a, b) {
    return a + b;
};
var f;
f = 10;
var Add4;
Add4 = function (a, b) {
    return a + b;
};
var Add5;
Add5 = function (a, b) {
    return a + b;
};
var Add6;
Add6 = function (a, b) { return a + b; };
var Add7 = function (a, b) { return a + b; };
function Display(logic) {
    console.log(logic(2, 3));
}
function f1(x, y) {
    return x * y;
}
;
Display(f1);
Display(function (x, y) { return x * y; });
Display(function (x, y) { return x * y; });
Display(function (x, y) { return x * y; });
Display(function (x, y) { return x * y; });
function Add(a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    return a + b;
}
console.log(Add(2, 3));
console.log(Add(2));
console.log(Add());
