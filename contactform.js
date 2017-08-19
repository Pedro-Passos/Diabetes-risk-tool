//function with event listener for form validation.
function listen() {
	document.getElementById("title").addEventListener("change", validateTitle);
	document.getElementById("fname").addEventListener("blur", validateFname);
	document.getElementById("sname").addEventListener("blur", validateSname);
	document.getElementById("email").addEventListener("blur", validateEmail);
	document.getElementById("zhaNum").addEventListener("blur", validateZha);
	document.getElementById("btnsubmit").addEventListener("click", formCheck);
}
//function that deals with the title validation.
function validateTitle(){
	var title = document.getElementById("title").value;
	var validTitle = 0;
	var message = "";
	if (contact.title.selectedIndex==0) {
		document.getElementById("titleError").style.color="red";
		message = "*You must select a title";
		validTitle = 1;
	}
	document.getElementById("titleError").innerHTML = message;
	return validTitle;
}
//function that deals with the first name validation.
function validateFname(){
	var firstname = document.getElementById("fname").value;
	var validFname = 0;
	var message = "";
	var patt = /^[a-zA-Z'-]+$/;
	if(firstname.length < 2){
		document.getElementById("fnameError").style.color="red";
		message = "*Please enter more than one character";
		validFname = 1;
	}
	else if(!firstname.match(patt)){
		document.getElementById("fnameError").style.color="red";
		message = "*Please only enter letters A-Z and the - and ' characters here";
		validFname = 1;
	}
	document.getElementById("fnameError").innerHTML = message;
	return validFname;
}
//function that deals with the surname validation.
function validateSname(){
	var surname = document.getElementById("sname").value;
	var validSname = 0;
	var message="";
	var patt = /^[a-zA-Z'-]+$/;
	if(surname.length<2){
		document.getElementById("snameError").style.color="red";
		message = "*Please enter more than one character";
		validSname = 1;
	}
	else if(!surname.match(patt)){
		document.getElementById("snameError").style.color="red";
		message = "*Please only enter letters A-Z and the - and ' characters here";
		validSname = 1;
	}
	document.getElementById("snameError").innerHTML = message;
	return validSname;
}
//function that deals with the email validation.
function validateEmail(){
	var email = document.getElementById("email").value;
	var validEmail = 0;
	var message="";
	var patt = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
	if(!patt.test(email)){
		document.getElementById("emailError").style.color="red";
		message = "*Please enter a valid email";
		validEmail = 1;
	}
	document.getElementById("emailError").innerHTML = message;
	return validEmail;
}
//function that deals with the Zedland number validation.
function validateZha(){
	var zhaNum = document.getElementById("zhaNum").value;
	var validZha = 0;
	var message="";
	var patt = /^zha{1}[0-9]{6}$/i;
	if (!patt.test(zhaNum)){
		document.getElementById("zhaError").style.color="red";
		message = "*Please enter a valid Health Authority Number e.g. ZHA123456";
		validZha = 1;
	}
	document.getElementById("zhaError").innerHTML = message;
	return validZha;
}
//function that deals with the telephone validation.
function validateTel(){
	var telNum = document.getElementById("telNum").value;
	var validTel = 0;
	var message="";
	var patt = /^[0-9]{11}/;
	if(telNum=="") {

	}else if((!telNum.match(patt)) || (telNum != " ")){
		document.getElementById("telError").style.color="red";
		message = "*Please enter a valid telephone number  e.g. 02081234567";
		validTel = 1;
	}
	document.getElementById("telError").innerHTML = message;
	return validTel;
}
//function that deals with tool-tip.
function switchToolTip() {
  document.getElementById("qmark").onmouseover = function() {
  var toolTip = document.getElementById("ttip");
  toolTip.style.display="block";
	toolTip.style.position="absolute";
	toolTip.style.top="300px";
	toolTip.style.left="80px";
  }
  document.getElementById("qmark").onmouseout = function() {
  var toolTip = document.getElementById("ttip");
  toolTip.style.display="none";
  }
}
// main function that deals with extra validation and message display upon successful form submission.
function formCheck(){
	var countCheck = 0;
	countCheck += validateTitle();
	countCheck += validateFname();
	countCheck += validateSname();
	countCheck += validateZha();
	countCheck += validateEmail();
	countCheck += validateTel();
	if(countCheck == 0 ){
		document.getElementById("request").style.display = "none";
		document.getElementById("contact").style.display = "none";
		document.getElementById("message").style.color="blue";
		document.getElementById("message").innerHTML = "Thank you for your Enquiry/Feedback a customer services representative will be in contact with you shortly..";
	}
	else{
		document.getElementById("message").style.color="red";
		document.getElementById("message").innerHTML = "There is an error on the form, please correct it and click again.";
	}
	return false;
}
//function that deals with kick-starting the javascript on the form.
function init () {
	document.getElementById("fname").focus();
	document.getElementById("email").placeholder="example@mail.com";
	listen()
	switchToolTip();
}
window.onload=init;
