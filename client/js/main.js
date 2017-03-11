// Angular Logic

var app = angular.module('app', [
	'ngRoute'
]);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'AppController'
		})

		.when('/about', {
			templateUrl: 'partials/about.html',
			controller: 'AppController'
		})

		.when('/portfolio', {
			templateUrl: 'partials/portfolio.html',
			controller: 'AppController'
		})

		.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'AppController'
		})

		.otherwise({
			redirectTo: '/'
		});
});

app.controller('AppController', function($scope) {
	$scope.$on("$routeChangeSuccess", function (scope, next, current) {
        $scope.transitionState = "active"
    });
});


// JQuery Top Shrinking Navigation

$(document).ready(function(){
	$(window).scroll(function() { // check if scroll event happened
		if ($(document).scrollTop() > 40) { // check if user scrolled more than 50 from top of the browser window
  			$(".navbar-default").css({"opacity": "0.95", "padding": " 5px 0px 5px"}); 
		} else {
  			$(".navbar-default").css({"opacity": "0.85", "padding": "15px 0px 15px"}); 
		}
	});
});