function getCookie(name){
	var re=new RegExp(name+"=([^;]+)");var value=re.exec(document.cookie);return(value!=null)?unescape(value[1]):null;
} 
var today = new Date();
  var expiry = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000); // plus 30 days

function setCookie(name, value){
    document.cookie=name + "=" + escape(value) + "; domain=.avaya.com;path=/; expires=" + expiry.toGMTString();
}

 function createOption(ddl, text, value) {
        var opt = document.createElement('option');
        opt.value = value;
        opt.text = text;
        ddl.options.add(opt);
    }
//Function to remove all options from dropdown lists
function removeOptions(selectbox){
    var i;
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--){
        selectbox.remove(i);
    }
}

document.getElementById('formElement7').style.display = "none";//State
document.getElementById('formElement9').style.display = "none";//Are You Currently Using a Unified
document.getElementById('formElement10').style.display = "none";//NameYourCurrentCCSolution
document.getElementById('formElement12').style.display = "none";//address3

document.getElementById("formElement0").style.marginBottom = "15px";
document.getElementById("formElement1").style.marginBottom = "15px";
document.getElementById("formElement2").style.marginBottom = "15px";
document.getElementById("formElement2").style.marginBottom = "15px";
document.getElementById("formElement3").style.marginBottom = "15px";
document.getElementById("formElement4").style.marginBottom = "15px";
document.getElementById("formElement5").style.marginBottom = "15px";
document.getElementById("formElement6").style.marginBottom = "15px";
//document.getElementById("formElement7").style.marginBottom = "15px";
//document.getElementById("formElement8").style.marginBottom = "15px";
document.getElementById("formElement11").style.marginTop = "10px";

var GTM1 = document.getElementsByName("GACLIENTID")[0];
var GTM2 = document.getElementsByName("GAUSERID")[0];
var GTM3 = document.getElementsByName("GATRACKID")[0];
GTM1.id = "GACLIENTID";
GTM2.id = "ruid";
GTM3.id = "GATRACKID";

//Function to capture url parameters
function getUrlVar(key){
	var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
	return result && unescape(result[1]) || ""; 
}


//var pageURL = window.location.href;
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
					document.getElementsByName("emailOptinSource1")[0].value = "20US-ACO-DG-GEN";
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
var Countrysel;

//Functions to add code before and after form elements
function insertBefore(el, referenceNode){
	referenceNode.parentNode.insertBefore(el, referenceNode);
}
function insertAfter(el, referenceNode){
	referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

var formTop = document.getElementsByClassName("layout container-fluid")[0];
var formTop1 = document.getElementById('formElementid0');
var pInstruct = document.createElement("p");
pInstruct.id="pInstruct";
pInstruct.style.marginBottom= '0px';
pInstruct.innerHTML = "<font style='color: #313133;font-weight: 500;font-size:12px'><span style='color: #da291c; font-size: 12px;'>*</span> Pflichtfelder</font>";
formTop.insertBefore(pInstruct, formTop.firstChild);

var labelc = document.getElementsByClassName('elq-label');
for(var p = 0; p < 8; p++) {
	//if(p !== 4){
var labelch = document.getElementsByClassName('elq-label')[p].innerHTML;
console.log("labelch === "+labelch);
labelch = labelch + "<span style='color: #da291c;font-weight: bold;font-size: 0.875rem;font-size: 14px;'>*</span>";
document.getElementsByClassName('elq-label')[p].innerHTML = labelch;
	//}
}

var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "EmoptIn";
checkbox.value = "";
checkbox.id = "optin";
var linebreak = document.createElement("br");
linebreak.id = "lineb1";
var label = document.createElement('label')
label.htmlFor = "optin";
label.id = "lb1";
label.style.width = "90%";
label.style.marginLeft = "25px"; 
label.style.marginBottom = "0px"; 
label.appendChild(document.createTextNode(' Ja, ich bin damit einverstanden, weitere Marketing E-Mails von Avaya zu bekommen.'));
var divGDPRtext = document.createElement("div");
divGDPRtext.id="gdprtext";
divGDPRtext.innerHTML = "<div style='color: #313133;width: 95%;margin-left: 5px;margin-bottom: 10px;margin-top: 15px;font-size:12px;line-height:20px;' class='formStatement'>Mit dem Absenden willige ich in die Verarbeitung meiner angegebenen Daten zum Zweck der angegeben Aktion ein. Weitere Informationen finden Sie in unserer <a href='https://www.avaya.com/de/privacy/website/' class='formStatLink' target='_blank' style='text-decoration:underline;font-size: 12px;border-bottom: 0px solid;color:#1B77AF;'>Datenschutzerklärung</a>. Sie können Sie Ihre E-Mail-Einstellungen <a href='https://news.avaya.com/global-subscription' class='formStatLink' target='_blank' style='text-decoration:underline;font-size: 12px;border-bottom: 0px solid;color: #1B77AF;'>hier</a> verwalten.</div>";
document.getElementById('formElement13').style.marginTop = "0px";
var container=document.getElementById('formElement13')
container.appendChild(checkbox);
container.appendChild(label);
container.appendChild(divGDPRtext);
document.getElementById("optin").style.marginTop = "5px";
document.getElementById("optin").style.width = "20px"; 
document.getElementById("optin").style.float = "left"; 
document.getElementById("lb1").style.fontWeight = "normal";
document.getElementById("lb1").style.color = "#313133"; 
document.getElementById("lb1").style.fontSize = "12px";
var checkbox = document.querySelector("input[name=EmoptIn]");
checkbox.addEventListener( 'change', function() {checkOptin();});
document.getElementById("optin").setAttribute("aria-label", "Ja, ich bin damit einverstanden, weitere Marketing E-Mails von Avaya zu bekommen.");

document.getElementsByName('first_name')[0].setAttribute("placeholder"," ");//add empty placeholder for all visible fields
document.getElementsByName('last_name')[0].setAttribute("placeholder"," ");
document.getElementsByName('email')[0].setAttribute("placeholder"," ");
document.getElementsByName('phone')[0].setAttribute("placeholder"," ");
document.getElementsByName('company_name')[0].setAttribute("placeholder"," ");
document.getElementsByName('employees_total_range')[0].setAttribute("placeholder"," ");
document.getElementsByName('country')[0].setAttribute("placeholder"," ");
//document.getElementsByName('comments')[0].setAttribute("placeholder"," ");

var alink1 = document.getElementsByClassName("formStatLink")[0];
var alink2 = document.getElementsByClassName("formStatLink")[1];
  alink1.addEventListener("mouseover", function() {
    alink1.style.color = "#004E6C";
  });
  alink1.addEventListener("mouseout", function() {
    alink1.style.color = "#1B77AF";
  });
    alink2.addEventListener("mouseover", function() {
    alink2.style.color = "#004E6C";
  });
  alink2.addEventListener("mouseout", function() {
    alink2.style.color = "#1B77AF";
  });

//var vUsingUCSolutionYes = document.getElementsByName('UsingUCSolution')[0];
//var vUsingUCSolutionNo = document.getElementsByName('UsingUCSolution')[1];
	var vCurrentAvayaCustomerYes = document.getElementsByName('AreYouCurrentAvayaCustomer')[0];
var vCurrentAvayaCustomerNo = document.getElementsByName('AreYouCurrentAvayaCustomer')[1];
//var vCountry = document.getElementsByName('country')[0];
//vUsingUCSolutionYes.setAttribute("style", "width:30px !important;");
//vUsingUCSolutionNo.setAttribute("style", "width:30px !important");
vCurrentAvayaCustomerYes.setAttribute("style", "width:30px !important");
vCurrentAvayaCustomerNo.setAttribute("style", "width:30px !important");


/*vUsingUCSolutionYes.onclick = function(){
		document.getElementById('UsingUCSolutionValid').value = "Y";
	
		document.getElementById('formElement9').style.display = "block";
		var fe88115 = new LiveValidation( "fe88115", { validMessage: "", onlyOnBlur: true });
		fe88115.enable();
		fe88115.add( Validate.Presence, { failureMessage: "This field is required" } );	

	document.getElementById('UsingUCSolutionValid').focus();
	document.getElementsByName('UsingUCSolution')[0].focus()	
}
vUsingUCSolutionNo.onclick = function(){
		document.getElementById('UsingUCSolutionValid').value = "N";
		var fe88115 = new LiveValidation( "fe88115", { validMessage: "", onlyOnBlur: true });
		fe88115.disable();
		document.getElementById('formElement9').style.display = "none";
		document.getElementById('UsingUCSolutionValid').focus();
		document.getElementsByName('UsingUCSolution')[1].focus()
}*/

vCurrentAvayaCustomerYes.onclick = function(){
		//document.getElementById('AreYouCurrentAvayaCustomerValid').value = "Y";	
	//document.getElementById('AreYouCurrentAvayaCustomerValid').focus();
	document.getElementsByName('AreYouCurrentAvayaCustomer')[0].focus()	
}
vCurrentAvayaCustomerNo.onclick = function(){
		//document.getElementById('AreYouCurrentAvayaCustomerValid').value = "N";
		//document.getElementById('AreYouCurrentAvayaCustomerValid').focus();
		document.getElementsByName('AreYouCurrentAvayaCustomer')[1].focus()
}


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

labelatt('fe104697');

document.getElementById("fe104697").type = "hidden"; //EmailOptin is text field to hide this field

//document.getElementsByClassName('col-sm-12').style.paddingBottom = "50px";
var colsm12 = document.getElementsByClassName('elq-field-style');
console.log("colsm12.length == "+colsm12.length)
var i;
for (i = 0; i < colsm12.length; i++) {
  colsm12[i].style.paddingBottom = "15px";
}
var classR = document.getElementsByClassName('list-order');
for (let i = 0; i < classR.length; i++) {
  classR[i].style.width = "100px";
  classR[i].style.float = "left";
}
var radioR = document.getElementsByName('AreYouCurrentAvayaCustomer');
for (let i = 0; i < radioR.length; i++) {
  radioR[i].style.display = "inline";
  radioR[i].style.marginBottom = "4px";
}

var classR1 = document.getElementsByClassName('elq-item-label');
for (let i = 0; i < classR1.length; i++) {
  classR1[i].style.display = "inline";
  //classR1[i].style.marginBottom = "4px";
}
/*if (document.getElementById('formElement8')){
	var div7 = document.getElementById('formElement8');
	div7.setAttribute("style", "padding-bottom:0px;");
	var div71 = div7.getElementsByTagName('div')[1];
	div71.setAttribute("style", "display: table;");
	var div711 = div71.childNodes;
	console.log("div711.length == "+div711.length);
	for(i=0;i<div711.length;i++){
		if( div711[i].className == "row" ){
			div711[i].setAttribute("style", "display: table;");
		}
	}
	if (document.getElementById('fe104677')){
		var div71a = document.getElementById('fe104677');
		var div71b = div71a.getElementsByTagName('div');
		console.log("div71b  === "+div71b.length);
		div71b[0].setAttribute("style", "width: 120px !important;display: table-cell;vertical-align: top;");
		div71b[1].setAttribute("style", "width: 120px !important;display: table-cell;vertical-align: top;");
		var div71c = div71a.getElementsByTagName('input');
		div71c[0].setAttribute("style", "width: 30px !important;float: left;margin-top:4px;");
		div71c[1].setAttribute("style", "width: 30px !important;float: left;margin-top:4px;");
		var div71d = div71a.getElementsByTagName('br');
		div71d[0].setAttribute("style", "display:none;");
		div71d[1].setAttribute("style", "display:none;");
	}
		
}*/
if (document.getElementById('formElement8')){
	var fielsetTitle = "";
	var labeldy= "";
	var ELe3 = "";
	var checkboxfields = "";
	var VarEle = document.getElementById("formElement8").innerHTML;
	console.log("VarEle = "+VarEle);
	var labels = document.getElementsByTagName('label');
	for(var i = 0; i < labels.length; i ++) {
        var attr = labels[i].getAttribute('for'); //or labels[i].htmlFor
        if(attr === "fe104677") {
           // labels[i].style.visibility = 'hidden';
           fielsetTitle = labels[i].innerHTML;
		   console.log(fielsetTitle);
        }
	}
	var checkboxfields = document.getElementById("fe104677").innerHTML;
	document.getElementById("formElement8").innerHTML = "";
	var checkboxfieldset = "<fieldset><legend style='font-size: 12px;color: #313133;font-weight: bold;line-height: 20px;'>"+fielsetTitle+"</legend>";
	checkboxfieldset = checkboxfieldset+checkboxfields+"</fieldset>";
	document.getElementById("formElement8").innerHTML = checkboxfieldset;
	
	/*var VarEle = document.getElementById('formElement8');
	for (let i = 0; i < VarEle.children.length; i++) {
		console.log(VarEle.children[i].tagName);
	  	console.log(VarEle.children.length);
		var VarEle1 = VarEle.children[i].children.tagName;
		console.log(VarEle1);
		if (VarEle1== "label"){
			labeldy = VarEle1.innerHTML;
			console.log(labeldy);
		}
		//var VarEle2[i] = VarEle.children[i].getElementsByClassName(*);
		//for(var j = 0; max=VarEle2[i].length; j<max;j++) {
		//	if (VarEle2[j] == field-control-wrapper){
		//		ELe3 = VarEle2[j].innerHTML;
		//	}
		//}  
	}*/
}

/*if (document.getElementById('formElement8')){
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
	if (document.getElementById('fe88114')){
		var div81a = document.getElementById('fe88114');
		var div81b = div81a.getElementsByTagName('div');
		console.log("div81b  === "+div81b.length);
		div81b[0].setAttribute("style", "width: 120px !important;display: table-cell;vertical-align: top;");
		div81b[1].setAttribute("style", "width: 120px !important;display: table-cell;vertical-align: top;");
		var div81c = div81a.getElementsByTagName('input');
		div81c[0].setAttribute("style", "width: 30px !important;float: left;margin-top:4px;");
		div81c[1].setAttribute("style", "width: 30px !important;float: left;margin-top:4px;");
		var div81d = div81a.getElementsByTagName('br');
		div81d[0].setAttribute("style", "display:none;");
		div81d[1].setAttribute("style", "display:none;");
	}	
}*/


document.getElementsByName("first_name")[0].setAttribute("aria-label", "Vorname");
document.getElementsByName("last_name")[0].setAttribute("aria-label", "Nachname");
document.getElementsByName("email")[0].setAttribute("aria-label", "E-Mail");
document.getElementsByName("phone")[0].setAttribute("aria-label", "Telefon");
document.getElementsByName("company_name")[0].setAttribute("aria-label", "Firma");
document.getElementsByName("employees_total_range")[0].setAttribute("aria-label", "Wie viele Mitarbeiter sind in Ihrem Unternehmen beschäftigt?");
document.getElementsByName("country")[0].setAttribute("aria-label", "Land");
document.getElementsByName("AreYouCurrentAvayaCustomer")[0].setAttribute("aria-label", "Ja");
document.getElementsByName("AreYouCurrentAvayaCustomer")[1].setAttribute("aria-label", "Nein");
document.getElementsByName("comments")[0].setAttribute("aria-label", "Nachricht");

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
								
				if(strUser=="United States" || strUser=="Canada"){					
					$("#formElement7").slideDown();
					var vDistributorName = document.getElementsByName('stateProv')[0];
					removeOptions(vDistributorName);
					if(strUser=="United States"){
						var countryO = ['Bitte auswählen …','Alaska','Alabama','Arkansas','Arizona','California','Colorado','Connecticut','District of Columbia','Delaware','Florida','Georgia','Hawaii','Iowa','Idaho','Illinois','Indiana','Kansas','Kentucky','Louisiana','Massachusetts','Maryland','Maine','Michigan','Minnesota','Missouri','Mississippi','Montana','North Carolina','North Dakota','Nebraska','New Hampshire','New Jersey','New Mexico','Nevada','New York','Ohio','Oklahoma','Oregon','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Virginia','Vermont','Washington','Wisconsin','West Virginia','Wyoming'];
						var countryV = ['','AK','AL','AR','AZ','CA','CO','CT','DC','DE','FL','GA','HI','IA','ID','IL','IN','KS','KY','LA','MA','MD','ME','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY','OH','OK','OR','PA','PR','RI','SC','SD','TN','TX','UT','VA','VT','WA','WI','WV','WY'];
					} else if(strUser=="Canada"){
						var countryO = ['Bitte auswählen …','Alberta','APO','British Columbia','Manitoba','New Brunswick','Newfoundland','Newfoundland and Labrador','Northwest Terr.','Northwest Territories','Nova Scotia','Nunavut','Ontario','Prince Edward Island','Quebec','Saskatchewan','Yukon Territory'];
						var countryV = ['','AB','AE','BC','MB','NB','NF','NL','NN','NT','NS','NU','ON','PE','QC','SK','YT'];
					}					
					for (i = 0; i < countryO.length; i++) {
						createOption(vDistributorName, countryO[i], countryV[i]);
					} 
					var fe104676 = new LiveValidation("fe104676", {validMessage: "", onlyOnBlur: true});
					fe104676.enable();
					fe104676.add(Validate.Presence, {failureMessage:"Mussfeld"});
				} else {
					$("#formElement7").slideUp();
					var fe104676 = new LiveValidation('fe104676');
					fe104676.disable();
				}
			  			
	}

document.getElementsByName("content_title")[0].value = "Contact Sales";//passing value for content title

var pageLoc = window.location.href;//this assigns location value to pageLoc variable
document.getElementsByName("content_url")[0].value = pageLoc;//passing pageLoc value to the content URL field
Countrysel= document.getElementsByName("country")[0];
Countrysel.addEventListener('change', detect_ccode);//Code to implement on change on country select field


/*vCountry.onchange = function(){
	detect_ccode();
}*/

handleFormSubmit = (function() {
    var cached_function = handleFormSubmit;

    return function() {
        // your code
		if(document.getElementsByName("nb-result")[0]){
			  if(document.getElementsByName("nb-result")[0].value == "catchall"){
					document.getElementsByName("nameAnalyzerStatus1")[0].value = "unverifiable";
			  } else {
					document.getElementsByName("nameAnalyzerStatus1")[0].value =document.getElementsByName("nb-result")[0].value;   
			  }
		   }
		   
		setCookie('EmailAddress', document.getElementsByName('email')[0].value);
		setCookie('FName', document.getElementsByName('first_name')[0].value);
		setCookie('LName', document.getElementsByName('last_name')[0].value);
        var result = cached_function.apply(this, arguments); // use .apply() to call it

        // more of your code

        return result;
    };
})();

fe104669.add(Validate.Presence, {failureMessage:"Mussfeld"});
fe104670.add(Validate.Presence, {failureMessage:"Mussfeld"});
fe104671.add(Validate.Presence, {failureMessage:"Mussfeld"});
fe104671.add(Validate.Format, {pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, failureMessage: "Es wird eine gültige E-Mail Adresse benötigt"});
fe104672.add(Validate.Presence, {failureMessage:"Mussfeld"});
fe104673.add(Validate.Presence, {failureMessage:"Mussfeld"});
fe104674.add(Validate.Presence, {failureMessage:"Mussfeld"});
fe104675.add(Validate.Presence, {failureMessage:"Mussfeld"});



//Style added for Submit button
//var btn1 = document.getElementById("fe88138"); 
var btn1 = document.getElementsByClassName("submit-button-style")[0]; 
btn1.style.width = "100%";
btn1.style.display = "block";
btn1.style.marginTop = "0";
btn1.style.marginBottom = "0";
btn1.style.color = "#FFFFFF";
btn1.style.marginLeft = "auto";
btn1.style.marginright = "auto";
btn1.value = "Senden";
var x = document.getElementsByClassName("submit-button-style")[0];
x.style.backgroundColor = "#DA291C";
x.style.marginTop = "15px";
x.style.marginLeft = "auto";
x.style.marginright = "auto";
x.style.display = "block";

var div14a = document.getElementById('fe104706');
		div14a.setAttribute("style", "color:#FFF;background-color:#DA291C;font-weight: 400;font-size: 14px;line-height: 24px;display:block;");

		

//OnLoadCreateFields();


//var SessCTA = getCookie('cta');
//var SessTAC = getCookie('tac');
		if (getUrlVar("CTA") != ""){
			document.getElementsByName("cta_code")[0].value = getUrlVar("CTA");
		} else if (getUrlVar("PC") != ""){
			document.getElementsByName("cta_code")[0].value = getUrlVar("PC");
		} 
		  /*else if (SessCTA != null) {
			console.log(SessCTA);
         	document.getElementsByName("cta_code")[0].value = SessCTA;
		}*/
		else {
			document.getElementsByName("cta_code")[0].value = "20US-ACO-DG-GEN";
		}
		/*if (SessTAC != null) {
			console.log(SessTAC);
         	document.getElementsByName("tactic_code")[0].value = SessTAC;
		} else*/ 
		if (getUrlVar("TAC") != ""){
			document.getElementsByName("tactic_code")[0].value = getUrlVar("TAC");
		} else if (getUrlVar("CMP") != ""){
			document.getElementsByName("tactic_code")[0].value = getUrlVar("CMP");
		} else {
			document.getElementsByName("tactic_code")[0].value = "20US-ACO-DG-GEN-CO";
		}


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

var x = window.matchMedia("(max-width: 768px)");

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



/*hover*/

var css = 'input[type="text"]:hover{ border-color: #1B77AF }';
css = css+ 'textarea.LV_valid_field:active { border-color: #1B77AF }';
css = css+ '.av-mod-col .elq-form .LV_valid_field { border-color: #1B77AF }';
css = css+ '.LV_valid_field { border-color: #1B77AF }';
css = css+ 'input.LV_valid_field:hover { border-color: #1B77AF }';
css = css+ 'input.LV_valid_field:active { border-color: #1B77AF }';
css = css+ 'textarea.LV_valid_field:hover { border-color: #1B77AF }';
css = css+ '.elq-form textarea.LV_valid_field { border-color: #1B77AF !important}';
css = css+ '.elq-form input.LV_valid_field { border-color: #1B77AF !important}';
css = css+ '.av-mod-col .elq-form select:hover { border-color: #1B77AF !important}';
css = css+ '.av-mod-col .elq-form textarea:hover{ border-color: #1B77AF !important}';
css = css+ '.av-mod-col .elq-form label{margin-bottom: 5px;}';
css = css+ '.av-mod-col .elq-form input, .av-mod-col .elq-form select, .av-mod-col .elq-form textarea{background-color: #f1f1f3;}';//field background color
css = css+ '.av-mod-col .elq-form input:focus, .av-mod-col .elq-form select:focus, .av-mod-col .elq-form textarea:focus{background-color: #ffffff;}';
css = css+ '.av-mod-col .form-text p {color:#313133}';
css = css+ '.LV_valid_field { border-color: #1B77AF;background-color: #f1f1f3 !important}';
css = css+ 'fieldset.LV_valid_field { border-color: #1B77AF;background-color: #ffffff !important}';
css = css+ '.av-mod-col .elq-form label { font-family: "Noto Sans JP";font-size: 12px;line-height: 20px !important;color: #313133;}';
css = css+ '.av-mod-col .grid-layout-col .form-element-layout {padding-bottom: 0px !important;margin-bottom: 15px !important;}';
css = css+ '.av-mod-col .elq-form label{width: 100%;font-family: "Noto Sans JP";}';
css = css+ '.av-mod-col .extBoth{clear:both !important}';
css = css+ '.grid-layout-col #formElement2{clear:both !important}';

//css = css+ '.av-form .elq-form input:placeholder-shown{background-color: #ffffff;}';
//css = css+ '.av-form .elq-form input:placeholder-shown {background-color: #f1f1f3;}';
css = css+ '#formElement14 .row .submit-button-style { color: #ffffff !important;background-color:transparent !important;position: relative;z-index: 1;margin: 0 !important;font-weight:400;border: 0px solid #1B77AF;}';
css = css+ '#formElement14 .row > div > div {position: relative;overflow: hidden;cursor: pointer;clear: both;border-radius: 5px; background-color:#1B77AF  !important;box-shadow: 3px 2px 20px #4e4c4c59;border: 0px solid #1B77AF;}';
css = css+ '#formElement14 .row > div > div:before {content: close-quote;position: absolute;z-index: 0;width: 0;height: 100%;left: -50%;top: 0;-webkit-transform: skew(50deg);-moz-transform: skew(50deg);-o-transform: skew(50deg);-ms-transform: skew(50deg);transform: skew(50deg);-webkit-transition: all 0.3s;-moz-transition: all 0.3s;-o-transition: all 0.3s;-ms-transition: all 0.3s;transition: all 0.3s;-webkit-transform-origin: top left;-moz-transform-origin: top left;-o-transform-origin: top left;-ms-transform-origin: top left;transform-origin: top left;transition-duration: 0.6s;}';
css = css+ '#formElement14 .row > div > div:hover::before {width: 150%;background-color: #004E6C;}';



css = css+ '.av-mod-col .elq-form input:-webkit-autofill, .av-mod-col .elq-form input:-webkit-autofill:hover, .av-mod-col .elq-form input:-webkit-autofill:focus, .av-mod-col .elq-form input:-webkit-autofill:active { background-color: #ffffff !important; -webkit-box-shadow: 0 0 0 30px white inset !important;}';

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



_NBSettings = {
      
      acceptedStatusCodes: [0,1,2,3,4],
	  feedback: false,
	   apiKey: 'public_d3103376c0d9de0acc210ec8c389f284'
      	
};
var script = document.createElement('script');
script.src = "https://cdn.neverbounce.com/widget/dist/NeverBounce.js";
document.body.appendChild(script);

						var emAdd1 = "";
						var ficreated = "";
                        function popFormFieldsKF(){  
						
                          document.getElementsByName("companyPhone1")[0].value = "";
                          //document.getElementsByName("employees_total_range")[0].value = "";
                          //document.getElementsByName("company_name")[0].value = "";
                          document.getElementsByName("industry")[0].value = "";
                          var countryValue =document.getElementsByName("kickfireVisitorCountry")[0].value;
                          console.log("length of country field =="+countryValue.length);
                          if(document.getElementsByName("kickfireVisitorCountry").length>0){
                            console.log("enterfunction1");
                            if(document.getElementsByName("kickfireCompanyPhone")[0].value){
                              console.log("kickfireCompanyPhone == "+document.getElementsByName("kickfireCompanyPhone")[0].value);
                              document.getElementsByName("companyPhone1")[0].value = document.getElementsByName("kickfireCompanyPhone")[0].value;
                            }
                           /* if(document.getElementsByName("kickfireCompanyName")[0].value){
                              console.log("kickfireCompanyName == "+document.getElementsByName("kickfireCompanyName")[0].value);
                              document.getElementsByName("company_name")[0].value = document.getElementsByName("kickfireCompanyName")[0].value;
						  
                              //var fe140845 = new LiveValidation('fe140845');
                              //fe140845.disable();
							  //document.getElementById("formElement3").style.display = "none";
                        
                            }*//* else {
								if (ficreated != "Yes"){
								ficreated = "Yes";
								document.getElementById("formElement3").style.display = "block";
								
								document.getElementsByName("company")[0].addEventListener("blur", companyonBlur);
								//fe140486.add(Validate.Presence, {failureMessage:"This field is required"});
								var fe140845 = new LiveValidation("fe140845", { validMessage: "", onlyOnBlur: true });
								 fe140845.add(Validate.Presence, { failureMessage: "This field is required" });
								  fe140845.enable();			  				
							}
                            }*/
                            /*if(document.getElementsByName("kickfireEmployees")[0].value){
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
                            } */
                            if(document.getElementsByName("kickfireIndustrySIC")[0].value){                              
                              document.getElementsByName("industry")[0].value = document.getElementsByName("kickfireIndustrySIC")[0].value;
							  console.log("kickfireIndustrySIC == "+document.getElementsByName("industry")[0].value);
                            }    
							if(document.getElementsByName("country")[0].value!="United States" && document.getElementsByName("country")[0].value!="Canada"){
							if (document.getElementsByName("kickfireVisitorRegionShort")[0].value){
										console.log("added value");
										document.getElementsByName("state_province")[0].value = "";
									  	document.getElementsByName("state_province")[0].value = document.getElementsByName("kickfireVisitorRegionShort")[0].value;
							  }
							}
							  if(document.getElementsByName("kickfireVisitorCity")[0].value){                              
                              document.getElementsByName("city")[0].value = document.getElementsByName("kickfireVisitorCity")[0].value;
							  console.log("kickfireVisitorCity == "+document.getElementsByName("city")[0].value);
                            } 
                          }             
                        }


var runc = 0;
function popFormFieldsKF1(){
if(document.getElementsByName("email").length > 0){
  console.log("email field");
	var emailValue = document.getElementsByName('email')[0].value;
} else if(document.getElementsByName("emailAddress").length > 0){
  console.log("emailaddress field");
	var emailValue = document.getElementsByName('emailAddress')[0].value;
}
  console.log("cleared if");
  var emailDomain = emailValue.substring(emailValue.indexOf('@') + 1);
    console.log("step1");
    console.log("runc == "+runc);

    var CheckTimer1 = 1;
    console.log("step2");
	/*if(emailDomain == 'avaya.com' || emailDomain == 'sw-at.com' || emailDomain == 'portent.com') {
        document.getElementById("companyField").style.display = "block";
       var companyName = new LiveValidation("companyName", {
           validMessage: "",
           onlyOnBlur: true
        });
        companyName.add(Validate.Presence, {
            failureMessage: "This field is required"
         }); 
      companyName.enable();
    } else {*/
    var nCheckTimer1 = setInterval(function() {
      CheckTimer1 = CheckTimer1+1;
      console.log("CheckTimer1 == "+CheckTimer1);
      if(runc==0 || CheckTimer1>3){
          var chVCountry = document.getElementsByName("kickfireVisitorCountry")[0].value;
          console.log("chVCountry == " + chVCountry);
          console.log("step3");

          console.log("step4");
          if (chVCountry || CheckTimer1 == 10) {
              console.log("fCF");
              if (chVCountry){
                  popFormFieldsKF();   
              }
              clearInterval(nCheckTimer1);
          };	
          console.log("outside1 == " + Date());
        }
  	}, 1000);	
  runc = runc + 1;
   // }
}

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
                    if(emailDomain != 'avaya1.com') {
                        if(emailDomain != 'sw-at.com') {
							if(emailDomain != 'portent.com') {
                            console.log(emailDomain + ": success");
                            kfprocessAPI(kfkey, kfvlocKey);
                            console.log("kfprocessAPI Runs");
                               
                            setTimeout(function() { 
                                var kickFireValues = "Company { Name: " + document.getElementsByName("kickfireCompanyTradeName")[0].value + "; Website: "+ document.getElementsByName("kickfireCompanyWebsite")[0].value + "; Country: "+ document.getElementsByName("kickfireCompanyCountry")[0].value + "; Region: "+ document.getElementsByName("kickfireCompanyRegion")[0].value + "}, Visitor { Country: " + document.getElementsByName("kickfireVisitorCountry")[0].value + "; Region: " + document.getElementsByName("kickfireVisitorRegion")[0].value + "; City: " + document.getElementsByName("kickfireVisitorCity")[0].value +"}";
                                        console.log(kickFireValues);										
										popFormFieldsKF1();
                                    }, 3000);
                             } else {
                                 console.log("emailDomain = "+emailDomain);
                            }          
                        } else {
                           
                            console.log(emailDomain);
                         
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
})();
*/
//updated 30-03-2021


/*GA*/

 document.getElementById('form3543').addEventListener(
 'submit', function(event) {
 ga(function() {
 var tracker = ga.getAll()[0];
 var clientId = tracker.get('clientId');
 document.getElementById('GACLIENTID').value = clientId;
 });
 });
 
 
 document.getElementById("fe104706").setAttribute("aria-label", "Senden"); 
 document.getElementsByName('email')[0].addEventListener("blur", kickfirecheck, true);
 document.getElementsByName("stateProv")[0].addEventListener ("change", function () {
   document.getElementsByName("state_province")[0].value = document.getElementsByName("stateProv")[0].value;
});