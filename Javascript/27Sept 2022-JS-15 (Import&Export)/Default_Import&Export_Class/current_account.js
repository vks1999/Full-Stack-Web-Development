const Account = require('./account');
class Current_Account extends Account {

}
let cc = new Current_Account();
console.log(cc.get_MinBal());