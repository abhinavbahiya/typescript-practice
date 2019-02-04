// var arr = [];
// var arr: number[];
// var arr: Array<number>;


// function Average1(args: number[]) {

// }

// Average1([1]);
// Average1([1, 2]);

// Rest Parameter
function Average2(...args: number[]) { // [{id: '', name: ''}]
    var sum = 0;

    for (let i = 0; i < args.length; i++) {
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
console.log(Average2(...arr));  // Spread Operator
