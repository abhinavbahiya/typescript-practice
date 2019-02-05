var calculator = (function () {
    function add(x, y) {
        return x + y;
    }
    function sub(x, y) {
        return x - y;
    }
    function mul(x, y) {
        return x * y;
    }
    function div(x, y) {
        return x / y;
    }
    return {
        add: add,
        sub: sub,
        mul: mul
    };
})();
var arr = [10, 20, 30, 40, 50];
var [x, , y] = arr;
console.log("Before: ", x, y);
[x, y] = [y, x];
console.log("After: ", x, y);
//# sourceMappingURL=destructuring.js.map