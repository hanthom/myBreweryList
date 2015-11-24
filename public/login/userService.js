myBreweryList.service('userService', function($firebaseAuth, $state, $firebaseObject) {

	var authRef = new Firebase("https://mybrewerylist.firebaseio.com/");
	var auth = $firebaseAuth(authRef);

	this.getAuth = function() {
		return auth.$getAuth();
	}

	this.register = function(newUser) {
		return auth.$createUser(newUser).then(function(authData) {
			var id = authData.uid;
			var userRef = new Firebase("https://mybrewerylist.firebaseio.com/users/" + id);
			var userObj = $firebaseObject(userRef);
			userObj.email = newUser.email;
			userObj.id = id;
			console.log(userObj);
			return userObj.$save();
		});
	}

	this.login = function(user) {
		return auth.$authWithPassword(user);
	}

	this.getAuthObj = function() {
		return auth;
	}

	// This part was just added for logging out.

	this.logout = function(user) {
		return auth.$unauth();
	}

	auth.$onAuth(function(authData) {
		if (!authData) {
			$state.go('home');
		}
	})
})