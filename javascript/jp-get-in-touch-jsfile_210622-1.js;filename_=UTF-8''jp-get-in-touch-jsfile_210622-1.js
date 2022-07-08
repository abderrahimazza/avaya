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
document.getElementById("formElement7").style.display = "none";//not to display Postal code field container
document.getElementById("formElement8").style.display = "none";//not to display Postal code field container
document.getElementById("formElement9").style.display = "none";//not to display Address 3 field container
if(document.getElementById("honeypotFieldId")){//checkfor honeypot field
document.getElementById("elq-FormLastRow").style.display = "none"; //honeypot field container
}

document.getElementById("formElement0").style.marginBottom = "15px";
document.getElementById("formElement1").style.marginBottom = "15px";
//document.getElementById("formElement2").style.marginBottom = "15px";
document.getElementById("formElement3").style.marginBottom = "15px";
document.getElementById("formElement4").style.marginBottom = "15px";
document.getElementById("formElement6").style.marginBottom = "15px";
document.getElementById("formElement10").style.marginBottom = "15px";

var GTM1 = document.getElementsByName("GACLIENTID")[0];
var GTM2 = document.getElementsByName("GAUSERID")[0];
var GTM3 = document.getElementsByName("GATRACKID")[0];
GTM1.id = "GACLIENTID";
GTM2.id = "ruid";
GTM3.id = "GATRACKID";

var BussPhone = document.createElement('div');
BussPhone.setAttribute("id","formElement5a");
BussPhone.setAttribute("class","elq-field-style form-element-layout row");
BussPhone.innerHTML = "<label id='BussPhone' style=float:left;clear:both;'>会社電話番号<span>*</span></label><br><table cellpadding='0' cellspacing='0' width='100%' border='0'><tr><td width='10%'><input id='PhCode' name='PhCode' type='text' value='+81'></td><td width='90%' style='padding-left:10px'><div style='width:100%'><input id='PhNumber' name='PhNumber' type='text' value='' width='100%' onblur='javascript:stripltpspaces(this)'></div></td></tr><tr><td width='100%' colspan='2' style='font-size:10px;padding-top: 5px;font-family: Noto Sans JP'>電話番号を市外局番からハイフン無しで入力願います。</td></tr></table>";
//exInp1.appendChild(newP);
var z1 = document.getElementById("formElement5"); 
//insertBefore(newP, z);
insertAfter(BussPhone, z1);

function populatePhoneField(){
var tp11=document.getElementsByName('PhCode')[0].value;
var tp12=document.getElementsByName('PhNumber')[0].value;
document.getElementById('fe86044').value = tp11+" "+tp12;
}

function stripltpspaces(input){
  input.value = input.value.replace(/^\s+|\s+$/g,'');
  populatePhoneField();
  return true;
}

document.getElementById("formElement5a").style.marginBottom = "15px";

var countryField = document.getElementsByName('country')[0];
countryField.value = "Japan";
countryField.selected = true;
document.getElementsByName('country_iso')[0].value = 'JPN';

var checkinit = "N";
/*** GDPR Optin / Optout Code **************/
			var d = new Date(); // Define current date
			var month = d.getMonth()+1; // get month
			var day = d.getDate(); // get day
			var fullyear =  d.getFullYear(); // get full year
			var output =  ((''+month).length<2 ? '0' : '')+ month +  '-' + ((''+day).length<2 ? '0' : '') + day + '-' + fullyear;

			
var Countrysel;

labelatt('fe86065');//hide EmailOptin label
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
document.getElementById("fe86065").type = "hidden"; //EmailOptin is text field to hide this field

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
pInstruct.innerHTML = "<font style='color: #313133;font-weight: 500;font-size:12px'><span style='color: #da291c; font-size: 12px;'>*</span> は入力必須項目です</font>";
formTop.insertBefore(pInstruct, formTop.firstChild);


var labelc = document.getElementsByClassName('elq-label');
for(var p = 0; p < 9; p++) {
	//if(p !== 4){
var labelch = document.getElementsByClassName('elq-label')[p].innerHTML;
console.log("labelch === "+labelch);
labelch = labelch + "<span style='color: #da291c;font-weight: bold;font-size: 0.875rem;font-size: 14px;'>*</span>";
document.getElementsByClassName('elq-label')[p].innerHTML = labelch;
	//}
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
//label.innerHTML = "アバイアからのメールを受信することに同意します";
label.appendChild(document.createTextNode("アバイアからのメールを受信することに同意します"));
label.setAttribute("for","optin");
var divGDPRtext = document.createElement("div");
divGDPRtext.id="gdprtext";
divGDPRtext.innerHTML = "<div style='color: #313133;width: 95%;margin-left: 5px;margin-bottom: 30px;margin-top: 15px;font-size:13px;line-height:20px;font-family: Noto Sans JP;' class='formStatement'>このフォームを送ることでご自分の個人情報をアバイアのデーターベースにて上記の目的で 使用されることにご同意いただいたことになります。アバイアのプライバシーステイトメントは<a href='https://www.avaya.com/jp/privacy/website/' class='formStatLink' target='_blank' style='text-decoration:underline;font-family: Noto Sans JP; font-size: 12px;border-bottom: 0px solid;color:#1B77AF;'>こちら</a>でご確認いただけます。受信解除やメールの設定は<a href='https://news.avaya.com/global-subscription' class='formStatLink' target='_blank' style='text-decoration:underline;font-family: Noto Sans JP; font-size: 12px;border-bottom: 0px solid;color: #1B77AF;'>こちら</a>からいつでも変更可能です。</div>";
document.getElementById('formElement11').style.marginTop = "20px";
var container=document.getElementById('formElement11')
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
document.getElementById("optin").setAttribute("aria-label", "アバイアからのメールを受信することに同意します");
document.getElementById("PhNumber").setAttribute("aria-label", "電話番");
document.getElementById("PhCode").setAttribute("aria-label", "局番");

document.getElementsByName('first_name')[0].setAttribute("placeholder"," ");//add empty placeholder for all visible fields
document.getElementsByName('last_name')[0].setAttribute("placeholder"," ");
document.getElementsByName('email')[0].setAttribute("placeholder"," ");
document.getElementsByName('country')[0].setAttribute("placeholder"," ");
document.getElementsByName('company_name')[0].setAttribute("placeholder"," ");

//Code to update content title and Content URL
document.getElementsByName("contentTitle1")[0].value = "Get in Touch";//Insert content title here
var ref = document.referrer;//this assigns refferer value to ref variable
if (ref != ""){
document.getElementsByName("contentURL1")[0].value = ref;//passing referrer value to the content URL field
} else {
document.getElementsByName("contentURL1")[0].value = window.location;
}
//Countrysel= document.getElementsByName("country")[0];
//Countrysel.addEventListener('change', detect_ccode);//Code to implement on change on country select field


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

		  
/*var SessCTA = getCookie('cta');
var SessTAC = getCookie('tac');
        if (SessCTA != null) {
            console.log(SessCTA);
            document.getElementsByName("cta_code")[0].value = SessCTA;
        } else if (getUrlVar("CTA") != ""){
            document.getElementsByName("cta_code")[0].value = getUrlVar("CTA");
        } else {
            document.getElementsByName("cta_code")[0].value = "WEB-GET-JP";
        }
        if (SessTAC != null) {
            console.log(SessTAC);
            document.getElementsByName("tactic_code")[0].value = SessTAC;
        } else if (getUrlVar("TAC") != ""){
            document.getElementsByName("tactic_code")[0].value = getUrlVar("TAC");
        } else {
            document.getElementsByName("tactic_code")[0].value = "WEB-GET-JP";
        }*/


        if (getUrlVar("CTA") != ""){
            document.getElementsByName("cta_code")[0].value = getUrlVar("CTA");
        } else {
            document.getElementsByName("cta_code")[0].value = "WEB-GET-JP";
        }

        if (getUrlVar("TAC") != ""){
            document.getElementsByName("tactic_code")[0].value = getUrlVar("TAC");
        } else {
            document.getElementsByName("tactic_code")[0].value = "WEB-GET-JP";
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
						//imgsrc[i].style.minHeight = "105px";
					} else {
						imgsrc[i].style.float = "left"; 
						imgsrc[i].style.width = "100%"; 
						//imgsrc[i].style.minHeight = "105px";
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
					imgsrc[i].style.width = "100%"; 
					//imgsrc[i].style.minHeight = "105px";
				} else {
					imgsrc[i].style.float = "left"; 
					imgsrc[i].style.width = "100%"; 
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
fe86039.add(Validate.Presence, {failureMessage:"会社名をご記入ください."});
fe86040.add(Validate.Presence, {failureMessage:"役職をご記入ください."});
fe86042.add(Validate.Presence, {failureMessage:"お名前をご記入ください."});
fe86043.add(Validate.Presence, {failureMessage:"メールアドレスをご記入ください."});
fe86043.add(Validate.Format, {pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, failureMessage: "メールアドレスをご記入ください."});
var PhNumber = document.querySelector('#form3035 #PhNumber');
var PhNumber = new LiveValidation(PhNumber, {validMessage: "", onlyOnBlur: false, wait: 300});
PhNumber.add(Validate.Presence, {failureMessage:"電話番号をご記入ください"});
PhNumber.add(Validate.Format, {pattern: /^\(?\+?[\d\(\-\#\s\)]+$/, failureMessage: "電話番号をご記入ください"});
PhNumber.add( Validate.Length, {tooShortMessage:"電話番号をご記入ください", tooLongMessage: "電話番号をご記入ください",  minimum: 4, maximum: 20});
fe86045.add(Validate.Presence, {failureMessage:"タイトルを選択してください。"});


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
css = css+ '#BussPhone span{color: #da291c;font-weight: bold;font-size: 0.875rem;font-size: 14px;}';

//css = css+ '.av-form .elq-form input:placeholder-shown{background-color: #ffffff;}';
//css = css+ '.av-form .elq-form input:placeholder-shown {background-color: #f1f1f3;}';
css = css+ '#formElement12 .row .submit-button-style { color: #ffffff !important;background-color:transparent !important;position: relative;z-index: 1;margin: 0 !important;font-weight:400;border: 0px solid #1B77AF;}';
css = css+ '#formElement12 .row > div > div {position: relative;overflow: hidden;cursor: pointer;clear: both;border-radius: 5px; background-color:#1B77AF  !important;box-shadow: 3px 2px 20px #4e4c4c59;border: 0px solid #1B77AF;}';
css = css+ '#formElement12 .row > div > div:before {content: close-quote;position: absolute;z-index: 0;width: 0;height: 100%;left: -50%;top: 0;-webkit-transform: skew(50deg);-moz-transform: skew(50deg);-o-transform: skew(50deg);-ms-transform: skew(50deg);transform: skew(50deg);-webkit-transition: all 0.3s;-moz-transition: all 0.3s;-o-transition: all 0.3s;-ms-transition: all 0.3s;transition: all 0.3s;-webkit-transform-origin: top left;-moz-transform-origin: top left;-o-transform-origin: top left;-ms-transform-origin: top left;transform-origin: top left;transition-duration: 0.6s;}';
css = css+ '#formElement12 .row > div > div:hover::before {width: 150%;background-color: #004E6C;}';



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


subonclick= document.getElementById("fe86071");
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




/*GA*/

 document.getElementById('form3035').addEventListener(
 'submit', function(event) {
 ga(function() {
 var tracker = ga.getAll()[0];
 var clientId = tracker.get('clientId');
 document.getElementById('GACLIENTID').value = clientId;
 });
 });


// check checkbox for optin / oupt out
			function checkOptin(){
				var checkbox1 =  document.getElementById("optin");
				if(checkbox1.checked == true){
					document.getElementsByName("emailOptinDate1")[0].value = output;
					document.getElementsByName("emailOptinSource1")[0].value = "WEB-GET-JP";
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