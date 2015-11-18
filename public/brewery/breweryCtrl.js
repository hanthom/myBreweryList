myBreweryList.controller('breweryCtrl', function($scope, mainService, $stateParams, breweryData, $firebaseArray) {

	$scope.brewery = breweryData;

	if ($scope.user) {
		console.log($scope.user);
		var favRef = new Firebase("https://mybrewerylist.firebaseio.com/users/" + $scope.user.id + "/favorites");
		$scope.favList = $firebaseArray(favRef);
	}
	// else {
	// 	$scope.profileList;
	// }

	$scope.saveToProfileList = function(name, id) {
		$scope.favList.$add({
			name: name,
			id: id,
		})
	}

})