// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

var addBtnSettingsElem  = document.querySelector(".addBtnSettings");
var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
var totalSettingsElem = document.querySelector(".totalSettings");
var callCostSettingElem = document.querySelector(".callCostSetting");

var smsCostSettingElem = document.querySelector(".smsCostSetting");
var warningLevelSettingElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");
var updateSettingsElem = document.querySelector(".updateSettings");
var settingsBillAddBtnElem = document.querySelector(".addToBillBtn");

var smsTotal3 = 0;
var callsTotal3 = 0;
var totalCost3 = 0;

function checkSettingsBill(){   
  
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    var buttonTypeEntered2 = checkedRadioBtn.value;

    if (buttonTypeEntered2 === "call"){
        callsTotal3 += Number(callCostSettingElem.value);
    }
   else if(buttonTypeEntered2 === "sms"){
        smsTotal3 += Number(smsCostSettingElem.value);
    }

    callTotalSettingsElem.innerHTML = callsTotal3.toFixed(2);
    smsTotalSettingsElem.innerHTML = smsTotal3.toFixed(2);
    totalCost3 = callsTotal3 + smsTotal3;
    totalSettingsElem.innerHTML = totalCost3.toFixed(2);

    if (totalCost3 >= warningLevelSettingElem.value){
        totalSettingsElem.classList.add("warning");
    }
    if (totalCost3 >= criticalLevelSettingElem.value){
        totalSettingsElem.classList.add("danger");
        addBtnSettingsElem.disabled=true;
    }

}

function updateSettingsButton(){    
    var warningLevelValue = warningLevelSettingElem.value;

     if (updateSettingsElem){
        totalSettingsElem.classList.remove("danger");
        addBtnSettingsElem.disabled=false;
     }

    if(totalCost3 < warningLevelValue){
        totalSettingsElem.classList.remove("warning");
    }
}
addBtnSettingsElem.addEventListener('click', checkSettingsBill);
updateSettingsElem.addEventListener('click', updateSettingsButton);
