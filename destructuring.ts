var calculator = (function () {
    function add(x: number, y: number) {
        return x + y;
    }

    function sub(x: number, y: number) {
        return x - y;
    }

    function mul(x: number, y: number) {
        return x * y;
    }

    function div(x: number, y: number) {
        return x / y;
    }

    return {
        add: add,
        sub: sub,
        mul: mul
    };
})();

// console.log(calculator);

// var add = calculator.add;
// var sub = calculator.sub;

// Object Destructuring
// var { add, sub } = calculator;

// console.log(add(2, 3));
// console.log(sub(2, 3));

var arr = [10, 20, 30, 40, 50];
// var x = arr[0];
// var y = arr[1];

// Array Destructuring
// var [x,, y] = arr;
// console.log(x, y);

var [x, , y] = arr;
console.log("Before: ", x, y);

[x, y] = [y, x];
console.log("After: ", x, y);
