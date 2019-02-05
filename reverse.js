function reverse(data) {
    if (typeof data === 'string')
        data = data.split('');
    else if (typeof data === 'object')
        console.log("Good to go!");
    else
        return;
    return data.reverse();
}
console.log(reverse('Abhinav'));
console.log(reverse(['Abhinav', 'Bahiya', 'JavaScript']));
//# sourceMappingURL=reverse.js.map