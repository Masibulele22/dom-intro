//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button

var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");
var billStringElement = document.querySelector(".billString");

function calculateBtnClicked(){

  var billStringValues = billStringElement.value;

  var billItems = billStringValues.split(",");

  var billTotal = 0;

  for (var i=0;i<billItems.length;i++){
      var billItem = billItems[i].trim();
      if (billItem === "call"){
          billTotal += 2.75;
      }
      else if (billItem === "sms"){
          billTotal += 0.75;
      }
  }
  if(billTotal >= 20){
    billTotalElement.classList.add('warning')
  }
  if(billTotal >= 30){
    billTotalElement.classList.add('danger')
  }
  
  if (billTotal <= 20){
    billTotalElement.classList.remove('warning')
  }
  
  if(billTotal <= 30){
    billTotalElement.classList.remove('danger')
  }

  var roundedBillTotal = billTotal.toFixed(2);
  billTotalElement.innerHTML = roundedBillTotal;


}

calculateBtnElement.addEventListener('click', calculateBtnClicked);  
