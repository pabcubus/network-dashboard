describe('dashboardController Unit Test', function() {
	var $controller,
		dashboardController,
		lodash;

	var items = [
		{
			"_id": "1",
			"name": "Mcfadden 39",
			"type": "build",
			"owner": "Mona Kinney",
			"started": "19/05/2015 05:16:59 AM",
			"status": "rejected",
			"metrics": {
				"status": "completed",
				"test": 64,
				"maintainability": 50,
				"security": 72,
				"workmanship": 58
			},
			"build": {
				"status": "not_passed",
				"date": "23/09/2014 07:27:27 AM"
			},
			"unit_test": {
				"status": "not_executed",
				"passed": 60,
				"not_passed": 40,
				"test_passed": "59%",
				"covered": 83
			},
			"functional_test": {
				"status": "not_executed",
				"passed": 60,
				"not_passed": 40,
				"test_passed": "59%",
				"covered": 71
			}
		}, {
			"_id": "2",
			"name": "Taylor 40",
			"type": "firewall",
			"owner": "Graciela Daniels",
			"started": "1/02/2014 11:31:10 AM",
			"status": "completed",
			"metrics": {
				"status": "passed",
				"test": 75,
				"maintainability": 80,
				"security": 81,
				"workmanship": 82
			},
			"build": {
				"status": "passed",
				"date": "1/04/2015 09:52:09 PM"
			},
			"unit_test": {
				"status": "passed",
				"passed": 60,
				"not_passed": 40,
				"test_passed": "59%",
				"covered": 80
			},
			"functional_test": {
				"status": "passed",
				"passed": 60,
				"not_passed": 40,
				"test_passed": "59%",
				"covered": 59
			}
		}
	];

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

	describe('.toggleData()', function() {
		it('should toggle the item', function() {
			dashboardController.items = items;
			dashboardController.initiateData();

			lodash.forEach(dashboardController.items, function(item){
				if (item._id === '2') item.isOpened = true;
			});

			var openedItem = lodash.find(dashboardController.items, {'_id' : '2'});
			expect(openedItem.isOpened).toBe(true);

			dashboardController.toggleData("1");
			expect(openedItem.isOpened).toBe(false);
		});

		it('should toggle the item and then close the others opened', function() {
			dashboardController.items = items;
			dashboardController.initiateData();

			var item = lodash.find(dashboardController.items, {
				'isOpened': true
			});

			dashboardController.toggleData("1");

			var openedItems = lodash.filter(dashboardController.items, {
				'isOpened': true
			});

			expect(openedItems.length).not.toBe(0);
		});
	});

	describe('.changeEnvironment()', function() {
		it('should change the environment and keep the ID and name of the environment', function() {
			dashboardController.selectedEnvironment.id = 0;
			dashboardController.changeEnvironment();
			expect(lodash.has(dashboardController.selectedEnvironment, 'id')).toBe(true);
		});
	});

	describe('.initiateData()', function() {
		it('should initialize all items with isOpened = false', function() {
			dashboardController.initiateData();
			var openedItems = lodash.filter(dashboardController.items, {
				'isOpened': true
			});
			expect(openedItems.length).toBe(0);
		});
	});
});
