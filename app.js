var myBreweryList = angular.module('myBreweryList',['ui.router']);

myBreweryList.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/home',
			controller: 'homeCtrl',
			templateUrl: 'home/homeTmpl.html',
		});
		// .state('search', {
		// 	url: '/search',
		// })


})