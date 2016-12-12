describe('Users factory', function() {
	var $controller,
		dashboardController,
		lodash;

	beforeEach(angular.mock.module('ngLodash'));
	beforeEach(angular.mock.module('ui.router'));
	beforeEach(angular.mock.module('chart.js'));
	beforeEach(angular.mock.module('netdash'));

	beforeEach(inject(function(_$controller_, _lodash_) {
		$controller = _$controller_;
		lodash = _lodash_;

		// Add the factory as a controller dependency
		dashboardController = $controller('dashboardController', {
			'lodash': lodash
		});
	}));

	// Add a new test for our expected controller behavior
	it('should initialize all items with isOpened = false', function() {
		dashboardController.initiateData();
		var openedItems = lodash.filter(dashboardController.items.length, {
			'isOpened': true
		});
		expect(openedItems.length).toBe(0);
	});
});
