const Account = require('./account');
class Savings_Account extends Account {

}
let s1 = new Savings_Account();
console.log(s1.get_MinBal());