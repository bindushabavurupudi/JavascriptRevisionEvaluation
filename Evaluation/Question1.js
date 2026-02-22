// Question1
function createBankAccount(){
    let transactions = [];
    let balance = 0;
    function deposit(amount){
        if(amount <= 0){
            return "Balance must be positive";
        }
        balance += amount;
        transactions.push({type: "deposit", amount : amount});
        return `Amount ${amount} deposited`;
    }

    function withdraw(amount){
        if(amount <= 0){
            return "Balance must be positive";
        }
        if(balance < amount){
            return "Insufficient Balance";
        }
        balance -= amount;
        transactions.push({type: "withdraw", amount : amount});
        return `Amount ${amount} withdrawn`;
    }
    function getBalance(){
        return balance;
    }
    function getTransactionHistory(){
        return transactions;
    }

    return {deposit, withdraw, getBalance, getTransactionHistory};
}


let account = createBankAccount();
console.log(account.deposit(10000));
console.log(account.withdraw(10000));
console.log(account.withdraw(10000));
console.log(account.getBalance(10000));
console.log(account.getTransactionHistory(10000));


