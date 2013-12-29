var questy = angular.module('questy', [ 'ngRoute', 'ngCookies' ]);

questy.config([ '$routeProvider', function($routeProvider) {

	return $routeProvider.when('/qform', {
		templateUrl : 'views/qform.html'
	}).otherwise({
		redirectTo : '/qform'
	});

} ]);

questy.service('loginService', function($location, $cookieStore, $rootScope, $cookies) {

	// the user is stuck at '/login' until they are logged in
	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		if (!isLoggedIn && next.redirectTo !== '/login'
				&& next.originalPath !== '/login') {
			// redirect login page
		}
	});

	var isLoggedIn = function() {
		return $cookies.JSESSIONID;
	};

	var logout = function() {

	};

	return {
		isLoggedIn : isLoggedIn,
		logout : logout
	};
});

questy.controller('QForm', function($scope, loginService) {
	$scope.submit = function() {
		alert(loginService.isLoggedIn());
	};
});
