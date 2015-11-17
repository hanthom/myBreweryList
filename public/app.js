var myBreweryList = angular.module('myBreweryList',['ui.router']);

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
			// resolve: {
			// 	breweryData: function(mainService, $stateParams) {
			// 		return mainService.getBrew($stateParams.id)
			// 	}
			// }
		});


})