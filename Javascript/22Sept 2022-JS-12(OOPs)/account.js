class Account {
    // Properties And Methods
    min_Bal = 500;
    open_Acoount() {
        console.log("Account Opened Successfully");
    }
    deposit_Amount() {
        console.log("Amount Deposited Successfully");
    }
    get_Statement() {
        console.log("Getting The Statement");
    }
    get_Bal() {
        console.log("No Balance");
    }
    withdrawl() {
        console.log("First Deposit And Withdrawl");
    }
    close_Account() {
        console.log("Account Closed Successfully");
    }
}
let a1 = new Account();
console.log(a1.min_Bal);
a1.open_Acoount();
a1.deposit_Amount();
a1.get_Statement();
a1.get_Bal();
a1.withdrawl();
a1.close_Account();