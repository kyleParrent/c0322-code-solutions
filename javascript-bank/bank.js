/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && (balance % 1) === 0) {
    var newAcc = new Account(this.nextAccountNumber, holder);
    newAcc.deposit(balance);
    this.accounts.push(newAcc);
    this.nextAccountNumber++;
    return newAcc.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      var theAccount = this.accounts[i];
      return theAccount;
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalAss = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    var oneBalance = this.accounts[i].getBalance();
    totalAss += oneBalance;
  }
  return totalAss;
};
