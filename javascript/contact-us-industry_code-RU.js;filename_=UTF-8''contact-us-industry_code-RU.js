function getCookie(name){
	var re=new RegExp(name+"=([^;]+)");var value=re.exec(document.cookie);return(value!=null)?unescape(value[1]):null;
} 




document.getElementById("formElement8").style.display = "none";//not to display address 3 field container
document.getElementById("formElement5").style.display = "none";//not to display No. of Employees field 
document.getElementById("formElement6").style.display = "none";//not to display Postal code field
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
					//document.getElementById("optinValid").value = "1";
					document.getElementsByName("emailOptinDate1")[0].value = output;
					document.getElementsByName("emailOptinSource1")[0].value = "WEB-GET-RU";
					document.getElementsByName("permissionemail")[0].value = "Yes";
					document.getElementsByName("emailOptOutDate1")[0].value = "";
					document.getElementsByName("emailOptOutSource1")[0].value = "";
					document.getElementsByName("EmailOptin")[0].value = "Yes";
					document.getElementsByName("optIn")[0].value = "Yes";
					//console.log(document.getElementById("optinValid").value);
					
//					var optinValid = new LiveValidation('optinValid');
//					optinValid.disable();
				} else {
					//document.getElementById("optinValid").value = "";
					document.getElementsByName("emailOptinDate1")[0].value = "";
					document.getElementsByName("emailOptinSource1")[0].value = "";
					document.getElementsByName("emailOptOutDate1")[0].value = "";
					document.getElementsByName("emailOptOutSource1")[0].value = "";
					document.getElementsByName("permissionemail")[0].value = "Unknown";
					document.getElementsByName("EmailOptin")[0].value = "Unknown";
					document.getElementsByName("optIn")[0].value = "No";
					//console.log(document.getElementById("optinValid").value);
										
//					var optinValid = new LiveValidation( "optinValid", { validMessage: "", onlyOnBlur: true });
//					optinValid.add( Validate.Presence, { failureMessage: "Пожалуйста, введите обязательные поля" } );
//					optinValid.enable();
				}
			}
var Countrysel;

labelatt('field25');//hide EmailOptin label
labelatt('field21');//hide emailOptinDate1 label
labelatt('field22');//hide emailOptinSource1 label
labelatt('field23');//hide emailOptOutDate1 label
labelatt('field24');//hide emailOptOutSource1 label
document.getElementsByClassName('instructions')[0].style.display='none';//to hide label text for GDPR on load
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

document.getElementById("field25").type = "hidden";//EmailOptin is text field to hide this field
document.getElementById("field21").type = "hidden";//emailOptinDate1 is text field to hide this field
document.getElementById("field22").type = "hidden";//emailOptinSource1 is text field to hide this field
document.getElementById("field23").type = "hidden";//emailOptOutDate1 is text field to hide this field
document.getElementById("field24").type = "hidden";//emailOptOutSource1 is text field to hide this field
document.getElementById("formElement26").style.display = "none";//To hide article 13 checkbox container on page load

//Function to capture url parameters
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
				//GDPR Code to fire if EMEA Countries selected in country drop down
				if(strUser == "Belgium" || strUser == "Bulgaria" || strUser == "Croatia" || strUser == "Cyprus" || strUser == "Czech Republic" || strUser == "Denmark" || strUser == "Estonia" || strUser == "Finland" || strUser == "France" || strUser == "Greece" || strUser == "Hungary" || strUser == "Ireland" || strUser == "Italy" || strUser == "Latvia" || strUser == "Lithuania" || strUser == "Luxembourg" || strUser == "Malta" || strUser == "Netherlands" || strUser == "Poland" || strUser == "Portugal" || strUser == "Romania" || strUser == "Slovakia" || strUser == "Slovenia" || strUser == "Spain" || strUser == "Sweden" || strUser == "United Kingdom" || strUser == "Iceland" || strUser == "Norway" || strUser == "Liechtenstein" || strUser == "Switzerland" || strUser == "Austria" || strUser == "Germany" ) {
		   document.getElementById("formElement25").style.display = "block";
		   if (checkinit != "Y"){
			   checkinit = "Y";
				var checkbox = document.createElement('input');
				checkbox.type = "checkbox";
				checkbox.name = "optIn";
				checkbox.value = "No";
				//checkbox.width = "20px";
				//checkbox.float = "left";
				//checkbox.marginTop  = "5px";
				checkbox.id = "optin";
				var linebreak = document.createElement("br");
				var label = document.createElement('label')
				label.htmlFor = "id";
				label.id = "lb1";
				//label.float = "left";
				//label.marginleft = "25px";
				//label.marginbottom = "20px";
				//label.width = "90%";
				label.style.width = "90%";
				label.style.marginLeft = "25px"; 
				label.style.marginBottom = "0px"; 
				//label.appendChild(document.createTextNode(' Yes, I agree to receiving marketing communications from Avaya. You can manage your email preference on the confirmation page once you submit the form.'));
				label.appendChild(document.createTextNode(' Yes, I agree to receiving marketing communications from Avaya.'));
				//document.getElementById("lb1").style.width = "90%";
				//document.getElementById("lb1").style.marginLeft = "25px"; 
				//document.getElementById("lb1").style.marginBottom = "0px"; 
				var label2 = document.createElement('label')
				label2.htmlFor = "id2";
				label2.id = "lb2";
				label2.appendChild(document.createTextNode("By submitting this form you agree to your contact details being stored and processed in the Avaya database. We will always treat your personal details with the utmost care and in line with our Privacy"));
				var container=document.getElementById('formElement25')
				container.appendChild(checkbox);
				container.appendChild(label);
				container.appendChild(linebreak);
				container.appendChild(linebreak);
				container.appendChild(label2);
				document.getElementById("optin").style.marginTop = "5px";
				document.getElementById("optin").style.width = "20px"; 
				document.getElementById("optin").style.float = "left"; 
				//document.getElementById("optin").style.width = "20px"; 
				document.getElementById("lb2").style.marginTop = "0px"; 
				document.getElementById("lb2").style.marginLeft = "25px"; 
				document.getElementById("lb2").style.marginBottom = "25px"; 
				document.getElementById("lb2").style.width = "90%";
				document.getElementById("lb2").style.float = "left";
				var checkbox = document.querySelector("input[name=optIn]");
				checkbox.addEventListener( 'change', function() {checkOptin();});
				console.log(strUser);
				
			
			} 
			//GDPR code if country Germany is selected in the country drop down
			if(strUser == "Germany"){
					document.getElementById("formElement26").style.display = "block";
					document.getElementById("formElement26").style.clear = "both";
					document.getElementsByName("optIn2")[0].style.marginTop = "5px";
					var opt2 = document.getElementsByName("optIn2")[0];
					opt2.setAttribute("id","optIn2");
					opt2.setAttribute("onclick","checkOptin2()");
					document.getElementsByName("optIn2")[0].value = "Yes";
					document.getElementsByName("optIn2")[0].style.width = "20px"; 
					document.getElementsByName("optIn2")[0].style.float = "left"; 
					var z = document.getElementsByClassName("checkbox-label")[0];
					console.log("clear1");
					z.style.marginTop = "0px"; 
					z.style.marginLeft = "10px"; 
					z.style.marginBottom = "25px"; 
					z.style.width = "90%";
					z.style.float = "left";
					var exInp1 = document.getElementsByName("optIn2")[0];
					var newP = document.createElement('label');
					newP.innerHTML = "<font color='#CC0000' style='float:left'>*</font>";
					var newP2 = document.createElement('div');
					newP2.setAttribute("id","optin2div");
					newP2.innerHTML = "<input type='text' id='optinValid2' value='' style='width: 1px; height: 1px; outline: none; border: none; background: transparent; padding: 0;'>";
					//exInp1.appendChild(newP);
					var z1 = document.getElementsByName("optIn2")[0]; 
					insertBefore(newP, z);
					insertAfter(newP2, z);
					var optinValid2 = new LiveValidation( "optinValid2", { validMessage: "", onlyOnBlur: true });
					optinValid2.add( Validate.Presence, { failureMessage: "Пожалуйста, введите обязательные поля" } );
					optinValid2.enable();
				} else {
					//console.log("clear2");
					//var optinValid2 = new LiveValidation('optinValid2');
					//optinValid2.disable();
					var ddd = document.getElementById("formElement26").style.display;
					console.log(ddd);
					if (document.getElementById("formElement26").style.display != "none"){
						console.log("formElement26");
					document.getElementById("formElement26").style.display = "none";
					}
				}
			setTimeout(checkOptin, 200);
			} else {
					document.getElementById("formElement25").style.display = "none";
					document.getElementsByName("emailOptinDate1")[0].value = "";
					document.getElementsByName("emailOptinSource1")[0].value = "";
					document.getElementsByName("emailOptOutDate1")[0].value = "";
					document.getElementsByName("emailOptOutSource1")[0].value = "";
					document.getElementsByName("permissionemail")[0].value = "Unknown";
					document.getElementsByName("EmailOptin")[0].value = "Unknown";
					if (checkinit == "Y"){
						document.getElementsByName("optIn")[0].value = "";
					}
			}
  			
}

//Code to Capture CTA and TAC code from URL Parameters
function getUrlVar(key){
	var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
	return result && unescape(result[1]) || ""; 
}
if (getUrlVar("TAC") != ""){
	document.getElementsByName("tactic_code")[0].value = getUrlVar("TAC");
} else if (getUrlVar("CMP") != ""){
	document.getElementsByName("tactic_code")[0].value = getUrlVar("CMP");
}
//Code to update content title and Content URL
document.getElementsByName("contentTitle1")[0].value = "Talk with an Expert";//Insert content title here
//var ref = document.referrer;//this assigns refferer value to ref variable
//document.getElementsByName("contentURL1")[0].value = ref;//passing referrer value to the content URL field
var pageLoc = window.location.href;//this assigns location value to pageLoc variable
document.getElementsByName("contentURL1")[0].value = pageLoc;//passing pageLoc value to the content URL field
Countrysel= document.getElementsByName("country")[0];
Countrysel.addEventListener('change', detect_ccode);//Code to implement on change on country select field

//for Validation
field0.add(Validate.Presence, {failureMessage:"Пожалуйста, введите обязательные поля"});
field1.add(Validate.Presence, {failureMessage:"Пожалуйста, введите обязательные поля"});
field2.add(Validate.Presence, {failureMessage:"Пожалуйста, введите обязательные поля"});
field2.add(Validate.Format, {pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, failureMessage: "Пожалуйста, введите обязательные поля"});
field3.add(Validate.Presence, {failureMessage:"Пожалуйста, введите обязательные поля"});
field4.add(Validate.Presence, {failureMessage:"Пожалуйста, введите обязательные поля"});
//field5.add(Validate.Presence, {failureMessage:"Пожалуйста, введите обязательные поля"});
//field6.add(Validate.Presence, {failureMessage:"Пожалуйста, введите обязательные поля"});
field7.add(Validate.Presence, {failureMessage:"Пожалуйста, введите обязательные поля"});

//Style added for Submit button
var btn1 = document.getElementsByClassName("submit-button")[0]; 
btn1.style.width = "25%";
btn1.style.display = "block";
btn1.style.marginTop = "0";
btn1.style.marginBottom = "0";
btn1.style.marginLeft = "auto";
btn1.style.marginright = "auto";
var x = document.getElementsByClassName("submit-button")[0];
x.style.backgroundColor = "#DA291C";
x.style.marginTop = "15px";
x.style.marginLeft = "auto";
x.style.marginright = "auto";
x.style.display = "block";

// Checkbox code to trigger on article 13 checkbox for Germany
 function checkOptin2(){
				var checkbox2 =  document.getElementById("optIn2");

				if($(checkbox2).prop('checked') == true){
				  document.getElementById("optinValid2").value = "1";
				  document.getElementsByName("optIn2")[0].value = "Yes";
					
				  var optinValid2 = new LiveValidation('optinValid2');
				  optinValid2.disable();
				  document.getElementById("optinValid2").focus();
				  document.getElementById("optIn2").focus();
        	} else {
				  document.getElementById("optinValid2").value = "";
				  document.getElementsByName("optIn2")[0].value = "No";

				  var optinValid2 = new LiveValidation( "optinValid2", { validMessage: "", onlyOnBlur: true });
				  optinValid2.add( Validate.Presence, { failureMessage: "Пожалуйста, введите обязательные поля" } );
				  optinValid2.enable();
				  document.getElementById("optinValid2").focus();
				  document.getElementById("optIn2").focus();
				}
			  }


var SessCTA = getCookie('cta');
var SessTAC = getCookie('tac');
		if (SessCTA != null) {
			console.log(SessCTA);
         	document.getElementsByName("cta_code")[0].value = SessCTA;
		} else if (getUrlVar("CTA") != ""){
			document.getElementsByName("cta_code")[0].value = getUrlVar("CTA");
		} else {
			document.getElementsByName("cta_code")[0].value = "WEB-GET-RU";
		}
		if (SessTAC != null) {
			console.log(SessTAC);
         	document.getElementsByName("tactic_code")[0].value = SessTAC;
		} else if (getUrlVar("TAC") != ""){
			document.getElementsByName("tactic_code")[0].value = getUrlVar("TAC");
		} else {
			document.getElementsByName("tactic_code")[0].value = "WEB-GET-RU";
		}
		
	