function getCookie(name){
	var re=new RegExp(name+"=([^;]+)");var value=re.exec(document.cookie);return(value!=null)?unescape(value[1]):null;
} 
var today = new Date();
  var expiry = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000); // plus 30 days

function setCookie(name, value){
    document.cookie=name + "=" + escape(value) + "; domain=.avaya.com;path=/; expires=" + expiry.toGMTString();
}
//Function to capture url parameters
document.getElementById("formElement4").style.display = "none";//not to display Business Phone field container
document.getElementById("formElement5").style.display = "none";//not to display Phone field container
document.getElementById("formElement6").style.display = "none";//not to display Title field container
document.getElementById("formElement9").style.display = "none";//not to display Postal code field container
document.getElementById("formElement10").style.display = "none";//not to display address 3 field container

document.getElementById("formElement0").style.marginBottom = "15px";
document.getElementById("formElement1").style.marginBottom = "15px";
document.getElementById("formElement2").style.marginBottom = "15px";
document.getElementById("formElement3").style.marginBottom = "15px";
//document.getElementById("formElement4a").style.marginBottom = "15px";
//document.getElementById("formElement5a").style.marginBottom = "15px";
document.getElementById("formElement7").style.marginBottom = "15px";
document.getElementById("formElement8").style.marginBottom = "15px";
document.getElementById("formElement11").style.marginBottom = "15px";

var GTM1 = document.getElementsByName("GACLIENTID")[0];
var GTM2 = document.getElementsByName("GAUSERID")[0];
var GTM3 = document.getElementsByName("GATRACKID")[0];
GTM1.id = "GACLIENTID";
GTM2.id = "ruid";
GTM3.id = "GATRACKID";

//var CNPhone = document.createElement('div');
//CNPhone.setAttribute("id","formElement4a");
//BussPhone.setAttribute("align","left");
//BussPhone.setAttribute("width","100%");
//CNPhone.setAttribute("class","elq-field-style form-element-layout row");
//BussPhone.setAttribute("style","float:left;clear:both;display:block;");
//CNPhone.innerHTML = "<label id='CNPhone' for='tp2' style=float:left;clear:both;'>电话号码<span style='color: #da291c;font-weight: bold;font-size: 0.875rem;font-size: 14px;'>*</span></label><br><div style='width:100%;'><div style='width:13%;float:left;'><div><input id='tp1area1' name='tp1area1' type='text' value='' onblur='javascript:stripltpspaces(this);javascript:checkPhValue1();'></div></div><div style='width:74%;padding-left:10px; padding-right:10px;float:left;'><div style='line-height: 18px;'><input id='tp2' name='tp2' type='text' value='' width='100%' onblur='javascript:stripltpspaces(this);javascript:checkPhValue2();'></div></div><div style='width:13%;float:left;'><div><input id='tpEx' name='tpEx' type='text' value=''></div></div><div width='100%' style='font-size:10px;clear:both'>区号, 电话号码, 分机</div></div>";

//exInp1.appendChild(newP);
//var y1 = document.getElementById("formElement4"); 
//insertBefore(newP, z);
//insertAfter(CNPhone, y1);

var BussPhone = document.createElement('div');
BussPhone.setAttribute("id","formElement5a");
//BussPhone.setAttribute("align","left");
//BussPhone.setAttribute("width","100%");
BussPhone.setAttribute("class","elq-field-style form-element-layout row");
//BussPhone.setAttribute("style","float:left;clear:both;display:block;");
BussPhone.innerHTML = "<label id='BussPhone' for='PhNumber' style=float:left;clear:both;'>手机号码<span style='color: #da291c;font-weight: bold;font-size: 0.875rem;font-size: 14px;'>*</span></label><br><div style='width:100%;clear:both;'><div style='width:13%;float:left;'><input id='PhCode' name='PhCode' type='text' value=''></div><div style='width:86%;float:left;padding-left:10px'><div><input id='PhNumber' name='PhNumber' type='text' value='' width='100%' onblur='javascript:stripltpspaces(this)'></div></div><div style='width:100%;clear:both;font-size:10px;'>国家号, 手机号码</div></div>";
//exInp1.appendChild(newP);
var z1 = document.getElementById("formElement5"); 
//insertBefore(newP, z);
insertAfter(BussPhone, z1);

function populatePhoneField(){

//var tp11=document.getElementById('tp1area1').value;
//var tp12=document.getElementById('tp2').value;
//var tpEx=document.getElementById('tpEx').value;
//if ((tpEx == "") || (tpEx == " ")){
//document.getElementById('fe85874').value = tp11+" "+tp12;
//alert(document.getElementById('fe85875').value);
///}else{
//document.getElementById('fe85874').value = tp11+" "+tp12+"#"+tpEx;
//alert(document.getElementById('fe85875').value);
//}
if (document.getElementById('PhNumber').value!=""){
var tp21=document.getElementById('PhCode').value;
var tp22=document.getElementById('PhNumber').value;
document.getElementById('fe85875').value = tp21+" "+tp22;
}	
/*var tp11=document.getElementsByName('PhCode')[0].value;
var tp12=document.getElementsByName('PhNumber')[0].value;
document.getElementById('fe85875').value = tp11+" "+tp12;*/
}

//document.getElementById("formElement4a").style.marginBottom = "15px";
document.getElementById("formElement5a").style.marginBottom = "15px";

function stripltpspaces(input){
  input.value = input.value.replace(/^\s+|\s+$/g,'');
  populatePhoneField();
  return true;
}
//function checkPhValue1(){
       // document.getElementById('tpValid1').value = document.getElementById('tp1area1').value;
        // document.getElementById('tpValid1').focus();
        // document.getElementById('tp2').focus();
//}

//function checkPhValue2(){
        //document.getElementById('tpValid2').value = document.getElementById('tp2').value;
         //document.getElementById('tpValid2').focus();
        // document.getElementById('tpEx').focus();
//}
/*function checkValue(x){
	document.getElementById('tpValid').value = "";
	var tpValid = document.querySelector('#form3029 #tpValid');
	var tpValid = new LiveValidation('tpValid');
        tpValid.disable();
	if (x == "a"){
		console.log("value is a");
		var tpValid = document.querySelector('#form3029 #tpValid');
		var tpValid = new LiveValidation( "tpValid", { validMessage: "", onlyOnBlur: true });
        tpValid.add( Validate.Presence, { failureMessage: "请填写有效的区号码" } );
		tpValid.add(Validate.Format, {pattern: /^(\+[0-9]{2,3}|[0-9]{2,4})?$/i, failureMessage: "请填写有效的区号码"});
         tpValid.enable();
		 document.getElementById('tpValid').value = document.getElementById('tp1area1').value;
		 document.getElementById('tpValid').focus();
		 document.getElementById('tp1area1').focus();
		 console.log("value is a1");
	} else if (x == "b"){
		console.log("value is b");
		var tpValid = document.querySelector('#form3029 #tpValid');
		var tpValid = new LiveValidation(tpValid, {validMessage: "", onlyOnBlur: true});
		tpValid.add(Validate.Presence, {failureMessage:"请填写有效的电话号码"});
		tpValid.add(Validate.Format, {pattern: /^\(?\+?[\d\(\-\#\s\)]+$/i, failureMessage: "请填写有效的电话号码"});
		//tpValid.add( Validate.Length, {tooShortMessage:"请填写有效的电话号码", tooLongMessage: "请填写有效的电话号码",  minimum: 4, maximum: 20});
		tpValid.enable();
		document.getElementById('tpValid').value = document.getElementById('tp2').value;
		document.getElementById('tpValid').focus();
		 document.getElementById('tp2').focus();
		 console.log("value is b1");
	}
}*/

var checkinit = "N";
/*** GDPR Optin / Optout Code **************/
			var d = new Date(); // Define current date
			var month = d.getMonth()+1; // get month
			var day = d.getDate(); // get day
			var fullyear =  d.getFullYear(); // get full year
			var output =  ((''+month).length<2 ? '0' : '')+ month +  '-' + ((''+day).length<2 ? '0' : '') + day + '-' + fullyear;

			
var Countrysel;

labelatt('fe85897');//hide EmailOptin label
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
document.getElementById("fe85897").type = "hidden"; //EmailOptin is text field to hide this field

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

/*
var fnfld = document.getElementById("formElement0");
var newdiv1 = document.createElement('div');
newdiv1.innerHTML = "<input type='hidden' name='elqCustomerGUID' value=''><input type='hidden' name='elqCookieWrite' value='0'>";
insertBefore(newdiv1, fnfld);*/

/* Adds Element BEFORE NeighborElement */
Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element);
}, false;

/* Adds Element AFTER NeighborElement */
Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
}, false;


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

var formTop = document.getElementsByClassName("layout container-fluid")[0];
var formTop1 = document.getElementById('formElementid0');
var pInstruct = document.createElement("p");
pInstruct.id="pInstruct";
pInstruct.style.marginBottom= '0px';
pInstruct.innerHTML = "<font style='color: #313133;font-weight: 500;font-size:12px'>注意： <span style='color: #da291c; font-size: 12px;'>*</span> 号部分为必填项.</font>";
formTop.insertBefore(pInstruct, formTop.firstChild);


var labelc = document.getElementsByClassName('elq-label');
for(var p = 0; p < 9; p++) {
	if(p !== 1){
var labelch = document.getElementsByClassName('elq-label')[p].innerHTML;
console.log("labelch === "+labelch);
labelch = labelch + "<span style='color: #da291c;font-weight: bold;font-size: 0.875rem;font-size: 14px;'>*</span>";
document.getElementsByClassName('elq-label')[p].innerHTML = labelch;
	}
}


//eloqua hidden fields 
var fnfld = document.getElementById("formElement0");
var newdiv1 = document.createElement('div');
newdiv1.innerHTML = "<input type='hidden' name='elqCustomerGUID' value=''><input type='hidden' name='elqCookieWrite' value='0'>";
insertBefore(newdiv1, fnfld);


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
//label.innerHTML = "我同意接收Avaya营销宣传邮件。";
label.appendChild(document.createTextNode("我同意接收Avaya营销宣传邮件。"));
label.setAttribute("for","optin");
var divGDPRtext = document.createElement("div");
divGDPRtext.id="gdprtext";
divGDPRtext.innerHTML = "<div style='color: #313133;width: 95%;margin-left: 5px;margin-bottom: 30px;margin-top: 15px;font-size:14px;line-height:20px;font-family: Noto Sans JP;' class='formStatement'> 通过提交此表格，表明我同意将我的联系信息存储至Avaya数据库，并接收Avaya的营销宣传邮件。 如需了解详情请参考我们的<a href='https://www.avaya.com/cn/privacy/website/' class='formStatLink' target='_blank' style='text-decoration:underline;font-size: 12px;border-bottom: 0px solid;color:#1B77AF;'>隐私声明</a>， 或随时管理您的<a href='https://news.avaya.com/global-subscription' class='formStatLink' target='_blank' style='text-decoration:underline;font-size: 12px;border-bottom: 0px solid;color: #1B77AF;'>电子邮件选项</a>。</div>";
document.getElementById('formElement12').style.marginTop = "20px";
var container=document.getElementById('formElement12')
container.appendChild(checkbox);
container.appendChild(label);
container.appendChild(divGDPRtext);
document.getElementById("optin").style.marginTop = "5px";
document.getElementById("optin").style.width = "20px"; 
document.getElementById("optin").style.float = "left"; 
document.getElementById("lb1").style.fontWeight = "normal";
document.getElementById("lb1").style.color = "#313133"; 
document.getElementById("lb1").style.fontSize = "14px"; 
var checkbox = document.querySelector("input[name=EmoptIn]");
checkbox.addEventListener( 'change', function() {checkOptin();});
document.getElementById("optin").setAttribute("aria-label", "我同意接收Avaya营销宣传邮件。");

//document.getElementById("tp1area1").setAttribute("aria-label", "区号");
//document.getElementById("tp2").setAttribute("aria-label", "电话号码");
//document.getElementById("tpEx").setAttribute("aria-label", "分机");
document.getElementById("PhCode").setAttribute("aria-label", "国家号");
document.getElementById("PhNumber").setAttribute("aria-label", "手机号码");

document.getElementsByName('first_name')[0].setAttribute("placeholder"," ");//add empty placeholder for all visible fields
document.getElementsByName('last_name')[0].setAttribute("placeholder"," ");
document.getElementsByName('email')[0].setAttribute("placeholder"," ");
document.getElementsByName('country')[0].setAttribute("placeholder"," ");
document.getElementsByName('company_name')[0].setAttribute("placeholder"," ");

function detect_ccode(){
		var strUser=document.getElementsByName("country")[0].value;
				if (strUser== "United States" ){

                        document.getElementsByName("country_iso")[0].value=("USA");
                        document.getElementById("PhCode").value = "+1";
                    }
                 else if (strUser== "Canada" ){
                         document.getElementsByName("country_iso")[0].value=("CAN");
                     document.getElementById("PhCode").value = "+1";
                }
                
                else if (strUser== "Albania" ){
                         document.getElementsByName("country_iso")[0].value=("ALB");
                    document.getElementById("PhCode").value = "+355";
                }
                else if (strUser== "Algeria" ){
                         document.getElementsByName("country_iso")[0].value=("DZA");
                    document.getElementById("PhCode").value = "+213";
                }
                else if (strUser== "American Samoa" ){
                         document.getElementsByName("country_iso")[0].value=("ASM");
                     document.getElementById("PhCode").value = "+684";
                }
                else if (strUser== "Andorra" ){
                         document.getElementsByName("country_iso")[0].value=("AND");
                    document.getElementById("PhCode").value = "+376";
                }
                else if (strUser== "Angola" ){
                         document.getElementsByName("country_iso")[0].value=("AGO");
                    document.getElementById("PhCode").value = "+244";
                }
                else if (strUser== "Anguilla" ){
                         document.getElementsByName("country_iso")[0].value=("AIA");
                    document.getElementById("PhCode").value = "+264";
                }
                else if (strUser== "Antigua and Barbuda"){
                         document.getElementsByName("country_iso")[0].value=("ATG");
                     document.getElementById("PhCode").value = "+268";
                }
    
                else if (strUser== "Argentina" ){
                         document.getElementsByName("country_iso")[0].value=("ARG");
                    document.getElementById("PhCode").value = "+54";
                }
                
                else if (strUser== "Armenia" ){
                         document.getElementsByName("country_iso")[0].value=("ARM");
                    document.getElementById("PhCode").value = "+374";
                }
                
                else if (strUser== "Aruba" ){
                         document.getElementsByName("country_iso")[0].value=("ABW");
                    document.getElementById("PhCode").value = "+279";
                }
                else if (strUser== "Australia" ){
                         document.getElementsByName("country_iso")[0].value=("AUS");
                    document.getElementById("PhCode").value = "+61";
                }
                else if (strUser== "Austria" ){
                         document.getElementsByName("country_iso")[0].value=("AUT");
                    document.getElementById("PhCode").value = "+43";
                        
                } 
                else if (strUser== "Azerbaijan" ){
                         document.getElementsByName("country_iso")[0].value=("AZE");
                    document.getElementById("PhCode").value = "+994";
                }
                else if (strUser== "Bahamas" ){
                         document.getElementsByName("country_iso")[0].value=("BHS");
                    document.getElementById("PhCode").value = "+1";
                }
                else if (strUser== "Bahrain" ){
                         document.getElementsByName("country_iso")[0].value=("BHR");
                    document.getElementById("PhCode").value = "+973";
                }
                
                else if (strUser== "Bangladesh" ){
                         document.getElementsByName("country_iso")[0].value=("BGD");
                    document.getElementById("PhCode").value = "+880";
                }
                 else if (strUser== "Barbados" ){
                         document.getElementsByName("country_iso")[0].value=("BRB");
                     document.getElementById("PhCode").value = "+1";
                }
                else if (strUser== "Belarus" ){
                         document.getElementsByName("country_iso")[0].value=("BLR");
                    document.getElementById("PhCode").value = "+375";
                }
                else if (strUser== "Belgium" ){
                         document.getElementsByName("country_iso")[0].value=("BEL");
                    document.getElementById("PhCode").value = "+32";
                }
                else if (strUser== "Belize" ){
                         document.getElementsByName("country_iso")[0].value=("BLZ");
                    document.getElementById("PhCode").value = "+501";
                }
                 else if (strUser== "Benin" ){
                         document.getElementsByName("country_iso")[0].value=("BEN");
                     document.getElementById("PhCode").value = "+229";
                }
                else if (strUser== "Bermuda" ){
                         document.getElementsByName("country_iso")[0].value=("BMU");
                    document.getElementById("PhCode").value = "+441";
                }
                else if (strUser== "Bhutan" ){
                         document.getElementsByName("country_iso")[0].value=("BTN");
                    document.getElementById("PhCode").value = "+975";
                }
                else if (strUser== "Bolivia" ){
                         document.getElementsByName("country_iso")[0].value=("BOL");
                    document.getElementById("PhCode").value = "+591";
                }
                 else if (strUser== "Bosnia and Herzegovina" ){
                         document.getElementsByName("country_iso")[0].value=("BIH");
                     document.getElementById("PhCode").value = "+387";
                }
                 else if (strUser== "Botswana" ){
                         document.getElementsByName("country_iso")[0].value=("BWA");
                     document.getElementById("PhCode").value = "+267";
                }
                
                 else if (strUser== "Brazil" ){
                        document.getElementsByName("country_iso")[0].value=("BRA");
                     document.getElementById("PhCode").value = "+55";
                }
                 else if (strUser== "British Indian Ocean Territory" ){
                         document.getElementsByName("country_iso")[0].value=("IOT");
                     document.getElementById("PhCode").value = "+246";
                }
                else if (strUser== "Brunei Darussalam" ){
                         document.getElementsByName("country_iso")[0].value=("BRN");
                    document.getElementById("PhCode").value = "+673";
                }
                else if (strUser== "Bulgaria" ){
                         document.getElementsByName("country_iso")[0].value=("BGR");
                    document.getElementById("PhCode").value = "+359";
                }
                
                else if (strUser== "Burkina Faso" ){
                         document.getElementsByName("country_iso")[0].value=("BFA");
                    document.getElementById("PhCode").value = "+226";
                }
                else if (strUser== "Burundi" ){
                         document.getElementsByName("country_iso")[0].value=("BDI");
                    document.getElementById("PhCode").value = "+257";
                }
                else if (strUser== "Cambodia" ){
                         document.getElementsByName("country_iso")[0].value=("KHM");
                    document.getElementById("PhCode").value = "+855";
                }
                else if (strUser== "Cameroon" ){
                         document.getElementsByName("country_iso")[0].value=("CMR");
                    document.getElementById("PhCode").value = "+237";
                }
                 else if (strUser== "Cape Verde" ){
                         document.getElementsByName("country_iso")[0].value=("CPV");
                     document.getElementById("PhCode").value = "+238";
                }
                else if (strUser== "Cayman Islands" ){
                         document.getElementsByName("country_iso")[0].value=("CYM");
                    document.getElementById("PhCode").value = "+345";
                }
                else if (strUser== "Central African Republic" ){
                         document.getElementsByName("country_iso")[0].value=("CAF");
                    document.getElementById("PhCode").value = "+236";
                }
                
                else if (strUser== "Chad" ){
                         document.getElementsByName("country_iso")[0].value=("TCD");
                    document.getElementById("PhCode").value = "+235";
                }
                 else if (strUser== "Chile" ){
                        document.getElementsByName("country_iso")[0].value=("CHL");
                     document.getElementById("PhCode").value = "+56";
                }
                else if (strUser== "China" ){
                         document.getElementsByName("country_iso")[0].value=("CHN");
                    document.getElementById("PhCode").value = "+86";
                }
                else if (strUser== "Christmas Island" ){
                         document.getElementsByName("country_iso")[0].value=("CXR");
                    document.getElementById("PhCode").value = "+61";
                }
                 else if (strUser== "Cocos (Keeling) Islands" ){
                         document.getElementsByName("country_iso")[0].value=("CCK");
                     document.getElementById("PhCode").value = "+891";
                }
                 else if (strUser== "Colombia" ){
                         document.getElementsByName("country_iso")[0].value=("COL");
                     document.getElementById("PhCode").value = "+57";
                }
                 else if (strUser== "Comoros" ){
                         document.getElementsByName("country_iso")[0].value=("COM");
                     document.getElementById("PhCode").value = "+269";
                }
                else if (strUser== "Congo" ){
                         document.getElementsByName("country_iso")[0].value=("COG");
                    document.getElementById("PhCode").value = "+242";
                }
                else if (strUser== "Congo, The Democratic Republic Of The"){
                         document.getElementsByName("country_iso")[0].value=("COD");
                    document.getElementById("PhCode").value = "+243";
                }
                 else if (strUser== "Cook Islands"){
                         document.getElementsByName("country_iso")[0].value=("COK");
                     document.getElementById("PhCode").value = "+682";
                }
                 else if (strUser== "Costa Rica" ){
                         document.getElementsByName("country_iso")[0].value=("CRI");
                     document.getElementById("PhCode").value = "+506";
                }
                
                else if (strUser== "Croatia" ){
                         document.getElementsByName("country_iso")[0].value=("HRV");
                    document.getElementById("PhCode").value = "+385";
                }
                else if (strUser== "Curaçao" ){
                         document.getElementsByName("country_iso")[0].value=("CUW");
                    document.getElementById("PhCode").value = "+599";
                }
//               else if (strUser== "Cuba" ){
//                       document.getElementsByName("country_iso")[0].value=("CUB");
//                   document.getElementById("PhCode").value = "+1";
//              }
                 else if (strUser== "Cyprus" ){
                         document.getElementsByName("country_iso")[0].value=("CYP");
                     document.getElementById("PhCode").value = "+357";
                }
                 else if (strUser== "Czech Republic" ){
                         document.getElementsByName("country_iso")[0].value=("CZE");
                     document.getElementById("PhCode").value = "+420";
                }
                 else if (strUser== "Denmark" ){
                         document.getElementsByName("country_iso")[0].value=("DNK");
                     document.getElementById("PhCode").value = "+45";
                }
                 else if (strUser== "Djibouti" ){
                         document.getElementsByName("country_iso")[0].value=("DJI");
                     document.getElementById("PhCode").value = "+253";
                }
                 else if (strUser== "Dominica" ){
                         document.getElementsByName("country_iso")[0].value=("DMA");
                     document.getElementById("PhCode").value = "+767";
                }
                 else if (strUser== "Dominican Republic" ){
                         document.getElementsByName("country_iso")[0].value=("DOM");
                     document.getElementById("PhCode").value = "+809";
                }
                 else if (strUser== "East Timor" ){
                         document.getElementsByName("country_iso")[0].value=("TLS");
                     document.getElementById("PhCode").value = "+670";
                }
                 else if (strUser== "Ecuador" ){
                         document.getElementsByName("country_iso")[0].value=("ECU");
                     document.getElementById("PhCode").value = "+593";
                }
                 else if (strUser== "Egypt" ){
                         document.getElementsByName("country_iso")[0].value=("EGY");
                     document.getElementById("PhCode").value = "+1";
                }
                 else if (strUser== "El Salvador" ){
                         document.getElementsByName("country_iso")[0].value=("SLV");
                     document.getElementById("PhCode").value = "+503";
                }
                else if (strUser== "Equatorial Guinea" ){
                         document.getElementsByName("country_iso")[0].value=("GNQ");
                    document.getElementById("PhCode").value = "+240";
                }
                 else if (strUser== "Eritrea" ){
                         document.getElementsByName("country_iso")[0].value=("ERI");
                     document.getElementById("PhCode").value = "+291";
                }
                 else if (strUser== "Estonia" ){
                         document.getElementsByName("country_iso")[0].value=("EST");
                     document.getElementById("PhCode").value = "+372";
                }
                 else if (strUser== "Ethiopia" ){
                         document.getElementsByName("country_iso")[0].value=("ETH");
                     document.getElementById("PhCode").value = "+251";
                }
                else if (strUser== "Falkland Islands (Malvinas)" ){
                         document.getElementsByName("country_iso")[0].value=("FLK");
                    document.getElementById("PhCode").value = "+500";
                }
                else if (strUser== "Faroe Islands" ){
                         document.getElementsByName("country_iso")[0].value=("FRO");
                    document.getElementById("PhCode").value = "+298";
                }
                else if (strUser== "Fiji" ){
                         document.getElementsByName("country_iso")[0].value=("FJI");
                    document.getElementById("PhCode").value = "+679";
                }
                 else if (strUser== "Finland" ){
                         document.getElementsByName("country_iso")[0].value=("FIN");
                     document.getElementById("PhCode").value = "+358";
                }
                else if (strUser== "France" ){
                         document.getElementsByName("country_iso")[0].value=("FRA");
                    document.getElementById("PhCode").value = "+33";
                }
                
                 else if (strUser== "Gabon" ){
                         document.getElementsByName("country_iso")[0].value=("GAB");
                     document.getElementById("PhCode").value = "+241";
                }
                 else if (strUser== "Gambia" ){
                         document.getElementsByName("country_iso")[0].value=("GMB");
                     document.getElementById("PhCode").value = "+220";
                }
                 else if (strUser== "Georgia" ){
                         document.getElementsByName("country_iso")[0].value=("GEO");
                     document.getElementById("PhCode").value = "+995";
                }
                 else if (strUser== "Germany" ){
                         document.getElementsByName("country_iso")[0].value=("DEU");
                     document.getElementById("PhCode").value = "+49";
                }
                 else if (strUser== "Ghana" ){
                         document.getElementsByName("country_iso")[0].value=("GHA");
                     document.getElementById("PhCode").value = "+233";
                }
                else if (strUser== "Gibraltar" ){
                         document.getElementsByName("country_iso")[0].value=("GIB");
                    document.getElementById("PhCode").value = "+350";
                }               
                 else if (strUser== "Greece" ){
                         document.getElementsByName("country_iso")[0].value=("GRC");
                     document.getElementById("PhCode").value = "+30";
                }
                else if (strUser== "Greenland" ){
                         document.getElementsByName("country_iso")[0].value=("GRL");
                    document.getElementById("PhCode").value = "+299";
                }
                 else if (strUser== "Grenada" ){
                         document.getElementsByName("country_iso")[0].value=("GRD");
                     document.getElementById("PhCode").value = "+473";
                }
                
                else if (strUser== "Guam" ){
                         document.getElementsByName("country_iso")[0].value=("GUM");
                    document.getElementById("PhCode").value = "+671";
                }
                 else if (strUser== "Guatemala" ){
                         document.getElementsByName("country_iso")[0].value=("GTM");
                     document.getElementById("PhCode").value = "+502";
                }
                else if (strUser== "Guernsey" ){
                         document.getElementsByName("country_iso")[0].value=("GGY");
                    document.getElementById("PhCode").value = "+44";
                }
                else if (strUser== "Guinea" ){
                         document.getElementsByName("country_iso")[0].value=("GIN");
                    document.getElementById("PhCode").value = "+224";
                }
                else if (strUser== "Guinea-Bissau" ){
                         document.getElementsByName("country_iso")[0].value=("GNB");
                    document.getElementById("PhCode").value = "+245";
                }
                else if (strUser== "Guyana" ){
                         document.getElementsByName("country_iso")[0].value=("GUY");
                    document.getElementById("PhCode").value = "+592";
                }
                else if (strUser== "Haiti" ){
                         document.getElementsByName("country_iso")[0].value=("HTI");
                    document.getElementById("PhCode").value = "+509";
                }
                 else if (strUser== "Vatican City State" ){
                         document.getElementsByName("country_iso")[0].value=("VAT");
                     document.getElementById("PhCode").value = "+379";
                }
    
                 else if (strUser== "Honduras" ){
                         document.getElementsByName("country_iso")[0].value=("HND");
                     document.getElementById("PhCode").value = "+504";
                }
                 else if (strUser== "Hong Kong" ){
                         document.getElementsByName("country_iso")[0].value=("HKG");
                     document.getElementById("PhCode").value = "+852";
                }
                 else if (strUser== "Hungary" ){
                         document.getElementsByName("country_iso")[0].value=("HUN");
                     document.getElementById("PhCode").value = "+36";
                }
                 else if (strUser== "Iceland" ){
                         document.getElementsByName("country_iso")[0].value=("ISL");
                     document.getElementById("PhCode").value = "+354";
                }
                  else if (strUser== "India" ){
                         document.getElementsByName("country_iso")[0].value=("IND");
                      document.getElementById("PhCode").value = "+91";
                }
                 else if (strUser== "Indonesia" ){
                         document.getElementsByName("country_iso")[0].value=("IDN");
                     document.getElementById("PhCode").value = "+62";
                }
                
                 else if (strUser== "Ireland" ){
                         document.getElementsByName("country_iso")[0].value=("IRL");
                     document.getElementById("PhCode").value = "+353";
                }
                else if (strUser== "Isle of Man" ){
                         document.getElementsByName("country_iso")[0].value=("IMN");
                    document.getElementById("PhCode").value = "+44";
                }               
                 else if (strUser== "Israel" ){
                         document.getElementsByName("country_iso")[0].value=("ISR");
                     document.getElementById("PhCode").value = "+972";
                }
                else if (strUser== "Italy" ){
                         document.getElementsByName("country_iso")[0].value=("ITA");
                    document.getElementById("PhCode").value = "+39";
                }
                else if (strUser== "Ivory Coast (Côte d'Ivoire)" ){
                         document.getElementsByName("country_iso")[0].value=("CIV");
                    document.getElementById("PhCode").value = "+225";
                }
                else if (strUser== "Jamaica" ){
                         document.getElementsByName("country_iso")[0].value=("JAM");
                    document.getElementById("PhCode").value = "+876";
                }
                 else if (strUser== "Japan" ){
                         document.getElementsByName("country_iso")[0].value=("JPN");
                     document.getElementById("PhCode").value = "+81";
                }
                else if (strUser== "Jersey" ){
                         document.getElementsByName("country_iso")[0].value=("JEY");
                    document.getElementById("PhCode").value = "+44";
                }
                 else if (strUser== "Jordan" ){
                         document.getElementsByName("country_iso")[0].value=("JOR");
                     document.getElementById("PhCode").value = "+962";

                }
                else if (strUser== "Kazakhstan" ){
                         document.getElementsByName("country_iso")[0].value=("KAZ");
                    document.getElementById("PhCode").value = "+7 ";
                }
                 else if (strUser== "Kenya" ){
                         document.getElementsByName("country_iso")[0].value=("KEN");
                     document.getElementById("PhCode").value = "+254";
                }
                else if (strUser== "Kiribati" ){
                         document.getElementsByName("country_iso")[0].value=("KIR");
                    document.getElementById("PhCode").value = "+686";
                }
                 else if (strUser== "Korea, Democratic People's Republic of" ){
                         document.getElementsByName("country_iso")[0].value=("PRK");
                     document.getElementById("PhCode").value = "+850";
                }
                 else if (strUser== "Korea Republic of" ){
                         document.getElementsByName("country_iso")[0].value=("KOR");
                     document.getElementById("PhCode").value = "+82";
                }               
                 else if (strUser== "Kuwait" ){
                         document.getElementsByName("country_iso")[0].value=("KWT");
                     document.getElementById("PhCode").value = "+965";
                }
                 else if (strUser== "Kyrgyzstan" ){
                         document.getElementsByName("country_iso")[0].value=("KGZ");
                     document.getElementById("PhCode").value = "+996";
                }
                 else if (strUser== "Lao People's Democratic Republic" ){
                         document.getElementsByName("country_iso")[0].value=("LAO");
                     document.getElementById("PhCode").value = "+856";
                }
                else if (strUser== "Latvia" ){
                         document.getElementsByName("country_iso")[0].value=("LVA");
                    document.getElementById("PhCode").value = "+371";
                }
                else if (strUser== "Lebanon" ){
                         document.getElementsByName("country_iso")[0].value=("LBN");
                    document.getElementById("PhCode").value = "+961";
                }
                else if (strUser== "Lesotho" ){
                         document.getElementsByName("country_iso")[0].value=("LSO");
                    document.getElementById("PhCode").value = "+266";
                }
                 else if (strUser== "Liberia" ){
                         document.getElementsByName("country_iso")[0].value=("LBR");
                     document.getElementById("PhCode").value = "+231";
                }
                else if (strUser== "Libya" ){
                         document.getElementsByName("country_iso")[0].value=("LBY");
                    document.getElementById("PhCode").value = "+218";
                }
                else if (strUser== "Liechtenstein" ){
                         document.getElementsByName("country_iso")[0].value=("LIE");
                    document.getElementById("PhCode").value = "+423";
                }
                 else if (strUser== "Lithuania" ){
                         document.getElementsByName("country_iso")[0].value=("LTU");
                     document.getElementById("PhCode").value = "+370";
                }
                else if (strUser== "Luxembourg" ){
                         document.getElementsByName("country_iso")[0].value=("LUX");
                    document.getElementById("PhCode").value = "+352";
                }
                 else if (strUser== "Macao" ){
                         document.getElementsByName("country_iso")[0].value=("MAC");
                     document.getElementById("PhCode").value = "+853";
                }
                 else if (strUser== "Macedonia" ){
                         document.getElementsByName("country_iso")[0].value=("MKD");
                     document.getElementById("PhCode").value = "+389";
                }
                else if (strUser== "Madagascar" ){
                         document.getElementsByName("country_iso")[0].value=("MDG");
                    document.getElementById("PhCode").value = "+261";
                }
                
                 else if (strUser== "Malawi" ){
                         document.getElementsByName("country_iso")[0].value=("MWI");
                     document.getElementById("PhCode").value = "+265";
                }
                else if (strUser== "Malaysia" ){
                         document.getElementsByName("country_iso")[0].value=("MYS");
                    document.getElementById("PhCode").value = "+60";
                }
                else if (strUser== "Maldives" ){
                         document.getElementsByName("country_iso")[0].value=("MDV");
                    document.getElementById("PhCode").value = "+960";
                }
                else if (strUser== "Mali" ){
                         document.getElementsByName("country_iso")[0].value=("MLI");
                    document.getElementById("PhCode").value = "+223";
                }
                 else if (strUser== "Malta" ){
                         document.getElementsByName("country_iso")[0].value=("MLT");
                     document.getElementById("PhCode").value = "+356";
                }

                 else if (strUser== "Marshall Islands" ){
                         document.getElementsByName("country_iso")[0].value=("MHL");
                     document.getElementById("PhCode").value = "+692";
                }
                 else if (strUser== "Martinique" ){
                         document.getElementsByName("country_iso")[0].value=("MTQ");
                     document.getElementById("PhCode").value = "+596";
                }
                 else if (strUser== "Mauritania" ){
                         document.getElementsByName("country_iso")[0].value=("MRT");
                     document.getElementById("PhCode").value = "+222";
                }
                 else if (strUser== "Mauritius" ){
                         document.getElementsByName("country_iso")[0].value=("MUS");
                     document.getElementById("PhCode").value = "+230";
                }
                
                else if (strUser== "Mexico" ){
                         document.getElementsByName("country_iso")[0].value=("MEX");
                    document.getElementById("PhCode").value = "+52";
                }
                 else if (strUser== "Micronesia, Federated States of" ){
                         document.getElementsByName("country_iso")[0].value=("FSM");
                     document.getElementById("PhCode").value = "+691";
                }
                else if (strUser== "Moldova" ){
                         document.getElementsByName("country_iso")[0].value=("MDA");
                    document.getElementById("PhCode").value = "+373";
                }
                 else if (strUser== "Monaco" ){
                         document.getElementsByName("country_iso")[0].value=("MCO");
                     document.getElementById("PhCode").value = "+377";
                }
                else if (strUser== "Mongolia" ){
                         document.getElementsByName("country_iso")[0].value=("MNG");
                    document.getElementById("PhCode").value = "+976";
                }
                 else if (strUser== "Montenegro" ){
                         document.getElementsByName("country_iso")[0].value=("MNE");
                     document.getElementById("PhCode").value = "+382";
                }
                 else if (strUser== "Montserrat" ){
                         document.getElementsByName("country_iso")[0].value=("MSR");
                     document.getElementById("PhCode").value = "+664";
                }
                 else if (strUser== "Morocco" ){
                         document.getElementsByName("country_iso")[0].value=("MAR");
                     document.getElementById("PhCode").value = "+212";
                }
                 else if (strUser== "Mozambique" ){
                         document.getElementsByName("country_iso")[0].value=("MOZ");
                     document.getElementById("PhCode").value = "+258";
                }
                else if (strUser== "Myanmar" ){
                         document.getElementsByName("country_iso")[0].value=("MMR");
                    document.getElementById("PhCode").value = "+95";
                }
                 else if (strUser== "Namibia" ){
                         document.getElementsByName("country_iso")[0].value=("NAM");
                     document.getElementById("PhCode").value = "+264";
                }
                 else if (strUser== "Nauru" ){
                         document.getElementsByName("country_iso")[0].value=("NRU");
                     document.getElementById("PhCode").value = "+674";
                }
                else if (strUser== "The Federal Democratic Republic of Nepal" ){
                         document.getElementsByName("country_iso")[0].value=("NPL");
                    document.getElementById("PhCode").value = "+977";
                }
                else if (strUser== "Netherlands" ){
                         document.getElementsByName("country_iso")[0].value=("NLD");
                    document.getElementById("PhCode").value = "+31";
                }
                
                 else if (strUser== "New Caledonia" ){
                         document.getElementsByName("country_iso")[0].value=("NCL");
                     document.getElementById("PhCode").value = "+687";
                }
                 else if (strUser== "New Zealand" ){
                         document.getElementsByName("country_iso")[0].value=("NZL");
                     document.getElementById("PhCode").value = "+64";
                }
                 else if (strUser== "Nicaragua" ){
                         document.getElementsByName("country_iso")[0].value=("NIC");
                     document.getElementById("PhCode").value = "+505";
                }
                 else if (strUser== "Niger" ){
                         document.getElementsByName("country_iso")[0].value=("NER");
                     document.getElementById("PhCode").value = "+227";
                }
                else if (strUser== "Nigeria" ){
                         document.getElementsByName("country_iso")[0].value=("NGA");
                    document.getElementById("PhCode").value = "+234";
                }
                else if (strUser== "Niue" ){
                         document.getElementsByName("country_iso")[0].value=("NIU");
                    document.getElementById("PhCode").value = "+683";
                }
                 else if (strUser== "Norfolk Island" ){
                         document.getElementsByName("country_iso")[0].value=("NFK");
                     document.getElementById("PhCode").value = "+672";
                }
                
                 else if (strUser== "Norway" ){
                         document.getElementsByName("country_iso")[0].value=("NOR");
                     document.getElementById("PhCode").value = "+47";
                }
                else if (strUser== "Oman" ){
                         document.getElementsByName("country_iso")[0].value=("OMN");
                    document.getElementById("PhCode").value = "+968";
                }
                else if (strUser== "Pakistan" ){
                         document.getElementsByName("country_iso")[0].value=("PAK");
                    document.getElementById("PhCode").value = "+92";
                }
                 else if (strUser== "Palau" ){
                         document.getElementsByName("country_iso")[0].value=("PLW");
                     document.getElementById("PhCode").value = "+680";
                }
                 else if (strUser== "Palestinian Territory" ){
                         document.getElementsByName("country_iso")[0].value=("PSE");
                     document.getElementById("PhCode").value = "+970";
                }
                else if (strUser== "Panama" ){

                         document.getElementsByName("country_iso")[0].value=("PAN");
                    document.getElementById("PhCode").value = "+507";
                }
                 else if (strUser== "Papua New Guinea" ){
                         document.getElementsByName("country_iso")[0].value=("PNG");
                     document.getElementById("PhCode").value = "+675";
                }
                 else if (strUser== "Paraguay" ){
                        document.getElementsByName("country_iso")[0].value=("PRY");
                     document.getElementById("PhCode").value = "+595";
                }
                  else if (strUser== "Peru" ){
                        document.getElementsByName("country_iso")[0].value=("PER");
                      document.getElementById("PhCode").value = "+51";
                }
                 else if (strUser== "Philippines" ){
                        document.getElementsByName("country_iso")[0].value=("PHL");
                     document.getElementById("PhCode").value = "+63";
                }
                else if (strUser== "Pitcairn" ){
                         document.getElementsByName("country_iso")[0].value=("PCN");
                    document.getElementById("PhCode").value = "+64";
                }
                 else if (strUser== "Poland" ){
                         document.getElementsByName("country_iso")[0].value=("POL");
                     document.getElementById("PhCode").value = "+48";
                }
                  else if (strUser== "Portugal" ){
                         document.getElementsByName("country_iso")[0].value=("PRT");
                      document.getElementById("PhCode").value = "+351";
                }
                 else if (strUser== "Puerto Rico" ){
                         document.getElementsByName("country_iso")[0].value=("PRI");
                     document.getElementById("PhCode").value = "+1";
                }
                 else if (strUser== "Qatar" ){
                         document.getElementsByName("country_iso")[0].value=("QAT");
                     document.getElementById("PhCode").value = "+974";
                }               
                else if (strUser== "Reunion" ){
                         document.getElementsByName("country_iso")[0].value=("REU");
                    document.getElementById("PhCode").value = "+262";
                }
                else if (strUser== "Romania" ){
                         document.getElementsByName("country_iso")[0].value=("ROM");
                    document.getElementById("PhCode").value = "+40";
                }
                else if (strUser== "Russian Federation" ){
                         document.getElementsByName("country_iso")[0].value=("RUS");
                    document.getElementById("PhCode").value = "+7";
                }
                else if (strUser== "Rwanda" ){
                         document.getElementsByName("country_iso")[0].value=("RWA");
                    document.getElementById("PhCode").value = "+250";
                }
                else if (strUser== "Saint Helena" ){
                         document.getElementsByName("country_iso")[0].value=("SHN");
                    document.getElementById("PhCode").value = "+290";
                }
                else if (strUser== "Saint Kitts and Nevis" ){
                         document.getElementsByName("country_iso")[0].value=("KNA");
                    document.getElementById("PhCode").value = "+1";
                }
                else if (strUser== "Saint Lucia" ){
                         document.getElementsByName("country_iso")[0].value=("LCA");
                    document.getElementById("PhCode").value = "+1";
                }
                else if (strUser== "Saint Vincent And The Grenadines" ){
                         document.getElementsByName("country_iso")[0].value=("VCT");
                    document.getElementById("PhCode").value = "+1";
                }
                else if (strUser== "Samoa" ){
                         document.getElementsByName("country_iso")[0].value=("WSM");
                    document.getElementById("PhCode").value = "+685";
                }
                else if (strUser== "San Marino" ){
                         document.getElementsByName("country_iso")[0].value=("SMR");
                    document.getElementById("PhCode").value = "+378";
                }
                else if (strUser== "Sao Tome And Principe" ){
                         document.getElementsByName("country_iso")[0].value=("STP");
                    document.getElementById("PhCode").value = "+239";
                }
                
                else if (strUser== "Saudi Arabia" ){
                         document.getElementsByName("country_iso")[0].value=("SAU");
                    document.getElementById("PhCode").value = "+966";
                }
                else if (strUser== "Senegal" ){
                         document.getElementsByName("country_iso")[0].value=("SEN");
                    document.getElementById("PhCode").value = "+221";
                }
                else if (strUser== "Serbia" ){
                         document.getElementsByName("country_iso")[0].value=("SRB");
                    document.getElementById("PhCode").value = "+381";
                }
                else if (strUser== "Seychelles" ){
                         document.getElementsByName("country_iso")[0].value=("SYC");
                    document.getElementById("PhCode").value = "+248";
                }
    
                else if (strUser== "Sierra Leone" ){
                         document.getElementsByName("country_iso")[0].value=("SLE");
                    document.getElementById("PhCode").value = "+232";
                }
                else if (strUser== "Singapore" ){
                         document.getElementsByName("country_iso")[0].value=("SGP");
                    document.getElementById("PhCode").value = "+65";
                }
                else if (strUser== "Slovakia" ){
                         document.getElementsByName("country_iso")[0].value=("SVK");
                    document.getElementById("PhCode").value = "+421";
                }
                else if (strUser== "Slovenia" ){
                         document.getElementsByName("country_iso")[0].value=("SVN");
                    document.getElementById("PhCode").value = "+386";
                }
                else if (strUser== "Solomon Islands" ){
                         document.getElementsByName("country_iso")[0].value=("SLB");
                    document.getElementById("PhCode").value = "+677";
                }
                else if (strUser== "Somalia" ){
                         document.getElementsByName("country_iso")[0].value=("SOM");
                    document.getElementById("PhCode").value = "+252";
                }
                else if (strUser== "South Africa" ){
                         document.getElementsByName("country_iso")[0].value=("ZAF");
                    document.getElementById("PhCode").value = "+27";
                }
                else if (strUser== "South Georgia and the South Sandwich Islands" ){
                         document.getElementsByName("country_iso")[0].value=("SGS");
                    document.getElementById("PhCode").value = "+500";
                }
                else if (strUser== "Spain" ){
                         document.getElementsByName("country_iso")[0].value=("ESP");
                    document.getElementById("PhCode").value = "+34";
                }
                else if (strUser== "Sri Lanka" ){
                         document.getElementsByName("country_iso")[0].value=("LKA");
                    document.getElementById("PhCode").value = "+94";
                }
                
                else if (strUser== "Sudan" ){
                         document.getElementsByName("country_iso")[0].value=("SDN");
                    document.getElementById("PhCode").value = "+249";
                }
                else if (strUser== "Suriname" ){
                         document.getElementsByName("country_iso")[0].value=("SUR");
                    document.getElementById("PhCode").value = "+597";
                }
                
                else if (strUser== "Swaziland" ){
                         document.getElementsByName("country_iso")[0].value=("SWZ");
                    document.getElementById("PhCode").value = "+268";
                }
                else if (strUser== "Sweden" ){
                         document.getElementsByName("country_iso")[0].value=("SWE");
                    document.getElementById("PhCode").value = "+46";
                }
                else if (strUser== "Switzerland" ){
                         document.getElementsByName("country_iso")[0].value=("CHE");
                    document.getElementById("PhCode").value = "+41";
                }
                
                else if (strUser== "Taiwan, ROC" ){
                         document.getElementsByName("country_iso")[0].value=("TWN");
                    document.getElementById("PhCode").value = "+886";
                }
                else if (strUser== "Tajikistan" ){
                         document.getElementsByName("country_iso")[0].value=("TJK");
                    document.getElementById("PhCode").value = "+992";
                }
                else if (strUser== "Tanzania, United Republic Of" ){
                         document.getElementsByName("country_iso")[0].value=("TZA");
                    document.getElementById("PhCode").value = "+255";
                }
                else if (strUser== "Thailand" ){
                         document.getElementsByName("country_iso")[0].value=("THA");
                    document.getElementById("PhCode").value = "+66";
                }
                else if (strUser== "Timor-Leste" ){
                         document.getElementsByName("country_iso")[0].value=("TLS");
                    document.getElementById("PhCode").value = "+670";
                }
                else if (strUser== "Togo" ){
                         document.getElementsByName("country_iso")[0].value=("TGO");
                    document.getElementById("PhCode").value = "+228";
                }
                else if (strUser== "Tokelau" ){
                         document.getElementsByName("country_iso")[0].value=("TKL");
                    document.getElementById("PhCode").value = "+690";
                }
                else if (strUser== "Tonga" ){
                         document.getElementsByName("country_iso")[0].value=("TON");
                    document.getElementById("PhCode").value = "+676";
                }
                else if (strUser== "Trinidad and Tobago" ){
                         document.getElementsByName("country_iso")[0].value=("TTO");
                    document.getElementById("PhCode").value = "+868";
                }
                else if (strUser== "Tunisia" ){
                         document.getElementsByName("country_iso")[0].value=("TUN");
                    document.getElementById("PhCode").value = "+216";
                }
                else if (strUser== "Turkey" ){
                         document.getElementsByName("country_iso")[0].value=("TUR");
                    document.getElementById("PhCode").value = "+90";
                }
                else if (strUser== "Turkmenistan" ){
                         document.getElementsByName("country_iso")[0].value=("TKM");
                    document.getElementById("PhCode").value = "+993";
                }
                else if (strUser== "Turks and Caicos Islands" ){
                         document.getElementsByName("country_iso")[0].value=("TCA");
                    document.getElementById("PhCode").value = "+649";
                }
                else if (strUser== "Tuvalu" ){
                         document.getElementsByName("country_iso")[0].value=("TUV");
                    document.getElementById("PhCode").value = "+688";
                }
                else if (strUser== "Uganda" ){
                         document.getElementsByName("country_iso")[0].value=("UGA");
                    document.getElementById("PhCode").value = "+256";
                }
                else if (strUser== "Ukraine" ){
                         document.getElementsByName("country_iso")[0].value=("UKR");
                    document.getElementById("PhCode").value = "+380";
                }
                else if (strUser== "United Arab Emirates" ){
                         document.getElementsByName("country_iso")[0].value=("ARE");
                    document.getElementById("PhCode").value = "+971";
                }
                else if (strUser== "United Kingdom" ){
                         document.getElementsByName("country_iso")[0].value=("GBR");
                    document.getElementById("PhCode").value = "+44";
                }
                else if (strUser== "US Minor Outlying Islands" ){
                         document.getElementsByName("country_iso")[0].value=("UMI");
                    document.getElementById("PhCode").value = "+1";
                }
                else if (strUser== "Uruguay" ){
                         document.getElementsByName("country_iso")[0].value=("URY");
                    document.getElementById("PhCode").value = "+598";
                }
                else if (strUser== "Uzbekistan" ){
                         document.getElementsByName("country_iso")[0].value=("UZB");
                    document.getElementById("PhCode").value = "+998";
                }
                else if (strUser== "Vanuatu" ){
                         document.getElementsByName("country_iso")[0].value=("VUT");
                    document.getElementById("PhCode").value = "+678";
                }
                else if (strUser== "Venezuela" ){
                         document.getElementsByName("country_iso")[0].value=("VEN");
                    document.getElementById("PhCode").value = "+58";
                }
                else if (strUser== "Vietnam" ){
                         document.getElementsByName("country_iso")[0].value=("VNM");
                    document.getElementById("PhCode").value = "+84";
                }
                else if (strUser== "Virgin Islands, British" ){
                         document.getElementsByName("country_iso")[0].value=("VGB");
                    document.getElementById("PhCode").value = "+1";
                }
                else if (strUser== "Virgin Islands, U.S." ){
                         document.getElementsByName("country_iso")[0].value=("VIR");
                    document.getElementById("PhCode").value = "+1";
                }
                else if (strUser== "Western Sahara" ){
                         document.getElementsByName("country_iso")[0].value=("ESH");
                    document.getElementById("PhCode").value = "+212";
                }
                else if (strUser== "Yugoslavia" ){
                         document.getElementsByName("country_iso")[0].value=("YUG");
                    document.getElementById("PhCode").value = "+38";
                }
                else if (strUser== "Zambia" ){
                         document.getElementsByName("country_iso")[0].value=("ZMB");
                    document.getElementById("PhCode").value = "+260";
                }
                else if (strUser== "Zimbabwe" ){
                         document.getElementsByName("country_iso")[0].value=("ZWE");
                    document.getElementById("PhCode").value = "+263";
                } else {
                    document.getElementsByName("country_iso")[0].value=("");
                    document.getElementById("PhCode").value = "";
                }
            }

//Code to update content title and Content URL
document.getElementsByName("contentTitle1")[0].value = "Get in Touch";//Insert content title here
var ref = document.referrer;//this assigns refferer value to ref variable
if (ref != ""){
document.getElementsByName("contentURL1")[0].value = ref;//passing referrer value to the content URL field
} else {
document.getElementsByName("contentURL1")[0].value = window.location;
}
Countrysel= document.getElementsByName("country")[0];
Countrysel.addEventListener('change', detect_ccode);//Code to implement on change on country select field


//Style added for Submit button
var btn1 = document.getElementsByClassName("submit-button-style")[0]; 
btn1.style.width = "100%";
btn1.style.display = "block";
btn1.style.marginTop = "0";
btn1.style.marginBottom = "0";
btn1.style.color = "#FFFFFF";
btn1.style.marginLeft = "auto";
btn1.style.marginright = "auto";
btn1.value = "提交 ► ";
var x = document.getElementsByClassName("submit-button-style")[0];
x.style.backgroundColor = "#DA291C";
x.style.marginTop = "15px";
x.style.marginLeft = "auto";
x.style.marginright = "auto";
x.style.display = "block";

		  
/*var SessCTA = getCookie('cta');
var SessTAC = getCookie('tac');
		if (SessCTA != null) {
			console.log(SessCTA);
         	document.getElementsByName("cta_code")[0].value = SessCTA;
		} else if (getUrlVar("CTA") != ""){
			document.getElementsByName("cta_code")[0].value = getUrlVar("CTA");
		} else {
			document.getElementsByName("cta_code")[0].value = "WEB-GET-CN";
		}
		if (SessTAC != null) {
			console.log(SessTAC);
         	document.getElementsByName("tactic_code")[0].value = SessTAC;
		} else if (getUrlVar("TAC") != ""){
			document.getElementsByName("tactic_code")[0].value = getUrlVar("TAC");
		} else {
			document.getElementsByName("tactic_code")[0].value = "WEB-GET-CN";
		}*/
		
		
        if (getUrlVar("CTA") != ""){
            document.getElementsByName("cta_code")[0].value = getUrlVar("CTA");
        } else {
            document.getElementsByName("cta_code")[0].value = "WEB-GET-CN";
        }

        if (getUrlVar("TAC") != ""){
            document.getElementsByName("tactic_code")[0].value = getUrlVar("TAC");
        } else {
            document.getElementsByName("tactic_code")[0].value = "WEB-GET-CN";
        }


//document.getElementsByName('unique_id_persist')[0].value = getCookie('unique_id_persist');

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
							if (document.getElementsByName("kickfireVisitorRegionShort")[0].value){
										console.log("added value");
										document.getElementsByName("state_province")[0].value = "";
									  	document.getElementsByName("state_province")[0].value = document.getElementsByName("kickfireVisitorRegionShort")[0].value;
							  }
                          }             
                        }

document.getElementsByName('email')[0].addEventListener("blur", emailOnBlurEvent, true);
var regex = "/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i";
function emailOnBlurEvent(){
	var emailfieldvalue = document.getElementsByName('email')[0].value;
	//var match1 = regex.test(emailfieldvalue);
	/*if (/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/.test(emailfieldvalue)){
    	emailadd1 = encrypt_cookie(document.getElementsByName('email')[0].value, 5);
		console.log("emailadd1  ===========  "+emailadd1);
	} else {*/
    	emailadd1 = document.getElementsByName('email')[0].value;
		console.log("emailadd1  ===========  "+emailadd1);
	/*}*/
 	kickfirecheck();
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

/*(function() {
  var nTimer1 = setInterval(function() {
    if (document.getElementsByName('email')[0].value) {
		console.log("email value");
      emailOnBlurEvent();
      clearInterval(nTimer1);
    };
	//console.log("outside == " + Date())
  }, 500);
})();*/

(function() {
	console.log("window.onload");
	var checktimer = 1;
	var nTimer1 = setInterval(function() {
	if (window.jQuery) {
		checktimer = checktimer+1;
		if (document.getElementsByName('email')[0].value || checktimer == 5) {
			console.log("email value");
		  emailOnBlurEvent();
		  clearInterval(nTimer1);
		};
	}
	console.log("outside == " + Date());
  }, 1000);
})();


handleFormSubmit = (function() {
							 console.log("check11");
    var cached_function = handleFormSubmit;

    return function() {
        // your code
        var result = cached_function.apply(this, arguments); // use .apply() to call it
		
		if(document.getElementsByName("nb-result")[0]){
			  if(document.getElementsByName("nb-result")[0].value == "catchall"){
					document.getElementsByName("nameAnalyzerStatus1")[0].value = "unverifiable";
			  } else {
					document.getElementsByName("nameAnalyzerStatus1")[0].value =document.getElementsByName("nb-result")[0].value;   
			  }
		   }
        
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
            document.getElementsByName('area_of_interest')[0].value = "Cloud";
        }       
        
        // more of your code

        return result;
    };
})();




subonclick= document.getElementById("fe85903");
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


var ell1 = document.getElementsByClassName('container-fluid')[0].getElementsByClassName('row');
var parent = document.querySelector('.container-fluid');
var children = parent.children;
var childrenL = children.length - 1;
console.log("childrenL == "+childrenL);
for(var l = 0; l < children.length; l ++) {
	if (l>2){
	children[l].classList.add('extBoth');
	}
	/*if(children[l].innerHTML.indexOf('id="formElement') !== -1) {
		children[l].setAttribute("id", "formElementid"+[l]);
		if(l>1 && l<9){
		children[l].setAttribute("style", "clear:both");
		} else if(l>=9 && l<18){
			children[l].setAttribute("style", "display:none");
		}		
	}
	if(children[l].innerHTML.indexOf('name="stateProv"') !== -1) {
		children[l].style.display = 'none';
		stateFieldContainer = "formElementid"+[l];
		console.log(stateFieldContainer);
	}
	//console.log("children.innerHTML"+l+"====="+children[l].innerHTML);*/
}


var x = window.matchMedia("(max-width: 768px)");

function isOdd(num) { return num % 2;}
var imgsrc = document.getElementsByClassName('container-fluid')[0].getElementsByClassName('row');

function myFunction(x) {
	  if (x.matches) { // If media query matches
	  		document.getElementsByClassName('av-form')[0].style.marginLeft="0px";
			//console.log("imgsrc.length == "+imgsrc.length);
			for(var i = 0; i < imgsrc.length - 7; i ++) {
			var imgsrc2 = document.getElementsByClassName('row')[i].getElementsByClassName('grid-layout-col');
			console.log("imgsrc2 = "+document.getElementsByClassName('row')[i].innerHTML);
			//var imgsrc3 = parseInt(imgsrc2);
			//var imgsrc3 = new String(imgsrc2);
			var imgsrc3 = Object.entries(imgsrc2).toString();
			//var imgsrc4 = Object.entries("1").toString();
			console.log("imgsrc3 ==  "+imgsrc3);
			//console.log("imgsrc4 ==  "+imgsrc4);
			//if (typeof imgsrc2 === 'object' && imgsrc2 !== null){
				//console.log("imgsrc2.length == "+imgsrc2.length);
			if (!document.getElementsByClassName('row')[i].innerHTML.includes("address3", 0))	{
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
			}
			}
			console.log("i ==  "+i);
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


//for Validation
fe85870.add(Validate.Presence, {failureMessage:"请填写您的姓"});
//field1.add(Validate.Presence, {failureMessage:"役職をご記入ください."});
fe85872.add(Validate.Presence, {failureMessage:"这是必填栏"});
fe85872.add(Validate.Format, {pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, failureMessage: "请填写有效的公司电子邮件地址"});
fe85873.add(Validate.Presence, {failureMessage:"这是必填栏"});

/*var tp1area1 = document.querySelector('#form3029 #tp1area1');
var tp1area1 = new LiveValidation( "tp1area1", { validMessage: "", onlyOnBlur: true });
tp1area1.add( Validate.Presence, { failureMessage: "请填写有效的区号码" } );
tp1area1.add(Validate.Format, {pattern: /^(\+[0-9]{2,3}|[0-9]{2,4})?$/i, failureMessage: "请填写有效的区号码"});

var tp2 = document.querySelector('#form3029 #tp2');
var tp2 = new LiveValidation("tp2", {validMessage: "", onlyOnBlur: true});
tp2.add(Validate.Presence, {failureMessage:"请填写有效的电话号码"});
tp2.add(Validate.Format, {pattern: /^\(?\+?[\d\(\-\#\s\)]+$/i, failureMessage: "请填写有效的电话号码"});
tp2.add( Validate.Length, {tooShortMessage:"请填写有效的电话号码", tooLongMessage: "请填写有效的电话号码",  minimum: 4, maximum: 20});*/

var PhNumber = document.querySelector('#form3029 #PhNumber');
var PhNumber = new LiveValidation("PhNumber", {validMessage: "", onlyOnBlur: false, wait: 300});
PhNumber.add(Validate.Presence, {failureMessage:"请填写有效的手机号码"});
PhNumber.add(Validate.Format, {pattern: /^\(?\+?[\d\(\-\#\s\)]+$/, failureMessage: "请填写有效的手机号码"});
PhNumber.add( Validate.Length, {tooShortMessage:"请填写有效的手机号码", tooLongMessage: "请填写有效的手机号码",  minimum: 4, maximum: 20});
fe85877.add(Validate.Presence, {failureMessage:"请填写您的公司名称"});
fe85878.add(Validate.Presence, {failureMessage:"这是必填栏"});


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
css = css+ '.av-form .elq-form input, .av-form .elq-form select, .av-form .elq-form textarea{background-color: #f1f1f3;}';//field background color
css = css+ '.av-form .elq-form input:focus, .av-form .elq-form select:focus, .av-form .elq-form textarea:focus{background-color: #ffffff;}';
css = css+ '.av-form .form-text p {color:#313133}';
css = css+ '.LV_valid_field { border-color: #1B77AF;background-color: #FFFFFF !important}';
css = css+ '.av-form .elq-form label { font-family: "Noto Sans JP";font-size: 12px;line-height: 20px !important;color: #313133;}';
css = css+ '.av-form .grid-layout-col .form-element-layout {padding-bottom: 0px !important;margin-bottom: 15px !important;}';
css = css+ '.av-form .elq-form label{width: 100%;font-family: "Noto Sans JP";}';
css = css+ '.av-form .extBoth{clear:both !important}';


//css = css+ '.av-form .elq-form input:placeholder-shown{background-color: #ffffff;}';
//css = css+ '.av-form .elq-form input:placeholder-shown {background-color: #f1f1f3;}';
css = css+ '#formElement13 .row .submit-button-style { color: #ffffff !important;background-color:transparent !important;position: relative;z-index: 1;margin: 0 !important;font-weight:400;border: 0px solid #1B77AF;}';
css = css+ '#formElement13 .row > div > div {position: relative;overflow: hidden;cursor: pointer;clear: both;border-radius: 5px; background-color:#1B77AF  !important;box-shadow: 3px 2px 20px #4e4c4c59;border: 0px solid #1B77AF;}';
css = css+ '#formElement13 .row > div > div:before {content: close-quote;position: absolute;z-index: 0;width: 0;height: 100%;left: -50%;top: 0;-webkit-transform: skew(50deg);-moz-transform: skew(50deg);-o-transform: skew(50deg);-ms-transform: skew(50deg);transform: skew(50deg);-webkit-transition: all 0.3s;-moz-transition: all 0.3s;-o-transition: all 0.3s;-ms-transition: all 0.3s;transition: all 0.3s;-webkit-transform-origin: top left;-moz-transform-origin: top left;-o-transform-origin: top left;-ms-transform-origin: top left;transform-origin: top left;transition-duration: 0.6s;}';
css = css+ '#formElement13 .row > div > div:hover::before {width: 150%;background-color: #004E6C;}';



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
                            console.log(emailDomain + ": success");
                            kfprocessAPI(kfkey, kfvlocKey);
                            console.log("kfprocessAPI Runs");
                               
                            setTimeout(function() { 
                                var kickFireValues = "Company { Name: " + document.getElementsByName("kickfireCompanyTradeName")[0].value + "; Website: "+ document.getElementsByName("kickfireCompanyWebsite")[0].value + "; Country: "+ document.getElementsByName("kickfireCompanyCountry")[0].value + "; Region: "+ document.getElementsByName("kickfireCompanyRegion")[0].value + "}, Visitor { Country: " + document.getElementsByName("kickfireVisitorCountry")[0].value + "; Region: " + document.getElementsByName("kickfireVisitorRegion")[0].value + "; City: " + document.getElementsByName("kickfireVisitorCity")[0].value +"}";
                                        console.log(kickFireValues);
										popFormFieldsKF1();
                                    }, 3000);
                                      
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


// check checkbox for optin / oupt out
			function checkOptin(){
				var checkbox1 =  document.getElementById("optin");
				if(checkbox1.checked == true){
					document.getElementsByName("emailOptinDate1")[0].value = output;
					document.getElementsByName("emailOptinSource1")[0].value = "WEB-GET-CN";
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
			
			
/*GA*/

 document.getElementById('form3029').addEventListener(
 'submit', function(event) {
 ga(function() {
 var tracker = ga.getAll()[0];
 var clientId = tracker.get('clientId');
 document.getElementById('GACLIENTID').value = clientId;
 });
 });
/*function chExtCol(){
if(document.getElementsByName("tpEx")[0].value.length > 0){
	document.getElementsByName("tpEx")[0].style.backgroundColor="#ffffff";
} else {
	document.getElementsByName("tpEx")[0].style.backgroundColor="#f1f1f3";
}
}*/
function chMPhCol(){
if(document.getElementsByName("PhCode")[0].value.length > 0){
	document.getElementsByName("PhCode")[0].style.backgroundColor="#ffffff";
} else {
	document.getElementsByName("PhCode")[0].style.backgroundColor="#f1f1f3";
}
}

//chExtCol();
chMPhCol();
//document.getElementsByName('tpEx')[0].addEventListener("blur", chExtCol, true);
document.getElementsByName('PhCode')[0].addEventListener("blur", chMPhCol, true);
	
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