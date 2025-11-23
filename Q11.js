function createWallet() {
  let balance = 0;

  return {
    addMoney: function (amount) {
      balance += amount;
    },
    checkBalance: function () {
      console.log(balance);
    }
  };
}

// Test
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance(); 
