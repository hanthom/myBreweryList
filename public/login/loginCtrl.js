myBreweryList.controller('loginCtrl', function($scope, userService, $state) {

	$scope.login = function() {
		return userService.login($scope.user).then(function() {
			console.log("Login successful")
			$state.go('home');
		}).catch(function(err) {
			$scope.error = "Login Error: " + err;
		})
	}
	
})