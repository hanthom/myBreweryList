myBreweryList.controller('mainCtrl', function($scope, mainService, userService, $firebaseObject) {

	var auth = userService.getAuthObj();

	auth.$onAuth(function(userAuth) {
		if (userAuth) {
			var userRef = new Firebase("https://mybrewerylist.firebaseio.com/users/" + userAuth.uid);
			$scope.user = $firebaseObject(userRef);
		}
		else {
			$scope.user = userAuth;
		}

		// if (userAuth) {
		// 	var profileRef = new Firebase("https://mybrewerylist.firebaseio.com/users/" + userAuth.id);
		// 	$scope.profileList = $firebaseArray(profileRef);
		// }
		// else {
		// 	$scope.profileList;
		// }
	})

	$scope.logout = function(user) {
		userService.logout();
	}

})