myBreweryList.controller('mainCtrl', function($scope, mainService) {
	$scope.test = 'ok it works!';
	$scope.getBreweries = function() {
		mainService.getBreweries().then(function(results) {
			console.log(results);
		})
	}

	$scope.getBreweries();
})