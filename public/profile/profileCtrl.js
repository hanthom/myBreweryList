myBreweryList.controller('profileCtrl', function($scope, $firebaseObject, $firebaseArray) {


	if ($scope.user) {
		var baseURL = "https://mybrewerylist.firebaseio.com/users/" + $scope.user.id;
		var profileRef = new Firebase(baseURL);
		$scope.userProfile = $firebaseObject(profileRef);

		var favoritesRef = new Firebase(baseURL + '/favorites');
		$scope.favorites = $firebaseArray(favoritesRef);
		console.log($scope.favorites);
	}



})