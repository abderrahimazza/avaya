function getCookie(name){
	var re=new RegExp(name+"=([^;]+)");var value=re.exec(document.cookie);return(value!=null)?unescape(value[1]):null;
} 
var today = new Date();
  var expiry = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000); // plus 30 days

function setCookie(name, value){
    document.cookie=name + "=" + escape(value) + "; domain=.avaya.com;path=/; expires=" + expiry.toGMTString();
}
//Function to capture url parameters
document.getElementById("formElement2").style.display = "none";//not to display First Name field container
document.getElementById("formElement5").style.display = "none";//not to display Phone field container
document.getElementById("formElement6").style.display = "none";//not to display Employees total range field container
document.getElementById("formElement7").style.display = "none";//not to display Postal code field container
document.getElementById("formElement8").style.display = "none";//not to display Country field container
document.getElementById("formElement9").style.display = "none";//not to display Address 3 field container

var GTM1 = document.getElementsByName("GACLIENTID")[0];
var GTM2 = document.getElementsByName("GAUSERID")[0];
var GTM3 = document.getElementsByName("GATRACKID")[0];
GTM1.id = "GACLIENTID";
GTM2.id = "ruid";
GTM3.id = "GATRACKID";

document.getElementById("formElement0").style.marginBottom = "15px";
document.getElementById("formElement1").style.marginBottom = "15px";
document.getElementById("formElement3").style.marginBottom = "15px";
document.getElementById("formElement4").style.marginBottom = "15px";
document.getElementById("formElement10").style.marginBottom = "15px";

var BussPhone = document.createElement('div');
BussPhone.setAttribute("id","formElement5a");
BussPhone.setAttribute("class","elq-field-style form-element-layout row");
BussPhone.innerHTML = "<label id='BussPhone' style=float:left;clear:both;font-family: Noto Sans JP;font-size: 14px;font-weight: bold;'>会社電話番号</label><br><table cellpadding='0' cellspacing='0' width='100%' border='0'><tr><td width='10%' style='border:none;'><input id='PhCode' name='PhCode' type='text' value='+81'></td><td width='90%' style='padding-left:10px;border:none;'><div style='width:100%'><input id='PhNumber' name='PhNumber' type='text' value='' width='100%' onblur='javascript:stripltpspaces(this)'></div></td></tr><tr><td width='100%' colspan='2' style='font-size:10px;border:none;padding-top: 5px;font-family:\"ＭＳ Ｐゴシック\",\"MS PGothic\",Arial,sans-serif;'>電話番号を市外局番からハイフン無しで入力願います。</td></tr></table>";
//exInp1.appendChild(newP);
var z1 = document.getElementById("formElement5"); 
//insertBefore(newP, z);
insertAfter(BussPhone, z1);

function populatePhoneField(){
var tp11=document.getElementsByName('PhCode')[0].value;
var tp12=document.getElementsByName('PhNumber')[0].value;
document.getElementById('fe86913').value = tp11+" "+tp12;
}

function stripltpspaces(input)
{
  input.value = input.value.replace(/^\s+|\s+$/g,'');
  populatePhoneField();
  return true;
}

document.getElementById("formElement5a").style.marginBottom = "15px";

var countryField = document.getElementsByName('country')[0];
countryField.value = "Japan";
countryField.selected = true;
document.getElementsByName('country_iso')[0].value = 'JPN';

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
					document.getElementsByName("emailOptinSource1")[0].value = "JP-OWCS-Contact-Us";
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

labelatt('fe86934');//hide EmailOptin label
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
document.getElementById("fe86934").type = "hidden"; //EmailOptin is text field to hide this field

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
label.innerHTML = "アバイアからのメールを受信することに同意します";
/*label.appendChild(document.createTextNode('Sì, sono d’accordo anche nel ricevere email marketing da Avaya.'));*/
var divGDPRtext = document.createElement("div");
divGDPRtext.id="gdprtext";
divGDPRtext.innerHTML = "<div style='color: #000;width: 90%;margin-left: 25px;margin-bottom: 30px;margin-top: 15px;font-size:13px;line-height:20px;font-family: Noto Sans JP;'>このフォームを送ることでご自分の個人情報をアバイアのデーターベースにて上記の目的で 使用されることにご同意いただいたことになります。アバイアのプライバシーステイトメントは<a href='https://www.avaya.com/jp/privacy/website/' target='_blank' style='color:#CC0000;font-size:13px;line-height:20px;'>こちら</a>でご確認いただけます。受信解除やメールの設定は<a href='https://news.avaya.com/global-subscription' target='_blank' style='color:#CC0000;font-size:13px;line-height:20px;'>こちら</a>からいつでも変更可能です。</div>";
document.getElementById('formElement11').style.marginTop = "20px";
var container=document.getElementById('formElement11')
container.appendChild(checkbox);
container.appendChild(label);
container.appendChild(divGDPRtext);
document.getElementById("optin").style.marginTop = "5px";
document.getElementById("optin").style.width = "20px"; 
document.getElementById("optin").style.float = "left"; 
document.getElementById("lb1").style.fontWeight = "normal";
var checkbox = document.querySelector("input[name=EmoptIn]");
checkbox.addEventListener( 'change', function() {checkOptin();});


//Code to update content title and Content URL
document.getElementsByName("contentTitle1")[0].value = "エキスパートと話す";//Insert content title here
//var ref = document.referrer;//this assigns refferer value to ref variable
//document.getElementsByName("contentURL1")[0].value = ref;//passing referrer value to the content URL field
var pageLoc = window.location.href;//this assigns location value to pageLoc variable
document.getElementsByName("contentURL1")[0].value = pageLoc;//passing pageLoc value to the content URL field
//Countrysel= document.getElementsByName("country")[0];
//Countrysel.addEventListener('change', detect_ccode);//Code to implement on change on country select field
//Code to update content title and Content URL


//Style added for Submit button
var btn1 = document.getElementsByClassName("submit-button-style")[0]; 
btn1.style.width = "100%";
btn1.style.display = "block";
btn1.style.marginTop = "0";
btn1.style.marginBottom = "0";
btn1.style.color = "#FFFFFF";
btn1.style.marginLeft = "auto";
btn1.style.marginright = "auto";
btn1.value = "お申し込み ► ";
var x = document.getElementsByClassName("submit-button-style")[0];
x.style.backgroundColor = "#DA291C";
x.style.marginTop = "15px";
x.style.marginLeft = "auto";
x.style.marginright = "auto";
x.style.display = "block";


//for Validation
fe86908.add(Validate.Presence, {failureMessage:"会社名をご記入ください."});
fe86909.add(Validate.Presence, {failureMessage:"役職をご記入ください."});
fe86911.add(Validate.Presence, {failureMessage:"お名前をご記入ください."});
fe86912.add(Validate.Presence, {failureMessage:"メールアドレスをご記入ください."});
fe86912.add(Validate.Format, {pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, failureMessage: "メールアドレスをご記入ください."});
var PhNumber = document.querySelector('#form3065 #PhNumber');
var PhNumber = new LiveValidation(PhNumber, {validMessage: "", onlyOnBlur: false, wait: 300});
PhNumber.add(Validate.Presence, {failureMessage:"電話番号をご記入ください"});
PhNumber.add(Validate.Format, {pattern: /^\(?\+?[\d\(\-\#\s\)]+$/, failureMessage: "電話番号をご記入ください"});
PhNumber.add( Validate.Length, {tooShortMessage:"電話番号をご記入ください", tooLongMessage: "電話番号をご記入ください",  minimum: 4, maximum: 20});

		  
//Code to Capture CTA and TAC code from URL Parameters
console.log("SessCTA");
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
	if (pageURL.includes("/solutions/customer-experience-and-contact-center/")){
		document.getElementsByName("cta_code")[0].value = "WEB-GET-JP-CE";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-JP-CE";
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-JP-CE";
		document.getElementsByName("contentTitle1")[0].value = "お問い合わせ";//Insert content title here
		document.getElementsByName("area_of_interest")[0].value = "CC";//Insert area of interest
	} else if (pageURL.includes("/solutions/team-collaboration/")){
		document.getElementsByName("cta_code")[0].value = "WEB-GET-JP-TEAM";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-JP-TEAM";
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-JP-TEAM";
		document.getElementsByName("contentTitle1")[0].value = "お問い合わせ";//Insert content title here
		document.getElementsByName('area_of_interest')[0].value = "UC";
	} else if (pageURL.includes("/solutions/digital-transformation/")){
		document.getElementsByName("cta_code")[0].value = "WEB-GET-JP-DX";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-JP-DX";
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-JP-DX";
		document.getElementsByName("contentTitle1")[0].value = "お問い合わせ";//Insert content title here
		document.getElementsByName('area_of_interest')[0].value = "UC";
	} else {
		document.getElementsByName("cta_code")[0].value = "WEB-GET-JP";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-JP";
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-JP";
		document.getElementsByName("contentTitle1")[0].value = "お問い合わせ";//Insert content title here
		document.getElementsByName('area_of_interest')[0].value = "UC";
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

if (pageURL.includes("/solutions/customer-experience-and-contact-center/")){
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-JP-CE";
		document.getElementsByName("contentTitle1")[0].value = "お問い合わせ";//Insert content title here
		document.getElementsByName("area_of_interest")[0].value = "CC";//Insert area of interest
} else if (pageURL.includes("/solutions/team-collaboration/")){
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-JP-TEAM";
		document.getElementsByName("contentTitle1")[0].value = "お問い合わせ";//Insert content title here
		document.getElementsByName('area_of_interest')[0].value = "UC";
} else if (pageURL.includes("/solutions/digital-transformation/")){
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-JP-DX";
		document.getElementsByName("contentTitle1")[0].value = "お問い合わせ";//Insert content title here
		document.getElementsByName('area_of_interest')[0].value = "UC";
} 


subonclick= document.getElementById("fe86940");
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

function KickfireFunction(){
$(function(){
var $kickfireFormEmailAddress = $('[name="email"]');
  console.log("email captured");
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
if($kickfireFormEmailAddress.value!=""){
        console.log($kickfireFormEmailAddress.value)    
        kfprocessAPI(kfkey, kfvlocKey);                     // <=== FOR CUSTOMER
}
$kickfireFormEmailAddress.blur(		
    function() {
		console.log("kickfireFormEmailAddress  == "+document.getElementsByName('email')[0].value);
        kfprocessAPI(kfkey, kfvlocKey);                     // <=== FOR CUSTOMER

    
    }
);  

//==================== kfprocessAPI  ====================
function kfprocessAPI(f,r,l){var g=$kickfireFormEmailAddress.val().split("@").slice(1),b="",m="",h="",n="//api.kickfire.com/v3/company:(all)?website="+g+"&key="+f;$kickfireFormCompany.val("");$.getJSON("//api.kickfire.com/gip",function(d){function p(){$.getJSON(n,function(a){"success"===a.status&&0===a.data["0"].isISP&&($kickfireFormCompany.val(a.data[0].companyName),e(a))})}function e(a){0<$kickfireCompanyName.length&&$kickfireCompanyName.val(a.data[0].companyName);0<$kickfireCompanyTradeName.length&&$kickfireCompanyTradeName.val(a.data[0].tradeName);0<$kickfireCompanyWebsite.length&&$kickfireCompanyWebsite.val(a.data[0].website);0<$kickfireCompanyStreet.length&&$kickfireCompanyStreet.val(a.data[0].street);0<$kickfireCompanyCity.length&&$kickfireCompanyCity.val(a.data[0].city);0<$kickfireCompanyRegion.length&&$kickfireCompanyRegion.val(a.data[0].region);0<$kickfireCompanyCountry.length&&$kickfireCompanyCountry.val(a.data[0].country);0<$kickfireCompanyPostal.length&&$kickfireCompanyPostal.val(a.data[0].postal);0<$kickfireCompanyPhone.length&&$kickfireCompanyPhone.val(a.data[0].phone);0<$kickfireEmployees.length&&$kickfireEmployees.val(a.data[0].employees);
0<$kickfireRevenue.length&&$kickfireRevenue.val(a.data[0].revenue);0<$kickfireIndustrySIC.length&&$kickfireIndustrySIC.val(a.data[0].sicDesc);0<$kickfireIndustryNAICS.length&&$kickfireIndustryNAICS.val(a.data[0].naicsDesc)}function k(a){0<$kickfireVisitorCity.length&&$kickfireVisitorCity.val(a.data[0].visitorCity);0<$kickfireVisitorRegionShort.length&&$kickfireVisitorRegionShort.val(a.data[0].visitorRegionShort);0<$kickfireVisitorRegion.length&&$kickfireVisitorRegion.val(a.data[0].visitorRegion);
0<$kickfireVisitorCountryShort.length&&$kickfireVisitorCountryShort.val(a.data[0].visitorCountryShort);0<$kickfireVisitorCountry.length&&$kickfireVisitorCountry.val(a.data[0].visitorCountry);0<$kickfireVisitorLatitude.length&&$kickfireVisitorLatitude.val(a.data[0].visitorLatitude);0<$kickfireVisitorLongitude.length&&$kickfireVisitorLongitude.val(a.data[0].visitorLongitude)}function q(a,c,b){$.getJSON("//forms.visistat.com/kfwf.php?&e="+a,function(a){a=a.iswifi;0===c&&"1"!==a&&($kickfireFormCompany.val(b.data[0].name),
e(b));k(b)})}"undefined"!==typeof l&&(d=l);var t="//api.kickfire.com/v3/company:(all)?ip="+d+"&key="+f+"&vlocKey="+r;d?$.getJSON(t,function(a){"success"===a.status?(b=a.data[0].website,h=a.data["0"].isISP,$.getJSON("//forms.visistat.com/kfc.php?ip="+d+"&e="+g+"&key="+f,function(){}),g==b?($kickfireFormCompany.val(a.data[0].name),e(a),k(a)):$.getJSON(n,function(c){"success"===c.status?(m=c.data["0"].isISP,0===m?($kickfireFormCompany.val(c.data[0].name),e(c),k(a)):q(b,h,a)):q(b,h,a)})):p()}):p()})};
    //==================== kfprocessAPI  //====================
});

}
//var d = new Date();
(function() {
  var nTimer = setInterval(function() {
    if (window.jQuery) {
		console.log("checked == " + Date())
      KickfireFunction();
      clearInterval(nTimer);
    };
	console.log("outside == " + Date())
  }, 1000);
})();

