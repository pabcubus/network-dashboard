app.controller('dashboardController', function($scope, lodash) {
	var self = this;

	self.items = [{
		"_id": "584b86e84677b31424770904",
		"name": "Aguilar 26",
		"type": "firewall",
		"owner": "Bright Rojas",
		"started": "26/01/2016 08:20:38 AM",
		"state": "pending",
		"metrics": {
			"status": "not_executed",
			"test": 35,
			"maintainability": 67,
			"security": 86,
			"workmanship": 81
		},
		"build": {
			"status": "not_executed",
			"date": "8/09/2014 09:51:45 PM"
		},
		"unit_test": {
			"status": "not_executed",
			"passed": 60,
			"not_passed": 40,
			"test_passed": "59%",
			"covered": 62
		},
		"functional_test": {
			"status": "not_executed",
			"passed": 60,
			"not_passed": 40,
			"test_passed": "59%",
			"covered": 69
		}
	}, {
		"_id": "584b86e8d60e98541546df58",
		"name": "Buck 20",
		"type": "build",
		"owner": "Harding Gilbert",
		"started": "4/05/2014 11:19:45 AM",
		"state": "completed",
		"metrics": {
			"status": "passed",
			"test": 39,
			"maintainability": 80,
			"security": 85,
			"workmanship": 96
		},
		"build": {
			"status": "passed",
			"date": "4/07/2016 06:09:15 AM"
		},
		"unit_test": {
			"status": "passed",
			"passed": 60,
			"not_passed": 40,
			"test_passed": "59%",
			"covered": 81
		},
		"functional_test": {
			"status": "passed",
			"passed": 60,
			"not_passed": 40,
			"test_passed": "59%",
			"covered": 61
		}
	}, {
		"_id": "584b86e81a5660d9347b4ef0",
		"name": "Le 30",
		"type": "firewall",
		"owner": "Luisa Medina",
		"started": "15/10/2014 06:53:33 AM",
		"state": "running",
		"metrics": {
			"status": "passed",
			"test": 32,
			"maintainability": 95,
			"security": 83,
			"workmanship": 76
		},
		"build": {
			"status": "passed",
			"date": "13/07/2014 10:31:03 PM"
		},
		"unit_test": {
			"status": "passed",
			"passed": 60,
			"not_passed": 40,
			"test_passed": "59%",
			"covered": 83
		},
		"functional_test": {
			"status": "running",
			"passed": 60,
			"not_passed": 40,
			"test_passed": "59%",
			"covered": 62
		}
	}, {
		"_id": "584b86e87b60d0e6c3fb16f1",
		"name": "Mcfadden 39",
		"type": "build",
		"owner": "Mona Kinney",
		"started": "19/05/2015 05:16:59 AM",
		"state": "rejected",
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
		"_id": "584b86e8a8b34381bf5585a7",
		"name": "Taylor 40",
		"type": "firewall",
		"owner": "Graciela Daniels",
		"started": "1/02/2014 11:31:10 AM",
		"state": "completed",
		"metrics": {
			"status": "passed",
			"test": 65,
			"maintainability": 51,
			"security": 54,
			"workmanship": 52
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
	}];

	self.toggleData = function(id) {
		var item = lodash.find(self.items, {
			"_id": id
		});

		if (lodash.isObject(item)) {
			if (item.isOpened) {
				item.isOpened = false;
			} else {
				self.initiateData();
				item.isOpened = true;
			}
		}
	};

	self.initiateData = function() {
		lodash.forEach(self.items, function(item) {
			item.isOpened = false;

			item.metrics.test_status = 	(70 > item.metrics.test && item.metrics.test >= 50) ? 'alert' :
										(80 > item.metrics.test && item.metrics.test >= 70) ? 'warning' :  'ok';

			item.metrics.maintainability_status = 	(70 > item.metrics.maintainability && item.metrics.maintainability >= 50) ? 'alert' :
										(80 > item.metrics.maintainability && item.metrics.maintainability >= 70) ? 'warning' :  'ok';

			item.metrics.security_status = 	(70 > item.metrics.security && item.metrics.security >= 50) ? 'alert' :
										(80 > item.metrics.security && item.metrics.security >= 70) ? 'warning' :  'ok';

			item.metrics.workmanship_status = 	(70 > item.metrics.workmanship && item.metrics.workmanship >= 50) ? 'alert' :
										(80 > item.metrics.workmanship && item.metrics.workmanship >= 70) ? 'warning' :  'ok';

			item.unit_test.graph_data 		= {
				colors: ['#72AC4D', '#EB7D3B'],
				labels: ['', ''],
				values: [item.unit_test.passed, item.unit_test.not_passed]
			};
			item.functional_test.graph_data = {
				colors: ['#72AC4D', '#EB7D3B'],
				labels: ['', ''],
				values: [item.functional_test.passed, item.functional_test.not_passed]
			};
		});
	};

	self.initiateData();
});
