var app = angular.module('netdash', ['ngLodash', 'ui.router', 'chart.js']);
app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/dashboard');
		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				templateUrl: 'screens/dashboard/html/dashboard.html',
				controller: 'dashboardController',
				controllerAs: 'dc'
			})
			.state('test-dashboard', {
				url: '/test/dashboard',
				templateUrl: 'test/dashboardControllerTest.html'
			});
	}]);
