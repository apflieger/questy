var questy = angular.module('questy', []);

questy.controller('QForm', function($scope) {
	$scope.submit = function() {
		alert($scope.title);
	};
});