var questy = angular.module('questy', [ 'ngRoute' ]);

questy.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/qform', {
		templateUrl : 'qform.html'
	}).when('/login', {
		templateUrl : 'login.html'
	}).otherwise({
		redirectTo : '/qform'
	});

} ]);

questy.controller('QForm', function($scope) {
	$scope.submit = function() {
		alert($scope.title);
	};
});
