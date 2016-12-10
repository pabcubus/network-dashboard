app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/dashboard');
		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				templateUrl: 'screens/dashboard/html/dashboard.html',
				controller: 'dashboardController',
				controllerAs: 'dc'
			});
	}]);
