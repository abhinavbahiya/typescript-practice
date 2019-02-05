function Hello(...args) {
    if (args.length == 0)
        console.log("Hello World!");
    else if (args.length == 1)
        console.log("Hello, " + args[0]);
    else
        throw Error("Invalid Arguments");
}
Hello();
Hello("Manish");
//# sourceMappingURL=overloading.js.map