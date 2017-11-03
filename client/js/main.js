// Angular Logic

var app = angular.module('app', [
	'ngRoute'
]);


app.directive('hoverDirective', function() {
    return {
        restrict: 'AEC',
        link: function(scope, elem, attrs) {
        	$('.project').hover(function() {
				$(".cover",this).addClass("cover_darken");
				// $(".cover").css({"opacity": "0.75", "background-color": "black"}); 
				$(this).switchClass("hidden_text", "show_text", 500);
				console.log("I work");
				
			}, function() {
				$(".cover", this).removeClass("cover_darken");
				// $(".cover").css({"opacity": "0", "background-color": "black"});
				$(this).switchClass("show_text", "hidden_text", 500);
				
			});
        }
    };
});

// JQuery for Page Scroll Animation:
app.directive('scrollDirective', function() {
	return {
		restrict: 'AEC',
		link: function(scope, elem, attrs) {
			var scrollWin = function (selector) {
	    	jQuery('html, body').animate({
	    	scrollTop: jQuery(selector).offset().top
	    	}, 800);
	    }
	    
	    $("a[href*='#']:not(a[href^='#/'])").click(function(e) {
	    	scrollWin (jQuery(this).attr("href"));
	    	return false;
	    });
		}
	}
});

// app.directive('loadingDirective', function($http) {
// 	return {
// 		restrict: 'A',
// 		link: function (scope, elem, attrs) {
// 			scope.isLoading = function () {
//                 return $http.pendingRequests.length > 0;
//             };

//             scope.$watch(scope.isLoading, function (v)
//             {
//                 if(v){
//                     $('.loading2').show();
//                 }else{
//                     $('.loading2').delay(400).fadeOut(500);
//                 }
//             });
// 		}
// 	}
// });


app.directive('rotatingWordsDirective', function($http) {
	return {
		restrict: 'A',
		link: function (scope, elem, attrs) {
			$("#js-rotating").Morphext({
		        animation: "flipInX",
		        // separator: "|", // Overrides default ","
    			speed: 3000, // Overrides default 2000
		    });


		}
	}
})



// var routeLoadingIndicator = function($rootScope){
//   return {
//     restrict:'E',
//     template:"<h1 ng-if='isRouteLoading'>Loading...</h1>",
//     link:function(scope, elem, attrs){
//       scope.isRouteLoading = false;

//       $rootScope.$on('$routeChangeStart', function(){
//         scope.isRouteLoading = true;
//       });

//       $rootScope.$on('$routeChangeSuccess', function(){
//         scope.isRouteLoading = false;
//       });
//     }
//   };
// };


$('.project').hover(function() {
		$(".cover",this).addClass("cover_darken");
		// $(".cover").css({"opacity": "0.75", "background-color": "black"}); 
		$(this).switchClass("hidden_text", "show_text", 500);
		console.log("I work");
		
	}, function() {
		$(".cover", this).removeClass("cover_darken");
		// $(".cover").css({"opacity": "0", "background-color": "black"});
		$(this).switchClass("show_text", "hidden_text", 500);
		
	});


app.config(function ($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$locationProvider.html5Mode(true);
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

		.when('/zenefitsTool', {
			templateUrl: 'partials/zenefitsTool.html',
			controller: 'AppController'
		})

		.when('/touchFace', {
			templateUrl: 'partials/touchFace.html',
			controller: 'AppController'
		})

		.when('/herbalFusion', {
			templateUrl: 'partials/herbalFusion.html',
			controller: 'AppController'
		})

		.when('/puzzlePic', {
			templateUrl: 'partials/puzzlePic.html',
			controller: 'AppController'
		})

		.when('/loudounClearMarketing', {
			templateUrl: 'partials/loudounClearMarketing.html',
			controller: 'AppController'
		})

		.when('/reactWeatherApp', {
			templateUrl: 'partials/reactWeatherApp.html',
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




// JQuery


$(document).ready(function(){

	//Loading Screen
	$(window).on('load', function(){
		$('.loading').delay(400).fadeOut(500);
	});

	// Top Shrinking Navigation
	$(window).scroll(function() { // check if scroll event happened
		if ($(document).scrollTop() > 40) { // check if user scrolled more than 50 from top of the browser window
  			$(".navbar-default").css({"opacity": "0.95", "padding": " 5px 0px 5px"}); 
		} else {
  			$(".navbar-default").css({"opacity": "1.0", "padding": "15px 0px 15px"}); 
		}
	});



	// JQuery for Page Scroll Animation:

	// var scrollWin = function (selector) {
 //    	jQuery('html, body').animate({
 //    	scrollTop: jQuery(selector).offset().top
 //    	}, 800);
 //    }
    
 //    $("a[href*='#']:not(a[href^='#!/'])").click(function(e) {
 //    	scrollWin (jQuery(this).attr("href"));
 //    	return false;
 //    });

	// Testing for SideScrolling on Partial Click:
    // var scrollSide = function (selector) {
    // 	jQuery('html, body').animaste({
    // 	scrollLeft: jQuery(selector).offset().left
    // 	}, 800);
    // }

    // $("a[href='#!/'])").click(function(e) {
    // 	scrollSide: (jQuery(this).attr("href"));
    // 	return false;
    // });


    // Close Open Dropdown by Clicking Outside of Menu:
    $(document).click(function (event) {
	    var clickover = $(event.target);
	    var $navbar = $(".navbar-collapse");               
	    var _opened = $navbar.hasClass("in");
	    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
	        $navbar.collapse('hide');
	    }
	});


	// JQuery for floating Contact Icons:
	$('#linkedin, #github, #soundcloud, #resume, #email').hover(function() {
		$(this).addClass("floating");
			
	}, function() {
		$(this).removeClass("floating");
			
	});

	

	// JQuery for Darken on Hover Portfolio

	$('.project').hover(function() {
		$(".cover",this).addClass("cover_darken");
		// $(".cover").css({"opacity": "0.75", "background-color": "black"}); 
		$(this).switchClass("hidden_text", "show_text", 500);
		console.log("I work");
		
	}, function() {
		$(".cover", this).removeClass("cover_darken");
		// $(".cover").css({"opacity": "0", "background-color": "black"});
		$(this).switchClass("show_text", "hidden_text", 500);
		
	});



	// TEST
	
		




});



