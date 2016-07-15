var _ = require('lodash-node');
module.exports = ( function(){	
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
	}

	
	// console.log(citiesArray);
	// console.log(dataArray);
	// console.log(globalStatistic);
})();