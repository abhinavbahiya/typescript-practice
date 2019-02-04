function reverse(n: string): Array<string>;
function reverse(n: Array<string>): Array<string>;

function reverse(data: (string | Array<string>)): Array<string> {
    if(typeof data === 'string')
        data = data.split('');
    else if(typeof data === 'object') // Just to make sure! No need of this condition
        console.log("Good to go!")
    else
        return;
    return data.reverse();
}

console.log(reverse('Abhinav'));

console.log(reverse(['Abhinav','Bahiya','JavaScript']));

// console.log(reverse(1));
