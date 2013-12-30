var questy = angular.module('questy', [ 'ngRoute', 'ngCookies' ]);

questy.config([ '$routeProvider', function($routeProvider, loginService) {

	return $routeProvider.when('/qform', {
		templateUrl : 'views/qform.html'
	}).otherwise({
		redirectTo : '/qform'
	});

} ]);

questy.service('loginService', function($http, $location, $cookieStore,
		$rootScope) {

	var logout = function() {
		
	};

	return {
		logout : logout
	};
});

questy.controller('LoginController', function($scope, $location, loginService) {
	$scope.logout = function() {
		loginService.logout();
		$scope.isLoggedIn = false;
	};

});

questy.controller('QForm', function($scope, $http) {
	$scope.submit = function() {

	};
});
