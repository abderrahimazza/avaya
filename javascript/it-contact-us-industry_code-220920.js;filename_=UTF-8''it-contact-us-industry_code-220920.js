function getCookie(name){
	var re=new RegExp(name+"=([^;]+)");var value=re.exec(document.cookie);return(value!=null)?unescape(value[1]):null;
} 
var today = new Date();
  var expiry = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000); // plus 30 days

function setCookie(name, value){
    document.cookie=name + "=" + escape(value) + "; domain=.avaya.com;path=/; expires=" + expiry.toGMTString();
}
//Function to capture url parameters
document.getElementById("formElement5").style.display = "none";//not to display Company Size field container
document.getElementById("formElement6").style.display = "none";//not to display Postal Code field container
document.getElementById("formElement8").style.display = "none";//not to display address 3 field container

document.getElementById("formElement0").style.marginBottom = "15px";
document.getElementById("formElement1").style.marginBottom = "15px";
document.getElementById("formElement2").style.marginBottom = "15px";
document.getElementById("formElement3").style.marginBottom = "15px";
document.getElementById("formElement4").style.marginBottom = "15px";
document.getElementById("formElement7").style.marginBottom = "15px";
document.getElementById("formElement9").style.marginBottom = "15px";

var GTM1 = document.getElementsByName("GACLIENTID")[0];
var GTM2 = document.getElementsByName("GAUSERID")[0];
var GTM3 = document.getElementsByName("GATRACKID")[0];
GTM1.id = "GACLIENTID";
GTM2.id = "ruid";
GTM3.id = "GATRACKID";

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
					document.getElementsByName("emailOptinSource1")[0].value = "IT-OWCS-contact-us";
					document.getElementsByName("permissionemail")[0].value = "Yes";
					document.getElementsByName("optin")[0].value = "Yes";
					document.getElementsByName("EmOptIn")[0].value = "Yes";
				} else {
					document.getElementsByName("emailOptinDate1")[0].value = "";
					document.getElementsByName("emailOptinSource1")[0].value = "";
					document.getElementsByName("permissionemail")[0].value = "";
					document.getElementsByName("optin")[0].value = "";
					document.getElementsByName("EmoptIn")[0].value = "";
				}
			}
var Countrysel;

labelatt('fe87007');//hide EmailOptin label
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
document.getElementById("fe87007").type = "hidden"; //EmailOptin is text field to hide this field

function getUrlVar(key){
	var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
	return result && unescape(result[1]) || ""; 
}
//Functions to add code before and after form elements
function insertBefore(el, referenceNode){
	referenceNode.parentNode.insertBefore(el, referenceNode);
}
function insertAfter(el, referenceNode){
	referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
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
/*label.appendChild(document.createTextNode('Sí, también acepto recibir correos electrónicos de marketing de Avaya.'));*/
label.innerHTML = "Sì, sono d’accordo anche nel ricevere email marketing da Avaya.";
var divGDPRtext = document.createElement("div");
divGDPRtext.id="gdprtext";
divGDPRtext.innerHTML = "<div style='color: #000;width: 90%;margin-left: 25px;margin-bottom: 30px;margin-top: 15px;font-size:13px;line-height:20px;'>Con l’inoltro di questo modulo, consento ad Avaya di processare le mie informazioni nel suo database per gli scopi sopra menzionati. Vedi il nostro <a href='https://www.avaya.com/it/privacy/commitment/' target='_blank' style='color:#DA291C;text-decoration:underline;font-size: 13px;border-bottom: 0px solid;'>Privacy Statement</a> per ulteriori dettagli o gestisci le tue <a href='https://news.avaya.com/global-subscription' target='_blank' style='color:#DA291C;text-decoration:underline;font-size: 13px;border-bottom: 0px solid;'>Preferenze Email</a> in qualsiasi momento.</div>";
document.getElementById('formElement10').style.marginTop = "20px";
var container=document.getElementById('formElement10')
container.appendChild(checkbox);
container.appendChild(label);
container.appendChild(divGDPRtext);
document.getElementById("optin").style.marginTop = "5px";
document.getElementById("optin").style.width = "20px"; 
document.getElementById("optin").style.float = "left"; 
document.getElementById("lb1").style.fontWeight = "normal";
var checkbox = document.querySelector("input[name=EmoptIn]");
checkbox.addEventListener( 'change', function() {checkOptin();});


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
			  			
}

//Code to update content title and Content URL
document.getElementsByName("contentTitle1")[0].value = "Parla con un nostro esperto";//Insert content title here
//var ref = document.referrer;//this assigns refferer value to ref variable
//document.getElementsByName("contentURL1")[0].value = ref;//passing referrer value to the content URL field
var pageLoc = window.location.href;//this assigns location value to pageLoc variable
document.getElementsByName("contentURL1")[0].value = pageLoc;//passing pageLoc value to the content URL field
Countrysel= document.getElementsByName("country")[0];
Countrysel.addEventListener('change', detect_ccode);//Code to implement on change on country select field

		  

//for Validation
fe86980.add(Validate.Presence, {failureMessage:"Questo campo è obbligatorio"});
fe86981.add(Validate.Presence, {failureMessage:"Questo campo è obbligatorio"});
fe86982.add(Validate.Presence, {failureMessage:"Questo campo è obbligatorio"});
fe86982.add(Validate.Format, {pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, failureMessage: "È necessario un indirizzo email valido"});
fe86983.add(Validate.Presence, {failureMessage:"Questo campo è obbligatorio"});
fe86984.add(Validate.Presence, {failureMessage:"Questo campo è obbligatorio"});
fe86987.add(Validate.Presence, {failureMessage:"Questo campo è obbligatorio"});


//Style added for Submit button
var btn1 = document.getElementsByClassName("submit-button-style")[0]; 
btn1.style.width = "100%";
btn1.style.display = "block";
btn1.style.marginTop = "0";
btn1.style.marginBottom = "0";
btn1.style.color = "#FFFFFF";
btn1.style.marginLeft = "auto";
btn1.style.marginright = "auto";
btn1.value = "Invia";
var x = document.getElementsByClassName("submit-button-style")[0];
x.style.backgroundColor = "#DA291C";
x.style.marginTop = "15px";
x.style.marginLeft = "auto";
x.style.marginright = "auto";
x.style.display = "block";


//Code to Capture CTA and TAC code from URL Parameters
var SessCTA = getCookie('cta');
var SessTAC = getCookie('tac');
if (SessCTA != null) {
	console.log("check = "+SessCTA);
	document.getElementsByName("cta_code")[0].value = SessCTA;
} else if (getUrlVar("CTA") != ""){
	document.getElementsByName("cta_code")[0].value = getUrlVar("CTA");
} else if (getUrlVar("PC") != ""){
	document.getElementsByName("cta_code")[0].value = getUrlVar("PC");
} else {
	if (pageURL.includes("/solutions/healthcare/")){
		document.getElementsByName("cta_code")[0].value = "WEB-GET-IT-HC";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-IT-HC";
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-IT-HC";
	} else if (pageURL.includes("/solutions/hospitality/")){
		document.getElementsByName("cta_code")[0].value = "WEB-GET-IT-HOSP";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-IT-HOSP";
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-IT-HOSP";
	} else if (pageURL.includes("/solutions/government-and-public-safety/")){
		document.getElementsByName("cta_code")[0].value = "WEB-GET-IT-GOV";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-IT-GOV";
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-IT-GOV";
	} else if (pageURL.includes("/solutions/education/")){
		document.getElementsByName("cta_code")[0].value = "WEB-GET-IT-EDU";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-IT-EDU";
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-IT-EDU";
	} else if (pageURL.includes("/solutions/financial-services/")){
		document.getElementsByName("cta_code")[0].value = "WEB-GET-IT-FIN";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-IT-FIN";
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-IT-FIN";
	} else if (pageURL.includes("/solutions/sports-and-entertainment/")){
		document.getElementsByName("cta_code")[0].value = "WEB-GET-IT-ENT";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-IT-ENT";
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-IT-ENT";
	} else {
		document.getElementsByName("cta_code")[0].value = "WEB-GET-IT-HC";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-IT-HC";
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-IT-HC";
	}
}
if (SessTAC != null) {
	console.log(SessTAC);
	document.getElementsByName("tactic_code")[0].value = SessTAC;
} else if (getUrlVar("TAC") != ""){
	document.getElementsByName("tactic_code")[0].value = getUrlVar("TAC");
} else if (getUrlVar("CMP") != ""){
	document.getElementsByName("tactic_code")[0].value = getUrlVar("CMP");
}




handleFormSubmit = (function() {
    var cached_function = handleFormSubmit;

    return function() {
        // your code
        var result = cached_function.apply(this, arguments); // use .apply() to call it
        
        var CTAVal = document.getElementsByName("cta_code")[0].value;
        var CTAVal2 = CTAVal.toUpperCase();
        var TACVal = document.getElementsByName("tactic_code")[0].value;
        var TACVal2 = TACVal.toUpperCase();
        
        if (CTAVal2.indexOf("-BRD") !== -1){
            document.getElementsByName('area_of_interest')[0].value = "Brand";
        } else if (CTAVal2.indexOf("-CLD") !== -1){
            document.getElementsByName('area_of_interest')[0].value = "Cloud";
        } else if (CTAVal2.indexOf("-DV") !== -1){
            document.getElementsByName('area_of_interest')[0].value = "Devices";
        } else if (CTAVal2.indexOf("-CC") !== -1){
            document.getElementsByName('area_of_interest')[0].value = "CC";
        } else if (CTAVal2.indexOf("-UC") !== -1){
            document.getElementsByName('area_of_interest')[0].value = "UC";
        } else if (CTAVal2.indexOf("-SV") !== -1){
            document.getElementsByName('area_of_interest')[0].value = "Services";
        } else if (TACVal2.indexOf("-BRD") !== -1){
            document.getElementsByName('area_of_interest')[0].value = "Brand";
        } else if (TACVal2.indexOf("-CLD") !== -1){
            document.getElementsByName('area_of_interest')[0].value = "Cloud";
        } else if (TACVal2.indexOf("-DV") !== -1){
            document.getElementsByName('area_of_interest')[0].value = "Devices";
        } else if (TACVal2.indexOf("-CC") !== -1){
            document.getElementsByName('area_of_interest')[0].value = "CC";
        } else if (TACVal2.indexOf("-UC") !== -1){
            document.getElementsByName('area_of_interest')[0].value = "UC";
        } else if (TACVal2.indexOf("-SV") !== -1){
            document.getElementsByName('area_of_interest')[0].value = "Services";
        } else {
            document.getElementsByName('area_of_interest')[0].value = "UC";
        }       
        
        // more of your code

        return result;
    };
})();

//last updated 22-01-2020,

subonclick= document.getElementById("fe87013");
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