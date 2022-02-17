// Make calculate button functional 
document.getElementById('calculate-btn').addEventListener('click', function (){
    const food = document.getElementById('food-input').value;
    const foodTk = parseFloat(food);
    const rent = document.getElementById('rent-input').value;
    const rentTk = parseFloat(rent);
    const bills = document.getElementById('bills-input').value;
    const billsTk = parseFloat(bills);
    // Error handling 
    if(  food == '' || food < 0 || rent == '' || rent < 0 || bills == '' || bills < 0 ){
        document.getElementById('fail-sms').style.display ='block';
    }
    else{
        let totalCost = 0;
        totalCost = foodTk + rentTk + billsTk;
        const expenses = incomeCalculation() - totalCost;
        
        const totalExpenses = document.getElementById('expenses-tag');
        totalExpenses.innerText = totalCost;
        const mainBalance = document.getElementById('balance-tag');
        mainBalance.innerText = expenses;
        
        document.getElementById('fail-sms').style.display ='none';
    }
});

// Function to get Income Balance 
function incomeCalculation(){
    let income = document.getElementById('income-input').value;
    let incomeTk = parseFloat(income);
    return incomeTk;
}

// Make save button functional 
document.getElementById('save-btn').addEventListener('click', function (){
    const saving = document.getElementById('save-input').value;
    const savingTk = parseFloat(saving) / 100;
    let mySaving= 0;
    mySaving= incomeCalculation() * savingTk;
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = mySaving;

    const mainBalance = document.getElementById('balance-tag');
    const balanceInTk = parseFloat(mainBalance.innerText);
    /* let remain = 0;
    remain = balanceInTk - mySaving */;
    // Error handling 
    if(mySaving > balanceInTk || mySaving < 0 || mySaving == ''){
        document.getElementById('fail-save-sms').style.display ='block';
    }
    else{
        let remain = 0;
        remain = balanceInTk - mySaving
        const remaining = document.getElementById('remain-tag');
        remaining.innerText = remain;
        document.getElementById('fail-save-sms').style.display ='none';
    }
})