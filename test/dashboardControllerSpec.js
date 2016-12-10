describe('dashboardController', function() {

	var scope;
	var controller;
	var lodashMock;

	beforeEach(
		function(){
			mockDependency = {
				forEach: function() {
					return null;
				}
			};

			angular.mock.inject(function($rootScope, $controller) {
				scope = $rootScope.$new();
				controller = $controller('dashboardController', {
					'$scope': scope,
					'lodash': mockDependency,
				});
			});
		}
	);

	describe('.exists()', function() {
		it('should exist', function() {
			expect(controller).toBeDefined();
		});
	});
});


/*
beforeEach(angular.mock.module('netdash'));

var controller;

describe('.initiateData()', function() { //describe your app name
	beforeEach(inject(function(_$controller_) { //initialize your filter
		controller = _$controller_;
		console.log('controller: ' + JSON.stringify(_$controller_));
	}));
	it('should exist', function() {
		expect(controller).toBeDefined();
	});
});
*/

/*
	var controller;

	beforeEach(angular.mock.inject(function(_$controller_) {
		controller = _$controller_;
		console.log('controller: ' + JSON.stringify(controller));
	}));

	it('should exist', function() {
		expect(controller).toBeDefined();
	});

	it('should exist 2', function() {
		controller.initiateData();
		expect(controller.selectedEnvironment).not.toBe(null);
	});
});
*/
