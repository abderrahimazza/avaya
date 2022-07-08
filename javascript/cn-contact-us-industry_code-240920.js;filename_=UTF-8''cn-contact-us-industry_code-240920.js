function getCookie(name){
    var re=new RegExp(name+"=([^;]+)");var value=re.exec(document.cookie);return(value!=null)?unescape(value[1]):null;
} 
var today = new Date();
  var expiry = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000); // plus 30 days

function setCookie(name, value){
    document.cookie=name + "=" + escape(value) + "; domain=.avaya.com;path=/; expires=" + expiry.toGMTString();
}

document.getElementById("formElement6").style.display = "none";//not to display Title field container
document.getElementById("formElement8").style.display = "none";//not to display No. of Employees field 
document.getElementById("formElement9").style.display = "none";//not to display Postal code field container
document.getElementById("formElement10").style.display = "none";//not to display Address 3 field container
document.getElementById("formElement4").style.display = "none";//not to display First Name field container
document.getElementById("formElement5").style.display = "none";//not to display Phone field container

var GTM1 = document.getElementsByName("GACLIENTID")[0];
var GTM2 = document.getElementsByName("GAUSERID")[0];
var GTM3 = document.getElementsByName("GATRACKID")[0];
GTM1.id = "GACLIENTID";
GTM2.id = "ruid";
GTM3.id = "GATRACKID";

document.getElementById("formElement0").style.marginBottom = "15px";
document.getElementById("formElement1").style.marginBottom = "15px";
document.getElementById("formElement2").style.marginBottom = "15px";
document.getElementById("formElement3").style.marginBottom = "15px";
document.getElementById("formElement7").style.marginBottom = "15px";
document.getElementById("formElement11").style.marginBottom = "15px";


var CNPhone = document.createElement('div');
CNPhone.setAttribute("id","formElement4a");
//BussPhone.setAttribute("align","left");
//BussPhone.setAttribute("width","100%");
CNPhone.setAttribute("class","elq-field-style form-element-layout row");
//BussPhone.setAttribute("style","float:left;clear:both;display:block;");
CNPhone.innerHTML = "<label id='CNPhone' style=float:left;clear:both;font-size:14px;'>电话号码</label><br><table cellpadding='0' cellspacing='0' width='100%' border='0'><tr><td width='13%' style='border:none;'><input id='tp1area1' name='tp1area1' type='text' value='' onblur='javascript:stripltpspaces(this);javascript:checkPhValue1();'></td><td width='74%' style='padding-left:10px; padding-right:10px; border:none;'><input id='tp2' name='tp2' type='text' value='' width='100%'  onblur='javascript:stripltpspaces(this);javascript:checkPhValue2();'></td><td width='13%' style='border:none;'><input id='tpEx' name='tpEx' type='text' value=''></td></tr><tr><td width='100%' style='padding-left:0px; border:none;' colspan='3'><table cellpadding='0' cellspacing='0' style='border-collapse:colapse;width:100%;'><tr><td width='35%' style='border:none;'><div style='line-height: 1px;'><input id='tpValid1' name='tpValid1' type='text' value='' width='1' height='1' style='border-style: none; width:1px; height:1px;padding: 0px 0px 0px;'></div></td><td width='50%' style='border:none;'><div style='line-height: 1px;'><input id='tpValid2' name='tpValid2' type='text' value='' width='1' height='1' style='border:none;; width:1px; height:1px;padding: 0px 0px 0px;'></div></td><td width='15%' style='border:none;'></td></tr></table></td></tr><tr><td width='100%' colspan='3' style='font-size:10px;border:none;'>区号, 电话号码, 分机</td></tr></table>";
//exInp1.appendChild(newP);
var y1 = document.getElementById("formElement4"); 
//insertBefore(newP, z);
insertAfter(CNPhone, y1);

var BussPhone = document.createElement('div');
BussPhone.setAttribute("id","formElement5a");
//BussPhone.setAttribute("align","left");
//BussPhone.setAttribute("width","100%");
BussPhone.setAttribute("class","elq-field-style form-element-layout row");
//BussPhone.setAttribute("style","float:left;clear:both;display:block;");
BussPhone.innerHTML = "<label id='BussPhone' style=float:left;clear:both;font-size:14px;'>手机号码</label><br><table cellpadding='0' cellspacing='0' width='100%' border='0'><tr><td width='13%' style='border:none;'><input id='PhCode' name='PhCode' type='text' value=''></td><td width='97%' style='padding-left:10px; border:none;'><div><input id='PhNumber' name='PhNumber' type='text' value='' width='100%' onblur='javascript:stripltpspaces(this)'></div></td></tr><tr><td width='100%' colspan='2' style='font-size:10px; border:none;'>国家号, 手机号码</td></tr></table>";
//exInp1.appendChild(newP);
var z1 = document.getElementById("formElement5"); 
//insertBefore(newP, z);
insertAfter(BussPhone, z1);

function populatePhoneField(){

var tp11=document.getElementById('tp1area1').value;
var tp12=document.getElementById('tp2').value;
var tpEx=document.getElementById('tpEx').value;
if ((tpEx == "") || (tpEx == " ")){
document.getElementById('fe87227').value = tp11+" "+tp12;
//alert(document.getElementById('fe87228').value);
}else{
document.getElementById('fe87227').value = tp11+" "+tp12+"#"+tpEx;
//alert(document.getElementById('fe87228').value);
}
if (document.getElementById('PhNumber').value!=""){
var tp21=document.getElementById('PhCode').value;
var tp22=document.getElementById('PhNumber').value;
document.getElementById('fe87228').value = tp21+" "+tp22;
//alert(document.getElementById('field15').value);
}	
/*var tp11=document.getElementsByName('PhCode')[0].value;
var tp12=document.getElementsByName('PhNumber')[0].value;
document.getElementById('fe87228').value = tp11+" "+tp12;*/
}
function stripltpspaces(input)
{
  input.value = input.value.replace(/^\s+|\s+$/g,'');
  populatePhoneField();
  return true;
}

document.getElementById("formElement4a").style.marginBottom = "15px";
document.getElementById("formElement5a").style.marginBottom = "15px";

function checkPhValue1(){
        document.getElementById('tpValid1').value = document.getElementById('tp1area1').value;
         document.getElementById('tpValid1').focus();
         //document.getElementById('tp1area1').focus();
         document.getElementById('tp2').focus();
}

function checkPhValue2(){
        document.getElementById('tpValid2').value = document.getElementById('tp2').value;
         document.getElementById('tpValid2').focus();
         document.getElementById('tpEx').focus();
}
function checkValue(x){
    document.getElementById('tpValid').value = "";
    var tpValid = document.querySelector('#form3074 #tpValid');
    var tpValid = new LiveValidation('tpValid');
        tpValid.disable();
    if (x == "a"){
        console.log("value is a");
        var tpValid = document.querySelector('#form3074 #tpValid');
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
        var tpValid = document.querySelector('#form3074 #tpValid');
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
                    document.getElementsByName("emailOptinSource1")[0].value = "CN-OWCS-Contact-Us";
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

labelatt('fe87252');//hide EmailOptin label
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
document.getElementById("fe87252").type = "hidden"; //EmailOptin is text field to hide this field

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
label.appendChild(document.createTextNode('我同意接收Avaya营销宣传邮件。'));
var divGDPRtext = document.createElement("div");
divGDPRtext.id="gdprtext";
divGDPRtext.innerHTML = "<div style='color: #000;width: 90%;margin-left: 25px;margin-bottom: 30px;margin-top: 15px;font-size:13px;line-height:20px;font-family: HCo Gotham SSm;'>通过提交此表格，表明我同意将我的联系信息存储至Avaya数据库，并接收Avaya的营销宣传邮件。 如需了解详情请参考我们的<a href='https://www.avaya.com/cn/privacy/commitment/' target='_blank' style='color:#DA291C;text-decoration:underline;font-size: 13px;border-bottom: 0px solid;'>隐私声明</a>， 或随时管理您的<a href='https://news.avaya.com/global-subscription' target='_blank' style='color:#DA291C;text-decoration:underline;font-size: 13px;border-bottom: 0px solid;'>电子邮件选项</a>。</div>";
document.getElementById('formElement12').style.marginTop = "20px";
var container=document.getElementById('formElement12')
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
                 else if (strUser== "Macau" ){
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
document.getElementsByName("contentTitle1")[0].value = "咨询相关专家";//Insert content title here
//var ref = document.referrer;//this assigns refferer value to ref variable
//document.getElementsByName("contentURL1")[0].value = ref;//passing referrer value to the content URL field
var pageLoc = window.location.href;//this assigns location value to pageLoc variable
document.getElementsByName("contentURL1")[0].value = pageLoc;//passing pageLoc value to the content URL field
Countrysel= document.getElementsByName("country")[0];
Countrysel.addEventListener('change', detect_ccode);//Code to implement on change on country select field


//for Validation
fe87223.add(Validate.Presence, {failureMessage:"请填写您的姓"});
fe87225.add(Validate.Presence, {failureMessage:"这是必填栏"});
fe87225.add(Validate.Format, {pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, failureMessage: "请填写有效的公司电子邮件地址"});
fe87226.add(Validate.Presence, {failureMessage:"这是必填栏"});

var tpValid1 = document.querySelector('#form3074 #tpValid1');
var tpValid1 = new LiveValidation( "tpValid1", { validMessage: "", onlyOnBlur: true });
tpValid1.add( Validate.Presence, { failureMessage: "请填写有效的区号码" } );
tpValid1.add(Validate.Format, {pattern: /^(\+[0-9]{2,3}|[0-9]{2,4})?$/i, failureMessage: "请填写有效的区号码"});

var tpValid2 = document.querySelector('#form3074 #tpValid2');
var tpValid2 = new LiveValidation("tpValid2", {validMessage: "", onlyOnBlur: true});
tpValid2.add(Validate.Presence, {failureMessage:"请填写有效的电话号码"});
tpValid2.add(Validate.Format, {pattern: /^\(?\+?[\d\(\-\#\s\)]+$/i, failureMessage: "请填写有效的电话号码"});
tpValid2.add( Validate.Length, {tooShortMessage:"请填写有效的电话号码", tooLongMessage: "请填写有效的电话号码",  minimum: 4, maximum: 20});

var PhNumber = document.querySelector('#form2546 #PhNumber');
var PhNumber = new LiveValidation("PhNumber", {validMessage: "", onlyOnBlur: false, wait: 300});
PhNumber.add(Validate.Presence, {failureMessage:"请填写有效的手机号码"});
PhNumber.add(Validate.Format, {pattern: /^\(?\+?[\d\(\-\#\s\)]+$/, failureMessage: "请填写有效的手机号码"});
PhNumber.add( Validate.Length, {tooShortMessage:"请填写有效的手机号码", tooLongMessage: "请填写有效的手机号码",  minimum: 4, maximum: 20});

fe87230.add(Validate.Presence, {failureMessage:"请填写您的公司名称"});


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
	if (pageURL.includes("/solutions/healthcare/")){
		document.getElementsByName("cta_code")[0].value = "WEB-GET-CN-HC";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-CN-HC";
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-CN-HC";
	} else if (pageURL.includes("/solutions/hospitality/")){
		document.getElementsByName("cta_code")[0].value = "WEB-GET-CN-HOSP";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-CN-HOSP";
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-CN-HOSP";
	} else if (pageURL.includes("/solutions/government-and-public-safety/")){
		document.getElementsByName("cta_code")[0].value = "WEB-GET-CN-GOV";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-CN-GOV";
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-CN-GOV";
	} else if (pageURL.includes("/solutions/education/")){
		document.getElementsByName("cta_code")[0].value = "WEB-GET-CN-EDU";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-CN-EDU";
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-CN-EDU";
	} else if (pageURL.includes("/solutions/financial-services/")){
		document.getElementsByName("cta_code")[0].value = "WEB-GET-CN-FIN";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-CN-FIN";
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-CN-FIN";
	} else if (pageURL.includes("/solutions/sports-and-entertainment/")){
		document.getElementsByName("cta_code")[0].value = "WEB-GET-CN-ENT";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-CN-ENT";
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-CN-ENT";
	} else {
		document.getElementsByName("cta_code")[0].value = "WEB-GET-CN-HC";
		document.getElementsByName("tactic_code")[0].value = "WEB-GET-CN-HC";
		document.getElementsByName("contact_source_detailed")[0].value = "WEB-GET-CN-HC";
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

subonclick= document.getElementById("fe87258");
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