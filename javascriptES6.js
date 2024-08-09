const withdraw = (person, amount) => {
    if (amount > person.balance) {
        console.log("Withdrawal cannot be processed due to insufficient funds.");
    } else {
        person.balance -= amount;
        console.log(`Withdrawal is successful. The remaining balance is: ${person.balance}`);
    }
};

const person = {
    name: "John",
    balance: 8000,
};

withdraw(person, 500);
withdraw(person, 9000);