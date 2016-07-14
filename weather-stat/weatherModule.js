function globalStatistic(){
	var statiscitArray = [],
			globStat = "<table class='table table-bordered table-striped'><thead><tr>" 
			+ "<th>" + "<b>City</b>" + "</th>" 
			+ "<th>" + "<b>Average Temperature</b>" + "</th>" 
			+ "<th>" + "<b>Average Humidity</b>" + "</th>" 
			+ "<th>" + "<b>Average Wind Force</b>" + "</th>" + "</tr></thead>",
			paramStat = "",
			totalAverTemp = 0, 
			totalAverHum = 0, 
			totalAverWF = 0, 
			totalCount = 0;

	for (var i = 0; i < citiesArray.length; i++) {

		var averTemp = 0, averHum = 0, averWF = 0, count = 0;	

		for (var j = 0; j < dataArray.length; j++) {
			if (citiesArray[i] == dataArray[j].city) {						
				averTemp += parseInt(dataArray[j].temperature);
				averHum 	+= parseInt(dataArray[j].humidity);
				averWF	+= parseInt(dataArray[j].RandomWindForce);
				count++;
				totalCount++;
			}
		}
		totalAverTemp += averTemp;
		totalAverHum  += averHum;
		totalAverWF   += averWF;
		averTemp = 	(averTemp / count).toFixed(2);
		averHum  = 	(averHum  / count).toFixed(2);
		averWF   = 	(averWF   / count).toFixed(2);
		statiscitArray.push({
				city: 		citiesArray[i],
				averTemp: 	averTemp,
				averHum:  	averHum,
				averWF: 		averWF
		});	
	}
	totalAverTemp = (totalAverTemp / totalCount).toFixed(2);
	totalAverHum  = (totalAverHum  / totalCount).toFixed(2);
	totalAverWF   = (totalAverWF	 / totalCount).toFixed(2);
	
	for (var i = 0; i < statiscitArray.length; i++) {
		globStat += "<tr>" + "<td>" + statiscitArray[i].city + "</td>" 
		+ "<td>" + statiscitArray[i].averTemp + "</td>" 
		+ "<td>" + statiscitArray[i].averHum +"</td>" 
		+ "<td>" + statiscitArray[i].averWF + "</td>" + "</tr>";
	}			

	globStat += "</table>"
	paramStat = "<h3>Total Statistic:</h3>"
		+ "<ul><li>Average Temperature: " + totalAverTemp + "C</li>"
		+ "<li>Average Humidity: " + totalAverHum	+ "</li>"
		+ "<li>Average Wind Force: " + totalAverWF +"</li></ul>";
		$("#total-table").html(globStat);
		$("#total-statistic").html(paramStat);

	document.getElementById("global-stat-btn").click();
}

function serachParam(param){
	var paramArray = [];
	for (var i = 0; i < dataArray.length; i++) {
		if (param == "maxTemp") {
			paramArray.push({
				day: dataArray[i].day,
				city: dataArray[i].city,
				temp:dataArray[i].temperature
			});
		} else if (param == "maxHum") {
			paramArray.push({
				day: dataArray[i].day,
				city: dataArray[i].city,
				hum:dataArray[i].temperature
			});
		} else if (param == "maxWF") {
			paramArray.push({
				day: dataArray[i].day,
				city: dataArray[i].city,
				wF:dataArray[i].temperature
			});
		}
	}	

	var maxParam = 0, 
			searchDay = 0, 
			searchCity = "";
	for (var i = 0; i < paramArray.length; i++) {
		if (param == "maxTemp") {
			if (i != (paramArray.length - 1) && paramArray[i].temp > paramArray[i + 1].temp) {
				maxParam   = paramArray[i].temp;
				searchDay  = paramArray[i].day;
				searchCity = paramArray[i].city;
			}
		} else if (param == "maxHum") {
			if (i != (paramArray.length - 1) && paramArray[i].hum > paramArray[i + 1].hum) {
				maxParam   = paramArray[i].hum;
				searchDay  = paramArray[i].day;
				searchCity = paramArray[i].city;
			}
		} else if (param == "maxWF") {
			if (i != (paramArray.length - 1) && paramArray[i].wF > paramArray[i + 1].wF) {
				maxParam   = paramArray[i].wF;
				searchDay  = paramArray[i].day;
				searchCity = paramArray[i].city;
			}
		}
	}

	return ({
		maxParam: maxParam,
		day: searchDay,
		city: searchCity
	});
}

	var RandomTemp = function () {
		var random = Math.random();
		if (random < 0.01) {
			return -1;
		} else if (random < 0.05) {
			return 0;
		} else if (random < 0.1) {
			return (random * 100);
		} else if (random < 0.5) {
			return (random * 100 / 2);
		} else {
			return 27;
		}
	}

	var RandomWindForce = function () {
		var random = Math.random();
		if (random < 0.01) {
			return 27;
		} else if (random < 0.05) {
			return 18;
		} else if (random < 0.1) {
			return 12;
		} else if (random < 0.5) {
			return 8;
		} else {
			return 4;
		}
	}

	var  RandomHum = function () {
		var random = Math.random();
		if (random < 0.01) {
			return 35;
		} else if (random < 0.06) {
			return 45;
		} else if (random < 0.1) {
			return 62;
		} else if (random < 0.6)  {
			return 75;
		} else {
			return 100;
		} 
	}

	var RandomWind = function () {
		var random = Math.random();
		if (random < 0.01) {
			return "SW";
		} else if (random < 0.06) {
			return "N";
		} else if (random < 0.1) {
			return "NW";
		} else if (random < 0.6)  {
			return "W";
		} else {
			return "S";
		} 
	}

	var dataArray = [];
	var citiesArray = ["Rivne", "Kvasilov", "Dubno", "Lytsk"];

	for (var j = 0; j < citiesArray.length; j++) {
		for (var i = 1; i <= 30; i++) {
			
			dataArray.push({
				city: citiesArray[j],
				day: i,
				humidity:RandomHum,
				temperature: RandomTemp.toFixed(2),
				directionOfTheWind: RandomWind,
				RandomWindForce: RandomWindForce
			});					
		}
	}
// console.log(dataArray);
// console.log(globalStatistic);