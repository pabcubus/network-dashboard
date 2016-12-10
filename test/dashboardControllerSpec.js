describe('dashboardController', function() {
	beforeEach(angular.mock.module('netdash'));

	var controller;

	describe('.initiateData()', function() { //describe your app name
		beforeEach(inject(function(_$controller_) { //initialize your filter
			controller = _$controller_;
			console.log('controller: ' + JSON.stringify(controller));
		}));
		it('should exist', function() {
			expect(controller).toBeDefined();
		});
	});

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
	*/
});
