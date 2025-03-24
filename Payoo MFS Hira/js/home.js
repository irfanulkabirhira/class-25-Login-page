// add Money To the Account

// add an event handler to the button
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    // To grap the Input add money and pin number
    const addMoney = document.getElementById('input-add-money').value;
    const inputPin = document.getElementById('input-pin-number').value;

    if(inputPin === '1234'){
        console.log('adding money to your account');
        const balance = document.getElementById('account-balance').innerText;

        // add balance ==> Number a convert korci
        const addMoneyNumber = parseFloat(addMoney);
        // Converting the balance into number too
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;

        // update the account balance
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add Money! Please provide correct pin number');
    }
})