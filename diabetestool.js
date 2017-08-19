//function that gets the value of the Age radio button.
function getRadioAgeValue()
{
    var radioAge = document.getElementsByName('age');
    for (var i = 0, l = radioAge.length; i < l; i++)
    {
        if (radioAge[i].checked)
        {
			return radioAge[i].value;
        }
    }
}
//function that gets the value of the BMI radio button.
function getRadioBmiValue()
{
    var radioBmi = document.getElementsByName('bmi');
    for (var i = 0, l = radioBmi.length; i < l; i++)
    {
        if (radioBmi[i].checked)
        {
            return radioBmi[i].value;
        }
    }
}
//function that gets the value of the Relatives radio button.
function getRadioRelativeValue()
{
    var radioRelative = document.getElementsByName('relative');
    for (var i = 0, l = radioRelative.length; i < l; i++)
    {
        if (radioRelative[i].checked)
        {
            return radioRelative[i].value;
        }
    }
}
//function that gets the value of the Sugar radio button.
function getRadioSugarValue()
{
    var radioSugar = document.getElementsByName('sugar');
    for (var i = 0, l = radioSugar.length; i < l; i++)
    {
        if (radioSugar[i].checked)
        {
            return radioSugar[i].value;
        }
    }
}
//function responsible for checking total risk and displaying the correct message.
function displayResult(){
		//Gets the actual values from the radio buttons.
		var iNum1 = parseInt(getRadioAgeValue());
		var iNum2 = parseInt(getRadioBmiValue());
		var iNum3 = parseInt(getRadioRelativeValue());
		var iNum4 = parseInt(getRadioSugarValue());
		var result = iNum1 + iNum2 + iNum3 + iNum4;
		var messtart = ('Your results show that you currently have a ')
		//Checks factors to see which are equal or over 10 to add them as a risk factor
		if (result > 25) {
			var factorCount = 0;
			var factors =[];
			factors.push(iNum1, iNum2, iNum3, iNum4);
			for (var i = 0, l = factors.length; i < l; i++) {
				if (factors[i] >= 10) {
					
					factorCount++;
				}
			}
			document.getElementById("message").innerHTML= messtart + "HIGH risk of developing diabetes. <span id='factors'></span><span id='period'></span> We advise that you contact the Health Authority to discuss your risk factors as soon as you can. Please fill in our <span id='link'></span> and a member of the Health Authority Diabetes Team will be in contact with you.";
			var linkZha = document.getElementById('link');
			linkZha.innerHTML = '<a href="contactform.html">contact form</a>';
			//Array for correct placement of factors and introducing them depending on how many qualifying risks there are.
			var risk = [];
			if (iNum1 = 10) {
				risk.push("age");
			}
			
			if (iNum2 = 10) {
				risk.push("BMI");
			}
			
			if (iNum3 >= 10) {
				risk.push("genetics");
			}
			
			if (iNum4 >= 10) {
				risk.push("sugar intake");
			}			
			if (factorCount == 4) {
				document.getElementById("factors").innerHTML="Your main risk factors are your " + risk[0] + ", " + risk[1] + ", " + risk[2] + " and " + risk[3] + ".";
			} else if (factorCount == 3) {
				document.getElementById("factors").innerHTML="Your main risk factors are your " + risk[0] + ", " + risk[1] + ", " + "and " + risk[2] + ".";
			} else if (factorCount == 2) {
				document.getElementById("factors").innerHTML="Your main risk factors are your " + risk[0] + ", " + "and " + risk[1] + ".";
			} else if (factorCount == 1) {
				document.getElementById("factors").innerHTML="Your main risk factor is your " + risk[0] + ".";
			} else {
				document.getElementById("period").innerHTML="."
			}
			
		} else if (result>=16) {
			//medium risk message
			document.getElementById("message").innerHTML= messtart + "medium risk of developing diabetes. For more information on your risk factors, and what to do about them, please visit our diabetes advice website at <span id='link'></span>";
			var linkZha = document.getElementById('link');
			linkZha.innerHTML = '<a href="http://www.zha.org.zd">http://www.zha.org.zd.</a>';
			
		} else {
			//low risk message
			document.getElementById("message").innerHTML= messtart + "low risk of developing diabetes. However, it is important that you maintain a healthy lifestyle in terms of diet and exercise.";
		}
		return false;
	}

function init(){
		document.getElementById("calculate").onclick = displayResult;
	}

window.onload=init;