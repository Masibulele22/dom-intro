//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button

var billStringElement = document.querySelector(".billStrng");

function calculateBtnClicked(){
}

calculateBtn.addEventListener('click', calculateBtnClicked);

function totalPhoneBill(str) {
    var totalSms = 0;
  var totalCalls = 0;
    var str2 = str.split(', ');
    console.log(str2);
    for (var i=0; i<str2.length; i++) {
      var str3 = str2[i];
      if (str3 == 'sms') {
        totalSms++
      }
      else if (str3 == 'call') {
      totalCalls++
      }
  }
    return ('R' + (totalSms*0.65 + totalCalls*2.75).toFixed(2));
}

function calculateBtnClicked(){
    var billString = billStringField.value;   
    var roundedBillTotal = totalPhoneBill(billString);
    billTotalElement.innerHTML = roundedBillTotal;
}
