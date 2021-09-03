// get a reference to the textbox where the bill type is to be entered
const billTypeTextElement = document.querySelector(".billTypeText");
const addToBillBtnElement = document.querySelector(".addToBillBtn");
const callTotalOneElement = document.querySelector(".callTotalOne");
const smsTotalOneElement = document.querySelector(".smsTotalOne");
const totalOneElement = document.querySelector(".totalOne");
const textTotalAddBtn = document.querySelector(".calculateBtn"); 
const addToBillBtn = document.querySelector(".addToBillBtn"); 

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;
//function textBillTotal(){
    // get the value entered in the billType textfield
    //var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    //if (billTypeEntered === "bill"){
        //callsTotal += 2.75
    //}
    //else if (billTypeEntered === "sms"){
        //smsTotal += 0.75;
    //}
    
    //update the totals that is displayed on the screen.
    //callsTotalElem.innerHTML = callsTotal.toFixed(2);
    //smsTotalElem.innerHTML = smsTotal.toFixed(2);
    //var totalCost = callsTotal + smsTotal;
    //totalCostElem.innerHTML = totalCost.toFixed(2);
//}

addToBillBtn.addEventListener('click', textBillTotal);

function textBillTotal(){
    
    var billTypeEntered = billTypeTextElement.value.trim();
    console.log(billTypeEntered);
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    

    // ... other code here
    
    //update the totals that is displayed on the screen.
    callTotalOneElement.innerHTML = callsTotal.toFixed(2);
    smsTotalOneElement.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalOneElement.innerHTML = totalCost.toFixed(2);
    
    //color the total based on the criteria
    if (totalOneElement >= 50){
        // adding the danger class will make the text red
        totalOneElement.classList.add("danger");
    }
    else if (totalOneElement >= 30){
        totalOneElement.classList.add("warning");
    }
}
