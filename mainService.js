myBreweryList.service('mainService', function($http) {

	this.getBrewery = function(search) {
		method: 'GET',
		url: "http://api.brewerydb.com/v2/?key=b124abbace7776c29aa83a02dc882e92&type=brewery&q=" + search,
	};
	
})