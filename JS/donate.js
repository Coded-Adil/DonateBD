document.getElementById('btn-donate-money1').addEventListener('click', function(event){
    event.preventDefault();
    const donateMoney = document.getElementById('amount-input1').value;

    if (donateMoney > 0) {
        // Get the Current Balance
        const balance = document.getElementById('account-balance').innerText;
        const donated = document.getElementById('prev-donated1').innerText;
        const addMoneyNumber = parseFloat(donateMoney);
        const balanceNumber = parseFloat(balance);
        const prevDonate = parseFloat(donated);
        const newBalance = balanceNumber - addMoneyNumber;
        const newDonate = prevDonate + addMoneyNumber;

        // Update balance
        document.getElementById('account-balance').innerText = newBalance;
        document.getElementById('prev-donated1').innerText = newDonate;
    }else{
        alert("Failed to Donate.");
    }
})
document.getElementById('btn-donate-money2').addEventListener('click', function(event){
    event.preventDefault();
    const donateMoney = document.getElementById('amount-input2').value;

    if (donateMoney > 0) {
        // Get the Current Balance
        const balance = document.getElementById('account-balance').innerText;
        const donated = document.getElementById('prev-donated2').innerText;
        const addMoneyNumber = parseFloat(donateMoney);
        const balanceNumber = parseFloat(balance);
        const prevDonate = parseFloat(donated);
        const newBalance = balanceNumber - addMoneyNumber;
        const newDonate = prevDonate + addMoneyNumber;

        // Update balance
        document.getElementById('account-balance').innerText = newBalance;
        document.getElementById('prev-donated2').innerText = newDonate;
    }else{
        alert("Failed to Donate.");
    }
})
document.getElementById('btn-donate-money3').addEventListener('click', function(event){
    event.preventDefault();
    const donateMoney = document.getElementById('amount-input3').value;

    if (donateMoney > 0) {
        // Get the Current Balance
        const balance = document.getElementById('account-balance').innerText;
        const donated = document.getElementById('prev-donated3').innerText;
        const addMoneyNumber = parseFloat(donateMoney);
        const balanceNumber = parseFloat(balance);
        const prevDonate = parseFloat(donated);
        const newBalance = balanceNumber - addMoneyNumber;
        const newDonate = prevDonate + addMoneyNumber;

        // Update balance
        document.getElementById('account-balance').innerText = newBalance;
        document.getElementById('prev-donated3').innerText = newDonate;
    }else{
        alert("Failed to Donate.");
    }
})