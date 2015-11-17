myBreweryList.controller('registerCtrl', function($scope, userService, $state) {
	$scope.register = function() {
		userService.register($scope.newUser).then(function() {
			return userService.login($scope.newUser).then(function() {
				$state.go('home');
			})
		}).catch(function(err) {
			$scope.error = "Registration Error: " + err;
		})
	}
})