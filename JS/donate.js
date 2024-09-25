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

        const newDiv = document.createElement('div');
        newDiv.classList.add('border-2');
        newDiv.classList.add('p-6');
        newDiv.classList.add('m-16');
        newDiv.classList.add('rounded-xl');

       
        const newH1 = document.createElement('h1');
        newH1.classList.add('text-xl');
        newH1.classList.add('font-bold');

        const span1 = document.createElement('span');
        span1.innerText = addMoneyNumber;

        const span2 = document.createElement('span');
        span2.innerText = ' Taka is Donated for Flood at Noakhali, Bangladesh';

        
        const newP = document.createElement('p');

        const currentTime = new Date();
        const dateString = currentTime.toLocaleDateString();
        const timeString = currentTime.toLocaleTimeString();
        
        newP.textContent = dateString+ timeString+ '(Bangladesh Standard Time)';

        
        newH1.appendChild(span1);
        newH1.appendChild(span2);
        newDiv.appendChild(newH1);
        newDiv.appendChild(newP);

        const parentDiv = document.getElementById('history');
        parentDiv.appendChild(newDiv);
    }else{
        alert("Invalid Donation amount. Please Input valid donation amount. Minimum Donate amount 1 BDT");
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

        const newDiv = document.createElement('div');
        newDiv.classList.add('border-2');
        newDiv.classList.add('p-6');
        newDiv.classList.add('m-16');
        newDiv.classList.add('rounded-xl');

       
        const newH1 = document.createElement('h1');
        newH1.classList.add('text-xl');
        newH1.classList.add('font-bold');

        const span1 = document.createElement('span');
        span1.innerText = addMoneyNumber;

        const span2 = document.createElement('span');
        span2.innerText = ' Taka is Donated for famine-2024 at Feni, Bangladesh';

        
        const newP = document.createElement('p');
        
        const currentTime = new Date();
        const dateString = currentTime.toLocaleDateString();
        const timeString = currentTime.toLocaleTimeString();
        
        newP.textContent = dateString+ timeString+ '(Bangladesh Standard Time)';

        
        newH1.appendChild(span1);
        newH1.appendChild(span2);
        newDiv.appendChild(newH1);
        newDiv.appendChild(newP);

        const parentDiv = document.getElementById('history');
        parentDiv.appendChild(newDiv);
    }else{
        alert("Invalid Donation amount. Please Input valid donation amount. Minimum Donate amount 1 BDT");
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

       
        const newDiv = document.createElement('div');
        newDiv.classList.add('border-2');
        newDiv.classList.add('p-6');
        newDiv.classList.add('m-16');
        newDiv.classList.add('rounded-xl');

       
        const newH1 = document.createElement('h1');
        newH1.classList.add('text-xl');
        newH1.classList.add('font-bold');

        const span1 = document.createElement('span');
        span1.innerText = addMoneyNumber;

        const span2 = document.createElement('span');
        span2.innerText = ' Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh';

        
        const newP = document.createElement('p');
        
        const currentTime = new Date();
        const dateString = currentTime.toLocaleDateString();
        const timeString = currentTime.toLocaleTimeString();
        
        newP.textContent = dateString+ timeString+ '(Bangladesh Standard Time)';

        
        newH1.appendChild(span1);
        newH1.appendChild(span2);
        newDiv.appendChild(newH1);
        newDiv.appendChild(newP);

        const parentDiv = document.getElementById('history');
        parentDiv.appendChild(newDiv);

        // Update balance
        document.getElementById('account-balance').innerText = newBalance;
        document.getElementById('prev-donated3').innerText = newDonate;

        const myModal = getElementById('my_modal_1');
        myModal.showModal();
    }else{
        alert("Invalid Donation amount. Please Input valid donation amount. Minimum Donate amount 1 BDT");
    }
})