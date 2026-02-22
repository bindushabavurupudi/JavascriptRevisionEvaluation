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
    }
    function getBalance(){
        return balance;
    }
    function getTransactionHistory(){
        return transactions;
    }

    return {deposit, withdraw, getBalance, getTransactionHistory};
}

