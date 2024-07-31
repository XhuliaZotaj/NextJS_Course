

function withdraw (people,amount ){
    if (amount > people.balance ){
        console.log("Withdrawal cannot be processed due to insufficient funds.")
    } else {
        people.balance -= amount ;
        console.log('Withdrawl is succesful. The ramining balance is :'+ people.balance);
    }
}

let people ={            
    name: "John",
    balance : 8000,
};

withdraw(people,500);
withdraw(people, 9000);
