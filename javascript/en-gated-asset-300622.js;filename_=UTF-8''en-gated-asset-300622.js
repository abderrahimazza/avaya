// LiveValidation 1.3 (standalone version)
// Copyright (c) 2007-2008 Alec Hill (www.livevalidation.com)
// LiveValidation is licensed under the terms of the MIT License
// MODIFIED by Oracle for use in Eloqua Forms.v2


var legal_characters = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_´abcdefghijklmnopqrstuvwxyz{|}~€_‚ƒ„...†‡ˆ‰_‹Œ____''" + '"' + '"' + "–—˜™_›œ__Ÿ ¡¢£€x_§¨©ª«¬_®¯°z__´μ¶·¸_º»___¿ÀÁÃÄÅÆÇÈÉÊËÌÍÎÏ_ÑÒÓÔÕÖ_ØÙÚÛÜ__ßàáãäåæçèéêëìíîï_ñòóôõö÷øùúûü__ÿ";
var enstring = "";

var emailadd1;

function encrypt_cookie(cookie_value, encrypt_key) {
  var cookie_character
  var character_location
  var encrypted_location
  var encrypted_character
  var encrypted_string = ""  
  for (var counter = 0; counter < cookie_value.length; counter++) {  
    cookie_character = cookie_value.substring(counter, counter + 1)
    character_location = legal_characters.indexOf(cookie_character)  
    encrypted_location = character_location ^ encrypt_key    
    encrypted_character = legal_characters.substring(encrypted_location, encrypted_location + 1)  
    encrypted_string += encrypted_character     
  }
  //console.log(encrypted_string);
  enstring = encrypted_string;
  return encrypted_string;
}

function decrypt_cookie(encrypted_string, encrypt_key) {
  var cookie_character
  var character_location
  var encrypted_location
  var encrypted_character
  var cookie_value = ""  
  for (var counter = 0; counter < encrypted_string.length; counter++) {
    encrypted_character = encrypted_string.substring(counter, counter + 1)   
    encrypted_location = legal_characters.indexOf(encrypted_character)  
    character_location = encrypted_location ^ encrypt_key    
    cookie_character = legal_characters.substring(character_location, character_location + 1)   
    cookie_value += cookie_character 
  }
  console.log(cookie_value);
	return cookie_value;  
}

function getUrlVar(key){
	var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
	return result && unescape(result[1]) || ""; 
}

function insertBefore(el, referenceNode){
	referenceNode.parentNode.insertBefore(el, referenceNode);
}
function insertAfter(el, referenceNode){
	referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

/* Adds Element BEFORE NeighborElement */
Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element);
}, false;

/* Adds Element AFTER NeighborElement */
Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
}, false;


function labelatt(x) {
    var labels = document.getElementsByTagName('label');
    for(var i = 0; i < labels.length; i ++) {
        var attr = labels[i].getAttribute('for'); //or labels[i].htmlFor
        if(attr === x) {
           // labels[i].style.visibility = 'hidden';
           labels[i].style.display = 'none';
        }
	}
}
  var today = new Date();
// var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000);
var expiry = new Date(today.getTime() + (1000 * 60 * 60 * 24 *30));

function setCookie(name, value) {
    document.cookie=name + "=" + encodeURIComponent(escape(value)) + ";domain=avaya.com; path=/; expires="+ expiry.toUTCString();
  }
function setCookieSecure(name, value) {
    document.cookie=name + "=" + encodeURIComponent(escape(value)) + ";Secure;domain=avaya.com; path=/; expires=" + expiry.toUTCString()+"; HttpOnly:true; SameSite:None";
}
  
function getCookie(name){
	var re=new RegExp(name+"=([^;]+)");var value=re.exec(document.cookie);return(value!=null)?unescape(value[1]):null;
} 
 
var GTM1 = document.getElementsByName("GACLIENTID")[0];
var GTM2 = document.getElementsByName("GAUSERID")[0];
var GTM3 = document.getElementsByName("GATRACKID")[0];
GTM1.id = "GACLIENTID";
GTM2.id = "ruid";
GTM3.id = "GATRACKID";

// document.getElementsByName("thankyou_url")[0].value="https://www.avaya.com/en/products/ucaas/public-demo-experience/";

document.getElementsByName("tyURL")[0].value=document.getElementById("cms_redirectUrl").innerText;

function createOption(ddl, text, value) {
        var opt = document.createElement('option');
        opt.value = value;
        opt.text = text;
        ddl.options.add(opt);
    }
//Function to remove all options from dropdown lists
function removeOptions(selectbox){
    var i;
    for(i = selectbox.length - 1 ; i >= 0 ; i--){
        selectbox.remove(i);
    }
}


document.getElementById("formElement3").style.display = "none";
var stateFieldContainer = "";
var stateFieldName1 = document.getElementsByName('stateProv')[0];
var stateFieldId = document.getElementsByName('stateProv')[0].getAttribute('id');
var rtextfield = document.getElementById(stateFieldId).parentNode;
var stateFieldInput = document.getElementsByName('stateProv')[0];
var stateFieldName = document.getElementById(stateFieldId).getAttribute('name');

//stateFieldName1.name = stateFieldName+"1";
//stateFieldName1.id = stateFieldId+"1";
//stateFieldName1.style.display = "none";

//var select1 = document.createElement("select");
//select1.name = stateFieldName;
//select1.id = stateFieldId;
//select1.setAttribute("class","elq-item-select");
//select1.style.sidth = "100%";

//rtextfield.appendChild(select1);

var ell1 = document.getElementsByClassName('container-fluid')[0].getElementsByClassName('row');
var parent = document.querySelector('.container-fluid');
var children = parent.children;
var childrenL = children.length - 1;
console.log("childrenL == "+childrenL);
for(var l = 0; l < children.length; l ++) {
	if(children[l].innerHTML.indexOf('id="formElement') !== -1) {
		children[l].setAttribute("id", "formElementid"+[l]);
		if(l>1 && l<9){
		children[l].setAttribute("style", "clear:both");
		} else if(l>=9 && l<18){
			children[l].setAttribute("style", "display:none");
		}
		/*if(l<1){
		children[l].setAttribute("style", "padding-bottom:10px;");
		}
		if(l<8 && l>1){
		children[l].setAttribute("style", "padding-bottom:10px;clear:both");
		}*/
	}
	if(children[l].innerHTML.indexOf('name="stateProv"') !== -1) {
		children[l].style.display = 'none';
		stateFieldContainer = "formElementid"+[l];
		console.log(stateFieldContainer);
	}
	//console.log("children.innerHTML"+l+"====="+children[l].innerHTML);
}


for(var k = 0; k < 8; k++) {
/*var ch1 = "document.getElementById('formElement";
ch1 = ch1 + k + "').parentNode";
console.log("ch1 == " + ch1);
ch1.setAttribute("style", "padding-bottom:10px;");*/
var ch2 = document.getElementById('formElement'+k).getAttribute("style");
//console.log("ch2 == "+ch2);
if (ch2 === null){
	document.getElementById('formElement'+k).setAttribute('style','padding-bottom:10px;');
} else {
	document.getElementById('formElement'+k).setAttribute('style','padding-bottom:10px;'+ch2);
}
var ch3 = document.getElementById('formElement'+k).parentNode.innerHTML;

//console.log("ch3 == "+ch3);
}
var labelc = document.getElementsByClassName('elq-label');
for(var p = 0; p < 9; p++) {
	if(p !== 4){
var labelch = document.getElementsByClassName('elq-label')[p].innerHTML;
labelch = labelch + "<span style='color: #da291c;font-weight: bold;font-size: 0.875rem;font-size: 14px;'>*</span>";
document.getElementsByClassName('elq-label')[p].innerHTML = labelch;
	}
}

labelatt('fe140493');//hide EmailOptin label
document.getElementById("fe140493").type = "hidden"; //EmailOptin is text field to hide this field

/*** GDPR Optin / Optout Code **************/
var d = new Date(); // Define current date
var month = d.getMonth()+1; // get month
var day = d.getDate(); // get day
var fullyear =  d.getFullYear(); // get full year
var output =  ((''+month).length<2 ? '0' : '')+ month +  '-' + ((''+day).length<2 ? '0' : '') + day + '-' + fullyear;

// check checkbox for optin / oupt out
function checkOptin(){
	var checkbox1 =  document.getElementById("optin");
	if(checkbox1.checked == true){
		document.getElementsByName("emailOptinDate1")[0].value = output;
		document.getElementsByName("emailOptinSource1")[0].value = document.getElementsByName("cta_code")[0].value;
		document.getElementsByName("permissionemail")[0].value = "Yes";
		document.getElementsByName("optin")[0].value = "Yes";
		document.getElementsByName("EmoptIn")[0].value = "Yes";
	} else {
		document.getElementsByName("emailOptinDate1")[0].value = "";
		document.getElementsByName("emailOptinSource1")[0].value = "";
		document.getElementsByName("permissionemail")[0].value = "";
		document.getElementsByName("optin")[0].value = "";
		document.getElementsByName("EmoptIn")[0].value = "";
	}
}
				
var ctacookievalue;
var taccookievalue;

if (getUrlVar("CTA") != ""){
		document.getElementsByName("cta_code")[0].value = getUrlVar("CTA");
	}
else {
	ctacookievalue = getUrlVar('CTA');
}
if (getUrlVar("TAC") != ""){
			document.getElementsByName("tactic_code")[0].value = getUrlVar("TAC");
		}
else {
	taccookievalue = getUrlVar('TAC');
}

var btn1 = document.getElementsByClassName("submit-button-style")[0]; 
var CheckTimer11 = 0;
var runc11 = 0;
var nCheckTimer11 = setInterval(function() {
  CheckTimer11 = CheckTimer11+1;
  console.log("CheckTimer11 == "+CheckTimer11);
  if(document.getElementsByName("CTALabel")[0].value || CheckTimer11 > 4){
		clearInterval(nCheckTimer11);
         var chVLong11 = document.getElementsByName("CTALabel")[0].value;
         console.log("chVLong11 == " + chVLong11);
            console.log("chVLong11 if   --==" + chVLong11);
         if (chVLong11) {
            	btn1.value = document.getElementsByName("CTALabel")[0].value;                                              
       } else {
		   btn1.value = "Submit";
	   }
   }
}, 1000); 
btn1.value = document.getElementsByName("CTALabel")[0].value;
/*btn1.style.width = "100%";
btn1.style.display = "block";
btn1.style.marginTop = "0";
btn1.style.marginBottom = "0";
btn1.style.marginLeft = "auto";
btn1.style.marginright = "auto";
btn1.style.borderRadius = "5px";
//btn1.style.transition="borderRadius ease 2.5s";
//btn1.style.backgroundColor = "#DA291C";
btn1.style.backgroundColor = "#1B77AF";
btn1.style.color = "#FFFFFF";*/
var player;

/*btn1.onmouseover = function(){
    this.style.borderRadius="25px";	
	this.style.transition= "linear .2s";
	this.style.backgroundColor= "#004E6C";
}

btn1.onmouseout = function(){
    this.style.borderRadius="5px";
	this.style.backgroundColor = "#1B77AF";
}*/
/*btn1.classList.add('btn','btn-primary-ocean');

var css1;// = 'input[type="text"]:hover{ border-color: #1B77AF }';
css1 = css1+ '.btn,.av-form .elq-form input.submit-button,.av-form-columns .elq-form input.submit-button,.av-form-columns .elq-form input.submit-button-style{background: none;padding: 9px 30px 8px;display: inline-block;text-decoration:none;cursor: pointer;outline: none;position: relative;z-index: 1;overflow: hidden;-webkit-transition: all 0.3s;-moz-transition: all 0.3s;-o-transition: all 0.3s;transition: all 0.3s;font-weight: 400;}';
css1 = css1+ '.btn:before,.av-form .elq-form input.submit-button:before,.av-form-columns .elq-form input.submit-button:before,.av-form-columns .elq-form input.submit-button-style:before{content: "";position: absolute;z-index:-1;}';
css1 = css1+ '.btn:after,.av-form .elq-form input.submit-button:after,.av-form-columns .elq-form input.submit-button:after,.av-form-columns .elq-form input.submit-button-style:after{content: "";position: absolute;z-index: -1;-webkit-transition: all 0.3s;-moz-transition: all 0.3s;-o-transition: all 0.3s;transition: all 0.3s;height: 100%;left: -50%;top: 0;transform: skew(50deg);transition-duration: 0.6s;transform-origin: top left;width: 0;}';
css1 = css1+ '.btn:hover:after,.av-form .elq-form input.submit-button:hover:after,.av-form-columns .elq-form input.submit-button:hover:after,.av-form-columns .elq-form input.submit-button-style:hover:after{height: 100%;width: 150%;}';
css1 = css1+ '.btn.btn-primary,.av-form .elq-form input.submit-button,.av-form-columns .elq-form input.submit-button,.av-form-columns .elq-form input.submit-button-style{background: #da291c;color: #fff;border: 0px solid #da291c;border-radius: 0px;padding: 11px 30px 10px;}';
css1 = css1+ '.btn.btn-primary:before,.av-form .elq-form input.submit-button:before,.av-form-columns .elq-form input.submit-button:before,.av-form-columns .elq-form input.submit-button-style:before,.btn.btn-primary:after,.av-form .elq-form input.submit-button:after,.av-form-columns .elq-form input.submit-button:after,.av-form-columns .elq-form input.submit-button-style:after{background: #c01a1e;}';
css1 = css1+ '.btn.btn-primary-ocean,.av-form .elq-form input.btn-primary-ocean.submit-button,.av-form-columns .elq-form input.btn-primary-ocean.submit-button,.av-form-columns .elq-form input.btn-primary-ocean.submit-button-style{background: #1b77af;color: #fff;border: 0px solid #1b77af;border-radius: 5px;box-shadow: 3px 2px 20px #4e4c4c59;padding: 11px 30px 10px;}';
css1 = css1+ '.btn.btn-primary-ocean:before,.av-form .elq-form input.btn-primary-ocean.submit-button:before,.av-form-columns .elq-form input.btn-primary-ocean.submit-button:before,.av-form-columns .elq-form input.btn-primary-ocean.submit-button-style:before,.btn.btn-primary-ocean:after,.av-form .elq-form input.btn-primary-ocean.submit-button:after,.av-form-columns .elq-form input.btn-primary-ocean.submit-button:after,.av-form-columns .elq-form input.btn-primary-ocean.submit-button-style:after{background: #004e6c;}';
var style1 = document.createElement('style');

if (style1.styleSheet) {
    style1.styleSheet.cssText = css1;
    } else {
    style1.appendChild(document.createTextNode(css1));
}

document.getElementsByTagName('body')[0].appendChild(style1);*/

document.getElementById('formElement8').style.visibility = 'hidden';
document.getElementById('formElement8').style.height = "1px";

var formTop = document.getElementsByClassName("layout container-fluid")[0];
var formTop1 = document.getElementById('formElementid0');
var pInstruct = document.createElement("p");
pInstruct.id="pInstruct";
pInstruct.style.marginBottom= '0px';
pInstruct.innerHTML = "<font style='color: #313133;font-weight: 500;font-size:12px'>Fields marked with <span style='color: #da291c; font-size: 12px;'>*</span> are required.</font>";
insertBefore(pInstruct, formTop1);

var checkbox2 = document.createElement('input');
checkbox2.type = "checkbox";
checkbox2.name = "PhOptin";
checkbox2.value = "";
checkbox2.id = "PhOptin";
//var linebreak = document.createElement("br");
//linebreak.id = "lineb1";
var label2 = document.createElement('label')
label2.htmlFor = "id";
label2.id = "lb1Phone";
label2.style.width = "90%";
label2.style.marginLeft = "25px"; 
label2.style.marginBottom = "0px";
label2.style.marginTop = "5px";
label2.style.fontSize  = "12px"; 
label2.appendChild(document.createTextNode(' Yes, I also agree to receive marketing phone calls from Avaya.'));
label2.setAttribute("for","PhOptin");

var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "EmoptIn";
checkbox.value = "";
checkbox.id = "optin";
var linebreak = document.createElement("br");
linebreak.id = "lineb1";
var label = document.createElement('label')
label.htmlFor = "id";
label.id = "lb1";
label.style.width = "90%";
label.style.marginLeft = "25px"; 
label.style.marginBottom = "0px";
label.style.fontSize  = "12px"; 
label.style.color  = "#313133";
label.appendChild(document.createTextNode(' Yes, I also agree to receive marketing emails from Avaya.'));
label.setAttribute("for","optin");
var divGDPRtext = document.createElement("div");
divGDPRtext.id="gdprtext";
divGDPRtext.innerHTML = "<div style='color: #313133;width: 100%;margin-left: 5px;margin-bottom: 30px;margin-top: 15px;font-size:12px;line-height:20px;' class='formStatement'>By submitting this form, I agree to my information being processed in the Avaya database for the above mentioned purpose. See our <a href='https://www.avaya.com/en/privacy/website/' class='formStatLink' target='_blank' style='color:#1B77AF;text-decoration:underline;font-size:12px;line-height:20px;border-bottom: 0px solid;'>Privacy Statement</a> for more details, or manage your <a href='https://news.avaya.com/global-subscription' class='formStatLink' target='_blank' style='color: #1B77AF;text-decoration:underline;font-size:12px;line-height:20px;border-bottom: 0px solid;'>Email Preferences</a> at any time.</div>";
document.getElementById('formElement7').style.marginTop = "20px";
var container=document.getElementById('formElement7')
container.appendChild(checkbox);
container.appendChild(label);
container.appendChild(checkbox2);
container.appendChild(label2);
container.appendChild(divGDPRtext);
document.getElementById("optin").style.marginTop = "5px";
document.getElementById("optin").style.width = "20px"; 
document.getElementById("optin").style.float = "left"; 
document.getElementById("lb1").style.fontWeight = "normal";
document.getElementById("PhOptin").style.marginTop = "10px";
document.getElementById("PhOptin").style.width = "20px"; 
document.getElementById("PhOptin").style.float = "left"; 
document.getElementById("lb1Phone").style.fontWeight = "normal";
var checkbox = document.querySelector("input[name=EmoptIn]");
checkbox.addEventListener( 'change', function() {checkOptin();});
document.getElementById("optin").setAttribute("aria-label", "Yes, I also agree to receive marketing emails from Avaya.");
document.getElementById("PhOptin").setAttribute("aria-label", "Yes, I also agree to receive marketing phone calls from Avaya.");
document.getElementById("PhOptin").style.display = "none";
document.getElementById("lb1Phone").style.display = "none";
document.getElementById("formElementid4").style.display = "none";


const ele = document.getElementsByTagName('textarea');
for(let l = 0; l <= ele.length - 1; l ++) {
var id2 = document.getElementsByTagName('textarea')[l].getAttribute("id");
var name2 = document.getElementsByTagName('textarea')[l].getAttribute("name");
document.getElementsByTagName('textarea')[l].setAttribute("id",id2+1);
document.getElementsByTagName('textarea')[l].setAttribute("name",name2+1);

var input = document.createElement("input");
input.setAttribute("type", "hidden");
input.setAttribute("name", name2);
input.setAttribute("id", id2);

//append to form element that you want .
formTop.appendChild(input);

}


/*var alink1 = document.getElementsByClassName("formStatement");
var alink2 = alink1.getElementsByTagName("a");

for (var z = 0; z < alink2.length; z++) {
  var alink3 = alink2[z];
  alink3.addEventListener("mouseover", function() {
    this.getElementsByTagName("a")[0].style.color = "#004E6C";
  });
  alink3.addEventListener("mouseout", function() {
    this.getElementsByTagName("a")[0].style.color = "#1B77AF";
  });
}*/

document.getElementsByName("lastReferralPageURL")[0].value = document.referrer;//this assigns refferer value to ref variable

document.getElementsByName('contentTitle1')[0].value=document.title;
document.getElementsByName("comments")[0].value="Title= "+document.getElementsByName('contentTitle1')[0].value + "; URL= "+document.getElementsByName('contentURL1')[0].value + "; Referral Page URL= "+document.getElementsByName('lastReferralPageURL')[0].value;

var Countrysel;
Countrysel= document.getElementsByName("country")[0];
Countrysel.addEventListener('change', detect_ccode);//Code to implement on change on country select field

/*document.getElementsByName('first_name')[0].setAttribute("onkeyup","this.setAttribute('value', this.value)");
document.getElementsByName('last_name')[0].setAttribute("onkeyup","this.setAttribute('value', this.value)");
document.getElementsByName('email')[0].setAttribute("onkeyup","this.setAttribute('value', this.value)");
document.getElementsByName('country')[0].setAttribute("onkeyup","this.setAttribute('value', this.value)");
document.getElementsByName('company')[0].setAttribute("onkeyup","this.setAttribute('value', this.value)");*/
document.getElementsByName('first_name')[0].setAttribute("placeholder"," ");
document.getElementsByName('last_name')[0].setAttribute("placeholder"," ");
document.getElementsByName('email')[0].setAttribute("placeholder"," ");
document.getElementsByName('country')[0].setAttribute("placeholder"," ");
document.getElementsByName('company')[0].setAttribute("placeholder"," ");

function detect_ccode(){
		var strUser=document.getElementsByName("country")[0].value;
		if (strUser== "United States" ){
				document.getElementsByName("country_iso")[0].value=("USA");
		} else if (strUser== "Canada" ){
				 document.getElementsByName("country_iso")[0].value=("CAN");
		} else if (strUser== "Afghanistan" ){
				 document.getElementsByName("country_iso")[0].value=("AFG");
		} else if (strUser== "Albania" ){
				 document.getElementsByName("country_iso")[0].value=("ALB");
		} else if (strUser== "Algeria" ){
				 document.getElementsByName("country_iso")[0].value=("DZA");
		} else if (strUser== "American Samoa" ){
				 document.getElementsByName("country_iso")[0].value=("ASM");
		} else if (strUser== "Andorra" ){
				 document.getElementsByName("country_iso")[0].value=("AND");
		} else if (strUser== "Angola" ){
				 document.getElementsByName("country_iso")[0].value=("AGO");
		} else if (strUser== "Anguilla" ){
				 document.getElementsByName("country_iso")[0].value=("AIA");
		} else if (strUser== "Antigua and Barbuda"){
				 document.getElementsByName("country_iso")[0].value=("ATG");
		} else if (strUser== "Argentina" ){
				 document.getElementsByName("country_iso")[0].value=("ARG");
		} else if (strUser== "Armenia" ){
				 document.getElementsByName("country_iso")[0].value=("ARM");
		} else if (strUser== "Aruba" ){
				 document.getElementsByName("country_iso")[0].value=("ABW");
		} else if (strUser== "Australia" ){
				 document.getElementsByName("country_iso")[0].value=("AUS");
		} else if (strUser== "Austria" ){
				 document.getElementsByName("country_iso")[0].value=("AUT");
		} else if (strUser== "Azerbaijan" ){
				 document.getElementsByName("country_iso")[0].value=("AZE");
		} else if (strUser== "Bahamas" ){
				 document.getElementsByName("country_iso")[0].value=("BHS");
		} else if (strUser== "Bahrain" ){
				 document.getElementsByName("country_iso")[0].value=("BHR");
		} else if (strUser== "Bangladesh" ){
				 document.getElementsByName("country_iso")[0].value=("BGD");
		} else if (strUser== "Barbados" ){
				 document.getElementsByName("country_iso")[0].value=("BRB");
		} else if (strUser== "Belarus" ){
				 document.getElementsByName("country_iso")[0].value=("BLR");
		} else if (strUser== "Belgium" ){
				 document.getElementsByName("country_iso")[0].value=("BEL");
		} else if (strUser== "Belize" ){
				 document.getElementsByName("country_iso")[0].value=("BLZ");
		} else if (strUser== "Benin" ){
				 document.getElementsByName("country_iso")[0].value=("BEN");
		} else if (strUser== "Bermuda" ){
				 document.getElementsByName("country_iso")[0].value=("BMU");
		} else if (strUser== "Bhutan" ){
				 document.getElementsByName("country_iso")[0].value=("BTN");
		} else if (strUser== "Bolivia" ){
				 document.getElementsByName("country_iso")[0].value=("BOL");
		} else if (strUser== "Bosnia and Herzegovina" ){
				 document.getElementsByName("country_iso")[0].value=("BIH");
		} else if (strUser== "Botswana" ){
				 document.getElementsByName("country_iso")[0].value=("BWA");
		} else if (strUser== "Brazil" ){
				document.getElementsByName("country_iso")[0].value=("BRA");
		} else if (strUser== "British Indian Ocean Territory" ){
				 document.getElementsByName("country_iso")[0].value=("IOT");
		} else if (strUser== "Brunei Darussalam" ){
				 document.getElementsByName("country_iso")[0].value=("BRN");
		} else if (strUser== "Bulgaria" ){
				 document.getElementsByName("country_iso")[0].value=("BGR");
		} else if (strUser== "Burkina Faso" ){
				 document.getElementsByName("country_iso")[0].value=("BFA");
		} else if (strUser== "Burundi" ){
				 document.getElementsByName("country_iso")[0].value=("BDI");
		} else if (strUser== "Cambodia" ){
				 document.getElementsByName("country_iso")[0].value=("KHM");
		} else if (strUser== "Cameroon" ){
				 document.getElementsByName("country_iso")[0].value=("CMR");
		} else if (strUser== "Cape Verde" ){
				 document.getElementsByName("country_iso")[0].value=("CPV");
		} else if (strUser== "Cayman Islands" ){
				 document.getElementsByName("country_iso")[0].value=("CYM");
		} else if (strUser== "Central African Republic" ){
				 document.getElementsByName("country_iso")[0].value=("CAF");
		} else if (strUser== "Chad" ){
				 document.getElementsByName("country_iso")[0].value=("TCD");
		} else if (strUser== "Chile" ){
				document.getElementsByName("country_iso")[0].value=("CHL");
		} else if (strUser== "China" ){
				 document.getElementsByName("country_iso")[0].value=("CHN");
		} else if (strUser== "Christmas Island" ){
				 document.getElementsByName("country_iso")[0].value=("CXR");
		} else if (strUser== "Cocos (Keeling) Islands" ){
				 document.getElementsByName("country_iso")[0].value=("CCK");
		} else if (strUser== "Colombia" ){
				 document.getElementsByName("country_iso")[0].value=("COL");
		} else if (strUser== "Comoros" ){
				 document.getElementsByName("country_iso")[0].value=("COM");
		} else if (strUser== "Congo" ){
				 document.getElementsByName("country_iso")[0].value=("COG");
		} else if (strUser== "Congo, The Democratic Republic Of The"){
				 document.getElementsByName("country_iso")[0].value=("COD");
		} else if (strUser== "Cook Islands"){
				 document.getElementsByName("country_iso")[0].value=("COK");
		} else if (strUser== "Costa Rica" ){
				 document.getElementsByName("country_iso")[0].value=("CRI");
		} else if (strUser== "Croatia" ){
				 document.getElementsByName("country_iso")[0].value=("HRV");
		} else if (strUser== "Curaçao" ){
				 document.getElementsByName("country_iso")[0].value=("CUW");
		} else if (strUser== "Cyprus" ){
				 document.getElementsByName("country_iso")[0].value=("CYP");
		} else if (strUser== "Czech Republic" ){
				 document.getElementsByName("country_iso")[0].value=("CZE");
		} else if (strUser== "Denmark" ){
				 document.getElementsByName("country_iso")[0].value=("DNK");
		} else if (strUser== "Djibouti" ){
				 document.getElementsByName("country_iso")[0].value=("DJI");
		} else if (strUser== "Dominica" ){
				 document.getElementsByName("country_iso")[0].value=("DMA");
		} else if (strUser== "Dominican Republic" ){
				 document.getElementsByName("country_iso")[0].value=("DOM");
		} else if (strUser== "East Timor" ){
				 document.getElementsByName("country_iso")[0].value=("TLS");
		} else if (strUser== "Ecuador" ){
				 document.getElementsByName("country_iso")[0].value=("ECU");
		} else if (strUser== "Egypt" ){
				 document.getElementsByName("country_iso")[0].value=("EGY");
		} else if (strUser== "El Salvador" ){
				 document.getElementsByName("country_iso")[0].value=("SLV");
		} else if (strUser== "Equatorial Guinea" ){
				 document.getElementsByName("country_iso")[0].value=("GNQ");
		} else if (strUser== "Eritrea" ){
				 document.getElementsByName("country_iso")[0].value=("ERI");
		} else if (strUser== "Estonia" ){
				 document.getElementsByName("country_iso")[0].value=("EST");
		} else if (strUser== "Ethiopia" ){
				 document.getElementsByName("country_iso")[0].value=("ETH");
		} else if (strUser== "Falkland Islands (Malvinas)" ){
				 document.getElementsByName("country_iso")[0].value=("FLK");
		} else if (strUser== "Faroe Islands" ){
				 document.getElementsByName("country_iso")[0].value=("FRO");
		} else if (strUser== "Fiji" ){
				 document.getElementsByName("country_iso")[0].value=("FJI");
		} else if (strUser== "Finland" ){
				 document.getElementsByName("country_iso")[0].value=("FIN");
		} else if (strUser== "France" ){
				 document.getElementsByName("country_iso")[0].value=("FRA");
		} else if (strUser== "Gabon" ){
				 document.getElementsByName("country_iso")[0].value=("GAB");
		} else if (strUser== "Gambia" ){
				 document.getElementsByName("country_iso")[0].value=("GMB");
		} else if (strUser== "Georgia" ){
				 document.getElementsByName("country_iso")[0].value=("GEO");
		} else if (strUser== "Germany" ){
				 document.getElementsByName("country_iso")[0].value=("DEU");
		} else if (strUser== "Ghana" ){
				 document.getElementsByName("country_iso")[0].value=("GHA");
		} else if (strUser== "Gibraltar" ){
				 document.getElementsByName("country_iso")[0].value=("GIB");
		} else if (strUser== "Greece" ){
				 document.getElementsByName("country_iso")[0].value=("GRC");
		} else if (strUser== "Greenland" ){
				 document.getElementsByName("country_iso")[0].value=("GRL");
		} else if (strUser== "Grenada" ){
				 document.getElementsByName("country_iso")[0].value=("GRD");
		} else if (strUser== "Guam" ){
				 document.getElementsByName("country_iso")[0].value=("GUM");
		} else if (strUser== "Guatemala" ){
				 document.getElementsByName("country_iso")[0].value=("GTM");
		} else if (strUser== "Guernsey" ){
				 document.getElementsByName("country_iso")[0].value=("GGY");
		} else if (strUser== "Guinea" ){
				 document.getElementsByName("country_iso")[0].value=("GIN");
		} else if (strUser== "Guinea-Bissau" ){
				 document.getElementsByName("country_iso")[0].value=("GNB");
		} else if (strUser== "Guyana" ){
				 document.getElementsByName("country_iso")[0].value=("GUY");
		} else if (strUser== "Haiti" ){
				 document.getElementsByName("country_iso")[0].value=("HTI");
		} else if (strUser== "Vatican City State" ){
				 document.getElementsByName("country_iso")[0].value=("VAT");
		} else if (strUser== "Honduras" ){
				 document.getElementsByName("country_iso")[0].value=("HND");
		} else if (strUser== "Hong Kong" ){
				 document.getElementsByName("country_iso")[0].value=("HKG");
		} else if (strUser== "Hungary" ){
				 document.getElementsByName("country_iso")[0].value=("HUN");
		} else if (strUser== "Iceland" ){
				 document.getElementsByName("country_iso")[0].value=("ISL");
		}  else if (strUser== "India" ){
				 document.getElementsByName("country_iso")[0].value=("IND");
		} else if (strUser== "Indonesia" ){
				 document.getElementsByName("country_iso")[0].value=("IDN");
		} else if (strUser== "Ireland" ){
				 document.getElementsByName("country_iso")[0].value=("IRL");
		} else if (strUser== "Isle of Man" ){
				 document.getElementsByName("country_iso")[0].value=("IMN");
		} else if (strUser== "Israel" ){
				 document.getElementsByName("country_iso")[0].value=("ISR");
		} else if (strUser== "Italy" ){
				 document.getElementsByName("country_iso")[0].value=("ITA");
		} else if (strUser== "Ivory Coast (Côte d'Ivoire)" ){
				 document.getElementsByName("country_iso")[0].value=("CIV");
		} else if (strUser== "Jamaica" ){
				 document.getElementsByName("country_iso")[0].value=("JAM");
		} else if (strUser== "Japan" ){
				 document.getElementsByName("country_iso")[0].value=("JPN");
		} else if (strUser== "Jersey" ){
				 document.getElementsByName("country_iso")[0].value=("JEY");
		} else if (strUser== "Jordan" ){
				 document.getElementsByName("country_iso")[0].value=("JOR");
		} else if (strUser== "Kazakhstan" ){
				 document.getElementsByName("country_iso")[0].value=("KAZ");
		} else if (strUser== "Kenya" ){
				 document.getElementsByName("country_iso")[0].value=("KEN");
		} else if (strUser== "Kiribati" ){
				 document.getElementsByName("country_iso")[0].value=("KIR");
		} else if (strUser== "Korea, Democratic People's Republic of" ){
				 document.getElementsByName("country_iso")[0].value=("PRK");
		} else if (strUser== "Korea Republic of" ){
				 document.getElementsByName("country_iso")[0].value=("KOR");
		} else if (strUser== "Kuwait" ){
				 document.getElementsByName("country_iso")[0].value=("KWT");
		} else if (strUser== "Kyrgyzstan" ){
				 document.getElementsByName("country_iso")[0].value=("KGZ");
		} else if (strUser== "Lao People's Democratic Republic" ){
				 document.getElementsByName("country_iso")[0].value=("LAO");
		} else if (strUser== "Latvia" ){
				 document.getElementsByName("country_iso")[0].value=("LVA");
		} else if (strUser== "Lebanon" ){
				 document.getElementsByName("country_iso")[0].value=("LBN");
		} else if (strUser== "Lesotho" ){
				 document.getElementsByName("country_iso")[0].value=("LSO");
		} else if (strUser== "Liberia" ){
				 document.getElementsByName("country_iso")[0].value=("LBR");
		} else if (strUser== "Libya" ){
				 document.getElementsByName("country_iso")[0].value=("LBY");
		} else if (strUser== "Liechtenstein" ){
				 document.getElementsByName("country_iso")[0].value=("LIE");
		} else if (strUser== "Lithuania" ){
				 document.getElementsByName("country_iso")[0].value=("LTU");
		} else if (strUser== "Luxembourg" ){
				 document.getElementsByName("country_iso")[0].value=("LUX");
		} else if (strUser== "Macau" ){
				 document.getElementsByName("country_iso")[0].value=("MAC");
		} else if (strUser== "Macedonia" ){
				 document.getElementsByName("country_iso")[0].value=("MKD");
		} else if (strUser== "Madagascar" ){
				 document.getElementsByName("country_iso")[0].value=("MDG");
		} else if (strUser== "Malawi" ){
				 document.getElementsByName("country_iso")[0].value=("MWI");
		} else if (strUser== "Malaysia" ){
				 document.getElementsByName("country_iso")[0].value=("MYS");
		} else if (strUser== "Maldives" ){
				 document.getElementsByName("country_iso")[0].value=("MDV");
		} else if (strUser== "Mali" ){
				 document.getElementsByName("country_iso")[0].value=("MLI");
		} else if (strUser== "Malta" ){
				 document.getElementsByName("country_iso")[0].value=("MLT");
		} else if (strUser== "Marshall Islands" ){
				 document.getElementsByName("country_iso")[0].value=("MHL");

		} else if (strUser== "Martinique" ){
				 document.getElementsByName("country_iso")[0].value=("MTQ");
		} else if (strUser== "Mauritania" ){
				 document.getElementsByName("country_iso")[0].value=("MRT");
		} else if (strUser== "Mauritius" ){
				 document.getElementsByName("country_iso")[0].value=("MUS");
		} else if (strUser== "Mexico" ){
				 document.getElementsByName("country_iso")[0].value=("MEX");
		} else if (strUser== "Micronesia, Federated States of" ){
				 document.getElementsByName("country_iso")[0].value=("FSM");
		} else if (strUser== "Moldova" ){
				 document.getElementsByName("country_iso")[0].value=("MDA");
		} else if (strUser== "Monaco" ){
				 document.getElementsByName("country_iso")[0].value=("MCO");
		} else if (strUser== "Mongolia" ){
				 document.getElementsByName("country_iso")[0].value=("MNG");
		} else if (strUser== "Montenegro" ){
				 document.getElementsByName("country_iso")[0].value=("MNE");
		} else if (strUser== "Montserrat" ){
				 document.getElementsByName("country_iso")[0].value=("MSR");
		} else if (strUser== "Morocco" ){
				 document.getElementsByName("country_iso")[0].value=("MAR");
		} else if (strUser== "Mozambique" ){
				 document.getElementsByName("country_iso")[0].value=("MOZ");
		} else if (strUser== "Myanmar" ){
				 document.getElementsByName("country_iso")[0].value=("MMR");
		} else if (strUser== "Namibia" ){
				 document.getElementsByName("country_iso")[0].value=("NAM");
		} else if (strUser== "Nauru" ){
				 document.getElementsByName("country_iso")[0].value=("NRU");
		} else if (strUser== "The Federal Democratic Republic of Nepal" ){
				 document.getElementsByName("country_iso")[0].value=("NPL");
		} else if (strUser== "Netherlands" ){
				 document.getElementsByName("country_iso")[0].value=("NLD");
		} else if (strUser== "New Caledonia" ){
				 document.getElementsByName("country_iso")[0].value=("NCL");
		} else if (strUser== "New Zealand" ){
				 document.getElementsByName("country_iso")[0].value=("NZL");
		} else if (strUser== "Nicaragua" ){
				 document.getElementsByName("country_iso")[0].value=("NIC");
		} else if (strUser== "Niger" ){
				 document.getElementsByName("country_iso")[0].value=("NER");
		} else if (strUser== "Nigeria" ){
				 document.getElementsByName("country_iso")[0].value=("NGA");
		} else if (strUser== "Niue" ){
				 document.getElementsByName("country_iso")[0].value=("NIU");
		} else if (strUser== "Norfolk Island" ){
				 document.getElementsByName("country_iso")[0].value=("NFK");
		} else if (strUser== "Norway" ){
				 document.getElementsByName("country_iso")[0].value=("NOR");
		} else if (strUser== "Oman" ){
				 document.getElementsByName("country_iso")[0].value=("OMN");
		} else if (strUser== "Pakistan" ){
				 document.getElementsByName("country_iso")[0].value=("PAK");
		} else if (strUser== "Palau" ){
				 document.getElementsByName("country_iso")[0].value=("PLW");
		} else if (strUser== "Palestinian Territory" ){
				 document.getElementsByName("country_iso")[0].value=("PSE");
		} else if (strUser== "Panama" ){
				 document.getElementsByName("country_iso")[0].value=("PAN");
		} else if (strUser== "Papua New Guinea" ){
				 document.getElementsByName("country_iso")[0].value=("PNG");
		} else if (strUser== "Paraguay" ){
				document.getElementsByName("country_iso")[0].value=("PRY");
		} else if (strUser== "Peru" ){
				document.getElementsByName("country_iso")[0].value=("PER");
		} else if (strUser== "Philippines" ){
				document.getElementsByName("country_iso")[0].value=("PHL");
		} else if (strUser== "Pitcairn" ){
				 document.getElementsByName("country_iso")[0].value=("PCN");
		} else if (strUser== "Poland" ){
				 document.getElementsByName("country_iso")[0].value=("POL");
		} else if (strUser== "Portugal" ){
				 document.getElementsByName("country_iso")[0].value=("PRT");
		} else if (strUser== "Puerto Rico" ){
				 document.getElementsByName("country_iso")[0].value=("PRI");
		} else if (strUser== "Qatar" ){
				 document.getElementsByName("country_iso")[0].value=("QAT");
		} else if (strUser== "Reunion" ){
				 document.getElementsByName("country_iso")[0].value=("REU");
		} else if (strUser== "Romania" ){
				 document.getElementsByName("country_iso")[0].value=("ROM");
		} else if (strUser== "Russian Federation" ){
				 document.getElementsByName("country_iso")[0].value=("RUS");
		} else if (strUser== "Rwanda" ){
				 document.getElementsByName("country_iso")[0].value=("RWA");
		} else if (strUser== "Saint Helena" ){
				 document.getElementsByName("country_iso")[0].value=("SHN");
		} else if (strUser== "Saint Kitts and Nevis" ){
				 document.getElementsByName("country_iso")[0].value=("KNA");
		} else if (strUser== "Saint Lucia" ){
				 document.getElementsByName("country_iso")[0].value=("LCA");
		} else if (strUser== "Saint Vincent And The Grenadines" ){
				 document.getElementsByName("country_iso")[0].value=("VCT");
		} else if (strUser== "Samoa" ){
				 document.getElementsByName("country_iso")[0].value=("WSM");
		} else if (strUser== "San Marino" ){
				 document.getElementsByName("country_iso")[0].value=("SMR");
		} else if (strUser== "Sao Tome And Principe" ){
				 document.getElementsByName("country_iso")[0].value=("STP");
		} else if (strUser== "Saudi Arabia" ){
				 document.getElementsByName("country_iso")[0].value=("SAU");
		} else if (strUser== "Senegal" ){
				 document.getElementsByName("country_iso")[0].value=("SEN");
		} else if (strUser== "Serbia" ){
				 document.getElementsByName("country_iso")[0].value=("SRB");
		} else if (strUser== "Seychelles" ){
				 document.getElementsByName("country_iso")[0].value=("SYC");
		} else if (strUser== "Sierra Leone" ){
				 document.getElementsByName("country_iso")[0].value=("SLE");
		} else if (strUser== "Singapore" ){
				 document.getElementsByName("country_iso")[0].value=("SGP");
		} else if (strUser== "Slovakia" ){
				 document.getElementsByName("country_iso")[0].value=("SVK");
		} else if (strUser== "Slovenia" ){
				 document.getElementsByName("country_iso")[0].value=("SVN");
		} else if (strUser== "Solomon Islands" ){
				 document.getElementsByName("country_iso")[0].value=("SLB");
		} else if (strUser== "Somalia" ){
				 document.getElementsByName("country_iso")[0].value=("SOM");
		} else if (strUser== "South Africa" ){
				 document.getElementsByName("country_iso")[0].value=("ZAF");
		} else if (strUser== "South Georgia and the South Sandwich Islands" ){
				 document.getElementsByName("country_iso")[0].value=("SGS");
		} else if (strUser== "Spain" ){
				 document.getElementsByName("country_iso")[0].value=("ESP");
		} else if (strUser== "Sri Lanka" ){
				 document.getElementsByName("country_iso")[0].value=("LKA");
		} else if (strUser== "Sudan" ){
				 document.getElementsByName("country_iso")[0].value=("SDN");
		} else if (strUser== "Suriname" ){
				 document.getElementsByName("country_iso")[0].value=("SUR");
		} else if (strUser== "Swaziland" ){
				 document.getElementsByName("country_iso")[0].value=("SWZ");
		} else if (strUser== "Sweden" ){
				 document.getElementsByName("country_iso")[0].value=("SWE");
		} else if (strUser== "Switzerland" ){
				 document.getElementsByName("country_iso")[0].value=("CHE");
		} else if (strUser== "Taiwan, ROC" ){
				 document.getElementsByName("country_iso")[0].value=("TWN");
		} else if (strUser== "Tajikistan" ){
				 document.getElementsByName("country_iso")[0].value=("TJK");
		} else if (strUser== "Tanzania, United Republic Of" ){
				 document.getElementsByName("country_iso")[0].value=("TZA");
		} else if (strUser== "Thailand" ){
				 document.getElementsByName("country_iso")[0].value=("THA");
		} else if (strUser== "Timor-Leste" ){
				 document.getElementsByName("country_iso")[0].value=("TLS");
		} else if (strUser== "Togo" ){
				 document.getElementsByName("country_iso")[0].value=("TGO");
		} else if (strUser== "Tokelau" ){
				 document.getElementsByName("country_iso")[0].value=("TKL");
		} else if (strUser== "Tonga" ){
				 document.getElementsByName("country_iso")[0].value=("TON");
		} else if (strUser== "Trinidad and Tobago" ){
				 document.getElementsByName("country_iso")[0].value=("TTO");
		} else if (strUser== "Tunisia" ){
				 document.getElementsByName("country_iso")[0].value=("TUN");
		} else if (strUser== "Turkey" ){
				 document.getElementsByName("country_iso")[0].value=("TUR");
		} else if (strUser== "Turkmenistan" ){
				 document.getElementsByName("country_iso")[0].value=("TKM");
		} else if (strUser== "Turks and Caicos Islands" ){
				 document.getElementsByName("country_iso")[0].value=("TCA");
		} else if (strUser== "Tuvalu" ){
				 document.getElementsByName("country_iso")[0].value=("TUV");
		} else if (strUser== "Uganda" ){
				 document.getElementsByName("country_iso")[0].value=("UGA");
		} else if (strUser== "Ukraine" ){
				 document.getElementsByName("country_iso")[0].value=("UKR");
		} else if (strUser== "United Arab Emirates" ){
				 document.getElementsByName("country_iso")[0].value=("ARE");
		} else if (strUser== "United Kingdom" ){
				 document.getElementsByName("country_iso")[0].value=("GBR");
		} else if (strUser== "US Minor Outlying Islands" ){
				 document.getElementsByName("country_iso")[0].value=("UMI");
		} else if (strUser== "Uruguay" ){
				 document.getElementsByName("country_iso")[0].value=("URY");
		} else if (strUser== "Uzbekistan" ){
				 document.getElementsByName("country_iso")[0].value=("UZB");
		} else if (strUser== "Vanuatu" ){
				 document.getElementsByName("country_iso")[0].value=("VUT");
		} else if (strUser== "Venezuela" ){
				 document.getElementsByName("country_iso")[0].value=("VEN");
		} else if (strUser== "Vietnam" ){
				 document.getElementsByName("country_iso")[0].value=("VNM");
		} else if (strUser== "Virgin Islands, British" ){
				 document.getElementsByName("country_iso")[0].value=("VGB");
		} else if (strUser== "Virgin Islands, U.S." ){
				 document.getElementsByName("country_iso")[0].value=("VIR");
		} else if (strUser== "Western Sahara" ){
				 document.getElementsByName("country_iso")[0].value=("ESH");
		} else if (strUser== "Yugoslavia" ){
				 document.getElementsByName("country_iso")[0].value=("YUG");
		} else if (strUser== "Zambia" ){
				 document.getElementsByName("country_iso")[0].value=("ZMB");
		} else if (strUser== "Zimbabwe" ){
				 document.getElementsByName("country_iso")[0].value=("ZWE");
		} else {
			document.getElementsByName("country_iso")[0].value=("");
		}
		
	/*	var INTLCountry = ["Afghanistan","Albania","Algeria","Andorra","Angola","Armenia","Austria","Azerbaijan","Bahrain","Belarus","Belgium","Benin","Bhutan","Bosnia-Herzegovina","Botswana","Bulgaria","Burkina Faso","Burundi","Cameroon","Cape Verde","Central African Republic","Chad","Comoros","Congo","Congo, The Democratic Republic Of The","Croatia","Cyprus","Czech Republic","Denmark","Djibouti","Egypt","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Faroe Islands","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Greenland","Guernsey","Guinea","Guinea-Bissau","Vatican City State","Hungary","Iceland","Ireland","Isle of Man","Israel","Italy","Ivory Coast (Cote D'Ivoire","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyzstan","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Maldives","Mali","Malta","Mauritania","Mauritius","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Namibia","The Federal Democratic Republic of Nepal","Netherlands","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Pitcairn","Poland","Portugal","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Helena","San Marino","Sao Tome And Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Slovakia","Slovenia","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sudan","Swaziland","Sweden","Switzerland","Tajikistan","Tanzania, United Republic Of","Togo","Tunisia","Turkey","Turkmenistan","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uzbekistan","Western Sahara","Yugoslavia","Zambia","Zimbabwe","American Samoa","Australia","Bangladesh","British Indian Ocean Territory","Brunei Darussalam","Cambodia","China","Christmas Island","Cocos Islands","Cook Islands","East Timor","Fiji","Guam","Hong Kong","India","Indonesia","Japan","Kiribati","Korea, Democratic People's Republic of","Korea Republic of","Lao People's Democratic Republic","Macau","Malaysia","Marshall Islands","Micronesia, Federated States of","Myanmar","Nauru","New Caledonia","New Zealand","Niue","Norfolk Island","Palau","Papua New Guinea","Philippines","Samoa","Singapore","Solomon Islands","Sri Lanka","Taiwan, ROC","Thailand","Timor-Leste","Tokelau","Tonga","Tuvalu","Vanuatu","Vietnam","Heard and McDonald Islands"];
		if(INTLCountry.includes(strUser, 0)){
			document.getElementById("formElementid4").style.display = "block";
		} else {
			document.getElementById("formElementid4").style.display = "none";
		}*/
		
									if (strUser == "United States") {
                              			var state22 = document.getElementsByName('stateProv')[0];
                                      document.getElementById(stateFieldContainer).style.display = "block";										
										//removeOptions(stateFieldName1);
										for(var i = state22.length - 1 ; i >= 0 ; i--){
											state22.remove(i);
										}										
                                        var StateList1 = ['Please Select','Alaska','Alabama','Arkansas','Arizona','California','Colorado','Connecticut','District of Columbia','Delaware','Florida','Georgia','Hawaii','Iowa','Idaho','Illinois','Indiana','Kansas','Kentucky','Louisiana','Massachusetts','Maryland','Maine','Michigan','Minnesota','Missouri','Mississippi','Montana','North Carolina','North Dakota','Nebraska','New Hampshire','New Jersey','New Mexico','Nevada','New York','Ohio','Oklahoma','Oregon','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Virginia','Vermont','Washington','Wisconsin','West Virginia','Wyoming'];
										var StateList10 = ['','AK','AL','AR','AZ','CA','CO','CT','DC','DE','FL','GA','HI','IA','ID','IL','IN','KS','KY','LA','MA','MD','ME','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY','OH','OK','OR','PA','PR','RI','SC','SD','TN','TX','UT','VA','VT','WA','WI','WV','WY'];
										//console.log("StateList1.length 1 == "+StateList1.length);
										for (var i = 0; i < StateList1.length; i++) {
											var opt = document.createElement('option');
											//console.log("StateList1[i] 1 == "+StateList1[i]);
											//console.log("StateList10[i] 1 == "+StateList10[i]);
											opt.text = StateList1[i];
											opt.value = StateList10[i];
											document.getElementsByName('stateProv')[0].appendChild(opt);
										}
										//var fe140904 = new LiveValidation( fe140904, { validMessage: "", onlyOnBlur: true });
										//fe140904.enable();
										//fe140904.add( Validate.Presence, { failureMessage: "This field is required" } );
										
									  } else if (strUser == "Canada") {
										  var state22 = document.getElementsByName('stateProv')[0];
										 document.getElementById(stateFieldContainer).style.display = "block";										
									for(var i = state22.length - 1 ; i >= 0 ; i--){
											state22.remove(i);
										}										
										var StateList1 = ['Please Select','Alberta','APO','British Columbia','Manitoba','New Brunswick','Newfoundland','Newfoundland and Labrador','Northwest Terr.','Northwest Territories','Nova Scotia','Nunavut','Ontario','Prince Edward Island','Quebec','Saskatchewan','Yukon Territory'];
										var StateList10 = ['','AB','AE','BC','MB','NB','NF','NL','NN','NT','NS','NU','ON','PE','QC','SK','YT'];
										//console.log("StateList1.length 2 == "+StateList1.length);
										for (var i = 0; i < StateList1.length; i++) {
											var opt = document.createElement('option');
											//console.log("StateList1[i] 2 == "+StateList1[i]);
											//console.log("StateList10[i] 2 == "+StateList10[i]);
											opt.text = StateList1[i];
											opt.value = StateList10[i];
											document.getElementsByName('stateProv')[0].appendChild(opt);
										}
										//var fe140904 = new LiveValidation( fe140904, { validMessage: "", onlyOnBlur: true });
										//fe140904.enable();
										//fe140904.add( Validate.Presence, { failureMessage: "This field is required" } );
										
									  } else {					  
								  			document.getElementById(stateFieldContainer).style.display = "none";
										 // var fe140904 = new LiveValidation(fe140904);
										 // fe140904.disable();
										  								  
									  }									  
}


						var emAdd1 = "";
						var ficreated = "";
                        function popFormFieldsKF(){  
						
                          document.getElementsByName("companyPhone1")[0].value = "";
                          document.getElementsByName("employees_total_range")[0].value = "";
                          document.getElementsByName("company_name")[0].value = "";
                          document.getElementsByName("industry")[0].value = "";
                          var countryValue =document.getElementsByName("kickfireVisitorCountry")[0].value;
                          console.log("length of country field =="+countryValue.length);
                          if(document.getElementsByName("kickfireVisitorCountry").length>0){
                            console.log("enterfunction1");
                            if(document.getElementsByName("kickfireCompanyPhone")[0].value){
                              console.log("kickfireCompanyPhone == "+document.getElementsByName("kickfireCompanyPhone")[0].value);
                              document.getElementsByName("companyPhone1")[0].value = document.getElementsByName("kickfireCompanyPhone")[0].value;
                            }
                            if(document.getElementsByName("kickfireCompanyName")[0].value){
                              console.log("kickfireCompanyName == "+document.getElementsByName("kickfireCompanyName")[0].value);
                              document.getElementsByName("company_name")[0].value = document.getElementsByName("kickfireCompanyName")[0].value;
						  
                              var fe140845 = new LiveValidation('fe140845');
                              fe140845.disable();
							  document.getElementById("formElement3").style.display = "none";
                        
                            } else {
								if (ficreated != "Yes"){
								ficreated = "Yes";
								document.getElementById("formElement3").style.display = "block";
								
								document.getElementsByName("company")[0].addEventListener("blur", companyonBlur);
								//fe140486.add(Validate.Presence, {failureMessage:"This field is required"});
								var fe140845 = new LiveValidation("fe140845", { validMessage: "", onlyOnBlur: true });
								 fe140845.add(Validate.Presence, { failureMessage: "This field is required" });
								  fe140845.enable();			  				
							}
                            }
                            if(document.getElementsByName("kickfireEmployees")[0].value){
                              console.log("kickfireEmployees == "+document.getElementsByName("kickfireEmployees")[0].value);
                              var kfEmpVal = document.getElementsByName("kickfireEmployees")[0].value;
                              if (kfEmpVal == "1 to 10" || kfEmpVal == "10 to 50") {
                                document.getElementsByName("employees_total_range")[0].value = "1 - 49";
                              } else if (kfEmpVal == "50 to 100") {
                                document.getElementsByName("employees_total_range")[0].value = "50-99";
                              } else if (kfEmpVal == "100 to 250" || kfEmpVal == "250 to 500" || kfEmpVal == "500 to 1,000") {
                                document.getElementsByName("employees_total_range")[0].value = "250-999";
                              } else if (kfEmpVal == "1,000 to 2,500") {
                                document.getElementsByName("employees_total_range")[0].value = "1000-1999";
                              } else if (kfEmpVal == "2,500 to 5,000") {
                                document.getElementsByName("employees_total_range")[0].value = "2000-4999";
                              } else if (kfEmpVal == "5,000 to 10,000" || kfEmpVal == "10,000 to 25,000") {
                                document.getElementsByName("employees_total_range")[0].value = "5000-19999";
                              } else if (kfEmpVal == "25,000+") {
                                document.getElementsByName("employees_total_range")[0].value = "20000+";
                              }
                            } 
                            if(document.getElementsByName("kickfireIndustrySIC")[0].value){
                              console.log("kickfireIndustrySIC == "+document.getElementsByName("kickfireIndustrySIC")[0].value);
                              document.getElementsByName("industry")[0].value = document.getElementsByName("kickfireIndustrySIC")[0].value;
                            }    
                          }             
                        }


document.getElementsByName('email')[0].addEventListener("blur", emailOnBlurEvent, true);
var regex = "/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i";
function emailOnBlurEvent(){
	var emailfieldvalue = document.getElementsByName('email')[0].value;
	//var match1 = regex.test(emailfieldvalue);
	if (/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/.test(emailfieldvalue)){
    	emailadd1 = document.getElementsByName('email')[0].value;
		console.log("emailadd1  ===========  "+emailadd1);
	} else {
    	emailadd1 = decrypt_cookie(document.getElementsByName('email')[0].value, 5);
		console.log("emailadd2  ===========  "+emailadd1);
	}
     
     /*var splitArray = emailfieldvalue.split('@'); // To Get Array
    if (names1.indexOf(splitArray[1]) >= 0) {
        alert("Please provide a business email address. We are unable to process requests from public domain email addresses.");
        document.getElementById("fe140488").disabled = true;
        document.getElementsByName('email')[0].value = "";
        console.log("public domain email clear");
		document.getElementById("fe140488").disabled = false;
    } else if (names2.indexOf(splitArray[1]) >= 0) {
        alert("Please provide a business email address. We are unable to process requests from public domain email addresses.");
        document.getElementById("fe140488").disabled = true;
        document.getElementsByName('email')[0].value = "";
        console.log("public domain email clear");
		document.getElementById("fe140488").disabled = false;
    } else if (names3.indexOf(splitArray[1]) >= 0) {
        alert("Please provide a business email address. We are unable to process requests from public domain email addresses.");
        document.getElementById("fe140488").disabled = true;
        document.getElementsByName('email')[0].value = "";
       console.log("public domain email clear");
	   document.getElementById("fe140488").disabled = false;
    } else {*/
        //return true;
        //document.getElementById("fe140488").disabled = false;
        kickfirecheck();
		var CheckTimer1 = 0;
		var runc = 0;
		var nCheckTimer1 = setInterval(function() {
        CheckTimer1 = CheckTimer1+1;
        console.log("CheckTimer1 == "+CheckTimer1);
        if(runc==0 || CheckTimer1>3){
			clearInterval(nCheckTimer1);
            var chVLong = document.getElementsByName("kickfireVisitorLongitude")[0].value;
            console.log("chVong == " + chVLong);
            //console.log("step3");
            if (chVLong || CheckTimer1 >= 10) {
            	console.log("fCF");
                if (chVLong){
					clearInterval(nCheckTimer1);
                    popFormFieldsKF();   
                }                                      
            };  
			//console.log("outside1 == " + Date());
        }
      }, 1000); 
      runc = runc + 1;                        
   
}

function companyonBlur(){
	document.getElementsByName('company_name')[0].value = document.getElementsByName('company')[0].value;
}

/*(function() {
  var nTimer1 = setInterval(function() {
    if (document.getElementsByName('email')[0].value) {
		console.log("email value");
      emailOnBlurEvent();
      clearInterval(nTimer1);
    };
	//console.log("outside == " + Date())
  }, 1000);
})();*/

//issue in this function

document.getElementsByName('PhOptin')[0].addEventListener('change', updatePhonePermission);
function updatePhonePermission(){
	var checkbox1 =  document.getElementById("PhOptin");
	if(checkbox1.checked == true){
		document.getElementsByName("phoneOptinDate1")[0].value = output;
		document.getElementsByName("phoneOptinSource")[0].value = document.getElementsByName("cta_code")[0].value;
		document.getElementsByName("permissionPhone1")[0].value = "Yes";
		document.getElementsByName("PhOptin")[0].value = "Yes";
	} else {
		document.getElementsByName("phoneOptinDate1")[0].value = "";
		document.getElementsByName("phoneOptinSource")[0].value = "";
		document.getElementsByName("permissionPhone1")[0].value = "";
		document.getElementsByName("PhOptin")[0].value = "";
	}
}

document.getElementsByName('phone')[0].addEventListener("blur", phoneNotEmpty, true);
function phoneNotEmpty(){
	var phoneFieldValue = document.getElementsByName('phone')[0].value;
	if (phoneFieldValue.length > 0){
		document.getElementById("PhOptin").style.display = "block";
		document.getElementById("lb1Phone").style.display = "block";
	}
}

(function() {
	console.log("window.onload");
	var checktimer = 1;
	var nTimer1 = setInterval(function() {
	if (window.jQuery) {
			var d = new Date();
			var d1 =  d.getUTCDate();
			var m1 =  d.getUTCMonth();
			var y1 =  d.getUTCFullYear();
			console.log("value of d == "+d);
        	var f1, f2;
			console.log("date part check");
			console.log("ScheduleCtaExpiry == "+document.getElementsByName('ScheduleCtaExpiry')[0].value);
			var schDate = document.getElementsByName('ScheduleCtaExpiry')[0].value;
			var exDate = new Date(schDate);
			var Ed = exDate.getDate();
			var Em = exDate.getUTCMonth();
			var Ey = exDate.getUTCFullYear();
			console.log("value of Ed == "+Ed+"value of Em == "+Em+"value of Ey == "+Ey);
			const pd1 = new Date(schDate);
			console.log("pd1 == "+pd1);
			if (pd1 >= d){
				console.log("valid date for schedule banner");
				document.getElementsByName('DisplayScheduleBanner')[0].value = "Yes";
			}
			const pd2 = new Date('4/27/2023');
			if (pd1 <= pd2){
				console.log("valid date for schedule banner check1");				
			}
			if (pd1 >= pd2){
				console.log("valid date for schedule banner check2");				
			}
		checktimer = checktimer+1;
		
		if (document.getElementsByName('email')[0].value || checktimer >= 5) {
			clearInterval(nTimer1);
			console.log("email value");
		  	emailOnBlurEvent();
		  //$("'#"+stateFieldId+"'").replaceWith('<select id="'+stateFieldId+'" name="stateProv">' + '<option value="1">1</option>' +'</select>');
		  /*var rtextfield = document.getElementById(stateFieldId).parentNode;
		  var rtextfield1 = rtextfield.innerHTML.replace('input type="text"', 'select');
		  var rtextfield2 = rtextfield1.replace('value="" style="width:100%;"', '');
		  var rtextfield3 = rtextfield2 + "<option value=''>Please Select</option></select>";
		  rtextfield.innerHTML = "";
		  rtextfield.innerHTML = rtextfield3;
		  console.log("rtextfield3 == "+rtextfield3);*/
		  //console.log("rtextfieldinnerhtml == "+rtextfield.innerHTML);
		  
		}
	}
	if(checktimer >= 5){ 
		clearInterval(nTimer1); 
	}
	//console.log("outside == " + Date());
  }, 1000);
})();


var pageURL = window.location.href;
var SPageURL = "";
console.log("Page URL === "+window.location.href);
if (pageURL.indexOf("https://www.avaya.com/") > -1) {
	SPageURL = pageURL.replace('https://www.avaya.com/', '');
	SPageURL = SPageURL.replace('-reg/', '-ty/');
	console.log("SPageURL Live === "+SPageURL);
} else if (pageURL.indexOf("https://salescms.avaya.com/cs/avaya2/") > -1) {
	SPageURL = pageURL.replace('https://salescms.avaya.com/cs/avaya2/', '');
	SPageURL = SPageURL.replace('-reg/', '-ty/');
	console.log("SPageURL SCMS === "+SPageURL);
} else if (pageURL.indexOf("https://www-staging.avaya.com/") > -1) {
	SPageURL = pageURL.replace('https://www-staging.avaya.com/', '');
	SPageURL = SPageURL.replace('-reg/', '-ty/');
	console.log("SPageURL Stag === "+SPageURL);
}


handleFormSubmit = (function() { 

    var cached_function = handleFormSubmit;
	// var encryptedEmailAddress = encrypt_cookie(document.getElementsByName('email')[0].value, 25);
	// console.log("encryptedEmailAddress",encryptedEmailAddress);
	
    return function() {
        // your code
		  if(document.getElementsByName("nb-result")[0]){
			  if(document.getElementsByName("nb-result")[0].value == "catchall"){
					document.getElementsByName("nameAnalyzerStatus1")[0].value = "unverifiable";
			  } else {
					document.getElementsByName("nameAnalyzerStatus1")[0].value =document.getElementsByName("nb-result")[0].value;   
			  }
		   }
			
		var date = new Date();
		var m = 720*60;
		date.setTime(date.getTime() + (m * 60 * 1000));
		
		if(SPageURL){
			// setCookie('FName', document.getElementsByName('first_name')[0].value);
			$.cookie('pageURL',encodeURI(SPageURL),{expires:date,path:'/',domain:'avaya.com'});
		}
			
        var result = cached_function.apply(this, arguments); // use .apply() to call it
		console.log("result",result);
        
		// more of your code

        return result;
    };
})();


var subonclick= document.getElementsByClassName("submit-button-style")[0];
subonclick.addEventListener('click', fireGTM);
var ae = 0;
function fireGTM(){	
		//document.getElementsByName("PrimarySubmission")[0].value="Yes";
		console.log("triggered");
	setTimeout(function(){ 
	var validationClass = document.getElementsByClassName('LV_invalid_field');
	if (validationClass.length > 0) {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event':'salesContactFormSubmissionError'
		});
		console.log("salesContactFormSubmissionError");
	} else {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event':'salesContactFormSubmission'
		});
		console.log("salesContactFormSubmission");
	}
	 }, 1000);
}

var x = window.matchMedia("(max-width: 768px)");
//document.getElementById("formElement3").style.display = "none";
//document.getElementById("formElement4").style.display = "none";
var jack = document.getElementById("formElement6").parentElement.nodeName;
//document.getElementById("formElement4").style.display = "none";
//document.getElementById("formElement6").style.visibility = "hidden";
console.log("jack == "+jack);
 var re = /\S+@\S+\.\S+/;

 if (document.cookie.indexOf('EmailAddress=') > 0 && re.test(getCookie("EmailAddress"))) {
	document.getElementsByName('email')[0].value = getCookie("EmailAddress");
	//emailOnBlurEvent();
} else if (document.cookie.indexOf('EmailAddress=') > 0 && !re.test(getCookie("EmailAddress"))) {	
	document.getElementsByName('email')[0].value = decrypt_cookie(getCookie("EmailAddress"), 5);
	//document.getElementsByName('email')[0].value = getCookie("EmailAddress");
	//emailOnBlurEvent();
}

/*var imgsrca1 = document.getElementsByClassName('container-fluid')[0].getElementsByClassName('row');
for(var i = 0; i < imgsrca1.length; i ++) {
	document.getElementsByClassName('row')[i].setAttribute("id", "uniqueIdentifier");
console.log(i +"========imgsrca1 innerthtml =="+ document.getElementsByClassName('row')[i].innerHTML);
}*/


function isOdd(num) { return num % 2;}
var imgsrc = document.getElementsByClassName('container-fluid')[0].getElementsByClassName('row');

function myFunction(x) {
	  if (x.matches) { // If media query matches
	  		document.getElementsByClassName('av-form')[0].style.marginLeft="0px";
			//console.log("imgsrc.length == "+imgsrc.length);
			for(var i = 0; i < imgsrc.length - 9; i ++) {
			var imgsrc2 = document.getElementsByClassName('row')[i].getElementsByClassName('grid-layout-col');
			//var imgsrc3 = parseInt(imgsrc2);
			//var imgsrc3 = new String(imgsrc2);
			var imgsrc3 = Object.entries(imgsrc2).toString();
			//var imgsrc4 = Object.entries("1").toString();
			console.log("imgsrc3 ==  "+imgsrc3);
			//console.log("imgsrc4 ==  "+imgsrc4);
			//if (typeof imgsrc2 === 'object' && imgsrc2 !== null){
				//console.log("imgsrc2.length == "+imgsrc2.length);
				console.log("document.getElementsByClassName('row')[i].innerHTML === "+document.getElementsByClassName('row')[i].innerHTML);
				
			if (document.getElementsByClassName('row')[i].innerHTML.includes("Business Phone", 0) || document.getElementsByClassName('row')[i].innerHTML.includes("company", 0) || document.getElementsByClassName('row')[i].innerHTML.includes("Address 3", 0))	{	
			console.log("access 1st block");
			} else {
			if (imgsrc2.length > 0){
					if (isOdd(i)){
						imgsrc[i].style.float = "right"; 
						imgsrc[i].style.width = "100%"; 
						imgsrc[i].style.minHeight = "105px";
					} else {
						imgsrc[i].style.float = "left"; 
						imgsrc[i].style.width = "100%"; 
						imgsrc[i].style.minHeight = "105px";
					}
				//console.log("imgsrc2 ==  "+imgsrc2.length);
					/*if (imgsrc[i].querySelector("#formElement3") != null || imgsrc[i].querySelector("#formElement4") != null){
						imgsrc[i].style.display = "none";
					}*/
					console.log("i ==  "+i);
			}
			}
		}
} else {
	//console.log("else imgsrc.length == "+imgsrc.length);
		for(var i = 0; i < imgsrc.length - 9; i ++) {
			var imgsrc2 = document.getElementsByClassName('row')[i].getElementsByClassName('grid-layout-col');
			//console.log(i +"== imgsrc innerthtml =="+ document.getElementsByClassName('row')[i].innerHTML)
			//var imgsrc3 = parseInt(imgsrc2);
			//var imgsrc3 = new String(imgsrc2);
			var imgsrc3 = Object.entries(imgsrc2).toString();
			//var imgsrc4 = Object.entries("1").toString();
			//console.log("imgsrc3 ==  "+imgsrc3);
			//console.log("imgsrc4 ==  "+imgsrc4);
			//if (typeof imgsrc2 === 'object' && imgsrc2 !== null){
				//console.log("else imgsrc2.length == "+imgsrc2.length);
				
			if (imgsrc2.length > 0 && i < 6){
				if (isOdd(i)){
					imgsrc[i].style.float = "right"; 
					imgsrc[i].style.width = "48%"; 
					//imgsrc[i].style.minHeight = "105px";
				} else {
					imgsrc[i].style.float = "left"; 
					imgsrc[i].style.width = "48%"; 
					//imgsrc[i].style.minHeight = "105px";
				}
			//console.log("imgsrc2 ==  "+imgsrc2.length);
				
			console.log("i ==  "+i);
			} else {
				imgsrc[i].style.width = "100%"; 
				//imgsrc[i].style.minHeight = "105px";
				/*if (imgsrc[i].querySelector("#formElement3") != null || imgsrc[i].querySelector("#formElement4") != null){
					imgsrc[i].style.display = "none";
				}*/
			}
		}		
		
		for(var i = imgsrc.length - 9; i < imgsrc.length; i ++) {
			imgsrc[i].style.width = "100%";
			imgsrc[i].style.clear = "both";
		}
	}
}
window.onresize = function() {
	myFunction(x);	
} 

myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

fe140486.add(Validate.Presence, {failureMessage:"This field is required"});
fe140487.add(Validate.Presence, {failureMessage:"This field is required"});
fe140488.add(Validate.Presence, {failureMessage:"This field is required"});
fe140488.add(Validate.Format, {pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, failureMessage: "A valid email address is required"});
fe140491.add(Validate.Presence, {failureMessage:"This field is required"});

/*hover*/

var css = 'input[type="text"]:hover{ border-color: #1B77AF }';
css = css+ 'textarea.LV_valid_field:active { border-color: #1B77AF }';
css = css+ '.av-form .elq-form .LV_valid_field { border-color: #1B77AF }';
css = css+ '.LV_valid_field { border-color: #1B77AF }';
css = css+ 'input.LV_valid_field:hover { border-color: #1B77AF }';
css = css+ 'input.LV_valid_field:active { border-color: #1B77AF }';
css = css+ 'textarea.LV_valid_field:hover { border-color: #1B77AF }';
css = css+ '.elq-form textarea.LV_valid_field { border-color: #1B77AF !important}';
css = css+ '.elq-form input.LV_valid_field { border-color: #1B77AF !important}';
css = css+ '.av-form .elq-form select:hover { border-color: #1B77AF !important}';
css = css+ '.av-form .elq-form textarea:hover{ border-color: #1B77AF !important}';
css = css+ '.av-form .elq-form a.formStatLink:hover { color: #004E6C !important}';
css = css+ '.av-form .elq-form label{margin-bottom: 5px;}';
css = css+ '.av-form .elq-form input, .av-form .elq-form select{background-color: #f1f1f3;}';//field background color
css = css+ '.av-form .elq-form input:focus, .av-form .elq-form select:focus{background-color: #ffffff;}';
css = css+ '.av-form .form-text p {color:#313133}';
css = css+ '.LV_valid_field { border-color: #1B77AF;background-color: #FFFFFF !important}';

//css = css+ '.av-form .elq-form input:placeholder-shown{background-color: #ffffff;}';
//css = css+ '.av-form .elq-form input:placeholder-shown {background-color: #f1f1f3;}';
css = css+ '#formElement18 .row .submit-button-style { color: #ffffff !important;background-color:transparent !important;position: relative;z-index: 1;margin: 0 !important;font-weight:400;border: 0px solid #1B77AF;}';
css = css+ '#formElement18 .row > div > div {position: relative;overflow: hidden;cursor: pointer;clear: both;border-radius: 5px; background-color:#1B77AF  !important;box-shadow: 3px 2px 20px #4e4c4c59;border: 0px solid #1B77AF;}';
css = css+ '#formElement18 .row > div > div:before {content: close-quote;position: absolute;z-index: 0;width: 0;height: 100%;left: -50%;top: 0;-webkit-transform: skew(50deg);-moz-transform: skew(50deg);-o-transform: skew(50deg);-ms-transform: skew(50deg);transform: skew(50deg);-webkit-transition: all 0.3s;-moz-transition: all 0.3s;-o-transition: all 0.3s;-ms-transition: all 0.3s;transition: all 0.3s;-webkit-transform-origin: top left;-moz-transform-origin: top left;-o-transform-origin: top left;-ms-transform-origin: top left;transform-origin: top left;transition-duration: 0.6s;}';
css = css+ '#formElement18 .row > div > div:hover::before {width: 150%;background-color: #004E6C;}';


css = css+ '.av-form .elq-form input:-webkit-autofill, .av-form .elq-form input:-webkit-autofill:hover, .av-form .elq-form input:-webkit-autofill:focus, .av-form .elq-form input:-webkit-autofill:active { background-color: #ffffff !important; -webkit-box-shadow: 0 0 0 30px white inset !important;}';

//css = css+ '.av-form .elq-form select:focus{background-color: #ffffff !important}';
//css = css+ '.LV_valid_field:-webkit-autofill, .LV_valid_field:-webkit-autofill:hover, .LV_valid_field:-webkit-autofill:focus { background-color: #ffffff !important; -webkit-box-shadow: 0 0 0 30px white inset !important;}';

//css = css+ '.av-form .elq-form input a:hover{color: #004E6C;}';
//css = css+ '.av-form .elq-form input a{color: #FF0000;}';
//css = css+ '.formStatement .formStatLink:hover{color: #004E6C;}';
//css = css+ '.grid-layout-col .submit-button-style:hover{background-color:#004E6C;}';

var style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
    } else {
    style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);

//GA Script
document.getElementById('form4181').addEventListener(
 'submit', function(event) {
 ga(function() {
 var tracker = ga.getAll()[0];
 var clientId = tracker.get('clientId');
 document.getElementById('GACLIENTID').value = clientId;
 });
 });

_NBSettings = {
      
      acceptedStatusCodes: [0,1,2,3,4],
	  feedback: false,
	   apiKey: 'public_d3103376c0d9de0acc210ec8c389f284'
      	
};
var script = document.createElement('script');
script.src = "https://cdn.neverbounce.com/widget/dist/NeverBounce.js";
document.body.appendChild(script);


/*Kickfire code open*/
function kickfirecheck(){

 var emailFieldKF = document.getElementsByName('email')[0].value;
  console.log(emailFieldKF);
        //const address3 = document.getElementsByName("address3")[0].value;
       $(function() {
                var $kickfireFormEmailAddress = $('[name="email"]');
                console.log($kickfireFormEmailAddress.value);
                var $kickfireFormCompany =  $('[name="company"]');

                var $kickfireCompanyName = $('[name="kickfireCompanyName"]');
                var $kickfireCompanyTradeName = $('[name="kickfireCompanyTradeName"]');
                var $kickfireCompanyWebsite = $('[name="kickfireCompanyWebsite"]');
                var $kickfireCompanyStreet = $('[name="kickfireCompanyStreet"]');
                var $kickfireCompanyCity = $('[name="kickfireCompanyCity"]');
                var $kickfireCompanyRegion = $('[name="kickfireCompanyRegion"]');
                var $kickfireCompanyCountry = $('[name="kickfireCompanyCountry"]');
                var $kickfireCompanyPostal = $('[name="kickfireCompanyPostal"]');
                var $kickfireCompanyPhone = $('[name="kickfireCompanyPhone"]');
                var $kickfireEmployees = $('[name="kickfireEmployees"]');
                var $kickfireRevenue = $('[name="kickfireRevenue"]');
                var $kickfireIndustrySIC = $('[name="kickfireIndustrySIC"]');
                var $kickfireIndustryNAICS = $('[name="kickfireIndustryNAICS"]');

                var $kickfireVisitorCity = $('[name="kickfireVisitorCity"]');
                var $kickfireVisitorRegionShort = $('[name="kickfireVisitorRegionShort"]');
                var $kickfireVisitorRegion = $('[name="kickfireVisitorRegion"]');
                var $kickfireVisitorCountryShort = $('[name="kickfireVisitorCountryShort"]');
                var $kickfireVisitorCountry = $('[name="kickfireVisitorCountry"]');
                var $kickfireVisitorLatitude = $('[name="kickfireVisitorLatitude"]');
                var $kickfireVisitorLongitude = $('[name="kickfireVisitorLongitude"]');


                var kfkey = '8b117c14cf29b01b';
                var kfvlocKey = '92c76fcs094596b6';
                if( emailFieldKF != "")                {
                    var emailDomain = emailFieldKF.substring(emailFieldKF.indexOf('@') + 1);
                    if(emailDomain != 'avaya.com') {
                        if(emailDomain != 'sw-at.com') {
							if(emailDomain != 'portent.com') {
                            console.log(emailDomain + ": success");
                            kfprocessAPI(kfkey, kfvlocKey);
                            console.log("kfprocessAPI Runs");
                               
                            setTimeout(function() { 
                                var kickFireValues = "Company { Name: " + document.getElementsByName("kickfireCompanyTradeName")[0].value + "; Website: "+ document.getElementsByName("kickfireCompanyWebsite")[0].value + "; Country: "+ document.getElementsByName("kickfireCompanyCountry")[0].value + "; Region: "+ document.getElementsByName("kickfireCompanyRegion")[0].value + "}, Visitor { Country: " + document.getElementsByName("kickfireVisitorCountry")[0].value + "; Region: " + document.getElementsByName("kickfireVisitorRegion")[0].value + "; City: " + document.getElementsByName("kickfireVisitorCity")[0].value +"}";
                                        console.log(kickFireValues);
                                    }, 3000);
                                      
							} else {                           
								console.log(emailDomain);                         
							}
						} else {                                
							console.log("emailDomain = "+emailDomain);
                             }
                    } else {                       
                        console.log(emailDomain);                     
                    }                 // <=== FOR CUSTOMER
                }

                //==================== kfprocessAPI  ====================
                function kfprocessAPI(f,r,l){var g=$kickfireFormEmailAddress.val().split("@").slice(1),b="",m="",h="",n="//api.kickfire.com/v3/company:(all)?website="+g+"&key="+f;$kickfireFormCompany.val("");$.getJSON("//api.kickfire.com/gip",function(d){function p(){$.getJSON(n,function(a){"success"===a.status&&0===a.data["0"].isISP&&($kickfireFormCompany.val(a.data[0].companyName),e(a))})}function e(a){0<$kickfireCompanyName.length&&$kickfireCompanyName.val(a.data[0].companyName);0<$kickfireCompanyTradeName.length&&$kickfireCompanyTradeName.val(a.data[0].tradeName);0<$kickfireCompanyWebsite.length&&$kickfireCompanyWebsite.val(a.data[0].website);0<$kickfireCompanyStreet.length&&$kickfireCompanyStreet.val(a.data[0].street);0<$kickfireCompanyCity.length&&$kickfireCompanyCity.val(a.data[0].city);0<$kickfireCompanyRegion.length&&$kickfireCompanyRegion.val(a.data[0].region);0<$kickfireCompanyCountry.length&&$kickfireCompanyCountry.val(a.data[0].country);0<$kickfireCompanyPostal.length&&$kickfireCompanyPostal.val(a.data[0].postal);0<$kickfireCompanyPhone.length&&$kickfireCompanyPhone.val(a.data[0].phone);0<$kickfireEmployees.length&&$kickfireEmployees.val(a.data[0].employees);
                0<$kickfireRevenue.length&&$kickfireRevenue.val(a.data[0].revenue);0<$kickfireIndustrySIC.length&&$kickfireIndustrySIC.val(a.data[0].sicDesc);0<$kickfireIndustryNAICS.length&&$kickfireIndustryNAICS.val(a.data[0].naicsDesc)}function k(a){0<$kickfireVisitorCity.length&&$kickfireVisitorCity.val(a.data[0].visitorCity);0<$kickfireVisitorRegionShort.length&&$kickfireVisitorRegionShort.val(a.data[0].visitorRegionShort);0<$kickfireVisitorRegion.length&&$kickfireVisitorRegion.val(a.data[0].visitorRegion);
                0<$kickfireVisitorCountryShort.length&&$kickfireVisitorCountryShort.val(a.data[0].visitorCountryShort);0<$kickfireVisitorCountry.length&&$kickfireVisitorCountry.val(a.data[0].visitorCountry);0<$kickfireVisitorLatitude.length&&$kickfireVisitorLatitude.val(a.data[0].visitorLatitude);0<$kickfireVisitorLongitude.length&&$kickfireVisitorLongitude.val(a.data[0].visitorLongitude)}function q(a,c,b){$.getJSON("//forms.visistat.com/kfwf.php?&e="+a,function(a){a=a.iswifi;0===c&&"1"!==a&&($kickfireFormCompany.val(b.data[0].name),
                e(b));k(b)})}"undefined"!==typeof l&&(d=l);var t="//api.kickfire.com/v3/company:(all)?ip="+d+"&key="+f+"&vlocKey="+r;d?$.getJSON(t,function(a){"success"===a.status?(b=a.data[0].website,h=a.data["0"].isISP,$.getJSON("//forms.visistat.com/kfc.php?ip="+d+"&e="+g+"&key="+f,function(){}),g==b?($kickfireFormCompany.val(a.data[0].name),e(a),k(a)):$.getJSON(n,function(c){"success"===c.status?(m=c.data["0"].isISP,0===m?($kickfireFormCompany.val(c.data[0].name),e(c),k(a)):q(b,h,a)):q(b,h,a)})):p()}):p()})};
                    //==================== kfprocessAPI  //====================
            });
}

if (document.getElementsByName("ImageURL")[0].value){ } else {
	document.getElementsByName("ImageURL")[0].value = "https://images.news.avaya.com/EloquaImages/clients/AvayaInc/%7Bc38e5796-f902-4598-a95b-c53f1b1ec1fe%7D_top-right-box-1.jpg";
}
if (document.getElementsByName("PDFLink")[0].value){ } else {
	document.getElementsByName("PDFLink")[0].value = "https://www.avaya.com/ru/documents/in-state-of-play-uc8100en.pdf";
}

document.getElementsByClassName("submit-button-style")[0].addEventListener("click", function(event){
setTimeout(function(){ 
var validationClass = document.getElementsByClassName('LV_invalid_field');
console.log("validationClass.length == "+validationClass.length);
	if (validationClass.length == 0) {
  event.preventDefault(); 
  
  		var checktimer2 = 0;
  		var nTimer2 = setInterval(function() {		
			checktimer2 = checktimer2+1;
			if (document.getElementsByName('kickfireVisitorLatitude')[0].value || checktimer2 >= 8) {
				console.log("email value");			  
			  clearInterval(nTimer2);
			document.getElementsByClassName("elq-form")[0].submit();
			};
		
			console.log("outside == " + Date());
		  }, 1000);
		
}
}, 1500);
});