var keysModule = require('./weatherModule.js');

module.exports = (function() {
	
	var getPage = function (params) {
		return '<html>' + 
			getPageHead() +
			'<body>' + 
			getPageHeader() + 
		// getMain(params) +
			getPageContaainer() +
			'</body></html>';
	};
	
	var getPageHead = function (params) {
		return '<head><title>No way</title></head>';
	};
	
	var getPageHeader = function (params) {
		return '<header class="page-header">' +
	  	'<div class="container">' +
	  		'<h1>Weather Statistics</h1>' +
			'</div>'
		'</header>';
	};
	
	var getPageContaainer = function () {
		return '<div class="container">' +
    	'<h2>Search maximum value</h2>' +
		    '<select id="select-param">' +
		      '<option value="">Select option</option>' +
		      '<option value="maxTemp">Maximum Temperature</option>' +
		      '<option value="maxHum">Maximum Tumidity</option>' +
		      '<option value="maxWF">Maximum wind Force</option>' +
		    '</select>' + 
	    '<button id="search-btn" class="btn btn-info">Search</button>' +
	    '<button id="global-stat-btn" class="btn btn-warning">Statistic</button>' +
	    '<h3 id="param-description"></h3>' +
	    '<div id="total-table"></div>' +
	    '<h4 id="total-statistic"></h4>' +
	  '</div>';
	};


	
	function search() {
		var param = $("#select-param").val();
		var searchArray = serachParam(param);
		if (param == "maxTemp") {
			var serachParamItem = "The maximum temperature in " 
			+ searchArray.city + " " + searchArray.day + " january: " + searchArray.maxParam + "C";
		} else if (param == "maxHum") {
			var serachParamItem = "Maximum humidity in " 
			+ searchArray.city + " " + searchArray.day + " january: " + searchArray.maxParam;
		}  else if (param == "maxWF") {
			var serachParamItem = "The maximum wind force in " 
			+ searchArray.city + " " + searchArray.day + " january: " + searchArray.maxParam;
		}	

		document.getElementById("search-btn").click();
		$("#param-description").html(serachParamItem);
	}

	return {
		getPage: getPage
	};
})();