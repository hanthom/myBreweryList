myBreweryList.controller('mainCtrl', function($scope, mainService, userService, $firebaseObject) {

	var auth = userService.getAuthObj();
	$scope.loggedIn = true;

	auth.$onAuth(function(userAuth) {
		if (userAuth) {
			var userRef = new Firebase("https://mybrewerylist.firebaseio.com/users/" + userAuth.uid);
			$scope.user = $firebaseObject(userRef);
			
		}
		else {
			$scope.user = userAuth;
		}
	})

	// $scope.logout = function(user) {
	// 	userService.logout();
	// }

})