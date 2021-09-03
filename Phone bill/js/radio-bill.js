
const billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
const radioBillAddBtnElement = document.querySelector(".calculateBtn");
const callTotalTwoElement = document.querySelector(".callTotalTwo");
const smsTotalTwoElement = document.querySelector(".smsTotalTwo");
const totalTwoElement = document.querySelector(".totalTwo");
//const addToBillBtn = document.querySelector(".addToBillBtn"); 
//const textTotalAddBtn = document.querySelector(".calculateBtn"); 

var checkedRadioBtn; 
var billItemType; 
var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;


var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
}


















// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

radioBillAddBtnElement.addEventListener('click', radioBillTotal);

function radioBillTotal(){
    
    var billTypeEntered = billItemTypeRadioElement.value.trim();
    console.log(billTypeEntered);
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }

}

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

callTotalTwoElement.innerHTML = callsTotal.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalTwoElement.innerHTML = totalCost.toFixed(2);
