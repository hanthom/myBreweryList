myBreweryList.controller('mainCtrl', function($scope, mainService) {

	$scope.searchBreweries = function(search) {
		mainService.getBrews(search).then(function(results) {
			$scope.result = results.data.data;
			console.log($scope.result);
		}, function(err) {
			console.log(err)
		});
	}



})