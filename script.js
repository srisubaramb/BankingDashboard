//Selecting the components in the page using DOM
const currentBalanceEle = document.getElementById('current-bal');
const depositAmountEle = document.getElementById("deposit-amount");
const withdrawAmountEle = document.getElementById("withdrawal-amount");
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
//creating the balance value
let currentBalance = 1000;
//Rendering the content into the balance component
function renderCurrentBal() {
    currentBalanceEle.textContent = `$${currentBalance}`;
}

renderCurrentBal()
//Deposit amount function is to handle the deposit value
function depositAmount() {
    currentBalance += Number(depositAmountEle.value);
    renderCurrentBal()
    depositAmountEle.value = "";
}
//withdraw the amount and to reduce the balance amount function
function withdrawAmount() {
    const amount = Number(withdrawAmountEle.value);
    //To alert the user for Not sufficient balance
    if(amount > currentBalance) {
        alert(`Your balance ${currentBalance} is not sufficient`)
    }
    //Just trying to use ternary operator
    currentBalance = amount > currentBalance ? currentBalance : currentBalance - amount;
    renderCurrentBal()
    withdrawAmountEle.value = "";
}


