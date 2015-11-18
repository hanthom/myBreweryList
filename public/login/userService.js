myBreweryList.service('userService', function($firebaseAuth, $state, $firebaseObject) {

	var authRef = new Firebase("https://mybrewerylist.firebaseio.com/");
	var auth = $firebaseAuth(authRef);

	var isNewUser = true;

	this.getAuth = function() {
		return auth.$getAuth();
	}

	this.register = function(newUser) {
		return auth.$createUser(newUser).then(function(authData) {
			var id = authData.uid;
			var userRef = new Firebase("https://mybrewerylist.firebaseio.com/users/" + id);
			var userObj = $firebaseObject(userRef);
			userObj.email = newUser.email;
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
	

	// this.logout = function(user) {
	// 	return auth.$unauth();
	// }
})