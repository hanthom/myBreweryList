myBreweryList.service('mainService', function($http) {
      
	this.getBrews = function(query) {
		var query = query ? '?q=' + query : '';
		return $http({
			method: 'GET',
			url: '/api/brewsearch' + query,
		});
	}

	this.getBrew = function(id) {
		return $http({
			method: 'GET',
			url: '/api/brew?id=' + id
		});
	};

    });


