/// Q1 - Bank Account using Closures
function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;
  let transactions = [];

  function deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than 0";
    }
    balance += amount;
    transactions.push({ type: "deposit", amount });
    return `Deposited ${amount}`;
  }

  function withdraw(amount) {
    if (amount <= 0) {
      return "Withdraw amount must be greater than 0";
    }
    if (amount > balance) {
      return "Insufficient balance";
    }
    balance -= amount;
    transactions.push({ type: "withdraw", amount });
    return `Withdrawn ${amount}`;
  }

  function getBalance() {
    return balance;
  }

  function getTransactionHistory() {
    return transactions;
  }

  return {
    deposit,
    withdraw,
    getBalance,
    getTransactionHistory
  };
}
