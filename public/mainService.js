myBreweryList.service('mainService', function($http) {
      
	this.getBrews = function(query) {
		var query = query ? '?q=' + query : '';
		return $http({
			method: 'GET',
			url: '/api/brewsearch' + query,
		});
	}

	// var getBrew = function(id) {
	// 	return $http({
	// 		method: 'GET',
	// 		url: '/api/brew?id=' + id
	// 	});
	// };

	// getBrew('cPRfoj').then(function(res) {
	// 	console.log(res);
	// }, function(err) {
	// 	console.log(err);
	// });

    });


