var myBreweryList = angular.module('myBreweryList',['ui.router', 'firebase']);

myBreweryList.constant("fb", {url: "https://mybrewerylist.firebaseio.com/"})

myBreweryList.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/home',
			controller: 'homeCtrl',
			templateUrl: 'home/homeTmpl.html',
		})
		.state('search', {
			url: '/search',
			controller: 'searchCtrl',
			templateUrl: 'search/searchTmpl.html',
		})
		.state('brewery', {
			url: '/brewery/:id',
			controller: 'breweryCtrl',
			templateUrl: 'brewery/breweryTmpl.html',
			resolve: {
				breweryData: function(mainService, $stateParams) {
					return mainService.getBrew($stateParams.id)
				}
			}
		})
		.state('login', {
			url: '/login',
			controller: 'loginCtrl',
			templateUrl: 'login/loginTmpl.html'
		})
		.state('register', {
			url: '/register',
			controller: 'registerCtrl',
			templateUrl: 'login/registerTmpl.html',
		})
		.state('profile', {
			url: '/profile',
			controller: 'profileCtrl',
			templateUrl: 'profile/profileTmpl.html',
		});


})