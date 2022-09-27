const Account = require('./account');
class Savings_Account extends Account {
    withdraw() {
        console.log("Heyy, Pls Withdraw and then Go Movie");
    }
}
let sa1 = new Savings_Account();
console.log(sa1.min_Bal);
sa1.get_Account_Details();