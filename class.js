class BankAccount {
    constructor(_accNumber) {
        this._accNumber = _accNumber;
    }
    static set BankName(bankName) {
        BankAccount._bankName = bankName;
    }
    get BankName() {
        return BankAccount._bankName;
    }
    get AccNumber() {
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
//# sourceMappingURL=class.js.map