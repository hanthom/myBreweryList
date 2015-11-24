myBreweryList.controller('mainCtrl', function($scope, mainService, userService, $firebaseObject) {

	var auth = userService.getAuthObj();
	$scope.logIn = true;
	$scope.loggedOut = false;

	auth.$onAuth(function(userAuth) {
		if (userAuth) {
			var userRef = new Firebase("https://mybrewerylist.firebaseio.com/users/" + userAuth.uid);
			$scope.user = $firebaseObject(userRef);
			$scope.logIn = false;
			$scope.loggedOut = true;
		}
		else {
			$scope.user = userAuth;
			$scope.logIn = true;
			$scope.loggedOut = false;
		}
	})

	$scope.logout = function(user) {
		userService.logout();
	}

})