myBreweryList.service('mainService', function($http) {
      this.getBreweries = function() {
      	return $http({
      		url: '/api/brew',
      		method: 'GET',
      	});
        // return $http({
        //   method: 'JSON',
        //   url: "http://api.brewerydb.com/v2/?key=b124abbace7776c29aa83a02dc882e92&type=brewery&q=community",
        // });
      }
    });


