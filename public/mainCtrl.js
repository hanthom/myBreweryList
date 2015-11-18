myBreweryList.controller('mainCtrl', function($scope, mainService, userService) {

	var auth = userService.getAuthObj();

	auth.$onAuth(function(userAuth) {
		$scope.user = userAuth;
		// if (userAuth) {
		// 	var profileRef = new Firebase("https://mybrewerylist.firebaseio.com/users/" + userAuth.id);
		// 	$scope.profileList = $firebaseArray(profileRef);
		// }
		// else {
		// 	$scope.profileList;
		// }
	})

	

})