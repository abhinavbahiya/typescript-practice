// class Employee {
//     private _name: string;

//     // Multiple Constructors not Allowed 
//     // constructor() {
//     //     this._name = name;
//     // }

//     constructor(name = "NA") {
//         this._name = name;
//     }

//     public getName(): string {
//         return this._name;
//     }

//     // Donot use Lambda as Class Member (Increase Memory Usage)
//     // getName = () => this._name;

//     public setName(name: string) {
//         this._name = name;
//     }
// }

// var e1 = new Employee();
// console.log(e1.getName());
// e1.setName("Abhijeet");
// console.log(e1.getName());

// // var e2 = new Employee("Manish");

// ------------------------------ Properties
// class Employee {
//     private _name: string;

//     constructor(name = "NA") {
//         this._name = name;
//     }

//     public get Name(): string {
//         return this._name;
//     }

//     public set Name(name: string) {
//         this._name = name;
//     }
// }

// var e1 = new Employee("Manish");
// console.log(e1.Name);
// e1.Name = "Abhijeet";
// console.log(e1.Name);

// ------------------------------ Parameter Members
// class Employee {
//     constructor(private _name = "NA", private _age = 0) { }

//     public get Name(): string {
//         return this._name;
//     }

//     public set Name(name: string) {
//         this._name = name;
//     }

//     public get Age(): number {
//         return this._age;
//     }

//     public set Age(age: number) {
//         this._age = age;
//     }
// }

// var e1 = new Employee("Manish");
// console.log(e1.Name);
// e1.Name = "Abhijeet";
// console.log(e1.Name);

// ----------------------------------- Why use Static?

// class BankAccount {
//     constructor(private _bankName: string) { }

//     get BankName(): string {
//         return this._bankName;
//     }
// }

// var a1 = new BankAccount("ICICI");
// console.log("Account 1 Details: ");
// console.log("Bank Name: ", a1.BankName);

// var a2 = new BankAccount("ICICI");
// console.log("Account 2 Details: ");
// console.log("Bank Name: ", a2.BankName);

// class BankAccount {
//     private static _bankName: string;

//     static set BankName(bankName: string) {
//         BankAccount._bankName = bankName;
//     }

//     get BankName(): string {
//         return BankAccount._bankName;
//     }
// }

// BankAccount.BankName = "ICICI";

// var a1 = new BankAccount();
// console.log("Account 1 Details: ");
// console.log("Bank Name: ", a1.BankName);

// var a2 = new BankAccount();
// console.log("Account 2 Details: ");
// console.log("Bank Name: ", a2.BankName);

// -----------------------------------------

class BankAccount {
    private static _bankName: string;

    constructor(private readonly _accNumber: number) { }

    static set BankName(bankName: string) {
        BankAccount._bankName = bankName;
    }

    get BankName(): string {
        return BankAccount._bankName;
    }

    get AccNumber(): number {
        return this._accNumber;
    }
}

BankAccount.BankName = "ICICI";

var a1 = new BankAccount(1);
console.log("Account 1 Details: ");
console.log("Bank Name: ", a1.BankName);
console.log("Account Number: ", a1.AccNumber);


var a2 = new BankAccount(2);
console.log("Account 2 Details: ");
console.log("Bank Name: ", a2.BankName);
console.log("Account Number: ", a2.AccNumber);

// When you want to use class as singelton mark the constructor as private