myBreweryList.controller('profileCtrl', function($scope, $firebaseObject) {

	if ($scope.user) {
		var profileRef = new Firebase("https://mybrewerylist.firebaseio.com/users/" + $scope.user.id);
		$scope.userProfile = $firebaseObject(profileRef);
	}
	
	$scope.favorites = $scope.userProfile.favorites;



})