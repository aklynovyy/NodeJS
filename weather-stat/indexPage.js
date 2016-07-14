var keysModule = require('./weatherModule.js');

module.exports = (function() {
	
	var getPage = function (params) {
		return '<html>' + 
			getPageHead() +
			'<body>' + 
			getPageHeader() + 
			getMain(params) +
			'</body></html>';
	};
	
	var getPageHead = function () {
		return '<head>' +
			'<title>No way</title>' +
			'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">' +
			'<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>' + 
		'</head>';
	};
	
	var getPageHeader = function () {
		return '<header class="page-header">' +
	  	'<div class="container">' +
	  		'<h1>Weather Statistics</h1>' +
			'</div>'
		'</header>';
	};

	var getMain = function (params) {
		return '<main>' + 
			getMainContainer() + getSearch(params) +
		'</main>'

	}
	
	var getMainContainer = function () {
		return '<div class="container">' +
			'<form method="POST">' + 
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
	    '</form>'
	  '</div>';
	};

	var getSearch = function (params) {
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

		//getElementById("search-btn").click();
		// $("#param-description").html(serachParamItem);
	}

	// console.log(serachParamItem);
	// console.log(globalStatistic);

	return {
		getPage: getPage
	};
})();