var questy = angular.module('questy', [ 'ngRoute', 'ngCookies' ]);

questy.config([ '$routeProvider', function($routeProvider) {

	return $routeProvider.when('/qform', {
		templateUrl : 'views/qform.html'
	}).otherwise({
		redirectTo : '/qform'
	});

} ]);

questy.service('loginService', function() {
	return {
		user : args
	};
});

questy.controller('LoginController', function($scope, $location, loginService) {
	$scope.user = loginService.user;
});

questy.controller('QForm', function($scope, $http) {

});
