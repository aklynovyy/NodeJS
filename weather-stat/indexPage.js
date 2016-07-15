var keysModule = require('./weatherModule.js');
var _ = require('lodash-node');

module.exports = (function() {
	var getPage = function (param) {
		return '<!DOCTYPE html>' +
		'<html>' + 
			getPageHead() +
			'<body>' + 
			getPageHeader() + 
			getMain(param) +
			getFooter() +
		'</body></html>';
	};
	
	
	var getPageHead = function () {
		var bootstrapCss = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">'; 
		var bootstrapJs = '<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>';
		// var jquery = '<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>';

		return '<head>' + 
			'<title>Weather Statistic</title>' +
			'<meta charset="utf-8">' +
			bootstrapCss +
			bootstrapJs + 
			// jquery +
		'</head>';
	};
	
	var getPageHeader = function () {
		return '<header class="page-header">' +
	  	'<div class="container">' +
	  		'<h1>Weather Statistics</h1>' +
			'</div>' +
		'</header>';
	};

	var getMain = function (param) {
		return '<main>' + 
			'<div class="container">' +
	    	'<h2>Search maximum value</h2>' +
				formPost() + getSearch(param) + searchParam() + 
				// formPost() + searchParam() + 
		    '<h3 id="param-description"></h3>' +
		    '<div id="total-table"></div>' +
		    '<h4 id="total-statistic"></h4>' +
			'</div>' +
		'</main>';
	};

	var getFooter = function(){
		var jquery = "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js\"></script>";
		return '<footer></footer>' + bootstrap ;
	};
	
	var formPost = function () {
		return '<form method="POST">' + 
		    '<select id="select-param">' +
		      '<option value="">Select option</option>' +
		      '<option value="maxTemp">Maximum Temperature</option>' +
		      '<option value="maxHum">Maximum Tumidity</option>' +
		      '<option value="maxWF">Maximum wind Force</option>' +
		    '</select>' + 
		    '<button id="search-btn" class="btn btn-info">Search</button>' +
		    '<button id="global-stat-btn" class="btn btn-warning">Statistic</button>' +
	    '</form>'
	  
	};

	var getSearch = function (param) {
		// var param = $("#select-param").val();
		var param = document.getElementById('select-param').value();
		var searchArray = searchParam(param);
		if (param == "maxTemp") {
			var searchParamItem = "The maximum temperature in " 
			+ searchArray.city + " " + searchArray.day + " january: " + searchArray.maxParam + "C";
		} else if (param == "maxHum") {
			var searchParamItem = "Maximum humidity in " 
			+ searchArray.city + " " + searchArray.day + " january: " + searchArray.maxParam;
		}  else if (param == "maxWF") {
			var searchParamItem = "The maximum wind force in " 
			+ searchArray.city + " " + searchArray.day + " january: " + searchArray.maxParam;
		}	
		return searchParamItem;
	};

	var searchParam = function (param){
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
				// temperature: RandomTemp.toFixed(2),
				temperature: RandomTemp,
				directionOfTheWind: RandomWind,
				RandomWindForce: RandomWindForce
			});					
		}
	}

	// console.log(searchParamItem);
	// console.log(globalStatistic);
	// console.log(dataArray);

	return {
		getPage: getPage
	};
})();