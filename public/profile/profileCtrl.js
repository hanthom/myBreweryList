myBreweryList.controller('profileCtrl', function($scope, profileService, $firebaseArray) {

	$scope.profileList = $firebaseArray(profileRef);

	$scope.saveToProfileList = function(name, id) {
		$scope.profileList.$add({
			name: name,
			id: id,
		})
	}

})