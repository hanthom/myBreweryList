myBreweryList.controller('mainCtrl', function($scope, mainService) {

	$scope.searchBreweries = function(search) {
		mainService.getBrews(search).then(function(results) {
			$scope.breweries = results.data.data;
			console.log($scope.breweries);
		}, function(err) {
			console.log(err)
		});
	}

	// $scope.selectBrewery = function(id) {

	// }

})