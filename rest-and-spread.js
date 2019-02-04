function Average2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < args.length; i++) {
        sum += args[i];
    }
    var length = args.length;
    if (length > 0)
        return sum / length;
    else
        return sum;
}
console.log(Average2());
console.log(Average2(1));
console.log(Average2(1, 2));
console.log(Average2(1, 2, 3, 4, 5));
console.log(Average2(1, 2, 3, 4, 5, 6, 7, 8, 9));
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Average2.apply(void 0, arr));
