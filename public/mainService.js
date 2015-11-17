myBreweryList.service('mainService', function($http, $q) {
      
	this.getBrews = function(query) {
		var query = query ? '?q=' + query : '';
		return $http({
			method: 'GET',
			url: '/api/brewsearch' + query,
		});
	}

	this.getBrew = function(id) {
		var deferred = $q.defer();
		console.log(id);
		$http({
			method: 'GET',
			url: '/api/brew?id=' + id
		}).then(function(res) {
			console.log(res);
			deferred.resolve(res.data.data);
		})
		return deferred.promise;
	};

    });


