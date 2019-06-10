// get a reference to the sms or call radio buttons

// get a reference to the add button

// create a variable that will keep track of the total bill

// add an event listener for when the add button is pressed

// in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

// var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var addToBillBtnElement2 = document.querySelector(".radioBillAddBtn");
var callsTotalElem2 = document.querySelector(".callTotalTwo");
var smsTotalElem2 = document.querySelector(".smsTotalTwo");
var totalCostElem2 = document.querySelector(".totalTwo");
var smsTotal2 = 0;
var callsTotal2 = 0;
var totalCost2 = 0;
 
function checkRadioBill(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    var buttonTypeEntered = checkedRadioBtn.value;
    if (buttonTypeEntered === "call"){
        callsTotal2 += 2.75;
    }
    else if (buttonTypeEntered === "sms"){
        smsTotal2 += 0.75;
    }

    // billItemType will be 'call' or 'sms'
    callsTotalElem2.innerHTML = callsTotal2.toFixed(2);
    smsTotalElem2.innerHTML = smsTotal2.toFixed(2);
    var totalCost2 = callsTotal2 + smsTotal2;
   
    totalCostElem2.innerHTML = totalCost2.toFixed(2);

    if (totalCost2 >= 50){
        totalCostElem2.classList.add("danger");
    }
    else if (totalCost2 >= 30){
        totalCostElem2.classList.add("warning");
    }
}

addToBillBtnElement2.addEventListener('click', checkRadioBill);
