myBreweryList.controller('profileCtrl', function($scope, profileService, $firebaseObject) {

	if ($scope.user) {
		var profileRef = new Firebase("https://mybrewerylist.firebaseio.com/users/" + $scope.user.id);
		$scope.userProfile = $firebaseObject(profileRef);
	}
	// else {
	// 	$scope.profileList;
	// }

})