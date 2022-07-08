//Function to capture url parameters
 function getCookie(name)
    {var re=new RegExp(name+"=([^;]+)");var value=re.exec(document.cookie);return(value!=null)?unescape(value[1]):null;}
    
    
var today = new Date();
var expiry = new Date(today.getTime() + 365 * 24 * 3600 * 1000); // plus 5 days
function setCookie(name, value) {
        document.cookie=name + "=" + escape(value) + ";domain=.avaya.com; path=/; expires=" + expiry.toGMTString();
      }
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

/*var elqFields = document.createElement("div");
elqFields.id="elqField";
elqFields.innerHTML = '<input type="hidden" name="elqCustomerGUID" value=""><input type="hidden" name="elqCookieWrite" value="0">';
var container=document.getElementById('formElement0')
//container.appendChild(elqFields);
insertBefore(elqFields, container);
*/
document.getElementById("formElement7").style.display = "none";//not to display address 3 field container
document.getElementById("formElement16").style.display = "none";//on load hide Distributor Name field
document.getElementById("formElement17").style.display = "none";//on load hide Representante da Avaya Name field
document.getElementById("formElement18").style.display = "none";//on load hide Avaya Authorized Reseller Name field
document.getElementsByName("emailTemplate")[0].value = "20036";

var GTM1 = document.getElementsByName("GACLIENTID")[0];
var GTM2 = document.getElementsByName("GAUSERID")[0];
var GTM3 = document.getElementsByName("GATRACKID")[0];
GTM1.id = "GACLIENTID";
GTM2.id = "ruid";
GTM3.id = "GATRACKID";


var vPartnerType = "";
//Function to populate dropdown lists
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
var partnertype = document.getElementsByName('PartnerType')[0];
var refferedby = document.getElementsByName('ReferredBy')[0];
var vDistributorName = document.getElementsByName('DistributorName')[0];
removeOptions(partnertype);//call remove function to remove dropdown options
removeOptions(refferedby);
removeOptions(vDistributorName);
createOption(partnertype, "Selecione", "");
//function to populate Referred By dropdown
function populateReferredBy(){
	var vrefferedby = document.getElementsByName('ReferredBy')[0];
	console.log("partnertype===="+document.getElementsByName('PartnerType')[0].value);
	if (document.getElementsByName('PartnerType')[0].value == "Avaya Authorized Reseller"){
		console.log("firstoption");
		var RegRB = ['Selecione','Distribuidor Avaya','Representante da Avaya','Nenhum'];// creating array with all the options to populate dropdown option label in case of Partner Type = Revendedor Autorizado Avaya
		var RegRBO = ['','Avaya Distributor','Avaya Representative','None'];// creating array with all the options to populate dropdown value for all the options in case of Partner Type = Revendedor Autorizado Avaya
	} else if (document.getElementsByName('PartnerType')[0].value == "Avaya Registered Reseller"){
		console.log("2 option");
		var RegRB = ['Selecione','Revendedor Autorizado Avaya','Nenhum'];// creating array with all the options to populate dropdown option label in case of Partner Type = Avaya Registered Reseller
		var RegRBO = ['','Avaya Authorized Reseller','None'];// creating array with all the options to populate dropdown value for all the options in case of Partner Type = Avaya Registered Reseller
	} else if (document.getElementsByName('PartnerType')[0].value == "Open Product Reseller"){
		var RegRB = ['Selecione','Distribuidor Avaya','Nenhum'];// creating array with all the options to populate dropdown option label in case of Partner Type = Avaya Open Product Reseller
		var RegRBO = ['','Avaya Distributor','None'];// creating array with all the options to populate dropdown value for all the options in case of Partner Type = Avaya Open Product Reseller
	} else if (document.getElementsByName('PartnerType')[0].value == "Distributor Partner"){
		var RegRB = ['Selecione','Distribuidor Avaya'];// creating array with all the options to populate dropdown option label in case of Partner Type = Avaya Distributor
		var RegRBO = ['','Avaya Distributor'];// creating array with all the options to populate dropdown value for all the options in case of Partner Type = Avaya Distributor
	} else if (document.getElementsByName('PartnerType')[0].value == "Sales Agent"){
		var RegRB = ['Selecione','Distribuidor Avaya','Representante da Avaya','Revendedor Autorizado Avaya','Nenhum'];// creating array with all the options to populate dropdown option label in case of Partner Type = Sales Agent
		var RegRBO = ['','Avaya Distributor','Avaya Representative','Avaya Authorized Reseller','None'];// creating array with all the options to populate dropdown value for all the options in case of Partner Type = Sales Agent
	} else {
		var RegRB = ['Selecione'];// creating array with all the options to populate dropdown option label in case of Partner Type = Sales Agent
		var RegRBO = [''];// creating array with all the options to populate dropdown value for all the options in case of Partner Type = Sales Agent
	}
	vrefferedby.options.length = 0;
	createOption(vrefferedby, "Selecione", "");
	for (i = 1; i < RegRB.length; i++) {
		createOption(vrefferedby, RegRB[i], RegRBO[i]);
	} 
}
//var element = document.getElementById('id');

//function call on change in Referred by field option
//and to create and show Distributor Name drop down or to show Avaya Repersentative text field
refferedby.onchange = function() {
	if (document.getElementsByName('ReferredBy')[0].value == "Avaya Distributor"){
		document.getElementById("formElement16").style.display = "block";
		var field16 = new LiveValidation( "field16", { validMessage: "", onlyOnBlur: true });
		field16.enable();
		field16.add( Validate.Presence, { failureMessage: "This field is required" } );		
		//if (document.getElementsByName("Theater")[0].value == "EMEA" || document.getElementsByName("Theater")[0].value == "APAC"){
			vDistributorName.options.length = 0;
			if (document.getElementsByName("country")[0].value=="Afghanistan"){
				var DistiList1 = ['Selecione','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED'];
				var DistiList10 = ['','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED'];
			} else if (document.getElementsByName("country")[0].value=="Albania"){
				var DistiList1 = ['Selecione','Westcon Group European Operations','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.','Ingram Micro doo','Westcon Convergence UK'];
				var DistiList10 = ['','Westcon Group European Operations','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.','Ingram Micro doo','Westcon Convergence UK'];
			} else if (document.getElementsByName("country")[0].value=="Algeria"){
				var DistiList1 = ['Selecione','First Video Communications FZ LLC','ITANCIA (WAS NETACOM)','REDINGTON GULF','WESTCON MIDDLE EAST LIMITED','ITANCIA Africa','International Distributors (Interdist) offshore SAL','Westcon Africa Morocco'];
				var DistiList10 = ['','First Video Communications FZ LLC','ITANCIA (WAS NETACOM)','REDINGTON GULF','WESTCON MIDDLE EAST LIMITED','ITANCIA Africa','International Distributors (Interdist) offshore SAL','Westcon Africa Morocco'];
			} else if (document.getElementsByName("country")[0].value=="Angola"){
				var DistiList1 = ['Selecione','First Video Communications FZ LLC','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
				var DistiList10 = ['','First Video Communications FZ LLC','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
			} else if (document.getElementsByName("country")[0].value=="Anguilla"){
				var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
				var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
			} else if (document.getElementsByName("country")[0].value=="Antarctica"){
				var DistiList1 = ['Selecione','AVAYA A1S DEMO  Antartic Distributor 1','AVAYA A1S DEMO Antartic Distributor 2tributor 2'];
				var DistiList10 = ['','AVAYA A1S DEMO  Antartic Distributor 1','AVAYA A1S DEMO Antartic Distributor 2tributor 2'];
			}  else if (document.getElementsByName("country")[0].value=="Antigua and Barbuda"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Argentina"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','Anixter Argentina S.A.','AVT Inc., Caribbean & Cen America','Avnet Inc., Southern Cone Region','Redes y Distribucion S.A.','Dacas SA'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','Anixter Argentina S.A.','AVT Inc., Caribbean & Cen America','Avnet Inc., Southern Cone Region','Redes y Distribucion S.A.','Dacas SA'];
} else if (document.getElementsByName("country")[0].value=="Armenia"){
	var DistiList1 = ['Selecione','MARVEL COMPUTER SOLUTIONS LTD','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA'];
	var DistiList10 = ['','MARVEL COMPUTER SOLUTIONS LTD','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA'];
} else if (document.getElementsByName("country")[0].value=="Aruba"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Australia"){
	var DistiList1 = ['Selecione','Arrow ECS Australia Pty Limited (formerly known as Distribution Central Pty Limited)','CommPlus Australia','Westcon Group Pty Limited','VoIP Distribution Pty Ltd trading as VExpress'];
	var DistiList10 = ['','Arrow ECS Australia Pty Limited (formerly known as Distribution Central Pty Limited)','CommPlus Australia','Westcon Group Pty Limited','VoIP Distribution Pty Ltd trading as VExpress'];
} else if (document.getElementsByName("country")[0].value=="Austria"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','ScanSource Communications GmbH Germany','AVAD GMBH','Westcon Convergence UK','ScanSource UK','Westcon Convergence Germany','Scansource Europe S.P.R.L.','ScanSource Communications Austria','Westcon Group Austria'];
	var DistiList10 = ['','Westcon Group European Operations','ScanSource Communications GmbH Germany','AVAD GMBH','Westcon Convergence UK','ScanSource UK','Westcon Convergence Germany','Scansource Europe S.P.R.L.','ScanSource Communications Austria','Westcon Group Austria'];
}else if (document.getElementsByName("country")[0].value=="Azerbaijan"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','MARVEL COMPUTER SOLUTIONS LTD','NETEKS ILETISIM URUNLERI DAGITIM ANONIM SIRKETI','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA'];
	var DistiList10 = ['','Westcon Group European Operations','MARVEL COMPUTER SOLUTIONS LTD','NETEKS ILETISIM URUNLERI DAGITIM ANONIM SIRKETI','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA'];
} else if (document.getElementsByName("country")[0].value=="Bahamas"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Bahrain"){
	var DistiList1 = ['Selecione','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED'];
	var DistiList10 = ['','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED'];
} else if (document.getElementsByName("country")[0].value=="Bangladesh"){
	var DistiList1 = ['Selecione','Redington India Limited','Brightstar Telecommunications India Limited'];
	var DistiList10 = ['','Redington India Limited','Brightstar Telecommunications India Limited'];
} else if (document.getElementsByName("country")[0].value=="Barbados"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','Anixter Caribbean Region','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','Anixter Caribbean Region','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Belarus"){
	var DistiList1 = ['Selecione','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA','OCS Distribution Deutschland AG','Elcore Distribution AG'];
	var DistiList10 = ['','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA','OCS Distribution Deutschland AG','Elcore Distribution AG'];
} else if (document.getElementsByName("country")[0].value=="Belgium"){
	var DistiList1 = ['Selecione','Itancia Belgium','Westcon Group European Operations','Westcon Convergence Belgium','Westcon Convergence UK','Scansource Europe S.P.R.L.'];
	var DistiList10 = ['','Itancia Belgium','Westcon Group European Operations','Westcon Convergence Belgium','Westcon Convergence UK','Scansource Europe S.P.R.L.'];
} else if (document.getElementsByName("country")[0].value=="Belize"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Benin"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
	var DistiList10 = ['','First Video Communications FZ LLC','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
} else if (document.getElementsByName("country")[0].value=="Bermuda"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Bhutan"){
	var DistiList1 = ['Selecione','Redington India Limited','Brightstar Telecommunications India Limited'];
	var DistiList10 = ['','Redington India Limited','Brightstar Telecommunications India Limited'];
} else if (document.getElementsByName("country")[0].value=="Bolivia"){
	var DistiList1 = ['Selecione','Anixter Southern Cone Region:CH,UY,PY,BO','AVT Inc., Caribbean & Cen America','Avnet Inc., Southern Cone Region','Netpoint International, Inc.','Importadora y Comercializadora Network1 International (Chile) Limitada','DACAS Corp','DITRI DACAS TECNOLOGY GROUP BOLIVA S.A.','Electrica A-B SA de CV'];
	var DistiList10 = ['','Anixter Southern Cone Region:CH,UY,PY,BO','AVT Inc., Caribbean & Cen America','Avnet Inc., Southern Cone Region','Netpoint International, Inc.','Importadora y Comercializadora Network1 International (Chile) Limitada','DACAS Corp','DITRI DACAS TECNOLOGY GROUP BOLIVA S.A.','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="BONAIRE, SAINT EUSTATIUS AND SABA"){
	var DistiList1 = ['Selecione','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Bosnia-Herzegovina"){
	var DistiList1 = ['Selecione','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.','Ingram Micro doo'];
	var DistiList10 = ['','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.','Ingram Micro doo'];
} else if (document.getElementsByName("country")[0].value=="Botswana"){
	var DistiList1 = ['Selecione','Westcon Comztek (Pty) Limited','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
	var DistiList10 = ['','Westcon Comztek (Pty) Limited','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
} else if (document.getElementsByName("country")[0].value=="Brazil"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','ANIXTER DO BRASIL LTDA.','AVT Inc., Caribbean & Cen America','OLIBRAS TELECOMUNICAÇÕES LTDA','SCANSOURCE BRASIL DISTRIBUIDORA DE TECNOLOGIAS LTDA','WESTCON BRASIL'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','ANIXTER DO BRASIL LTDA.','AVT Inc., Caribbean & Cen America','OLIBRAS TELECOMUNICAÇÕES LTDA','SCANSOURCE BRASIL DISTRIBUIDORA DE TECNOLOGIAS LTDA','WESTCON BRASIL'];
} else if (document.getElementsByName("country")[0].value=="Bulgaria"){
	var DistiList1 = ['Selecione','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.'];
	var DistiList10 = ['','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.'];
} else if (document.getElementsByName("country")[0].value=="Burkina Faso"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Burundi"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
} else if (document.getElementsByName("country")[0].value=="Cambodia"){
	var DistiList1 = ['Selecione','Elite Technology JSC.'];
	var DistiList10 = ['','Elite Technology JSC.'];
} else if (document.getElementsByName("country")[0].value=="Cameroon"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','First Video Communications FZ LLC','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Canada"){
	var DistiList1 = ['Selecione','WESTCON CANADA','Ingram Micro Canada Inc-Nortel','Tech Data Canada Corporation'];
	var DistiList10 = ['','WESTCON CANADA','Ingram Micro Canada Inc-Nortel','Tech Data Canada Corporation'];
} else if (document.getElementsByName("country")[0].value=="Cape Verde"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
} else if (document.getElementsByName("country")[0].value=="Cayman Islands"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Central African Republic"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
} else if (document.getElementsByName("country")[0].value=="Chad"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Chile"){
	var DistiList1 = ['Selecione','Anixter Southern Cone Region:CH,UY,PY,BO','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','Avnet Inc., Southern Cone Region','Netpoint International, Inc.','Importadora y Comercializadora Network1 International (Chile) Limitada','DACAS CHILE SPA'];
	var DistiList10 = ['','Anixter Southern Cone Region:CH,UY,PY,BO','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','Avnet Inc., Southern Cone Region','Netpoint International, Inc.','Importadora y Comercializadora Network1 International (Chile) Limitada','DACAS CHILE SPA'];
} else if (document.getElementsByName("country")[0].value=="China"){
	var DistiList1 = ['Selecione','DIGITAL CHINA TECHNOLOGY LIMITED','Sichuan Changhong IT ermission Products Co., Ltd','Digital China (China) Limited','Sichuan Changhong IT ermission Avaya USD Stock','Unisplendour Xiaotong Tech. Co.'];
	var DistiList10 = ['','DIGITAL CHINA TECHNOLOGY LIMITED','Sichuan Changhong IT ermission Products Co., Ltd','Digital China (China) Limited','Sichuan Changhong IT ermission Avaya USD Stock','Unisplendour Xiaotong Tech. Co.'];
} else if (document.getElementsByName("country")[0].value=="Colombia"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','ANIXTER COLOMBIA S.A.','Avnet Inc., Andean Region','Avnet Northern Cone','AVT Inc., Caribbean & Cen America','DACAS Colombia','Netpoint International, Inc.','Network1 International Colombia S.A.S.','Tech Data AS Colombia S.A.S.'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','ANIXTER COLOMBIA S.A.','Avnet Inc., Andean Region','Avnet Northern Cone','AVT Inc., Caribbean & Cen America','DACAS Colombia','Netpoint International, Inc.','Network1 International Colombia S.A.S.','Tech Data AS Colombia S.A.S.'];
} else if (document.getElementsByName("country")[0].value=="Comoros"){
	var DistiList1 = ['Selecione','Westcon Africa FZCo, UNITED KINGDOM'];
	var DistiList10 = ['','Westcon Africa FZCo, UNITED KINGDOM'];
} else if (document.getElementsByName("country")[0].value=="Congo"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Congo, The Democratic Republic Of The"){
	var DistiList1 = ['Selecione','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
	var DistiList10 = ['','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
} else if (document.getElementsByName("country")[0].value=="Costa Rica"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','Anixter Central America Region','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','Anixter Central America Region','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Ivory Coast (Cote D'Ivoire)"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','First Video Communications FZ LLC','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Croatia"){
	var DistiList1 = ['Selecione','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.','RRC BT POSLOVNE TELEKOMUNIKACIJE d.o.o.'];
	var DistiList10 = ['','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.','RRC BT POSLOVNE TELEKOMUNIKACIJE d.o.o.'];
} else if (document.getElementsByName("country")[0].value=="Curaçao"){
	var DistiList1 = ['Selecione','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Cyprus"){
	var DistiList1 = ['Selecione','NETEKS ILETISIM URUNLERI DAGITIM ANONIM SIRKETI','TOPTEL TELEKOMUNIKASYON LTD','Westcon Convergence UK','Westcon Group European Operations','Westnet Distribution S.A. Greece'];
	var DistiList10 = ['','NETEKS ILETISIM URUNLERI DAGITIM ANONIM SIRKETI','TOPTEL TELEKOMUNIKASYON LTD','Westcon Convergence UK','Westcon Group European Operations','Westnet Distribution S.A. Greece'];
} else if (document.getElementsByName("country")[0].value=="Czech Republic"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','RRC-CZ S.R.O.','BD ENTERPRISE NETWORKING LTD.','Westcon Group European Operations Limited, Czech Republic'];
	var DistiList10 = ['','Westcon Group European Operations','RRC-CZ S.R.O.','BD ENTERPRISE NETWORKING LTD.','Westcon Group European Operations Limited, Czech Republic'];
} else if (document.getElementsByName("country")[0].value=="Denmark"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','Westcon Convergence Nordics','Azlan Scandinavia','Scansource Europe S.P.R.L.'];
	var DistiList10 = ['','Westcon Group European Operations','Westcon Convergence Nordics','Azlan Scandinavia','Scansource Europe S.P.R.L.'];
} else if (document.getElementsByName("country")[0].value=="Djibouti"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
} else if (document.getElementsByName("country")[0].value=="Dominica"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Dominican Republic"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','ANIXTER DOMINICAN REPUBLIC','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','ANIXTER DOMINICAN REPUBLIC','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Ecuador"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','Anixter Colombia S.A. Suc. Ecuador','AVT Inc., Caribbean & Cen America','Avnet Inc., Andean Region','Avnet Northern Cone','Netpoint International, Inc.','Network1 International Colombia S.A.S.','DACAS Corp'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','Anixter Colombia S.A. Suc. Ecuador','AVT Inc., Caribbean & Cen America','Avnet Inc., Andean Region','Avnet Northern Cone','Netpoint International, Inc.','Network1 International Colombia S.A.S.','DACAS Corp'];
} else if (document.getElementsByName("country")[0].value=="Egypt"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','APTEC DISTRIBUTION','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED','Mantrac Distribution','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','First Video Communications FZ LLC','APTEC DISTRIBUTION','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED','Mantrac Distribution','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="El Salvador"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Equatorial Guinea"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
	var DistiList10 = ['','First Video Communications FZ LLC','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
} else if (document.getElementsByName("country")[0].value=="Eritrea"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
} else if (document.getElementsByName("country")[0].value=="Estonia"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','ScanSource Communications GmbH Germany','Westcon Convergence Nordics','Scansource Europe S.P.R.L.'];
	var DistiList10 = ['','Westcon Group European Operations','ScanSource Communications GmbH Germany','Westcon Convergence Nordics','Scansource Europe S.P.R.L.'];
} else if (document.getElementsByName("country")[0].value=="Ethiopia"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','First Video Communications FZ LLC','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Fiji"){
	var DistiList1 = ['Selecione','Arrow ECS Australia Pty Limited (formerly known as Distribution Central Pty Limited)'];
	var DistiList10 = ['','Arrow ECS Australia Pty Limited (formerly known as Distribution Central Pty Limited)'];
} else if (document.getElementsByName("country")[0].value=="Finland"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','ScanSource Communications GmbH Germany','AZLAN LOGISTICS LTD','Westcon Convergence UK','Westcon Convergence Nordics','Azlan Finland Oy - Finland*','Westcon Convergence Finland','Scansource Europe S.P.R.L.'];
	var DistiList10 = ['','Westcon Group European Operations','ScanSource Communications GmbH Germany','AZLAN LOGISTICS LTD','Westcon Convergence UK','Westcon Convergence Nordics','Azlan Finland Oy - Finland*','Westcon Convergence Finland','Scansource Europe S.P.R.L.'];
} else if (document.getElementsByName("country")[0].value=="France"){
	var DistiList1 = ['Selecione','Westcon Convergence France','Westcon Group European Operations','ScanSource Communications GmbH Germany','ITANCIA (WAS NETACOM)','Westcon Convergence UK','ScanSource UK','Scansource Europe S.P.R.L.','ScanSource France'];
	var DistiList10 = ['','Westcon Convergence France','Westcon Group European Operations','ScanSource Communications GmbH Germany','ITANCIA (WAS NETACOM)','Westcon Convergence UK','ScanSource UK','Scansource Europe S.P.R.L.','ScanSource France'];
} else if (document.getElementsByName("country")[0].value=="French Guiana"){
	var DistiList1 = ['Selecione','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Gabon"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Gambia"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Georgia"){
	var DistiList1 = ['Selecione','MARVEL COMPUTER SOLUTIONS LTD','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA'];
	var DistiList10 = ['','MARVEL COMPUTER SOLUTIONS LTD','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA'];
} else if (document.getElementsByName("country")[0].value=="Germany"){
	var DistiList1 = ['Selecione','KOMSA Kommunikation Sachsen AG','Westcon Group European Operations','ScanSource Communications GmbH Germany','AVAD GMBH','AZLAN LOGISTICS LTD','TECH DATA GMBH & CO. OHG','ScanSource UK','Westcon Convergence Germany','Ingram Micro Distribution GmbH','Scansource Europe S.P.R.L.'];
	var DistiList10 = ['','KOMSA Kommunikation Sachsen AG','Westcon Group European Operations','ScanSource Communications GmbH Germany','AVAD GMBH','AZLAN LOGISTICS LTD','TECH DATA GMBH & CO. OHG','ScanSource UK','Westcon Convergence Germany','Ingram Micro Distribution GmbH','Scansource Europe S.P.R.L.'];
} else if (document.getElementsByName("country")[0].value=="Ghana"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','First Video Communications FZ LLC','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Gibraltar"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','AZLAN LOGISTICS LTD','TECH DATA SPAIN','Westcon Convergence UK','ScanSource UK','Scansource Europe S.P.R.L.','Westcon Convergence Spain'];
	var DistiList10 = ['','Westcon Group European Operations','AZLAN LOGISTICS LTD','TECH DATA SPAIN','Westcon Convergence UK','ScanSource UK','Scansource Europe S.P.R.L.','Westcon Convergence Spain'];
} else if (document.getElementsByName("country")[0].value=="Greece"){
	var DistiList1 = ['Selecione','Westnet Distribution S.A.','Westcon Group European Operations','Westcon Convergence UK'];
	var DistiList10 = ['','Westnet Distribution S.A.','Westcon Group European Operations','Westcon Convergence UK'];
} else if (document.getElementsByName("country")[0].value=="Grenada"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Guadeloupe"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Guam"){
	var DistiList1 = ['Selecione','Arrow ECS Australia Pty Limited (formerly known as Distribution Central Pty Limited)'];
	var DistiList10 = ['','Arrow ECS Australia Pty Limited (formerly known as Distribution Central Pty Limited)'];
} else if (document.getElementsByName("country")[0].value=="Guatemala"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Guernsey"){
	var DistiList1 = ['Selecione','Westcon Convergence UK'];
	var DistiList10 = ['','Westcon Convergence UK'];
} else if (document.getElementsByName("country")[0].value=="Guinea"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
} else if (document.getElementsByName("country")[0].value=="Guinea-Bissau"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
} else if (document.getElementsByName("country")[0].value=="Guyana"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Haiti"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Honduras"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Hong Kong"){
	var DistiList1 = ['Selecione','ChinaComm International Ltd','COL Limited','Sen Spirit Technology','SiS International Limited','Synnex Technology International (HK) Ltd.'];
	var DistiList10 = ['','ChinaComm International Ltd','COL Limited','Sen Spirit Technology','SiS International Limited','Synnex Technology International (HK) Ltd.'];
} else if (document.getElementsByName("country")[0].value=="Hungary"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','Ingram Micro Magyarország Kft','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.'];
	var DistiList10 = ['','Westcon Group European Operations','Ingram Micro Magyarország Kft','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.'];
} else if (document.getElementsByName("country")[0].value=="Iceland"){
	var DistiList1 = ['Selecione','Westcon Convergence Nordics','Scansource Europe S.P.R.L.'];
	var DistiList10 = ['','Westcon Convergence Nordics','Scansource Europe S.P.R.L.'];
} else if (document.getElementsByName("country")[0].value=="India"){
	var DistiList1 = ['Selecione','Brightstar Telecommunications India Limited','Redington India Limited','Savex Technologies Private Limited'];
	var DistiList10 = ['','Brightstar Telecommunications India Limited','Redington India Limited','Savex Technologies Private Limited'];
} else if (document.getElementsByName("country")[0].value=="Indonesia"){
	var DistiList1 = ['Selecione','Westcon Group Pte. Ltd. (Indonesia)','Synnex Metrodata Indonesia','ACA Pacific Technology (S) Pte Ltd','PT ACA Pacific Technology'];
	var DistiList10 = ['','Westcon Group Pte. Ltd. (Indonesia)','Synnex Metrodata Indonesia','ACA Pacific Technology (S) Pte Ltd','PT ACA Pacific Technology'];
} else if (document.getElementsByName("country")[0].value=="Iraq"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','AZLAN LOGISTICS LTD','Westcon Convergence UK','ScanSource UK','Scansource Europe S.P.R.L.'];
	var DistiList10 = ['','Westcon Group European Operations','AZLAN LOGISTICS LTD','Westcon Convergence UK','ScanSource UK','Scansource Europe S.P.R.L.'];
} else if (document.getElementsByName("country")[0].value=="Ireland"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
} else if (document.getElementsByName("country")[0].value=="Israel"){
	var DistiList1 = ['Selecione','ABnet Communications LTD'];
	var DistiList10 = ['','ABnet Communications LTD'];
} else if (document.getElementsByName("country")[0].value=="Italy"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','FIORE S.R.L.','ITANCIA (WAS NETACOM)','AVAD GMBH','Westcon Convergence Italy','Asit S.p.a','ITANCIA Srl'];
	var DistiList10 = ['','Westcon Group European Operations','FIORE S.R.L.','ITANCIA (WAS NETACOM)','AVAD GMBH','Westcon Convergence Italy','Asit S.p.a','ITANCIA Srl'];
} else if (document.getElementsByName("country")[0].value=="Jamaica"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','Anixter Caribbean Region','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','Anixter Caribbean Region','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Japan"){
	var DistiList1 = ['Selecione','SYNNEX Infotec'];
	var DistiList10 = ['','SYNNEX Infotec'];
} else if (document.getElementsByName("country")[0].value=="Jersey"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','Westcon Convergence UK','ScanSource UK','Scansource Europe S.P.R.L.','AZLAN UK'];
	var DistiList10 = ['','Westcon Group European Operations','Westcon Convergence UK','ScanSource UK','Scansource Europe S.P.R.L.','AZLAN UK'];
} else if (document.getElementsByName("country")[0].value=="Jordan"){
	var DistiList1 = ['Selecione','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED'];
	var DistiList10 = ['','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED'];
} else if (document.getElementsByName("country")[0].value=="Kazakhstan"){
	var DistiList1 = ['Selecione','MARVEL COMPUTER SOLUTIONS LTD','BD ENTERPRISE NETWORKING LTD.','RRC KAZAKHSTAN LLP','RRC RUSSIA','COMPTEK INTERNATIONAL OVERSEAS'];
	var DistiList10 = ['','MARVEL COMPUTER SOLUTIONS LTD','BD ENTERPRISE NETWORKING LTD.','RRC KAZAKHSTAN LLP','RRC RUSSIA','COMPTEK INTERNATIONAL OVERSEAS'];
} else if (document.getElementsByName("country")[0].value=="Kenya"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','First Video Communications FZ LLC','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Korea Republic of"){
	var DistiList1 = ['Selecione','JCS Co., LTD','PC Direct Inc.','SeAH Networks Co., Ltd.'];
	var DistiList10 = ['','JCS Co., LTD','PC Direct Inc.','SeAH Networks Co., Ltd.'];
} else if (document.getElementsByName("country")[0].value=="Kuwait"){
	var DistiList1 = ['Selecione','APTEC DISTRIBUTION','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED'];
	var DistiList10 = ['','APTEC DISTRIBUTION','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED'];
} else if (document.getElementsByName("country")[0].value=="Kyrgyzstan"){
	var DistiList1 = ['Selecione','MARVEL COMPUTER SOLUTIONS LTD','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA'];
	var DistiList10 = ['','MARVEL COMPUTER SOLUTIONS LTD','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA'];
} else if (document.getElementsByName("country")[0].value=="Lao People's Democratic Republic"){
	var DistiList1 = ['Selecione','Elite Technology JSC.'];
	var DistiList10 = ['','Elite Technology JSC.'];
} else if (document.getElementsByName("country")[0].value=="Latvia"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','ScanSource Communications GmbH Germany','Westcon Convergence Nordics','Scansource Europe S.P.R.L.'];
	var DistiList10 = ['','Westcon Group European Operations','ScanSource Communications GmbH Germany','Westcon Convergence Nordics','Scansource Europe S.P.R.L.'];
} else if (document.getElementsByName("country")[0].value=="Lebanon"){
	var DistiList1 = ['Selecione','Almasa IT Distribution FZCO','Ingram Micro Levant s.a.l','International Distributors (Interdist) offshore SAL','WESTCON MIDDLE EAST LIMITED'];
	var DistiList10 = ['','Almasa IT Distribution FZCO','Ingram Micro Levant s.a.l','International Distributors (Interdist) offshore SAL','WESTCON MIDDLE EAST LIMITED'];
} else if (document.getElementsByName("country")[0].value=="Lesotho"){
	var DistiList1 = ['Selecione','Westcon Comztek (Pty) Limited','Epsidon Technology (Pty) Ltd'];
	var DistiList10 = ['','Westcon Comztek (Pty) Limited','Epsidon Technology (Pty) Ltd'];
} else if (document.getElementsByName("country")[0].value=="Liberia"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Libya"){
	var DistiList1 = ['Selecione','APTEC DISTRIBUTION','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED','Mantrac Distribution','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','APTEC DISTRIBUTION','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED','Mantrac Distribution','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Liechtenstein"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','AVAD GMBH','ScanSource Communications Schweiz','Westcon Convergence Germany','Scansource Europe S.P.R.L.','WGEO Switzerland GmbH'];
	var DistiList10 = ['','Westcon Group European Operations','AVAD GMBH','ScanSource Communications Schweiz','Westcon Convergence Germany','Scansource Europe S.P.R.L.','WGEO Switzerland GmbH'];
} else if (document.getElementsByName("country")[0].value=="Lithuania"){
	var DistiList1 = ['Selecione','ScanSource Communications GmbH Germany','Westcon Convergence Nordics','Scansource Europe S.P.R.L.'];
	var DistiList10 = ['','ScanSource Communications GmbH Germany','Westcon Convergence Nordics','Scansource Europe S.P.R.L.'];
} else if (document.getElementsByName("country")[0].value=="Luxembourg"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','Westcon Convergence Belgium','Scansource Europe S.P.R.L.'];
	var DistiList10 = ['','Westcon Group European Operations','Westcon Convergence Belgium','Scansource Europe S.P.R.L.'];
} else if (document.getElementsByName("country")[0].value=="Macau"){
	var DistiList1 = ['Selecione','ChinaComm International Ltd','Synnex Technology International (HK) Ltd.','SiS International Limited','COL Limited'];
	var DistiList10 = ['','ChinaComm International Ltd','Synnex Technology International (HK) Ltd.','SiS International Limited','COL Limited'];
} else if (document.getElementsByName("country")[0].value=="Macedonia"){
	var DistiList1 = ['Selecione','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.','Ingram Micro doo'];
	var DistiList10 = ['','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.','Ingram Micro doo'];
} else if (document.getElementsByName("country")[0].value=="Madagascar"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
	var DistiList10 = ['','First Video Communications FZ LLC','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
} else if (document.getElementsByName("country")[0].value=="Malawi"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','Westcon Comztek (Pty) Limited','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
	var DistiList10 = ['','First Video Communications FZ LLC','Westcon Comztek (Pty) Limited','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
} else if (document.getElementsByName("country")[0].value=="Malaysia"){
	var DistiList1 = ['Selecione','Vnetwork System Sdn Bhd','Digital Paper Sdn Bhd','Westcon Solutions (M) Sdn Bhd'];
	var DistiList10 = ['','Vnetwork System Sdn Bhd','Digital Paper Sdn Bhd','Westcon Solutions (M) Sdn Bhd'];
} else if (document.getElementsByName("country")[0].value=="Maldives"){
	var DistiList1 = ['Selecione','Redington India Limited','Brightstar Telecommunications India Limited','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','Redington India Limited','Brightstar Telecommunications India Limited','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Mali"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
	var DistiList10 = ['','First Video Communications FZ LLC','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
} else if (document.getElementsByName("country")[0].value=="Malta"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','Westcon Convergence UK'];
	var DistiList10 = ['','Westcon Group European Operations','Westcon Convergence UK'];
} else if (document.getElementsByName("country")[0].value=="Martinique"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','DACAS Corp'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','DACAS Corp'];
} else if (document.getElementsByName("country")[0].value=="Mauritania"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
} else if (document.getElementsByName("country")[0].value=="Mauritius"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','Epsidon Technology (Pty) Ltd','Westcon Africa FZCo. Mauritius'];
	var DistiList10 = ['','First Video Communications FZ LLC','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','Epsidon Technology (Pty) Ltd','Westcon Africa FZCo. Mauritius'];
} else if (document.getElementsByName("country")[0].value=="Mexico"){
	var DistiList1 = ['Selecione','ANIXTER DE MEXICO, SA DE CV','Centro de Conectividad, S.A. de C.V.','Electrica A-B SA de CV','Expertise Tech & Training S.A. de C.V.','TD Advanced Solutions México, S. de R.L. de C.V.'];
	var DistiList10 = ['','ANIXTER DE MEXICO, SA DE CV','Centro de Conectividad, S.A. de C.V.','Electrica A-B SA de CV','Expertise Tech & Training S.A. de C.V.','TD Advanced Solutions México, S. de R.L. de C.V.'];
} else if (document.getElementsByName("country")[0].value=="Moldova"){
	var DistiList1 = ['Selecione','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA','Elcore Distribution AG'];
	var DistiList10 = ['','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA','Elcore Distribution AG'];
} else if (document.getElementsByName("country")[0].value=="Mongolia"){
	var DistiList1 = ['Selecione','MARVEL COMPUTER SOLUTIONS LTD','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA'];
	var DistiList10 = ['','MARVEL COMPUTER SOLUTIONS LTD','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA'];
} else if (document.getElementsByName("country")[0].value=="Montenegro	"){
	var DistiList1 = ['Selecione','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.','Ingram Micro doo'];
	var DistiList10 = ['','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.','Ingram Micro doo'];
} else if (document.getElementsByName("country")[0].value=="Montserrat"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp'];
} else if (document.getElementsByName("country")[0].value=="Morocco"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','ITANCIA (WAS NETACOM)','REDINGTON GULF','WESTCON MIDDLE EAST LIMITED','ITANCIA Africa','International Distributors (Interdist) offshore SAL','Westcon Africa Morocco'];
	var DistiList10 = ['','First Video Communications FZ LLC','ITANCIA (WAS NETACOM)','REDINGTON GULF','WESTCON MIDDLE EAST LIMITED','ITANCIA Africa','International Distributors (Interdist) offshore SAL','Westcon Africa Morocco'];
} else if (document.getElementsByName("country")[0].value=="Mozambique"){
	var DistiList1 = ['Selecione','Westcon Comztek (Pty) Limited','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
	var DistiList10 = ['','Westcon Comztek (Pty) Limited','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
} else if (document.getElementsByName("country")[0].value=="Myanmar"){
	var DistiList1 = ['Selecione','Elite Technology JSC.'];
	var DistiList10 = ['','Elite Technology JSC.'];
} else if (document.getElementsByName("country")[0].value=="Namibia"){
	var DistiList1 = ['Selecione','Westcon Comztek (Pty) Limited','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
	var DistiList10 = ['','Westcon Comztek (Pty) Limited','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
} else if (document.getElementsByName("country")[0].value=="Netherlands"){
	var DistiList1 = ['Selecione','Westcon Convergence Netherlands','Westcon Group European Operations','Westcon Convergence Belgium','Westcon Convergence UK','Scansource Europe S.P.R.L.'];
	var DistiList10 = ['','Westcon Convergence Netherlands','Westcon Group European Operations','Westcon Convergence Belgium','Westcon Convergence UK','Scansource Europe S.P.R.L.'];
} else if (document.getElementsByName("country")[0].value=="Netherlands Antilles"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="New Caledonia"){
	var DistiList1 = ['Selecione','Arrow ECS Australia Pty Limited (formerly known as Distribution Central Pty Limited)'];
	var DistiList10 = ['','Arrow ECS Australia Pty Limited (formerly known as Distribution Central Pty Limited)'];
} else if (document.getElementsByName("country")[0].value=="New Zealand"){
	var DistiList1 = ['Selecione','Arrow ECS Australia Pty Limited (formerly known as Distribution Central Pty Limited)','Westcon Group Limited (NZ)','Arrow ECS New Zealand Limited (formerly known as Distribution Central Limited)'];
	var DistiList10 = ['','Arrow ECS Australia Pty Limited (formerly known as Distribution Central Pty Limited)','Westcon Group Limited (NZ)','Arrow ECS New Zealand Limited (formerly known as Distribution Central Limited)'];
} else if (document.getElementsByName("country")[0].value=="Nicaragua"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp'];
} else if (document.getElementsByName("country")[0].value=="Niger"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Nigeria"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','First Video Communications FZ LLC','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Norway"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','AZLAN LOGISTICS LTD','Westcon Convergence Nordics','Azlan Norway*','Scansource Europe S.P.R.L.'];
	var DistiList10 = ['','Westcon Group European Operations','AZLAN LOGISTICS LTD','Westcon Convergence Nordics','Azlan Norway*','Scansource Europe S.P.R.L.'];
} else if (document.getElementsByName("country")[0].value=="Oman"){
	var DistiList1 = ['Selecione','APTEC DISTRIBUTION','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED'];
	var DistiList10 = ['','APTEC DISTRIBUTION','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED'];
} else if (document.getElementsByName("country")[0].value=="Pakistan"){
	var DistiList1 = ['Selecione','APTEC DISTRIBUTION','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED','Awan Distribution Pvt Ltd'];
	var DistiList10 = ['','APTEC DISTRIBUTION','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED','Awan Distribution Pvt Ltd'];
} else if (document.getElementsByName("country")[0].value=="Panama"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','ANIXTER PANAMA','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','ANIXTER PANAMA','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp'];
} else if (document.getElementsByName("country")[0].value=="Paraguay"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','Anixter Argentina S.A.','AVT Inc., Caribbean & Cen America','Avnet Inc., Southern Cone Region','DACAS PARAGUAY SA'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','Anixter Argentina S.A.','AVT Inc., Caribbean & Cen America','Avnet Inc., Southern Cone Region','DACAS PARAGUAY SA'];
} else if (document.getElementsByName("country")[0].value=="Peru"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','ANIXTER PERU','AVT Inc., Caribbean & Cen America','Avnet Inc., Southern Cone Region','NETWORK1 INTERNATIONAL PERU S.A.C.','Netpoint International, Inc.','It Dacas Peru Sac'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','ANIXTER PERU','AVT Inc., Caribbean & Cen America','Avnet Inc., Southern Cone Region','NETWORK1 INTERNATIONAL PERU S.A.C.','Netpoint International, Inc.','It Dacas Peru Sac'];
} else if (document.getElementsByName("country")[0].value=="Philippines"){
	var DistiList1 = ['Selecione','Ardent Networks Inc.','Westcon Group Pte. Ltd. (Philippines)','MSI-ECS (Phils) Inc.'];
	var DistiList10 = ['','Ardent Networks Inc.','Westcon Group Pte. Ltd. (Philippines)','MSI-ECS (Phils) Inc.'];
} else if (document.getElementsByName("country")[0].value=="Poland"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.','Westcon Group European Operations Ltd. Poland'];
	var DistiList10 = ['','Westcon Group European Operations','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.','Westcon Group European Operations Ltd. Poland'];
} else if (document.getElementsByName("country")[0].value=="Portugal"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','ITANCIA (WAS NETACOM)','AZLAN LOGISTICS LTD','TECH DATA SPAIN','Azlan Portugal','Westcon Portugal'];
	var DistiList10 = ['','Westcon Group European Operations','ITANCIA (WAS NETACOM)','AZLAN LOGISTICS LTD','TECH DATA SPAIN','Azlan Portugal','Westcon Portugal'];
} else if (document.getElementsByName("country")[0].value=="Puerto Rico"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','ANIXTER PUERTO RICO, INC','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','ANIXTER PUERTO RICO, INC','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp','Electrica A-B SA de CV'];
} else if (document.getElementsByName("country")[0].value=="Qatar"){
	var DistiList1 = ['Selecione','APTEC DISTRIBUTION','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED'];
	var DistiList10 = ['','APTEC DISTRIBUTION','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED'];
} else if (document.getElementsByName("country")[0].value=="Reunion"){
	var DistiList1 = ['Selecione','Westcon Africa FZCo, UNITED KINGDOM'];
	var DistiList10 = ['','Westcon Africa FZCo, UNITED KINGDOM'];
} else if (document.getElementsByName("country")[0].value=="Romania"){
	var DistiList1 = ['Selecione','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.','RRC Tech Distribution'];
	var DistiList10 = ['','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.','RRC Tech Distribution'];
} else if (document.getElementsByName("country")[0].value=="Russian Federation"){
	var DistiList1 = ['Selecione','MARVEL COMPUTER SOLUTIONS LTD','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA','COMPTEK INTERNATIONAL OVERSEAS','LANMAX / LANDATA','OCS Distribution Deutschland AG'];
	var DistiList10 = ['','MARVEL COMPUTER SOLUTIONS LTD','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA','COMPTEK INTERNATIONAL OVERSEAS','LANMAX / LANDATA','OCS Distribution Deutschland AG'];
} else if (document.getElementsByName("country")[0].value=="Rwanda"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','First Video Communications FZ LLC','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Saint Kitts And Nevis"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp'];
} else if (document.getElementsByName("country")[0].value=="Saint Lucia"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp'];
} else if (document.getElementsByName("country")[0].value=="Saint Martin"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','DACAS Corp'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','DACAS Corp'];
} else if (document.getElementsByName("country")[0].value=="Saint Vincent and the Grenadines"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','DACAS Corp'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','DACAS Corp'];
} else if (document.getElementsByName("country")[0].value=="San Marino"){
	var DistiList1 = ['Selecione','DACAS Corp'];
	var DistiList10 = ['','DACAS Corp'];
} else if (document.getElementsByName("country")[0].value=="Sao Tome and Principe"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
} else if (document.getElementsByName("country")[0].value=="Saudi Arabia"){
	var DistiList1 = ['Selecione','Almasa IT Distribution FZCO','Brightstar Communications Company','Gulf Applications Co.','REDINGTON GULF'];
	var DistiList10 = ['','Almasa IT Distribution FZCO','Brightstar Communications Company','Gulf Applications Co.','REDINGTON GULF'];
} else if (document.getElementsByName("country")[0].value=="Senegal"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Serbia"){
	var DistiList1 = ['Selecione','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.','Ingram Micro doo'];
	var DistiList10 = ['','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.','Ingram Micro doo'];
} else if (document.getElementsByName("country")[0].value=="Seychelles"){
	var DistiList1 = ['Selecione','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
	var DistiList10 = ['','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
} else if (document.getElementsByName("country")[0].value=="Sierra Leone"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','First Video Communications FZ LLC','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Singapore"){
	var DistiList1 = ['Selecione','ACA Pacific Technology (S) Pte Ltd','Savex Singapore (Pte.) Limited','Westcon Group Pte. Ltd. (Singapore)'];
	var DistiList10 = ['','ACA Pacific Technology (S) Pte Ltd','Savex Singapore (Pte.) Limited','Westcon Group Pte. Ltd. (Singapore)'];
} else if (document.getElementsByName("country")[0].value=="Sint Maarten (Dutch Part)"){
	var DistiList1 = ['Selecione','DACAS Corp'];
	var DistiList10 = ['','DACAS Corp'];
} else if (document.getElementsByName("country")[0].value=="Slovakia"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','BD ENTERPRISE NETWORKING LTD.','Westcon Group European Operations Limited, Czech Republic'];
	var DistiList10 = ['','Westcon Group European Operations','BD ENTERPRISE NETWORKING LTD.','Westcon Group European Operations Limited, Czech Republic'];
} else if (document.getElementsByName("country")[0].value=="Slovenia"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.','RRC BUSINESS TELECOMMUNICATIONS'];
	var DistiList10 = ['','Westcon Group European Operations','Ingram Micro Sp. z. o. o.','BD ENTERPRISE NETWORKING LTD.','RRC BUSINESS TELECOMMUNICATIONS'];
} else if (document.getElementsByName("country")[0].value=="Somalia"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM'];
} else if (document.getElementsByName("country")[0].value=="South Africa"){
	var DistiList1 = ['Selecione','Westcon Comztek (Pty) Limited','Even Flow Distribution'];
	var DistiList10 = ['','Westcon Comztek (Pty) Limited','Even Flow Distribution'];
} else if (document.getElementsByName("country")[0].value=="Spain"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','ITANCIA (WAS NETACOM)','AZLAN LOGISTICS LTD','TECH DATA SPAIN','Westcon Convergence Spain','Itancia Spain'];
	var DistiList10 = ['','Westcon Group European Operations','ITANCIA (WAS NETACOM)','AZLAN LOGISTICS LTD','TECH DATA SPAIN','Westcon Convergence Spain','Itancia Spain'];
} else if (document.getElementsByName("country")[0].value=="Sri Lanka"){
	var DistiList1 = ['Selecione','Redington India Limited','Brightstar Telecommunications India Limited'];
	var DistiList10 = ['','Redington India Limited','Brightstar Telecommunications India Limited'];
} else if (document.getElementsByName("country")[0].value=="Sudan"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC'];
	var DistiList10 = ['','First Video Communications FZ LLC'];
} else if (document.getElementsByName("country")[0].value=="Suriname"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp'];
} else if (document.getElementsByName("country")[0].value=="Swaziland"){
	var DistiList1 = ['Selecione','Westcon Comztek (Pty) Limited','Epsidon Technology (Pty) Ltd'];
	var DistiList10 = ['','Westcon Comztek (Pty) Limited','Epsidon Technology (Pty) Ltd'];
} else if (document.getElementsByName("country")[0].value=="Sweden"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','Westcon Convergence Nordics','Scansource Europe S.P.R.L.'];
	var DistiList10 = ['','Westcon Group European Operations','Westcon Convergence Nordics','Scansource Europe S.P.R.L.'];
} else if (document.getElementsByName("country")[0].value=="Switzerland"){
	var DistiList1 = ['Selecione','Westcon Convergence France','Westcon Group European Operations','FIORE S.R.L.','ScanSource Communications GmbH Germany','AVAD GMBH','AZLAN LOGISTICS LTD','Westcon Convergence UK','ScanSource UK','ScanSource Communications Schweiz','Westcon Convergence Germany','Azlan AG','Scansource Europe S.P.R.L.','AVAD Switzerland AG','WGEO Switzerland GmbH'];
	var DistiList10 = ['','Westcon Convergence France','Westcon Group European Operations','FIORE S.R.L.','ScanSource Communications GmbH Germany','AVAD GMBH','AZLAN LOGISTICS LTD','Westcon Convergence UK','ScanSource UK','ScanSource Communications Schweiz','Westcon Convergence Germany','Azlan AG','Scansource Europe S.P.R.L.','AVAD Switzerland AG','WGEO Switzerland GmbH'];
} else if (document.getElementsByName("country")[0].value=="Taiwan, ROC"){
	var DistiList1 = ['Selecione','ChinaComm Taiwan Ltd','Kingtel Technology Co., Ltd.'];
	var DistiList10 = ['','ChinaComm Taiwan Ltd','Kingtel Technology Co., Ltd.'];
} else if (document.getElementsByName("country")[0].value=="Tajikistan"){
	var DistiList1 = ['Selecione','MARVEL COMPUTER SOLUTIONS LTD','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA'];
	var DistiList10 = ['','MARVEL COMPUTER SOLUTIONS LTD','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA'];
} else if (document.getElementsByName("country")[0].value=="Tanzania"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','REDINGTON GULF','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
	var DistiList10 = ['','First Video Communications FZ LLC','REDINGTON GULF','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
} else if (document.getElementsByName("country")[0].value=="Thailand"){
	var DistiList1 = ['Selecione','Tech Data Advanced Solutions (Thailand) Limited','Westcon Group Pte. Ltd. (Thailand)','ACA Pacific Technology (S) Pte Ltd','ACA Pacific Group Co., Ltd.'];
	var DistiList10 = ['','Tech Data Advanced Solutions (Thailand) Limited','Westcon Group Pte. Ltd. (Thailand)','ACA Pacific Technology (S) Pte Ltd','ACA Pacific Group Co., Ltd.'];
} else if (document.getElementsByName("country")[0].value=="Nepal"){
	var DistiList1 = ['Selecione','Redington India Limited','Brightstar Telecommunications India Limited'];
	var DistiList10 = ['','Redington India Limited','Brightstar Telecommunications India Limited'];
} else if (document.getElementsByName("country")[0].value=="Togo"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','REDINGTON GULF','ITANCIA Africa','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Trinidad and Tobago"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','Anixter Caribbean Region','NetPoint International','DACAS Corp'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','Anixter Caribbean Region','NetPoint International','DACAS Corp'];
} else if (document.getElementsByName("country")[0].value=="Tunisia"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','ITANCIA (WAS NETACOM)','REDINGTON GULF','WESTCON MIDDLE EAST LIMITED','ITANCIA Africa','International Distributors (Interdist) offshore SAL','Westcon Africa Morocco'];
	var DistiList10 = ['','First Video Communications FZ LLC','ITANCIA (WAS NETACOM)','REDINGTON GULF','WESTCON MIDDLE EAST LIMITED','ITANCIA Africa','International Distributors (Interdist) offshore SAL','Westcon Africa Morocco'];
} else if (document.getElementsByName("country")[0].value=="Turkey"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','TOPTEL TELEKOMUNIKASYON LTD','NETEKS ILETISIM URUNLERI DAGITIM ANONIM SIRKETI','NFS Teknoloji'];
	var DistiList10 = ['','Westcon Group European Operations','TOPTEL TELEKOMUNIKASYON LTD','NETEKS ILETISIM URUNLERI DAGITIM ANONIM SIRKETI','NFS Teknoloji'];
} else if (document.getElementsByName("country")[0].value=="Turkmenistan"){
	var DistiList1 = ['Selecione','MARVEL COMPUTER SOLUTIONS LTD','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA'];
	var DistiList10 = ['','MARVEL COMPUTER SOLUTIONS LTD','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA'];
} else if (document.getElementsByName("country")[0].value=="Turks and Caicos Islands"){
	var DistiList1 = ['Selecione','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp'];
	var DistiList10 = ['','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp'];
} else if (document.getElementsByName("country")[0].value=="Uganda"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
	var DistiList10 = ['','First Video Communications FZ LLC','REDINGTON GULF','Westcon Africa FZCo, UNITED KINGDOM','International Distributors (Interdist) offshore SAL'];
} else if (document.getElementsByName("country")[0].value=="Ukraine"){
	var DistiList1 = ['Selecione','UTTC LLP','BD ENTERPRISE NETWORKING LTD.','RRC UKRAINE','RRC RUSSIA'];

	var DistiList10 = ['','UTTC LLP','BD ENTERPRISE NETWORKING LTD.','RRC UKRAINE','RRC RUSSIA'];
} else if (document.getElementsByName("country")[0].value=="United Arab Emirates"){
	var DistiList1 = ['Selecione','APTEC DISTRIBUTION','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED'];
	var DistiList10 = ['','APTEC DISTRIBUTION','Almasa IT Distribution FZCO','WESTCON MIDDLE EAST LIMITED'];
} else if (document.getElementsByName("country")[0].value=="United Kingdom"){
	var DistiList1 = ['Selecione','Westcon Group European Operations','AZLAN LOGISTICS LTD','Westcon Convergence UK','ScanSource UK','Scansource Europe S.P.R.L.','AZLAN UK'];
	var DistiList10 = ['','Westcon Group European Operations','AZLAN LOGISTICS LTD','Westcon Convergence UK','ScanSource UK','Scansource Europe S.P.R.L.','AZLAN UK'];
} else if (document.getElementsByName("country")[0].value=="United States"){
	var DistiList1 = ['Selecione','Jenne, Inc.','CATALYST','SYNNEX','TeleDynamics','Westcon Group Inc.'];
	var DistiList10 = ['','Jenne, Inc.','CATALYST','SYNNEX','TeleDynamics','Westcon Group Inc.'];
} else if (document.getElementsByName("country")[0].value=="Uruguay"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','Anixter Argentina S.A.','AVT Inc., Caribbean & Cen America','Avnet Inc., Southern Cone Region','ANIXTER DISTRIBUIDOR DE SOLUCIONES EMPRESARIALES E INDUSTRIALES S.A.','Dacas Uruguay S.A.'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','Anixter Argentina S.A.','AVT Inc., Caribbean & Cen America','Avnet Inc., Southern Cone Region','ANIXTER DISTRIBUIDOR DE SOLUCIONES EMPRESARIALES E INDUSTRIALES S.A.','Dacas Uruguay S.A.'];
} else if (document.getElementsByName("country")[0].value=="Uzbekistan"){
	var DistiList1 = ['Selecione','MARVEL COMPUTER SOLUTIONS LTD','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA'];
	var DistiList10 = ['','MARVEL COMPUTER SOLUTIONS LTD','BD ENTERPRISE NETWORKING LTD.','RRC RUSSIA'];
} else if (document.getElementsByName("country")[0].value=="Venezuela"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','Anixter Andean Region:VE,EC','AVT Inc., Caribbean & Cen America','Avnet Inc., Andean Region','Avnet Northern Cone','Netpoint International, Inc.','Avnet Technology Solutions Venezuela C.A','Network1 International Colombia S.A.S.','DACAS Corp','DACAS Venezuela'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','Anixter Andean Region:VE,EC','AVT Inc., Caribbean & Cen America','Avnet Inc., Andean Region','Avnet Northern Cone','Netpoint International, Inc.','Avnet Technology Solutions Venezuela C.A','Network1 International Colombia S.A.S.','DACAS Corp','DACAS Venezuela'];
} else if (document.getElementsByName("country")[0].value=="Vietnam"){
	var DistiList1 = ['Selecione','Westcon Group Pte. Ltd. (Vietnam)','Starview Vietnam Ltd','Starview International Pte Ltd','Elite Technology JSC.'];
	var DistiList10 = ['','Westcon Group Pte. Ltd. (Vietnam)','Starview Vietnam Ltd','Starview International Pte Ltd','Elite Technology JSC.'];
} else if (document.getElementsByName("country")[0].value=="Virgin Islands, British"){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp'];
} else if (document.getElementsByName("country")[0].value=="Virgin Islands, U.S."){
	var DistiList1 = ['Selecione','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp'];
	var DistiList10 = ['','ANIXTER, INC (CALA)','AVT Inc., Caribbean & Cen America','NetPoint International','DACAS Corp'];
} else if (document.getElementsByName("country")[0].value=="Western Sahara"){
	var DistiList1 = ['Selecione','ITANCIA (WAS NETACOM)','ITANCIA Africa'];
	var DistiList10 = ['','ITANCIA (WAS NETACOM)','ITANCIA Africa'];
} else if (document.getElementsByName("country")[0].value=="Yemen"){
	var DistiList1 = ['Selecione','Almasa IT Distribution FZCO','REDINGTON GULF','WESTCON MIDDLE EAST LIMITED'];
	var DistiList10 = ['','Almasa IT Distribution FZCO','REDINGTON GULF','WESTCON MIDDLE EAST LIMITED'];
} else if (document.getElementsByName("country")[0].value=="Zambia"){
	var DistiList1 = ['Selecione','First Video Communications FZ LLC','REDINGTON GULF','Westcon Comztek (Pty) Limited','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
	var DistiList10 = ['','First Video Communications FZ LLC','REDINGTON GULF','Westcon Comztek (Pty) Limited','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
} else if (document.getElementsByName("country")[0].value=="Zimbabwe"){
	var DistiList1 = ['Selecione','Westcon Comztek (Pty) Limited','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
	var DistiList10 = ['','Westcon Comztek (Pty) Limited','International Distributors (Interdist) offshore SAL','Epsidon Technology (Pty) Ltd'];
} else {
				var field16 = new LiveValidation( "field16", { validMessage: "", onlyOnBlur: true });
				field16.disable();
				document.getElementById("formElement16").style.display = "none";
			}
			//		var DistiList1 = ['Selecione','ABnet Communications LTD','ACA Pacific Group Co., Ltd.','ACA Pacific Technology (S) Pte Ltd','Almasa IT Distribution FZCO','APTEC DISTRIBUTION','Ardent Networks Inc.','Arrow ECS Australia Pty Limited (aka Distribution Central Pty Limited)','Arrow ECS New Zealand Limited (aka as Distribution Central Limited)','Asit S.p.a','AVAD GMBH','AVAD Switzerland AG','Azlan AG','Azlan Finland Oy - Finland','AZLAN LOGISTICS LTD','Azlan Norway','Azlan Portugal','Azlan Scandinavia','AZLAN UK','BD ENTERPRISE NETWORKING LTD.','Beetel Teletech Ltd.','BrightStar Communication Company','Cadensworth India Limited','ChinaComm International Ltd','ChinaComm Taiwan Ltd','COMPTEK INTERNATIONAL OVERSEAS','COMPUTERPOINT LTD','DIGITAL CHINA TECHNOLOGY LIMITED','Digital Paper Sdn Bhd','Elcore Distribution AG','Elite Technology JSC.','Epsidon Technology (Pty) Ltd','FIORE S.R.L.','Ingram Micro Distribution GmbH','Ingram Micro doo','Ingram Micro Magyarország Kft','Ingram Micro Sp. z. o. o','International Distributors (Interdist) offshore SAL','ITANCIA (WAS NETACOM)','ITANCIA Africa','ITANCIA Srl','LANMAX / LANDATA','Mantrac Distribution','MARVEL COMPUTER SOLUTIONS LTD','MSI-ECS (Phils) Inc.','NETEKS ILETISIM URUNLERI DAGITIM ANONIM SIRKETI','NFS Teknoloji','OCS Distribution Deutschland AG','PT ACA Pacific Technology','REDINGTON GULF','RRC BT POSLOVNE TELEKOMUNIKACIJE d.o.o.','RRC BUSINESS TELECOMMUNICATIONS','RRC KAZAKHSTAN LLP','RRC RUSSIA','RRC Tech Distribution','RRC UKRAINE','RRC-CZ S.R.O.','ScanSource Communications Austria','ScanSource Communications GmbH Germany','ScanSource Communications Schweiz','Scansource Europe S.P.R.L.','ScanSource France','ScanSource UK','SeAH Networks Co., Ltd.','Sichuan Changhong IT ermission Products Co., Ltd','SiS International Limited','Starview International Pte Ltd','Starview Vietnam Ltd','SYNNEX Infotec','Synnex Metrodata Indonesia','Synnex Technology International (HK) Ltd.','TECH DATA GMBH & CO. OHG','TECH DATA SPAIN','TechData Advanced Solutions (Thailand) Ltd.','TOPTEL TELEKOMUNIKASYON LTD','UTTC LLP','Vnetwork System Sdn Bhd','VoIP Distribution Pty Ltd trading as VExpress','Westcon Africa FZCo, UNITED KINGDOM','Westcon Africa FZCo. Mauritius','Westcon Comztek (Pty) Limited','Westcon Convergence Belgium','Westcon Convergence Finland','Westcon Convergence France','Westcon Convergence Germany','Westcon Convergence Italy','Westcon Convergence Netherlands','Westcon Convergence Nordics','Westcon Convergence Spain','Westcon Convergence UK','Westcon Group Austria','Westcon Group European Operations','Westcon Group European Operations Limited, Czech Republic','Westcon Group European Operations Ltd. Poland','Westcon Group Limited (NZ)','Westcon Group Pte. Ltd. (Indonesia)','Westcon Group Pte. Ltd. (Philippines)','Westcon Group Pte. Ltd. (Singapore)','Westcon Group Pte. Ltd. (Thailand)','Westcon Group Pte. Ltd. (Vietnam)','Westcon Group Pty Limited','WESTCON MIDDLE EAST LIMITED','Westcon Portugal','WGEO Switzerland GmbH'];
		//	var DistiList10 = ['','ABnet Communications LTD','ACA Pacific Group Co., Ltd.','ACA Pacific Technology (S) Pte Ltd','Almasa IT Distribution FZCO','APTEC DISTRIBUTION','Ardent Networks Inc.','Arrow ECS Australia Pty Limited (aka Distribution Central Pty Limited)','Arrow ECS New Zealand Limited (aka as Distribution Central Limited)','Asit S.p.a','AVAD GMBH','AVAD Switzerland AG','Azlan AG','Azlan Finland Oy - Finland','AZLAN LOGISTICS LTD','Azlan Norway','Azlan Portugal','Azlan Scandinavia','AZLAN UK','BD ENTERPRISE NETWORKING LTD.','Beetel Teletech Ltd.','BrightStar Communication Company','Cadensworth India Limited','ChinaComm International Ltd','ChinaComm Taiwan Ltd','COMPTEK INTERNATIONAL OVERSEAS','COMPUTERPOINT LTD','DIGITAL CHINA TECHNOLOGY LIMITED','Digital Paper Sdn Bhd','Elcore Distribution AG','Elite Technology JSC.','Epsidon Technology (Pty) Ltd','FIORE S.R.L.','Ingram Micro Distribution GmbH','Ingram Micro doo','Ingram Micro Magyarország Kft','Ingram Micro Sp. z. o. o','International Distributors (Interdist) offshore SAL','ITANCIA (WAS NETACOM)','ITANCIA Africa','ITANCIA Srl','LANMAX / LANDATA','Mantrac Distribution','MARVEL COMPUTER SOLUTIONS LTD','MSI-ECS (Phils) Inc.','NETEKS ILETISIM URUNLERI DAGITIM ANONIM SIRKETI','NFS Teknoloji','OCS Distribution Deutschland AG','PT ACA Pacific Technology','REDINGTON GULF','RRC BT POSLOVNE TELEKOMUNIKACIJE d.o.o.','RRC BUSINESS TELECOMMUNICATIONS','RRC KAZAKHSTAN LLP','RRC RUSSIA','RRC Tech Distribution','RRC UKRAINE','RRC-CZ S.R.O.','ScanSource Communications Austria','ScanSource Communications GmbH Germany','ScanSource Communications Schweiz','Scansource Europe S.P.R.L.','ScanSource France','ScanSource UK','SeAH Networks Co., Ltd.','Sichuan Changhong IT ermission Products Co., Ltd','SiS International Limited','Starview International Pte Ltd','Starview Vietnam Ltd','SYNNEX Infotec','Synnex Metrodata Indonesia','Synnex Technology International (HK) Ltd.','TECH DATA GMBH & CO. OHG','TECH DATA SPAIN','TechData Advanced Solutions (Thailand) Ltd.','TOPTEL TELEKOMUNIKASYON LTD','UTTC LLP','Vnetwork System Sdn Bhd','VoIP Distribution Pty Ltd trading as VExpress','Westcon Africa FZCo, UNITED KINGDOM','Westcon Africa FZCo. Mauritius','Westcon Comztek (Pty) Limited','Westcon Convergence Belgium','Westcon Convergence Finland','Westcon Convergence France','Westcon Convergence Germany','Westcon Convergence Italy','Westcon Convergence Netherlands','Westcon Convergence Nordics','Westcon Convergence Spain','Westcon Convergence UK','Westcon Group Austria','Westcon Group European Operations','Westcon Group European Operations Limited, Czech Republic','Westcon Group European Operations Ltd. Poland','Westcon Group Limited (NZ)','Westcon Group Pte. Ltd. (Indonesia)','Westcon Group Pte. Ltd. (Philippines)','Westcon Group Pte. Ltd. (Singapore)','Westcon Group Pte. Ltd. (Thailand)','Westcon Group Pte. Ltd. (Vietnam)','Westcon Group Pty Limited','WESTCON MIDDLE EAST LIMITED','Westcon Portugal','WGEO Switzerland GmbH'];
			console.log("done");
			createOption(vDistributorName, "Selecione", "");
			for (i = 1; i < DistiList1.length; i++) {
				createOption(vDistributorName, DistiList1[i], DistiList10[i]);
			} 
		/*} else if (document.getElementsByName("Theater")[0].value == "US"){
			vDistributorName.options.length = 0;
			var DistiList2 = ['Selecione','ScanSource Catalys','Jenne','Westcon'];
			var DistiList20 = ['','ScanSource Catalys','Jenne','Westcon'];
			createOption(vDistributorName, "Selecione", "");
			for (i = 1; i < DistiList2.length; i++) {
				createOption(vDistributorName, DistiList2[i], DistiList20[i]);
			} 
		} else if (document.getElementsByName("Theater")[0].value == "AI" && document.getElementsByName("country")[0].value == "Canada"){
			vDistributorName.options.length = 0;
			var DistiList3 = ['Selecione','Ingram Micro','Tech Data Corporation','Westcon'];
			var DistiList30 = ['','Ingram Micro','Tech Data Corporation','Westcon'];
			createOption(vDistributorName, "Selecione", "");
			for (i = 1; i < DistiList3.length; i++) {
				createOption(vDistributorName, DistiList3[i], DistiList30[i]);
			} 
		} else if (document.getElementsByName("Theater")[0].value == "AI" && document.getElementsByName("country")[0].value != "Canada"){
			vDistributorName.options.length = 0;
			var DistiList4 = ['Selecione','Anixter','TechData','Scansource'];
			var DistiList40 = ['','Anixter','TechData','Scansource'];
			createOption(vDistributorName, "Selecione", "");
			for (i = 1; i < DistiList4.length; i++) {
				createOption(vDistributorName, DistiList4[i], DistiList40[i]);
			} 
		}*/
		var field17 = new LiveValidation( "field17", { validMessage: "", onlyOnBlur: true });
		field17.disable();
		document.getElementById("formElement17").style.display = "none";
		var field18 = new LiveValidation( "field18", { validMessage: "", onlyOnBlur: true });
		field18.disable();
		document.getElementById("formElement18").style.display = "none";
	} else if (document.getElementsByName('ReferredBy')[0].value == "Avaya Representative"){
	
		document.getElementById("formElement17").style.display = "block";
		var field17 = new LiveValidation( "field17", { validMessage: "", onlyOnBlur: true });
		field17.enable();
		field17.add( Validate.Presence, { failureMessage: "Este campo é obrigatório" } );		
		var field16 = new LiveValidation( "field16", { validMessage: "", onlyOnBlur: true });
		field16.disable();
		document.getElementById("formElement16").style.display = "none";
		var field18 = new LiveValidation( "field18", { validMessage: "", onlyOnBlur: true });
		field18.disable();
		document.getElementById("formElement18").style.display = "none";
	} else if (document.getElementsByName('ReferredBy')[0].value == "Avaya Authorized Reseller"){
	
		document.getElementById("formElement18").style.display = "block";
		var field18 = new LiveValidation( "field18", { validMessage: "", onlyOnBlur: true });
		field18.enable();
		field18.add( Validate.Presence, { failureMessage: "Este campo é obrigatório" } );		
		var field16 = new LiveValidation( "field16", { validMessage: "", onlyOnBlur: true });
		field16.disable();
		document.getElementById("formElement16").style.display = "none";
		var field17 = new LiveValidation( "field17", { validMessage: "", onlyOnBlur: true });
		field17.disable();
		document.getElementById("formElement17").style.display = "none";
	} else {
	var field17 = new LiveValidation( "field17", { validMessage: "", onlyOnBlur: true });
		field17.disable();
		var field16 = new LiveValidation( "field16", { validMessage: "", onlyOnBlur: true });
		field16.disable();
		var field18 = new LiveValidation( "field18", { validMessage: "", onlyOnBlur: true });
		field18.disable();
		document.getElementById("formElement16").style.display = "none";
		document.getElementById("formElement17").style.display = "none";
		document.getElementById("formElement18").style.display = "none";
	}
  // onclick stuff
}
populateReferredBy();//function call to populate ReferredBy dropdown on page load
var checkinit = "N";

var Countrysel;

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


function detect_ccode(){
		var strUser=document.getElementsByName("country")[0].value;
				if (strUser == "Algeria"){ 
							  document.getElementsByName("country_iso")[0].value = "DZA";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Egypt"){ 
							  document.getElementsByName("country_iso")[0].value = "EGY";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Ethiopia"){ 
							  document.getElementsByName("country_iso")[0].value = "ETH";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Ghana"){ 
							  document.getElementsByName("country_iso")[0].value = "GHA";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Kenya"){ 
							  document.getElementsByName("country_iso")[0].value = "KEN";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Mauritius"){ 
							  document.getElementsByName("country_iso")[0].value = "MUS";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Morocco"){ 
							  document.getElementsByName("country_iso")[0].value = "MAR";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Mozambique"){ 
							  document.getElementsByName("country_iso")[0].value = "MOZ";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Nigeria"){ 
							  document.getElementsByName("country_iso")[0].value = "NGA";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "South Africa"){ 
							  document.getElementsByName("country_iso")[0].value = "ZAF";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Tunisia"){ 
							  document.getElementsByName("country_iso")[0].value = "TUN";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Zambia"){ 
							  document.getElementsByName("country_iso")[0].value = "ZMB";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Zimbabwe"){ 
							  document.getElementsByName("country_iso")[0].value = "ZWE";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Angola"){ 
							  document.getElementsByName("country_iso")[0].value = "AGO";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Benin"){ 
							  document.getElementsByName("country_iso")[0].value = "BEN";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Botswana"){ 
							  document.getElementsByName("country_iso")[0].value = "BWA";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Burkina Faso"){ 
							  document.getElementsByName("country_iso")[0].value = "BFA";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Burundi"){ 
							  document.getElementsByName("country_iso")[0].value = "BDI";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Cameroon"){ 
							  document.getElementsByName("country_iso")[0].value = "CMR";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Cape Verde"){ 
							  document.getElementsByName("country_iso")[0].value = "CPV";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Central African Republic"){ 
							  document.getElementsByName("country_iso")[0].value = "CAF";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Chad"){ 
							  document.getElementsByName("country_iso")[0].value = "TCD";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Comoros"){ 
							  document.getElementsByName("country_iso")[0].value = "COM";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Congo"){ 
							  document.getElementsByName("country_iso")[0].value = "COG";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Congo, The Democratic Republic Of The"){ 
							  document.getElementsByName("country_iso")[0].value = "COD";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Djibouti"){ 
							  document.getElementsByName("country_iso")[0].value = "DJI";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Equatorial Guinea"){ 
							  document.getElementsByName("country_iso")[0].value = "GNQ";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Eritrea"){ 
							  document.getElementsByName("country_iso")[0].value = "ERI";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Gabon"){ 
							  document.getElementsByName("country_iso")[0].value = "GAB";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Gambia"){ 
							  document.getElementsByName("country_iso")[0].value = "GMB";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Guinea"){ 
							  document.getElementsByName("country_iso")[0].value = "GIN";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Guinea-Bissau"){ 
							  document.getElementsByName("country_iso")[0].value = "GNB";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Ivory Coast (Cote D'Ivoire)"){ 
							  document.getElementsByName("country_iso")[0].value = "CIV";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Lesotho"){ 
							  document.getElementsByName("country_iso")[0].value = "LSO";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Liberia"){ 
							  document.getElementsByName("country_iso")[0].value = "LBR";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Libya"){ 
							  document.getElementsByName("country_iso")[0].value = "LBY";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Madagascar"){ 
							  document.getElementsByName("country_iso")[0].value = "MDG";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Malawi"){ 
							  document.getElementsByName("country_iso")[0].value = "MWI";
							  document.getElementsByName("Theater")[0].value = "EMEA";
				
				document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Mali"){ 
							  document.getElementsByName("country_iso")[0].value = "MLI";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Mauritania"){ 
							  document.getElementsByName("country_iso")[0].value = "MRT";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Namibia"){ 
							  document.getElementsByName("country_iso")[0].value = "NAM";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Niger"){ 
							  document.getElementsByName("country_iso")[0].value = "NER";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Reunion"){ 
							  document.getElementsByName("country_iso")[0].value = "REU";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Rwanda"){ 
							  document.getElementsByName("country_iso")[0].value = "RWA";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Sao Tome And Principe"){ 
							  document.getElementsByName("country_iso")[0].value = "STP";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Senegal"){ 
							  document.getElementsByName("country_iso")[0].value = "SEN";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Seychelles"){ 
							  document.getElementsByName("country_iso")[0].value = "SYC";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Sierra Leone"){ 
							  document.getElementsByName("country_iso")[0].value = "SLE";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Somalia"){ 
							  document.getElementsByName("country_iso")[0].value = "SOM";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Sudan"){ 
							  document.getElementsByName("country_iso")[0].value = "SDN";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Swaziland"){ 
							  document.getElementsByName("country_iso")[0].value = "SWZ";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Tanzania, United Republic Of"){ 
							  document.getElementsByName("country_iso")[0].value = "TZA";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Togo"){ 
							  document.getElementsByName("country_iso")[0].value = "TGO";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Uganda"){ 
							  document.getElementsByName("country_iso")[0].value = "UGA";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Western Sahara"){ 
							  document.getElementsByName("country_iso")[0].value = "ESH";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Austria"){ 
							  document.getElementsByName("country_iso")[0].value = "AUT";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Liechtenstein"){ 
							  document.getElementsByName("country_iso")[0].value = "LIE";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Switzerland"){ 
							  document.getElementsByName("country_iso")[0].value = "CHE";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "American Samoa"){ 
							  document.getElementsByName("country_iso")[0].value = "ASM";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Australia"){ 
							  document.getElementsByName("country_iso")[0].value = "AUS";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "British Indian Ocean Territory"){ 
							  document.getElementsByName("country_iso")[0].value = "IOT";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Christmas Island"){ 
							  document.getElementsByName("country_iso")[0].value = "CXR";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Cocos Islands"){ 
							  document.getElementsByName("country_iso")[0].value = "CCK";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Cook Islands"){ 
							  document.getElementsByName("country_iso")[0].value = "COK";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Fiji"){ 
							  document.getElementsByName("country_iso")[0].value = "FJI";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Guam"){ 
							  document.getElementsByName("country_iso")[0].value = "GUM";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Kiribati"){ 
							  document.getElementsByName("country_iso")[0].value = "KIR";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Marshall Islands"){ 
							  document.getElementsByName("country_iso")[0].value = "MHL";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Micronesia, Federated States of"){ 
							  document.getElementsByName("country_iso")[0].value = "FSM";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Nauru"){ 
							  document.getElementsByName("country_iso")[0].value = "NRU";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "New Caledonia"){ 
							  document.getElementsByName("country_iso")[0].value = "NCL";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "New Zealand"){ 
							  document.getElementsByName("country_iso")[0].value = "NZL";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Niue"){ 
							  document.getElementsByName("country_iso")[0].value = "NIU";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Norfolk Island"){ 
							  document.getElementsByName("country_iso")[0].value = "NFK";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Palau"){ 
							  document.getElementsByName("country_iso")[0].value = "PLW";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Papua New Guinea"){ 
							  document.getElementsByName("country_iso")[0].value = "PNG";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Samoa"){ 
							  document.getElementsByName("country_iso")[0].value = "WSM";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Solomon Islands"){ 
							  document.getElementsByName("country_iso")[0].value = "SLB";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Tokelau"){ 
							  document.getElementsByName("country_iso")[0].value = "TKL";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Tonga"){ 
							  document.getElementsByName("country_iso")[0].value = "TON";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Tuvalu"){ 
							  document.getElementsByName("country_iso")[0].value = "TUV";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Vanuatu"){ 
							  document.getElementsByName("country_iso")[0].value = "VUT";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Australia & New Zealand";
				} else if (strUser == "Brunei Darussalam"){ 
							  document.getElementsByName("country_iso")[0].value = "BRN";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "ASEAN";
				} else if (strUser == "Cambodia"){ 
							  document.getElementsByName("country_iso")[0].value = "KHM";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "ASEAN";
				} else if (strUser == "East Timor"){ 
							  document.getElementsByName("country_iso")[0].value = "TLS";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "ASEAN";
				} else if (strUser == "Indonesia"){ 
							  document.getElementsByName("country_iso")[0].value = "IDN";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "ASEAN";
				} else if (strUser == "Lao People's Democratic Republic"){ 
							  document.getElementsByName("country_iso")[0].value = "LAO";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "ASEAN";
				} else if (strUser == "Malaysia"){ 
							  document.getElementsByName("country_iso")[0].value = "MYS";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "ASEAN";
				} else if (strUser == "Myanmar"){ 
							  document.getElementsByName("country_iso")[0].value = "MMR";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "ASEAN";
				} else if (strUser == "Philippines"){ 
							  document.getElementsByName("country_iso")[0].value = "PHL";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "ASEAN";
				} else if (strUser == "Singapore"){ 
							  document.getElementsByName("country_iso")[0].value = "SGP";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "ASEAN";
				} else if (strUser == "Thailand"){ 
							  document.getElementsByName("country_iso")[0].value = "THA";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "ASEAN";
				} else if (strUser == "Timor-Leste"){ 
							  document.getElementsByName("country_iso")[0].value = "TLS";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "ASEAN";
				} else if (strUser == "Vietnam"){ 
							  document.getElementsByName("country_iso")[0].value = "VNM";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "ASEAN";
				} else if (strUser == "Belgium"){ 
							  document.getElementsByName("country_iso")[0].value = "BEL";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Luxembourg"){ 
							  document.getElementsByName("country_iso")[0].value = "LUX";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Netherlands"){ 
							  document.getElementsByName("country_iso")[0].value = "NLD";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Brazil"){ 
							  document.getElementsByName("country_iso")[0].value = "BRA";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "Brazil";
				} else if (strUser == "Mexico"){ 
							  document.getElementsByName("country_iso")[0].value = "MEX";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Argentina"){ 
							  document.getElementsByName("country_iso")[0].value = "ARG";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Chile"){ 
							  document.getElementsByName("country_iso")[0].value = "CHL";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Colombia"){ 
							  document.getElementsByName("country_iso")[0].value = "COL";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Peru"){ 
							  document.getElementsByName("country_iso")[0].value = "PER";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Uruguay"){ 
							  document.getElementsByName("country_iso")[0].value = "URY";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Anguilla"){ 
							  document.getElementsByName("country_iso")[0].value = "AIA";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Antigua and Barbuda"){ 
							  document.getElementsByName("country_iso")[0].value = "ATG";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Aruba"){ 
							  document.getElementsByName("country_iso")[0].value = "ABW";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Bahamas"){ 
							  document.getElementsByName("country_iso")[0].value = "BHS";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Barbados"){ 
							  document.getElementsByName("country_iso")[0].value = "BRB";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Belize"){ 
							  document.getElementsByName("country_iso")[0].value = "BLZ";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Bermuda"){ 
							  document.getElementsByName("country_iso")[0].value = "BMU";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Cayman Islands"){ 
							  document.getElementsByName("country_iso")[0].value = "CYM";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Curaçao"){ 
							  document.getElementsByName("country_iso")[0].value = "CUW";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Dominica"){ 
							  document.getElementsByName("country_iso")[0].value = "DMA";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Grenada"){ 
							  document.getElementsByName("country_iso")[0].value = "GRD";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Guyana"){ 
							  document.getElementsByName("country_iso")[0].value = "GUY";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Haiti"){ 
							  document.getElementsByName("country_iso")[0].value = "HTI";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Jamaica"){ 
							  document.getElementsByName("country_iso")[0].value = "JAM";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Martinique"){ 
							  document.getElementsByName("country_iso")[0].value = "MTQ";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Montserrat"){ 
							  document.getElementsByName("country_iso")[0].value = "MSR";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Netherlands Antilles"){ 
							  document.getElementsByName("country_iso")[0].value = "ANT";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Saint Kitts and Nevis"){ 
							  document.getElementsByName("country_iso")[0].value = "KNA";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Saint Lucia"){ 
							  document.getElementsByName("country_iso")[0].value = "LCA";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Saint Vincent and the Grenadines"){ 
							  document.getElementsByName("country_iso")[0].value = "VCT";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Suriname"){ 
							  document.getElementsByName("country_iso")[0].value = "SUR";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Trinidad and Tobago"){ 
							  document.getElementsByName("country_iso")[0].value = "TTO";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Turks and Caicos Islands"){ 
							  document.getElementsByName("country_iso")[0].value = "TCA";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Virgin Islands, British"){ 
							  document.getElementsByName("country_iso")[0].value = "VGB";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Virgin Islands, U.S."){ 
							  document.getElementsByName("country_iso")[0].value = "VIR";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Bolivia"){ 
							  document.getElementsByName("country_iso")[0].value = "BOL";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Costa Rica"){ 
							  document.getElementsByName("country_iso")[0].value = "CRI";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Cuba"){ 
							  document.getElementsByName("country_iso")[0].value = "CUB";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Dominican Republic"){ 
							  document.getElementsByName("country_iso")[0].value = "DOM";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Ecuador"){ 
							  document.getElementsByName("country_iso")[0].value = "ECU";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "El Salvador"){ 
							  document.getElementsByName("country_iso")[0].value = "SLV";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Falkland Islands (Malvinas)"){ 
							  document.getElementsByName("country_iso")[0].value = "FLK";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Guatemala"){ 
							  document.getElementsByName("country_iso")[0].value = "GTM";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Honduras"){ 
							  document.getElementsByName("country_iso")[0].value = "HND";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Nicaragua"){ 
							  document.getElementsByName("country_iso")[0].value = "NIC";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Panama"){ 
							  document.getElementsByName("country_iso")[0].value = "PAN";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Paraguay"){ 
							  document.getElementsByName("country_iso")[0].value = "PRY";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Puerto Rico"){ 
							  document.getElementsByName("country_iso")[0].value = "PRI";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Venezuela"){ 
							  document.getElementsByName("country_iso")[0].value = "VEN";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "LATAM";
				} else if (strUser == "Canada"){ 
							  document.getElementsByName("country_iso")[0].value = "CAN";
							  document.getElementsByName("Theater")[0].value = "AI";
							  document.getElementsByName("Region")[0].value = "Canada";
				} else if (strUser == "Armenia"){ 
							  document.getElementsByName("country_iso")[0].value = "ARM";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Russia, CIS and IL";
				} else if (strUser == "Azerbaijan"){ 
							  document.getElementsByName("country_iso")[0].value = "AZE";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Russia, CIS and IL";
				} else if (strUser == "Belarus"){ 
							  document.getElementsByName("country_iso")[0].value = "BLR";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Russia, CIS and IL";
				} else if (strUser == "Georgia"){ 
							  document.getElementsByName("country_iso")[0].value = "GEO";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Russia, CIS and IL";
				} else if (strUser == "Kazakhstan"){ 
							  document.getElementsByName("country_iso")[0].value = "KAZ";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Russia, CIS and IL";
				} else if (strUser == "Kyrgyzstan"){ 
							  document.getElementsByName("country_iso")[0].value = "KGZ";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Russia, CIS and IL";
				} else if (strUser == "Moldova"){ 
							  document.getElementsByName("country_iso")[0].value = "MDA";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Russia, CIS and IL";
				} else if (strUser == "Mongolia"){ 
							  document.getElementsByName("country_iso")[0].value = "MNG";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Russia, CIS and IL";
				} else if (strUser == "Tajikistan"){ 
							  document.getElementsByName("country_iso")[0].value = "TJK";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Russia, CIS and IL";
				} else if (strUser == "Turkmenistan"){ 
							  document.getElementsByName("country_iso")[0].value = "TKM";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Russia, CIS and IL";
				} else if (strUser == "Ukraine"){ 
							  document.getElementsByName("country_iso")[0].value = "UKR";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Russia, CIS and IL";
				} else if (strUser == "Uzbekistan"){ 
							  document.getElementsByName("country_iso")[0].value = "UZB";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Russia, CIS and IL";
				} else if (strUser == "Albania"){ 
							  document.getElementsByName("country_iso")[0].value = "ALB";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Bosnia-Herzegovina"){ 
							  document.getElementsByName("country_iso")[0].value = "BIH";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Bulgaria"){ 
							  document.getElementsByName("country_iso")[0].value = "BGR";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Croatia"){ 
							  document.getElementsByName("country_iso")[0].value = "HRV";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Czech Republic"){ 
							  document.getElementsByName("country_iso")[0].value = "CZE";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Hungary"){ 
							  document.getElementsByName("country_iso")[0].value = "HUN";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Macedonia"){ 
							  document.getElementsByName("country_iso")[0].value = "MKD";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Montenegro"){ 
							  document.getElementsByName("country_iso")[0].value = "MNE";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Poland"){ 
							  document.getElementsByName("country_iso")[0].value = "POL";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Romania"){ 
							  document.getElementsByName("country_iso")[0].value = "ROU";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Serbia"){ 
							  document.getElementsByName("country_iso")[0].value = "SRB";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Slovakia"){ 
							  document.getElementsByName("country_iso")[0].value = "SVK";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Slovenia"){ 
							  document.getElementsByName("country_iso")[0].value = "SVN";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Yugoslavia"){ 
							  document.getElementsByName("country_iso")[0].value = "YUG";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "France"){ 
							  document.getElementsByName("country_iso")[0].value = "FRA";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Monaco"){ 
							  document.getElementsByName("country_iso")[0].value = "MCO";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Germany"){ 
							  document.getElementsByName("country_iso")[0].value = "DEU";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "China"){ 
							  document.getElementsByName("country_iso")[0].value = "CHN";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Greater China";
				} else if (strUser == "Hong Kong"){ 
							  document.getElementsByName("country_iso")[0].value = "HKG";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Greater China";
				} else if (strUser == "Macau"){ 
							  document.getElementsByName("country_iso")[0].value = "MAC";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Greater China";
				} else if (strUser == "Taiwan, ROC"){ 
							  document.getElementsByName("country_iso")[0].value = "TWN";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Greater China";
				} else if (strUser == "Andorra"){ 
							  document.getElementsByName("country_iso")[0].value = "AND";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Gibraltar"){ 
							  document.getElementsByName("country_iso")[0].value = "GIB";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Portugal"){ 
							  document.getElementsByName("country_iso")[0].value = "PRT";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Spain"){ 
							  document.getElementsByName("country_iso")[0].value = "ESP";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Bangladesh"){ 
							  document.getElementsByName("country_iso")[0].value = "BGD";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "India";
				} else if (strUser == "Bhutan"){ 
							  document.getElementsByName("country_iso")[0].value = "BTN";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "India";
				} else if (strUser == "India"){ 
							  document.getElementsByName("country_iso")[0].value = "IND";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "India";
				} else if (strUser == "Maldives"){ 
							  document.getElementsByName("country_iso")[0].value = "MDV";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Sri Lanka"){ 
							  document.getElementsByName("country_iso")[0].value = "LKA";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "India";
				} else if (strUser == "The Federal Democratic Republic of Nepal"){ 
							  document.getElementsByName("country_iso")[0].value = "NPL";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Israel"){ 
							  document.getElementsByName("country_iso")[0].value = "ISR";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Russia, CIS and IL";
				} else if (strUser == "Palestine"){ 
							  document.getElementsByName("country_iso")[0].value = "PSE";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Russia, CIS and IL";
				} else if (strUser == "Cyprus"){ 
							  document.getElementsByName("country_iso")[0].value = "CYP";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Greece"){ 
							  document.getElementsByName("country_iso")[0].value = "GRC";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Italy"){ 
							  document.getElementsByName("country_iso")[0].value = "ITA";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Malta"){ 
							  document.getElementsByName("country_iso")[0].value = "MLT";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "San Marino"){ 
							  document.getElementsByName("country_iso")[0].value = "SMR";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Vatican City State"){ 
							  document.getElementsByName("country_iso")[0].value = "VAT";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Southern Europe";
				} else if (strUser == "Japan"){ 
							  document.getElementsByName("country_iso")[0].value = "JPN";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Japan";
				} else if (strUser == "Korea Republic of"){ 
							  document.getElementsByName("country_iso")[0].value = "KOR";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Korea";
				} else if (strUser == "Korea, Democratic People's Republic of"){ 
							  document.getElementsByName("country_iso")[0].value = "PRK";
							  document.getElementsByName("Theater")[0].value = "APAC";
							  document.getElementsByName("Region")[0].value = "Korea";
				} else if (strUser == "Afghanistan"){ 
							  document.getElementsByName("country_iso")[0].value = "AFG";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Bahrain"){ 
							  document.getElementsByName("country_iso")[0].value = "BHR";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Iran"){ 
							  document.getElementsByName("country_iso")[0].value = "IRN";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Iraq"){ 
							  document.getElementsByName("country_iso")[0].value = "IRQ";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Jordan"){ 
							  document.getElementsByName("country_iso")[0].value = "JOR";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Kuwait"){ 
							  document.getElementsByName("country_iso")[0].value = "KWT";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Lebanon"){ 
							  document.getElementsByName("country_iso")[0].value = "LBN";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Oman"){ 
							  document.getElementsByName("country_iso")[0].value = "OMN";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Pakistan"){ 
							  document.getElementsByName("country_iso")[0].value = "PAK";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Qatar"){ 
							  document.getElementsByName("country_iso")[0].value = "QAT";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Saudi Arabia"){ 
							  document.getElementsByName("country_iso")[0].value = "SAU";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Syrian Arab Republic"){ 
							  document.getElementsByName("country_iso")[0].value = "SYR";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "United Arab Emirates"){ 
							  document.getElementsByName("country_iso")[0].value = "ARE";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Yemen"){ 
							  document.getElementsByName("country_iso")[0].value = "YEM";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Denmark"){ 
							  document.getElementsByName("country_iso")[0].value = "DNK";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Estonia"){ 
							  document.getElementsByName("country_iso")[0].value = "EST";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Faroe Islands"){ 
							  document.getElementsByName("country_iso")[0].value = "FRO";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Finland"){ 
							  document.getElementsByName("country_iso")[0].value = "FIN";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Greenland"){ 
							  document.getElementsByName("country_iso")[0].value = "GRL";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Iceland"){ 
							  document.getElementsByName("country_iso")[0].value = "ISL";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Latvia"){ 
							  document.getElementsByName("country_iso")[0].value = "LVA";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Lithuania"){ 
							  document.getElementsByName("country_iso")[0].value = "LTU";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Norway"){ 
							  document.getElementsByName("country_iso")[0].value = "NOR";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Sweden"){ 
							  document.getElementsByName("country_iso")[0].value = "SWE";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Russian Federation"){ 
							  document.getElementsByName("country_iso")[0].value = "RUS";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Russia, CIS and IL";
				} else if (strUser == "United States"){ 
							  document.getElementsByName("country_iso")[0].value = "USA";
							  document.getElementsByName("Theater")[0].value = "US";
							  document.getElementsByName("Region")[0].value = "US";
				} else if (strUser == "US Minor Outlying Islands"){ 
							  document.getElementsByName("country_iso")[0].value = "UMI";
							  document.getElementsByName("Theater")[0].value = "US";
							  document.getElementsByName("Region")[0].value = "US";
				} else if (strUser == "Turkey"){ 
							  document.getElementsByName("country_iso")[0].value = "TUR";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "MEA & TK";
				} else if (strUser == "Guernsey"){ 
							  document.getElementsByName("country_iso")[0].value = "GGY";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Ireland"){ 
							  document.getElementsByName("country_iso")[0].value = "IRL";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Isle Of Man"){ 
							  document.getElementsByName("country_iso")[0].value = "IMN";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Jersey"){ 
							  document.getElementsByName("country_iso")[0].value = "JEY";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Pitcairn"){ 
							  document.getElementsByName("country_iso")[0].value = "PCN";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "Saint Helena"){ 
							  document.getElementsByName("country_iso")[0].value = "SHN";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "South Georgia and the South Sandwich Islands"){ 
							  document.getElementsByName("country_iso")[0].value = "SGS";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				} else if (strUser == "United Kingdom"){ 
							  document.getElementsByName("country_iso")[0].value = "GBR";
							  document.getElementsByName("Theater")[0].value = "EMEA";
							  document.getElementsByName("Region")[0].value = "Northern Europe";
				}
				
  		PartnerTypeListUpdate();	
}

//Code to Capture CTA and TAC code from URL Parameters
if (getUrlVar("CTA") != ""){
	document.getElementsByName("cta_code")[0].value = getUrlVar("CTA");
}
if (getUrlVar("TAC") != ""){
	document.getElementsByName("tactic_code")[0].value = getUrlVar("TAC");
}
//Code to update content title and Content URL
document.getElementsByName("content_title")[0].value = "Partner Contact Form";//Insert content title here
var ref = document.referrer;//this assigns refferer value to ref variable
document.getElementsByName("content_url")[0].value = ref;//passing referrer value to the content URL field
Countrysel= document.getElementsByName("country")[0];
Countrysel.addEventListener('change', detect_ccode);//Code to implement on change on country select field

//for Validation
field0.add(Validate.Presence, {failureMessage:"Este campo é obrigatório"});
field1.add(Validate.Presence, {failureMessage:"Este campo é obrigatório"});
field2.add(Validate.Presence, {failureMessage:"Este campo é obrigatório"});
field3.add(Validate.Presence, {failureMessage:"Este campo é obrigatório"});
field3.add(Validate.Format, {pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, failureMessage: "Um endereço de e-mail válido é necessário"});
field4.add(Validate.Presence, {failureMessage:"Este campo é obrigatório"});
field5.add(Validate.Presence, {failureMessage:"Este campo é obrigatório"});
field8.add(Validate.Presence, {failureMessage:"Este campo é obrigatório"});
field11.add(Validate.Presence, {failureMessage:"Este campo é obrigatório"});
field14.add(Validate.Presence, {failureMessage:"Este campo é obrigatório"});
field15.add(Validate.Presence, {failureMessage:"Este campo é obrigatório"});

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

//Function to update PartnerType dropdown
function PartnerTypeListUpdate(){  
  var regionSel = "";
   var e = document.getElementsByName("country")[0];
	var strUser = e.options[e.selectedIndex].value;	
	var e1 = document.getElementsByName("Region")[0].value;
	//var strUser1 = e1.options[e1.selectedIndex].value;	
	var vPartnerType = document.getElementsByName('PartnerType')[0];
	console.log(strUser);
	if (strUser=="United States"){
		regionSel = "US";
	} else if (strUser=="Canada"){
		regionSel = "Can";
	} else if (strUser=="China" || e1 == "MEA & TK"){
		regionSel = "MEAChn";
	} else {
		regionSel = "ALL";
	}
	  if(document.getElementsByName("country")[0].value != ""){
	  //document.getElementById("Regiondiv").style.display = "block";
          var RegUS = ['Selecione','Revendedor Autorizado Avaya','Revendedor de Produtos Abertos Avaya','Agente de Vendas Avaya','Distributor Partner'];
          var RegUSO = ['','Avaya Authorized Reseller','Open Product Reseller','Sales Agent','Distributor Partner'];
		  var RegCAN = ['Selecione','Revendedor Autorizado Avaya','Revendedor de Produtos Abertos Avaya','Distributor Partner'];
          var RegCANO = ['','Avaya Authorized Reseller','Open Product Reseller','Distributor Partner'];
		  //var RegUS = ['Selecione','Revendedor Autorizado Avaya','Revendedor de Produtos Abertos Avaya','Agente de Vendas Avaya','Distribuidor Avaya'];
          //var RegUSO = ['','Revendedor Autorizado Avaya','Revendedor de Produtos Abertos Avaya','Agente de Vendas Avaya','Distribuidor Avaya'];
		  var RegME = ['Selecione','Revendedor Autorizado Avaya','Revendedor Registrado Avaya','Revendedor de Produtos Abertos Avaya','Distributor Partner'];
          var RegMEO = ['','Avaya Authorized Reseller','Avaya Registered Reseller','Open Product Reseller','Distributor Partner'];
		  var RegAL = ['Selecione','Revendedor Autorizado Avaya','Revendedor de Produtos Abertos Avaya','Distributor Partner'];
          var RegALO = ['','Avaya Authorized Reseller','Open Product Reseller','Distributor Partner'];
             switch (regionSel) {
                case 'US':
                vPartnerType.options.length = 0;
			createOption(vPartnerType, "Selecione", "");
                for (i = 1; i < RegUS.length; i++) {
                    createOption(vPartnerType, RegUS[i], RegUSO[i]);
                }              
                break;
				case 'Can':
                vPartnerType.options.length = 0;
			createOption(vPartnerType, "Selecione", "");
                for (i = 1; i < RegCAN.length; i++) {
                    createOption(vPartnerType, RegCAN[i], RegCANO[i]);
                }              
                break;
				case 'MEAChn':
                vPartnerType.options.length = 0;
			createOption(vPartnerType, "Selecione", "");
                for (i = 1; i < RegME.length; i++) {
                    createOption(vPartnerType, RegME[i], RegMEO[i]);
                }
                break;
				case 'ALL':
                vPartnerType.options.length = 0;
			createOption(vPartnerType, "Selecione", "");
                for (i = 1; i < RegAL.length; i++) {
                    createOption(vPartnerType, RegAL[i], RegALO[i]);
                }
                break;
            }
	  } else {
	  //document.getElementById("Regiondiv").style.display = "none";
         // document.getElementById('Region').value = "";
	  }	  
}
document.getElementById("formElement15").setAttribute("style","clear:both;");
var PartnerTypeDesc = document.createElement('div');
PartnerTypeDesc.setAttribute("id","partTypeDesc");

//PartnerTypeDesc.setAttribute("style","clear:both");
PartnerTypeDesc.setAttribute("align","left");
PartnerTypeDesc.setAttribute("width","100%");
PartnerTypeDesc.setAttribute("style","float:left;clear:both;display:none;");
PartnerTypeDesc.innerHTML = "<label id='PartTypeDescLabel' style=float:left;clear:both;font-size:13px;font-weight:Normal;'> </label>";
//exInp1.appendChild(newP);
var z1 = document.getElementsByName("PartnerType")[0]; 
//insertBefore(newP, z);
insertAfter(PartnerTypeDesc, z1);

partnertype.onchange = function() {
	if(document.getElementsByName("PartnerType")[0].value == "Avaya Authorized Reseller"){
		console.log(document.getElementsByName("PartnerType")[0].value);
		console.log(document.getElementById("partTypeDesc").style.display);
		if (document.getElementById("partTypeDesc").style.display != "none"){
			//Sell complete Avaya portfolio to end customers
			document.getElementById('PartTypeDescLabel').innerHTML = "Vender o portfólio completo da Avaya para os clientes finais";
			console.log(document.getElementById('PartTypeDescLabel').innerHTML);
		} else {
			document.getElementById("partTypeDesc").style.display = "block";
			document.getElementById('PartTypeDescLabel').innerHTML = "Vender o portfólio completo da Avaya para os clientes finais";
			console.log(document.getElementById('PartTypeDescLabel').innerHTML);
		}
	} else if(document.getElementsByName("PartnerType")[0].value == "Avaya Registered Reseller"){
		if (document.getElementById("partTypeDesc").style.display != "none"){
			//Sell limited Avaya portfolio to end customers
			document.getElementById('PartTypeDescLabel').innerHTML = "Vender portfólio limitado da Avaya para clientes finais";
		} else {
			document.getElementById("partTypeDesc").style.display = "block";
			document.getElementById('PartTypeDescLabel').innerHTML = "Vender portfólio limitado da Avaya para clientes finais";
		}
	} else if(document.getElementsByName("PartnerType")[0].value == "Distributor Partner"){
		if (document.getElementById("partTypeDesc").style.display != "none"){
			//Sell limited Avaya portfolio to end customers
			document.getElementById('PartTypeDescLabel').innerHTML = "Venda de Produtos Avaya Open SIP através de distribuidores";
		} else {
			document.getElementById("partTypeDesc").style.display = "block";
			document.getElementById('PartTypeDescLabel').innerHTML = "Venda de Produtos Avaya Open SIP através de distribuidores";
		}
	} else if(document.getElementsByName("PartnerType")[0].value == "Open Product Reseller"){
		if (document.getElementById("partTypeDesc").style.display != "none"){
			//Sell SIP and other select products
			document.getElementById('PartTypeDescLabel').innerHTML = "Vender SIP e outros produtos selecionados";
		} else {
			document.getElementById("partTypeDesc").style.display = "block";
			document.getElementById('PartTypeDescLabel').innerHTML = "Vender SIP e outros produtos selecionados";
		}
	} else if(document.getElementsByName("PartnerType")[0].value == "Sales Agent"){
		if (document.getElementById("partTypeDesc").style.display != "none"){
			//Sell Avaya public cloud offers through a Master Agent
			document.getElementById('PartTypeDescLabel').innerHTML = "Vender ofertas de Avaya public cloud através de um Master Agent";
		} else {
			document.getElementById("partTypeDesc").style.display = "block";
			document.getElementById('PartTypeDescLabel').innerHTML = "Vender ofertas de Avaya public cloud através de um Master Agent";
		}
	//} else if(document.getElementsByName("PartnerType")[0].value == "Avaya Distributor"){
		//	if (document.getElementById("partTypeDesc").style.display != "none"){
		//	//Sells to Avaya Authorized Resellers
		//	document.getElementById('PartTypeDescLabel').innerHTML = "Vender para revendedores autorizados da Avaya";
		//} else {
		//	document.getElementById("partTypeDesc").style.display = "block";
		//	document.getElementById('PartTypeDescLabel').innerHTML = "Vender para revendedores autorizados da Avaya";
		//}
	} else {
		document.getElementById('PartTypeDescLabel').innerHTML = "";
		document.getElementById("partTypeDesc").style.display = "none";
	}
	populateReferredBy();
}
if (document.getElementsByName("country")[0].value !=""){	
detect_ccode();
}

var visiblefields = document.getElementById('formElement18');
var privacytclink = document.createElement('div');
privacytclink.setAttribute("id","privacytcDiv");
privacytclink.setAttribute("align","left");
privacytclink.setAttribute("width","90%");
privacytclink.setAttribute("style","float: left;clear: both;min-width: 400px;display: inline;margin:auto 20px auto 20px;line-height:20px;");
privacytclink.innerHTML = "<font style='font-size:13px;line-height:20px;font-family:\"HCo Gotham SSm\";'>Ao submeter este formulário, estou de acordo que os meus dados sejam processados na base de dados da Avaya para o fim acima mencionado. Consulte a nossa <a href='https:\/\/www.avaya.com/br/privacy/website/' target='_blank' style='color:#DA291C;text-decoration:underline;font-family:\"HCo Gotham SSm\";font-size:13px;'>Declaração de Privacidade</a>. para mais detalhes, ou configure em qualquer momento as suas <a href='https:\/\/news.avaya.com/partner-preference-center' target='_blank' style='color:#DA291C;;font-size:13px;text-decoration:underline;font-family:\"HCo Gotham SSm\"'>preferências de email</a>.</font><br><br>";
insertAfter(privacytclink, visiblefields);

var subonclick= document.getElementsByClassName("submit-button")[0];
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

//date edited 22-10-2020

/*GA*/

 document.getElementById('form2516').addEventListener(
 'submit', function(event) {
 ga(function() {
 var tracker = ga.getAll()[0];
 var clientId = tracker.get('clientId');
 document.getElementById('GACLIENTID').value = clientId;
 });
 });