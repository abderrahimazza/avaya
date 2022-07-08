function getCookie(name){
	var re=new RegExp(name+"=([^;]+)");var value=re.exec(document.cookie);return(value!=null)?unescape(value[1]):null;
} 
var today = new Date();
  var expiry = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000); // plus 30 days

function setCookie(name, value){
    document.cookie=name + "=" + escape(value) + "; domain=.avaya.com;path=/; expires=" + expiry.toGMTString();
}

document.getElementById("formElement4").style.display = "none";//not to display Business Phone field container
document.getElementById('formElement5').style.display = "none";//not to display Country field container
document.getElementById('formElement9').style.display = "none";//NameYourCurrentCCSolution
document.getElementById('formElement12').style.display = "none";//address3
document.getElementById("formElement0").style.marginBottom = "15px";
document.getElementById("formElement1").style.marginBottom = "15px";
document.getElementById("formElement2").style.marginBottom = "15px";
document.getElementById("formElement3").style.marginBottom = "15px";
//document.getElementById("formElement4").style.marginBottom = "15px";
//document.getElementById("formElement5").style.marginBottom = "15px";
//document.getElementById("formElement6").style.marginBottom = "15px";
//document.getElementById("formElement8").style.marginBottom = "15px";
document.getElementById("formElement9").style.marginBottom = "20px";
//document.getElementById("formElement10").style.marginTop = "10px";
document.getElementById("formElement11").style.marginTop = "20px";

var GTM1 = document.getElementsByName("GACLIENTID")[0];
var GTM2 = document.getElementsByName("GAUSERID")[0];
var GTM3 = document.getElementsByName("GATRACKID")[0];
GTM1.id = "GACLIENTID";
GTM2.id = "ruid";
GTM3.id = "GATRACKID";

var BussPhone = document.createElement('div');
BussPhone.setAttribute("id","formElement4a");
BussPhone.setAttribute("class","elq-field-style form-element-layout row");
BussPhone.innerHTML = "<label id='BussPhone' style=float:left;clear:both;font-size:14px;'>사무실 전화번호</label><br><table cellpadding='0' cellspacing='0' width='100%' border='0'><tr><td width='13%'><input id='PhCode' name='PhCode' type='text' value='+82'></td><td width='97%' style='padding-left:10px'><div style='width:100%'><input id='PhNumber' name='PhNumber' type='text' value='' width='100%' onblur='javascript:stripltpspaces(this)'></div></td></tr><tr><td width='100%' colspan='2' style='font-size:10px;'>지역번호와 직통번호를 표시해 주세요 (예시: 02 12345678)</td></tr></table>";
//exInp1.appendChild(newP);
var z1 = document.getElementById("formElement4"); 
//insertBefore(newP, z);
insertAfter(BussPhone, z1);

function populatePhoneField(){
var tp11=document.getElementsByName('PhCode')[0].value;
var tp12=document.getElementsByName('PhNumber')[0].value;
document.getElementById('fe122871').value = tp11+" "+tp12;
}

function stripltpspaces(input)
{
  input.value = input.value.replace(/^\s+|\s+$/g,'');
  populatePhoneField();
  return true;
}

//document.getElementById("formElement4a").style.marginBottom = "15px";

var countryField = document.getElementsByName('country')[0];
countryField.value = "Korea Republic of";
countryField.selected = true;
document.getElementsByName('country_iso')[0].value = 'KOR';

//Function to capture url parameters
function getUrlVar(key){
	var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
	return result && unescape(result[1]) || ""; 
}

var pageURL = window.location.href;

var checkinit = "N";
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
					document.getElementsByName("emailOptinSource1")[0].value = "WEB-GET-KR-SMB-CC";
					document.getElementsByName("permissionemail")[0].value = "Yes";
					document.getElementsByName("optin")[0].value = "Yes";
					document.getElementsByName("EmOptIn")[0].value = "Yes";
					
				} else {
					document.getElementsByName("emailOptinDate1")[0].value = "";
					document.getElementsByName("emailOptinSource1")[0].value = "";
					document.getElementsByName("permissionemail")[0].value = "";
					document.getElementsByName("optin")[0].value = "";
					document.getElementsByName("EmOptIn")[0].value = "No";
					
				}
			}
var Countrysel;

//Functions to add code before and after form elements
function insertBefore(el, referenceNode){
	referenceNode.parentNode.insertBefore(el, referenceNode);
}
function insertAfter(el, referenceNode){
	referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

var vUsingCCSolutionYes = document.getElementsByName('UsingCCSolution')[0];
var vUsingCCSolutionNo = document.getElementsByName('UsingCCSolution')[1];
var vCurrentAvayaCustomerYes = document.getElementsByName('AreYouCurrentAvayaCustomer')[0];
var vCurrentAvayaCustomerNo = document.getElementsByName('AreYouCurrentAvayaCustomer')[1];

vUsingCCSolutionYes.setAttribute("style", "width:30px !important;");
vUsingCCSolutionNo.setAttribute("style", "width:30px !important");
vCurrentAvayaCustomerYes.setAttribute("style", "width:30px !important");
vCurrentAvayaCustomerNo.setAttribute("style", "width:30px !important");


vUsingCCSolutionYes.onclick = function(){
		document.getElementById('UsingCCSolutionValid').value = "Y";
	//if (document.getElementsByName('UsingCCSolution')[0].value == "Yes"){
		document.getElementById('formElement9').style.display = "block";
		var fe122877 = new LiveValidation( "fe122877", { validMessage: "", onlyOnBlur: true });
		fe122877.enable();
		fe122877.add( Validate.Presence, { failureMessage: "이 필드는 필수 항목입니다." } );	
	//} else {		
		//var field9 = new LiveValidation( "field9", { validMessage: "", onlyOnBlur: true });
		//field9.disable();
		//document.getElementById('formElement9').style.display = "none";
	//}	
	document.getElementById('UsingCCSolutionValid').focus();
	document.getElementsByName('UsingCCSolution')[0].focus()	
}
vUsingCCSolutionNo.onclick = function(){
		document.getElementById('UsingCCSolutionValid').value = "N";
		var fe122877 = new LiveValidation( "fe122877", { validMessage: "", onlyOnBlur: true });
		fe122877.disable();
		document.getElementById('formElement9').style.display = "none";
		document.getElementById('UsingCCSolutionValid').focus();
		document.getElementsByName('UsingCCSolution')[1].focus()
}

vCurrentAvayaCustomerYes.onclick = function(){
		document.getElementById('AreYouCurrentAvayaCustomerValid').value = "Y";	
	document.getElementById('AreYouCurrentAvayaCustomerValid').focus();
	document.getElementsByName('AreYouCurrentAvayaCustomer')[0].focus()	
}
vCurrentAvayaCustomerNo.onclick = function(){
		document.getElementById('AreYouCurrentAvayaCustomerValid').value = "N";
		document.getElementById('AreYouCurrentAvayaCustomerValid').focus();
		document.getElementsByName('AreYouCurrentAvayaCustomer')[1].focus()
}

//function to hide label for fields
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
labelatt('fe122896');

document.getElementById("fe122896").type = "hidden"; //EmailOptin is text field to hide this field

/*var colsm12 = document.getElementsByClassName('elq-field-style');
console.log("colsm12.length == "+colsm12.length)
var i;
for (i = 0; i < colsm12.length; i++) {
  colsm12[i].style.paddingBottom = "15px";
}*/

if (document.getElementById('formElement7')){
	var div7 = document.getElementById('formElement7');
	div7.setAttribute("style", "padding-bottom:15px;");
	var div71 = div7.getElementsByTagName('div')[1];
	div71.setAttribute("style", "display: table;");
	var div711 = div71.childNodes;
	console.log("div711.length == "+div711.length);
	for(i=0;i<div711.length;i++){
		if( div711[i].className == "row" ){
			div711[i].setAttribute("style", "display: table;");
		}
	}
	if (document.getElementById('fe122875')){
		var div71a = document.getElementById('fe122875');
		var div71b = div71a.getElementsByTagName('div');
		console.log("div71b  === "+div71b.length);
		div71b[0].setAttribute("style", "width: 60px !important;display: table-cell;vertical-align: top; padding-top:10px;");
		div71b[1].setAttribute("style", "width: 75px !important;display: table-cell;vertical-align: top; padding-top:10px;");
		var div71c = div71a.getElementsByTagName('input');
		div71c[0].setAttribute("style", "width: 30px !important;float: left;margin-top:4px;");
		div71c[1].setAttribute("style", "width: 30px !important;float: left;margin-top:4px;");
		var div71d = div71a.getElementsByTagName('br');
		div71d[0].setAttribute("style", "display:none;");
		div71d[1].setAttribute("style", "display:none;");
	}
		
}
if (document.getElementById('formElement8')){
	var div8 = document.getElementById('formElement8');
	div8.setAttribute("style", "padding-bottom:15px;");
	var div81 = div8.getElementsByTagName('div')[1];
	div81.setAttribute("style", "display: table;");
	var div811 = div81.childNodes;
	console.log("div811.length == "+div811.length);
	for(i=0;i<div811.length;i++){
		if( div811[i].className == "row" ){
			div811[i].setAttribute("style", "display: table;");
		}
	}
	if (document.getElementById('fe122876')){
		var div81a = document.getElementById('fe122876');
		var div81b = div81a.getElementsByTagName('div');
		console.log("div81b  === "+div81b.length);
		div81b[0].setAttribute("style", "width: 60px !important;display: table-cell;vertical-align: top;");
		div81b[1].setAttribute("style", "width: 75px !important;display: table-cell;vertical-align: top;");
		var div81c = div81a.getElementsByTagName('input');
		div81c[0].setAttribute("style", "width: 30px !important;float: left;margin-top:4px;");
		div81c[1].setAttribute("style", "width: 30px !important;float: left;margin-top:4px;");
		var div81d = div81a.getElementsByTagName('br');
		div81d[0].setAttribute("style", "display:none;");
		div81d[1].setAttribute("style", "display:none;");
	}	
}

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
label.innerHTML = "예, 또한 어바이어로부터 마케팅 이메일을 수신하는 데 동의합니다.";
var divGDPRtext = document.createElement("div");
divGDPRtext.id="gdprtext";
divGDPRtext.innerHTML = "<div style='color: #000;width: 90%;margin-left: 25px;margin-bottom: 30px;margin-top: 15px;font-size:13px;line-height:20px;'>이 양식을 제출함으로써 본인은 위에서 언급한 목적으로 어바이어 데이터베이스에서 정보를 처리하는 데 동의합니다. <br>자세한 내용은 <a href='https://www.avaya.com/kr/privacy/website/' target='_blank' style='color:#CC0000;font-size:14px;line-height:20px;'>개인 정보 보호 정책</a>을 참조하거나 언제든지 <a href='https://news.avaya.com/global-subscription' target='_blank' style='color:#CC0000;font-size:14px;line-height:20px;'>이메일 환경 설정</a>을 관리하십시오.</div>";
document.getElementById('formElement13').style.marginTop = "15px";

var container=document.getElementById('formElement13')
container.appendChild(checkbox);
container.appendChild(label);
container.appendChild(divGDPRtext);
document.getElementById("optin").style.marginTop = "5px";
document.getElementById("optin").style.width = "20px"; 
document.getElementById("optin").style.float = "left"; 
document.getElementById("lb1").style.fontWeight = "normal";
var checkbox = document.querySelector("input[name=EmoptIn]");
checkbox.addEventListener( 'change', function() {checkOptin();});


document.getElementsByName("content_title")[0].value = "Contact Sales";//passing value for content title
var ref = document.referrer;//this assigns refferer value to ref variable
if (ref != ""){
document.getElementsByName("content_url")[0].value = ref;//passing referrer value to the content URL field
} else {
document.getElementsByName("content_url")[0].value = window.location;
}

//Countrysel= document.getElementsByName("country")[0];
//Countrysel.addEventListener('change', detect_ccode);//Code to implement on change on country select field

handleFormSubmit = (function() {
    var cached_function = handleFormSubmit;

    return function() {
        // your code
		setCookie('EmailAddress', document.getElementsByName('email')[0].value);
		setCookie('FName', document.getElementsByName('first_name')[0].value);
		setCookie('LName', document.getElementsByName('last_name')[0].value);
        var result = cached_function.apply(this, arguments); // use .apply() to call it

        // more of your code

        return result;
    };
})();

fe122872.add(Validate.Presence, {failureMessage:"이 필드는 필수 항목입니다."});
fe122869.add(Validate.Presence, {failureMessage:"이 필드는 필수 항목입니다."});
fe122868.add(Validate.Presence, {failureMessage:"이 필드는 필수 항목입니다."});
fe122870.add(Validate.Presence, {failureMessage:"이 필드는 필수 항목입니다."});
fe122870.add(Validate.Format, {pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, failureMessage: "유효한 이메일 주소가 요구됩니다"});
var PhNumber = document.querySelector('#form3860 #PhNumber');
var PhNumber = new LiveValidation(PhNumber, {validMessage: "", onlyOnBlur: false, wait: 300});
PhNumber.add(Validate.Presence, {failureMessage:"연락 가능한 번호를 기입해 주세요. 숫자, -,#을 사용하여"});
PhNumber.add(Validate.Format, {pattern: /^\(?\+?[\d\(\-\#\s\)]+$/, failureMessage: "연락 가능한 번호를 기입해 주세요. 숫자, -,#을 사용하여"});
PhNumber.add( Validate.Length, {tooShortMessage:"연락 가능한 번호를 기입해 주세요. 숫자, -,#을 사용하여", tooLongMessage: "연락 가능한 번호를 기입해 주세요. 숫자, -,#을 사용하여",  minimum: 4, maximum: 20});
//fe122873.add(Validate.Presence, {failureMessage:"이 필드는 필수 항목입니다."});
fe122874.add(Validate.Presence, {failureMessage:"이 필드는 필수 항목입니다."});
 

//Style added for Submit button
var btn1 = document.getElementsByClassName("submit-button-style")[0]; 
btn1.style.width = "100%";
btn1.style.display = "block";
btn1.style.marginTop = "0";
btn1.style.marginBottom = "0";
btn1.style.color = "#FFFFFF";
btn1.style.marginLeft = "auto";
btn1.style.marginright = "auto";
btn1.value = "제출 ► ";
var x = document.getElementsByClassName("submit-button-style")[0];
x.style.backgroundColor = "#DA291C";
x.style.marginTop = "15px";
x.style.marginLeft = "auto";
x.style.marginright = "auto";
x.style.display = "block";
var div14a = document.getElementById('fe122926');
		div14a.setAttribute("style", "color:#FFF;background-color:#DA291C;font-weight: 400;font-size: 14px;line-height: 24px;display:block;");

function OnLoadCreateFields(){
	var divcontainer1 = document.getElementById('formElement7');
	var divcontainer1a = document.getElementById('formElement7').children[1].children[0].children[0].children[0].children[1];
	var divcontainer1b = document.getElementById('formElement7').children[1].children[0].children[0].children[0];
	divcontainer1b.setAttribute("style","display: table;");
	var textfield1 = document.createElement('div');
	textfield1.setAttribute("id","formElement7a");
	textfield1.setAttribute("height","0");
	textfield1.setAttribute("style","padding: 0px 0px 0px 0px;height:0px;margin: 0px 0px 0px 0px;clear:both; display: block;");
	textfield1.innerHTML = "<input type='text' id='AreYouCurrentAvayaCustomerValid' name='AreYouCurrentAvayaCustomerValid' value='' style='width: 1px; height: 1px; outline: none; border: none; background: transparent; padding: 0; clear:both;'>";
	insertAfter(textfield1, divcontainer1a);
	
	var textfield2 = document.createElement('div');
	textfield2.setAttribute("id","formElement8a");
	textfield2.setAttribute("height","0");
	textfield2.setAttribute("style","padding: 0px 0px 0px 0px;height:0px;margin: 0px 0px 0px 0px;clear:both; display: block;");
	textfield2.innerHTML = "<input type='text' id='UsingCCSolutionValid' name='UsingCCSolutionValid' value='' style='width: 1px; height: 1px; outline: none; border: none; background: transparent; padding: 0;'>";
	divcontainer2 = document.getElementById('formElement8');
	insertAfter(textfield2, divcontainer2);
	
	var divcontainer2 = document.getElementById('formElement8');
	var divcontainer2a = document.getElementById('formElement8').children[1].children[0].children[0].children[0].children[1];
	var divcontainer2b = document.getElementById('formElement8').children[1].children[0].children[0].children[0];
	divcontainer2b.setAttribute("style","display: table;");
	
	var textfield2 = document.createElement('div');
	textfield2.setAttribute("id","formElement8a");
	textfield2.setAttribute("height","0");
	textfield2.setAttribute("style","padding: 0px 5px 0px 0px;height:0px;margin: 0px 0px 0px 0px;clear:both");
	textfield2.innerHTML = "<input type='text' id='UsingCCSolutionValid' name='UsingCCSolutionValid' value='' style='width: 1px; height: 1px; outline: none; border: none; background: transparent; padding: 0;'>";
	insertAfter(textfield2, divcontainer2a);
	
	
	var AreYouCurrentAvayaCustomerValid = new LiveValidation( "AreYouCurrentAvayaCustomerValid", { validMessage: "", onlyOnBlur: true });
	AreYouCurrentAvayaCustomerValid.add( Validate.Presence, { failureMessage: "이 필드는 필수 항목입니다." } );
	AreYouCurrentAvayaCustomerValid.enable();
	
	var UsingCCSolutionValid = new LiveValidation( "UsingCCSolutionValid", { validMessage: "", onlyOnBlur: true });
	UsingCCSolutionValid.add( Validate.Presence, { failureMessage: "이 필드는 필수 항목입니다." } );
	UsingCCSolutionValid.enable();
	
}
OnLoadCreateFields();

if (getUrlVar("CTA") != ""){
	document.getElementsByName("cta_code")[0].value = getUrlVar("CTA");
}  else {
	if (pageURL.includes("/products/ccaas/public/")){
		document.getElementsByName("cta_code")[0].value = "WEB-GET-EN-SMB-CC";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-EN-SMB-CC-KR";
	}else if (pageURL.includes("/products/ccaas/public-pricing/")){
		document.getElementsByName("cta_code")[0].value = "WEB-GET-EN-SMB-CC";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-EN-SMB-CC-PRC-KR";
	} else if (pageURL.includes("/products/ccaas/public-features/")){
		document.getElementsByName("cta_code")[0].value = "WEB-GET-EN-SMB-CC";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-EN-SMB-CC-FEA-KR";
	} 
}
if (getUrlVar("TAC") != ""){
	document.getElementsByName("tactic_code")[0].value = getUrlVar("TAC");
}

// onload and Resize
window.onload = function() {
	var winWidth = window.outerWidth;
			if(winWidth > 768) {
					resizefield();
	} else {
		resizefield2();
	
	}
}

window.onresize = function() {
	var winWidth = window.outerWidth;
			if(winWidth > 768) {
					resizefield();
	} else {
		resizefield2();
	}
} 

function isOdd(num) { return num % 2;}
function resizefield() {
var imgsrc = document.getElementsByClassName('container-fluid')[0].getElementsByClassName('row');
for(var i = 0; i < imgsrc.length - 18; i ++) {
	var imgsrc2 = document.getElementsByClassName('row')[i].getElementsByClassName('grid-layout-col');
	var imgsrc3 = Object.entries(imgsrc2).toString();
		
	if (imgsrc2.length > 0){
		if (isOdd(i)){
			imgsrc[i].style.float = "right"; 
			imgsrc[i].style.width = "48%"; 
			imgsrc[i].style.minHeight = "105px";
		} else {
			imgsrc[i].style.float = "left"; 
			imgsrc[i].style.width = "48%"; 
			imgsrc[i].style.minHeight = "105px";
		}
		//console.log("imgsrc2 ==  "+imgsrc2.length);
			if (imgsrc[i].querySelector("#formElement5") != null){
				imgsrc[i].style.display = "none";
			}
	console.log("i ==  "+i);
	}
}
for(var i = imgsrc.length - 18; i < imgsrc.length; i ++) {
	imgsrc[i].style.width = "100%";
	imgsrc[i].style.clear = "both";
}
}
function resizefield2() {
		var imgsrc = document.getElementsByClassName('container-fluid')[0].getElementsByClassName('row');
for(var i = 0; i < imgsrc.length - 18; i ++) {
	var imgsrc2 = document.getElementsByClassName('row')[i].getElementsByClassName('grid-layout-col');
	var imgsrc3 = Object.entries(imgsrc2).toString();
		
	if (imgsrc2.length > 0){
		if (isOdd(i)){
			imgsrc[i].style.width = "100%";
			//imgsrc[i].style.clear = "both"
			imgsrc[i].style.minHeight = "0px";
		} else {
			imgsrc[i].style.width = "100%";
			//imgsrc[i].style.clear = "both"
			imgsrc[i].style.minHeight = "0px";
		}
		//console.log("imgsrc2 ==  "+imgsrc2.length);
			if (imgsrc[i].querySelector("#formElement5") != null){
				imgsrc[i].style.display = "none";
			}
	console.log("i ==  "+i);
	}
}
for(var i = imgsrc.length - 18; i < imgsrc.length; i ++) {
	imgsrc[i].style.width = "100%";
	imgsrc[i].style.clear = "both";
}
	}
 

//document.querySelector('element.class:submit-button')
var subonclick= document.getElementsByClassName("submit-button-style")[0];
subonclick.addEventListener('click', fireGTM);
function fireGTM(){
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



/*Kickfire code open*/

var form = document.getElementById("form3860");
form.addEventListener('submit', function(evnt){
    evnt.preventDefault();   
    const address3 = document.getElementsByName("address3")[0].value;
    if ($(".LV_invalid_field").length == 0) {
        var s = document.querySelector('form input[type=submit]');
        if (s) {
            s.disabled = true;
        }   
       
        $(function() {
          var nTimer = setInterval(function() {
            if (window.jQuery) {
                console.log("checked == " + Date())
                setTimeout(function() {
                $(function() {
                    var $kickfireFormEmailAddress = $('[name="email"]');
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
                    var emailValue = document.getElementsByName("email")[0].value;
                    if( emailValue != "") {
                        var emailDomain = emailValue.substring(emailValue.indexOf('@') + 1);
                        if(emailDomain != 'avaya.com' && address3 == "") {
                            if(emailDomain != 'sw-at.com' && address3 == "") {
                                console.log(emailDomain + ": success");
                                kfprocessAPI(kfkey, kfvlocKey);
                                console.log("kfprocessAPI Runs");
                            } else {
                                console.log(emailDomain + "; "+ address3);
                            }
                        } else {
                            console.log(emailDomain + "; "+ address3);
                        }                 // <=== FOR CUSTOMER

                    }


                    //==================== kfprocessAPI  ====================
                    function kfprocessAPI(f,r,l){var g=$kickfireFormEmailAddress.val().split("@").slice(1),b="",m="",h="",n="//api.kickfire.com/v3/company:(all)?website="+g+"&key="+f;$kickfireFormCompany.val("");$.getJSON("//api.kickfire.com/gip",function(d){function p(){$.getJSON(n,function(a){"success"===a.status&&0===a.data["0"].isISP&&($kickfireFormCompany.val(a.data[0].companyName),e(a))})}function e(a){0<$kickfireCompanyName.length&&$kickfireCompanyName.val(a.data[0].companyName);0<$kickfireCompanyTradeName.length&&$kickfireCompanyTradeName.val(a.data[0].tradeName);0<$kickfireCompanyWebsite.length&&$kickfireCompanyWebsite.val(a.data[0].website);0<$kickfireCompanyStreet.length&&$kickfireCompanyStreet.val(a.data[0].street);0<$kickfireCompanyCity.length&&$kickfireCompanyCity.val(a.data[0].city);0<$kickfireCompanyRegion.length&&$kickfireCompanyRegion.val(a.data[0].region);0<$kickfireCompanyCountry.length&&$kickfireCompanyCountry.val(a.data[0].country);0<$kickfireCompanyPostal.length&&$kickfireCompanyPostal.val(a.data[0].postal);0<$kickfireCompanyPhone.length&&$kickfireCompanyPhone.val(a.data[0].phone);0<$kickfireEmployees.length&&$kickfireEmployees.val(a.data[0].employees);
                    0<$kickfireRevenue.length&&$kickfireRevenue.val(a.data[0].revenue);0<$kickfireIndustrySIC.length&&$kickfireIndustrySIC.val(a.data[0].sicDesc);0<$kickfireIndustryNAICS.length&&$kickfireIndustryNAICS.val(a.data[0].naicsDesc)}function k(a){0<$kickfireVisitorCity.length&&$kickfireVisitorCity.val(a.data[0].visitorCity);0<$kickfireVisitorRegionShort.length&&$kickfireVisitorRegionShort.val(a.data[0].visitorRegionShort);0<$kickfireVisitorRegion.length&&$kickfireVisitorRegion.val(a.data[0].visitorRegion);
                    0<$kickfireVisitorCountryShort.length&&$kickfireVisitorCountryShort.val(a.data[0].visitorCountryShort);0<$kickfireVisitorCountry.length&&$kickfireVisitorCountry.val(a.data[0].visitorCountry);0<$kickfireVisitorLatitude.length&&$kickfireVisitorLatitude.val(a.data[0].visitorLatitude);0<$kickfireVisitorLongitude.length&&$kickfireVisitorLongitude.val(a.data[0].visitorLongitude)}function q(a,c,b){$.getJSON("//forms.visistat.com/kfwf.php?&e="+a,function(a){a=a.iswifi;0===c&&"1"!==a&&($kickfireFormCompany.val(b.data[0].name),
                    e(b));k(b)})}"undefined"!==typeof l&&(d=l);var t="//api.kickfire.com/v3/company:(all)?ip="+d+"&key="+f+"&vlocKey="+r;d?$.getJSON(t,function(a){"success"===a.status?(b=a.data[0].website,h=a.data["0"].isISP,$.getJSON("//forms.visistat.com/kfc.php?ip="+d+"&e="+g+"&key="+f,function(){}),g==b?($kickfireFormCompany.val(a.data[0].name),e(a),k(a)):$.getJSON(n,function(c){"success"===c.status?(m=c.data["0"].isISP,0===m?($kickfireFormCompany.val(c.data[0].name),e(c),k(a)):q(b,h,a)):q(b,h,a)})):p()}):p()})};
                        //==================== kfprocessAPI  //====================
                });
                                     
                }, 1500);
              clearInterval(nTimer);
              
              var counter = 0;
            var vTimer = setInterval(() => {
           console.log(counter);
           if(counter < 16){
                if(document.getElementsByName("kickfireCompanyTradeName")[0].value != '') {
                    clearInterval(vTimer);
                    var kickFireValues = "Company { Name: " + document.getElementsByName("kickfireCompanyTradeName")[0].value + "; Website: "+ document.getElementsByName("kickfireCompanyWebsite")[0].value + "; Country: "+ document.getElementsByName("kickfireCompanyCountry")[0].value + "; Region: "+ document.getElementsByName("kickfireCompanyRegion")[0].value + "}, Visitor { Country: " + document.getElementsByName("kickfireVisitorCountry")[0].value + "; Region: " + document.getElementsByName("kickfireVisitorRegion")[0].value + "; City: " + document.getElementsByName("kickfireVisitorCity")[0].value +"}";
                    console.log(kickFireValues);
                    setTimeout(() => {
                        form.submit();
                    }, 500);
                    console.log("form submitted");
                } 
           } else {
               clearInterval(vTimer);
               setTimeout(() => {
                        form.submit();
                    }, 500);
           }
           counter = counter + 1;
        }, 500);

            }
            console.log("outside == " + Date());
          }, 1000);
        });
      
           
    } 
});


/*GA*/

 document.getElementById('form3860').addEventListener(
 'submit', function(event) {
 ga(function() {
 var tracker = ga.getAll()[0];
 var clientId = tracker.get('clientId');
 document.getElementById('GACLIENTID').value = clientId;
 });
 });


//var d = new Date();
/*(function() {
  var nTimer = setInterval(function() {
    if (window.jQuery) {
		console.log("checked == " + Date())
      KickfireFunction();
      clearInterval(nTimer);
    };
	console.log("outside == " + Date())
  }, 1000);
})();*/


//updated 14-07-2021