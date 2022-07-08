//Preload objects
var body = $('body');
var locale = $("html").attr("lang");

//Containers
var roiContainer = $(".roi-wrap");
var calculationsView = roiContainer.find(".calculations-form-wrap");
var registrationView = roiContainer.find(".eloqua-form");
var calcDescription = roiContainer.find(".calc-description");
var resultsView = roiContainer.find(".mobility-roi-wrap");

//Controls
var backBtn = $(".back-btn");
var leftMargin = $(".l-margin");
var downloadBtn = $(".download-btn");

//Mobility Calculator fields
var numEmployees = calculationsView.find('#numEmployees');
var hourlyRate = calculationsView.find('#hourlyRate');
var numManagers = calculationsView.find('#numManagers');
var managerHourlyRate = calculationsView.find('#managerHourlyRate');
var totalHours = calculationsView.find('#totalHours');
var callVolume = calculationsView.find('#callVolume');
var transactionTime = calculationsView.find('#transactionTime');

var improvementTarget = calculationsView.find('#improvementTarget');

var percentQlyMgmt = calculationsView.find('#percentQlyMgmt');
var improvementTargetQly = calculationsView.find('#improvementTargetQly');

var reductionInTime = calculationsView.find('#reductionInTime');
var callsImpacted = calculationsView.find('#callsImpacted');

var improvementTargetReduce = calculationsView.find('#improvementTargetReduce');

var currentSalesPercent = calculationsView.find('#currentSalesPercent');
var avgRevenueSales = calculationsView.find('#avgRevenueSales');
var performanceTargetSales = calculationsView.find('#performanceTargetSales');


//Eloqua fields
var firstName = registrationView.find("#field0");
var lastName = registrationView.find("#field1");
var company = registrationView.find("#field2");
var email = registrationView.find("#field3");

//Result fields
var totalEmpLaborCosts;
var potentialSavings;
var totalEmpLaborCostsQly;
var currentAnnualCost;
var potentialSavingsQly;

var currentAvgCostTransaction;
var totalAvgCostTransaction;
var potentialSavingsTransaction;
var totalAnnualCostCalls;
var potentialSavingsReduce;
var totalAnnualInboundSales;
var potentialSaleSavings;
var totalPotentialSavings;

var totalCosts;
var percentageTripsReplaced;
var reportName;
var reportCompany;

var roiData = {};


function formatCurrency(value) {

	var formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0,
		// the default value for minimumFractionDigits depends on the currency
		// and is usually already 2
	});
	return formatter.format(value);
}

function formatNumbers(value) {

	var number = new Intl.NumberFormat();
	return number.format(value);
}


function calculate() {

	var num_Employees = forfindvalue(numEmployees.val());
	var hourly_Rate = forfindvalue(hourlyRate.val());
	var num_Managers = forfindvalue(numManagers.val());
	var manager_Hourly_Rate = forfindvalue(managerHourlyRate.val());
	var total_Hours = forfindvalue(totalHours.val());
	var improvement_Target = forfindvalue(improvementTarget.val());
	var percent_Qly_Mgmt = forfindvalue(percentQlyMgmt.val());
	var improvement_TargetQly = forfindvalue(improvementTargetQly.val());
	var transaction_Time = forfindvalue(transactionTime.val());
	var call_Volume = forfindvalue(callVolume.val());
	var reduction_InTime = forfindvalue(reductionInTime.val());
	var calls_Impacted = forfindvalue(callsImpacted.val());
	var improvement_TargetReduce = forfindvalue(improvementTargetReduce.val());
	var current_SalesPercent = forfindvalue(currentSalesPercent.val());
	var avg_RevenueSales = forfindvalue(avgRevenueSales.val());
	var performance_TargetSales = forfindvalue(performanceTargetSales.val());

	/**Code for Payload for POST DATA */
	roiData.numEmployees = num_Employees;
	roiData.hourlyRate = hourly_Rate;
	roiData.numManagers = num_Managers;
	roiData.managerHourlyRate = manager_Hourly_Rate;
	roiData.totalHours = total_Hours;
	roiData.callVolume = call_Volume;
	roiData.transactionTime = transaction_Time;
	roiData.improvementTarget = improvement_Target;
	roiData.percentQlyMgmt = percent_Qly_Mgmt;
	roiData.improvementTargetQly = improvement_TargetQly;
	roiData.reductionInTime = reduction_InTime;
	roiData.callsImpacted = calls_Impacted;
	roiData.improvementTargetReduce = improvement_TargetReduce;
	roiData.currentSalesPercent = current_SalesPercent;
	roiData.avgRevenueSales = avg_RevenueSales;
	roiData.performanceTargetSales = performance_TargetSales;

	// C15: = PRODUCT(C5*C6*C9)
	var totalEmpLaborCosts = (num_Employees * hourly_Rate * total_Hours);
	roiData.totalEmpLaborCosts = formatCurrency(totalEmpLaborCosts);
	$('#totalEmpLaborCosts').val(roiData.totalEmpLaborCosts);
	//$('#prodSavingsPerWeekResult').text(roiData.prodSavingsPerWeek);

	// C17: = PRODUCT(C15*C16)/100
	var potentialSavings = (totalEmpLaborCosts * improvement_Target) / 100;
	$('#potentialSavings').val(formatCurrency(potentialSavings));
	roiData.potentialSavings = formatCurrency(potentialSavings);
	$('#potentialSavingsROI').text(roiData.potentialSavings);

	// C21: =PRODUCT(C7*C8*C9)
	var totalEmpLaborCostsQly = (num_Managers * manager_Hourly_Rate * total_Hours);
	$('#totalEmpLaborCostsQly').val(formatCurrency(totalEmpLaborCostsQly));
	roiData.totalEmpLaborCostsQly = formatCurrency(totalEmpLaborCostsQly);

	// C23: =PRODUCT(C21*C22)/100
	var currentAnnualCost = (totalEmpLaborCostsQly * percent_Qly_Mgmt) / 100;
	$('#currentAnnualCost').val(formatCurrency(currentAnnualCost));
	roiData.currentAnnualCost = formatCurrency(currentAnnualCost);

	// C25: =PRODUCT(C23*C24)/100
	var potentialSavingsQly = (currentAnnualCost * improvement_TargetQly) / 100;
	$('#potentialSavingsQly').val(formatCurrency(potentialSavingsQly));
	roiData.potentialSavingsQly = formatCurrency(potentialSavingsQly);
	$('#potentialSavingsQlyROI').text(roiData.potentialSavingsQly);

	// C29: =PRODUCT(C11/60)*C6
	var currentAvgCostTransaction = (transaction_Time / 60) * hourly_Rate;
	var value = "$" + currentAvgCostTransaction.toFixed(2);
	$('#currentAvgCostTransaction').val(value);
	roiData.currentAvgCostTransaction = value;

	// C30: =PRODUCT(C10*C29)
	var totalAvgCostTransaction = (call_Volume * currentAvgCostTransaction);
	$('#totalAvgCostTransaction').val(formatCurrency(totalAvgCostTransaction));
	roiData.totalAvgCostTransaction = formatCurrency(totalAvgCostTransaction);

	// C34: =PRODUCT((C29*C32)/100)*((C10*C33)/100)
	var potentialSavingsTransaction = ((currentAvgCostTransaction * reduction_InTime) / 100) * ((call_Volume * calls_Impacted) / 100);
	$('#potentialSavingsTransaction').val(formatCurrency(potentialSavingsTransaction));
	roiData.potentialSavingsTransaction = formatCurrency(potentialSavingsTransaction);
	$('#potentialSavingsTransactionROI').text(roiData.potentialSavingsTransaction);

	// C38: =PRODUCT(C10*C29)
	var totalAnnualCostCalls = (call_Volume * currentAvgCostTransaction);
	$('#totalAnnualCostCalls').val(formatCurrency(totalAnnualCostCalls));
	roiData.totalAnnualCostCalls = formatCurrency(totalAnnualCostCalls);

	// C40: =PRODUCT(C38*C39)/100
	var potentialSavingsReduce = (totalAnnualCostCalls * improvement_TargetReduce) / 100;
	$('#potentialSavingsReduce').val(formatCurrency(potentialSavingsReduce));
	roiData.potentialSavingsReduce = formatCurrency(potentialSavingsReduce);
	$('#potentialSavingsReduceROI').text(roiData.potentialSavingsReduce);

	// C45: =PRODUCT(C10*C43*C44)/100
	var totalAnnualInboundSales = (call_Volume * current_SalesPercent * avg_RevenueSales) / 100;
	$('#totalAnnualInboundSales').val(formatCurrency(totalAnnualInboundSales));
	roiData.totalAnnualInboundSales = formatCurrency(totalAnnualInboundSales);

	// C47: =PRODUCT(C45*C46)/100
	var potentialSaleSavings = (totalAnnualInboundSales * performance_TargetSales) / 100;
	$('#potentialSaleSavings').val(formatCurrency(potentialSaleSavings));
	roiData.potentialSaleSavings = formatCurrency(potentialSaleSavings);
	$('#potentialSaleSavingsROI').text(roiData.potentialSaleSavings);

	// C49: =SUM(C17+C25+C34+C40+C47)
	var totalPotentialSavings = (potentialSavings + potentialSavingsQly + potentialSavingsTransaction + potentialSavingsReduce + potentialSaleSavings);
	$('#totalPotentialSavings').val(formatCurrency(totalPotentialSavings));
	roiData.totalPotentialSavings = formatCurrency(totalPotentialSavings);
	$('#totalPotentialSavingsROI').text(roiData.totalPotentialSavings);
}

function runCalc() {
	leftMargin.css("visibility", "visible");

	setTimeout(function () {
		calculate();
		leftMargin.css("visibility", "hidden");
	}, 1000);
}

$(document).ready(function () {

	if (App.debug === true && true) {
		setDebugData();
	}
	totalHours.val(formatNumbers(2080));
	totalCosts = resultsView.find("#totalCosts");
	percentageTripsReplaced = resultsView.find("#percentageTripsReplaced");
	reportName = resultsView.find(".report-name");
	reportCompany = resultsView.find(".report-company");

	function setDebugData() {
		numEmployees.val(400);
		hourlyRate.val("$35.00");

		numManagers.val(12);
		managerHourlyRate.val("$40.00");
		totalHours.val(2080);
		callVolume.val(300000);
		transactionTime.val(12);
		improvementTarget.val(5);
		percentQlyMgmt.val(60);
		improvementTargetQly.val(10);
		reductionInTime.val(20);
		callsImpacted.val(25);
		improvementTargetReduce.val(5);
		currentSalesPercent.val(50);
		avgRevenueSales.val(30);
		performanceTargetSales.val(2);

		calculate();

		firstName.val("Jane");
		lastName.val("Doe");
		company.val("Avaya");
		email.val("jane.doe@avaya.com");
	}

	function scrollToTop() {
		$(window).scrollTop(0);
	}

	$('.calculate-btn').on("click", function (event) {
		event.preventDefault();

		var enableCookie = false;

		calculate();

		var roiRegistrationData = getCookie("roiRegistrationData");

		var payload = {
			"numOfEmployees": roiData.numEmployees,
			"empHourlyRate": "$" + roiData.hourlyRate,
			"numOfManagers": roiData.numManagers,
			"managerHourlyRate": "$" + roiData.managerHourlyRate,
			"totalHoursWorkedPerYear": roiData.totalHours,
			"annualTransactionCallVolume": roiData.callVolume,
			"avgTransactionHandleTime": roiData.transactionTime,
			"empProductivity": {
				"totalEmpLaborCosts": roiData.totalEmpLaborCosts,
				"performanceImprovementTarget": roiData.improvementTarget,
				"potentialSavings": roiData.potentialSavings,
			},
			"qualityManagement": {
				"totalMangerLaborCosts": roiData.totalEmpLaborCostsQly,
				"percentQlyMgmt": roiData.percentQlyMgmt,
				"currentAnnualCost": roiData.currentAnnualCost,
				"improvementTargetQly": roiData.improvementTargetQly,
				"potentialSavings": roiData.potentialSavingsQly,
			},
			"transactionHandleTime": {
				"currentAnnualCostTransaction": roiData.currentAvgCostTransaction,
				"totalAnnualCostTransaction": roiData.totalAvgCostTransaction,
				"reductionInTime": roiData.reductionInTime,
				"callsImpacted": roiData.callsImpacted,
				"potentialSavings": roiData.potentialSavingsTransaction
			},
			"reduceCallVolume": {
				"totalAnnualCostCalls": roiData.totalAnnualCostCalls,
				"improvementTargetReduce": roiData.improvementTargetReduce,
				"potentialSavings": roiData.potentialSavingsReduce,
			},
			"saleEffectiveness": {
				"currentSalesPercent": roiData.currentSalesPercent,
				"avgRevenueSales": roiData.avgRevenueSales,
				"totalAnnualInboundSales": roiData.totalAnnualInboundSales,
				"performanceTargetSales": roiData.performanceTargetSales,
				"potentialSavings": roiData.potentialSaleSavings
			},
			"totalPotentialSavings": roiData.totalPotentialSavings,
			"country": document.getElementById("field5").value
		}
		
		if (roiRegistrationData) {
			roiRegistrationData = JSON.parse(roiRegistrationData);
			roiData.firstName = roiRegistrationData.firstName;
			roiData.lastName = roiRegistrationData.lastName;
			roiData.company = roiRegistrationData.company;
			roiData.email = roiRegistrationData.email;
		} else {
			roiRegistrationData = {};
		}

		if (enableCookie && roiRegistrationData.firstName) {
			calculationsView.removeClass("show-view");
			calculationsView.addClass("hide-view");
			resultsView.removeClass("hide-view");
			resultsView.addClass("show-view");
			calcDescription.addClass("hide-view");
			$.ajax({
				type: "POST",
				url: $(".app-urls").find("#awfo-calculator-data").text(),
				data: $.param({ "AWFO_DATA" : JSON.stringify(payload) }, true),
				success: "",
				dataType: "",
				contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
			});
			displayResults();
		} else {
			registrationView.addClass("hide-view");
			//registrationView.addClass("show-view");
			resultsView.removeClass("hide-view");
			resultsView.addClass("show-view");
			calculationsView.addClass("hide-view");
			calcDescription.addClass("hide-view");
			$.ajax({
				type: "POST",
				url: $(".app-urls").find("#awfo-calculator-data").text(),
				data: $.param({ "AWFO_DATA" : JSON.stringify(payload) }, true ),
				success: "",
				dataType: "",
				contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
			});
			displayResults();

		}

		scrollToTop();
	});

	$("#hourlyRate").change(function () {
		$("#hourlyRate").val("$" + parseFloat($(this).val()).toFixed(2));
	});
	$("#managerHourlyRate").change(function () {
		$("#managerHourlyRate").val("$" + parseFloat($(this).val()).toFixed(2));
	});

	$(".meettime.currencyNew").keyup(function (e) {
		validate($(this), /[^0-9]/g, 2, e);
	});

	$(".meettime.number").keyup(function (e) {
		validate($(this), /[^0-9.]/g, 2, e);
	});

	$(".meettime.minutes").keyup(function (e) {
		validate($(this), /[^0-9]/g, 0, e);
	});
	$(".meettime.numberWithComma").keyup(function (e) {
		// skip for arrow keys
		if (event.which >= 37 && event.which <= 40) return;

		// format number
		$(this).val(function (index, value) {
			return value
				.replace(/\D/g, "")
				.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		});
	});

	function validate(input, regex, decimal, e) {
		var code = e.keyCode || e.which;

		if (code == 37 || code == 39) {
			return;
		}

		var start = input.prop("selectionStart");
		var value = input.val();
		var convertedInput = value.replace(regex, '');

		if (convertedInput.length > 1) {
			convertedInput = convertedInput.replace(/\b0+/g, '');

			convertedInput = parseFloat(convertedInput).toFixed(decimal);
		}

		input.val(convertedInput);

		input[0].selectionStart = input[0].selectionEnd = start;
		input.focus();
	}

	$(".meettime.currency").keyup(function (e) {
		var code = e.keyCode || e.which;

		if (code == 37 || code == 39) {
			return;
		}

		var start = $(this).prop("selectionStart");
		//var end = $(this).prop("selectionEnd");
		var value = $(this).val();
		var convertedInput = value.replace(/[^0-9.]/g, '');

		if (convertedInput.length > 1) {
			convertedInput = convertedInput.replace(/\b0+/g, '');
			convertedInput = (convertedInput == "." ? 0 : convertedInput);
			convertedInput = parseFloat(convertedInput).toFixed(2);
		}

		$(this).val(formatCurrency1(convertedInput));
		$(this)[0].selectionStart = $(this)[0].selectionEnd = start;
		$(this).focus();
	});

	backBtn.on("click", function (event) {
		event.preventDefault();

		calculationsView.removeClass("show-view");
		resultsView.removeClass("show-view");
		registrationView.removeClass("hide-view");
		registrationView.addClass("show-view");
		scrollToTop();
	});

	$(".infotip").on("click", function (event) {
		$(".show").removeClass("show");
		$(event.target).next().addClass("show");
	});

	$('body').on("click", function (event) {
		if ($(event.target).hasClass('infotiptext') || $(event.target).attr('class') == "fa fa-question-circle") {
			return;
		}

		$(".infotiptext").removeClass("show");
	});
});

function displayResults() {
	drawPieChart();

	/*drawBarChart();*/

	renderSavingsTable(roiData.percentageTripsReplaced, roiData.totalCosts);

	if (window.navigator.userAgent.indexOf("Trident/7.0") > 0) {
		var graphWrap = $(".graph-wrap");

		graphWrap.find(".parent").addClass("hide-ie");
		graphWrap.find(".graph-img").addClass("float-left-ie");
	}

	$(window).scrollTop(0);
}

function drawPieChart() {
	var pieChartData = {
		"en_US": ["Avaya Workforce Engagement Savings",
			"Increased Employee Productivity",
			"Simplified Quality Management",
			"Reduced Transaction Handle Times",
			"Reduced Call Volume",
			"Increased Sales Effectiveness"
		]
		/*,
				"de": [	
						"Einsparungen durch die Nutzung von Mobilität",
						"Reise/Treffen/Netzwerk Kosten sparen",
						"Mitarbeiter Produktivität Einsparungen",
						"Reise/Treffen Zeitersparnis pro Woche"
					   ]*/
	}

	var pieChartLabels = pieChartData[locale];

	reportName.text(roiData.firstName + " " + roiData.lastName);
	reportCompany.text(roiData.company);

	google.charts.load('current', {
		'packages': ['corechart']
	});
	google.charts.setOnLoadCallback(drawChart);

	function drawChart() {
		var data = google.visualization.arrayToDataTable([
			['Task', 'Hours per Day'],
			[pieChartLabels[1], Number(parseFloat(roiData.potentialSavings.replace(/[^0-9.-]+/g, '')))],
			[pieChartLabels[2], Number(parseFloat(roiData.potentialSavingsQly.replace(/[^0-9.-]+/g, '')))],
			[pieChartLabels[3], Number(parseFloat(roiData.potentialSavingsTransaction.replace(/[^0-9.-]+/g, '')))],
			[pieChartLabels[4], Number(parseFloat(roiData.potentialSavingsReduce.replace(/[^0-9.-]+/g, '')))],
			[pieChartLabels[5], Number(parseFloat(roiData.potentialSaleSavings.replace(/[^0-9.-]+/g, '')))]
		]);

		var pieChartData = [
			['Task', 'Hours per Day'],
			[pieChartLabels[1], Number(parseFloat(roiData.potentialSavings.replace(/[^0-9.-]+/g, '')))],
			[pieChartLabels[2], Number(parseFloat(roiData.potentialSavingsQly.replace(/[^0-9.-]+/g, '')))],
			[pieChartLabels[3], Number(parseFloat(roiData.potentialSavingsTransaction.replace(/[^0-9.-]+/g, '')))],
			[pieChartLabels[4], Number(parseFloat(roiData.potentialSavingsReduce.replace(/[^0-9.-]+/g, '')))],
			[pieChartLabels[5], Number(parseFloat(roiData.potentialSaleSavings.replace(/[^0-9.-]+/g, '')))]
		];

		$("#potentialSavingsROI").text(roiData.potentialSavings);
		$("#potentialSavingsQlyROI").text(roiData.potentialSavingsQly);
		$("#potentialSavingsTransactionROI").text(roiData.potentialSavingsTransaction);
		$("#potentialSavingsReduceROI").text(roiData.potentialSavingsReduce);
		$("#potentialSaleSavingsROI").text(roiData.potentialSaleSavings);
		$("#totalPotentialSavingsROI").text(roiData.totalPotentialSavings);


		data = google.visualization.arrayToDataTable(pieChartData);

		var pieChartColors = ["#777", "#CC0001", "#c1c1c1", "#fecd4a", "#5c84c9"];

		var options = {
			title: pieChartLabels[0],
			'colors': pieChartColors,
		};

		roiData.pieChartData = pieChartData;
		roiData.pieChartColors = pieChartColors;

		var chart = new google.visualization.PieChart(document.getElementById('piechart'));

		chart.draw(data, options);
		document.getElementById('piechartimage').innerHTML = chart.getImageURI();
	}
}

function renderSavingsTable(percentageTripsReplaced, totalCosts) {
	var savingsTableData = {
		"en_US": ["Increasing Your Use Of Workforce Engagement by",
			"Results in these Savings"
		]
		/*,
				"de": [	
						"Erhöhung der Nutzung von Avaya Equinox&trade; durch",
						"Ergebnisse in diesen Einsparungen"
					   ]*/
	}

	var savingsTableLabels = savingsTableData[locale];

	// THIS TABLE IS C26 MULTIPLIED BY 1.05. 1.10. 1.25, 1.50, 1.75, 2.0
	// roiData.totalAnnualSavings
	var savingsTable = $(".savings-table");

	savingsTable.empty();

	savingsTable.append('<tr class="heading">' +
		'<td class="col-one">' + savingsTableLabels[0] + '</td>' +
		'<td class="col-two">' + savingsTableLabels[1] + '</td>' +
		'</tr>');

	var percentageSteps = [5, 10, 25, 50];

	var percentageSavingsData = [];

	for (var i = 0; i < percentageSteps.length; i += 1) {
		var value = (parseFloat(roiData.totalPotentialSavings.replace(/[^0-9.-]+/g, '')));
		savingsTable.append('<tr class="value">' +
			'<td class="col-one">' + percentageSteps[i] + "%" + '</td>' +
			'<td class="col-two">' + formatCurrency(Math.round(value * (100 + percentageSteps[i]) / 100)) + '</td>' +
			'</tr>');

		percentageSavingsData.push({
			"percentage": i + "%",
			"saving": (totalPotentialSavings * i) / 100
		});
	}

	var savingsTablePdf = $(".savings-table-pdf");

	savingsTablePdf.empty();

	savingsTablePdf.append('<div class="heading">' +
		'<p class="col-one">' + savingsTableLabels[0] + '</p>' +
		'<p class="col-two">' + savingsTableLabels[1] + '</p>' +
		'</div>');

	var percentageSteps = [5, 10, 25, 50];

	var percentageSavingsData = [];

	for (var i = 0; i < percentageSteps.length; i += 1) {
		var value = (parseFloat(roiData.totalPotentialSavings.replace(/[^0-9.-]+/g, '')));
		savingsTablePdf.append('<div class="value">' +
			'<p class="col-one">' + percentageSteps[i] + "%" + '</p>' +
			'<p class="col-two">' + formatCurrency(Math.round(value * (100 + percentageSteps[i]) / 100)) + '</p>' +
			'</div>');

		percentageSavingsData.push({
			"percentage": i + "%",
			"saving": (totalPotentialSavings * i) / 100
		});
	}
	//table for PDF
	var savingsTablePdf = $(".savings-table-pdf");

	savingsTablePdf.empty();

	savingsTablePdf.append('<tr class="heading">' +
		'<td class="col-one">' + savingsTableLabels[0] + '</td>' +
		'<td class="col-two">' + savingsTableLabels[1] + '</td>' +
		'</tr>');

	var percentageSteps = [5, 10, 25, 50];

	var percentageSavingsData = [];

	for (var i = 0; i < percentageSteps.length; i += 1) {
		var value = (parseFloat(roiData.totalPotentialSavings.replace(/[^0-9.-]+/g, '')));
		savingsTablePdf.append('<tr class="value">' +
			'<td class="col-one">' + percentageSteps[i] + "%" + '</td>' +
			'<td class="col-two">' + formatCurrency(Math.round(value * (100 + percentageSteps[i]) / 100)) + '</td>' +
			'</tr>');

		percentageSavingsData.push({
			"percentage": i + "%",
			"saving": (totalPotentialSavings * i) / 100
		});
	}

	roiData.savingsTable = percentageSavingsData;
}


function formatCurrency1(value) {
	value = value.toString().split(".");
	value[0] = value[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	return value.join(".");
}


function forfindvalue(value) {
	if (value && value.length > 0) {
		return parseFloat(value.replace(/[^0-9.-]+/g, ''));
		//return parseInt(value.replace(",", ""));	
	} else {
		return 0;
	}
}

function saveRegistrationInformation() {
	var roiRegistrationData = {
		firstName: roiData.firstName,
		lastName: roiData.lastName,
		company: roiData.company,
		email: roiData.email
	};

	document.cookie = "roiRegistrationData=" + JSON.stringify(roiRegistrationData);
}

function getCookie(name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");

	if (parts.length == 2) return parts.pop().split(";").shift();
}

$("#send-email").on('click', function () {
	$(".calculator-modal-backdrop").addClass("fade");
	$("#send-email-pdf").css("display", "block");
});
$(".calculator-modal-backdrop").on("click", function (event) {
	closeModal();
	event.preventDefault();
	event.stopPropagation();
});
var closeModal = function () {
	$("#send-email-pdf").css("display", "none");
	$(".calculator-modal-backdrop").removeClass("fade");
};