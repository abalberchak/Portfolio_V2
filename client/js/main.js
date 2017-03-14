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
  			$(".navbar-default").css({"opacity": "0.90", "padding": " 5px 0px 5px"}); 
		} else {
  			$(".navbar-default").css({"opacity": "1.0", "padding": "15px 0px 15px"}); 
		}
	});



	// JQuery for Page Scroll Animation:

	var scrollWin = function (selector) {
    	jQuery('html, body').animate({
    	scrollTop: jQuery(selector).offset().top
    	}, 800);
    }
    
    $("a[href*='#']:not(a[href^='#!/'])").click(function(e) {
    	scrollWin (jQuery(this).attr("href"));
    	return false;
    });

// Testing for SideScrolling on Partial Click:
    // var scrollSide = function (selector) {
    // 	jQuery('html, body').animate({
    // 	scrollLeft: jQuery(selector).offset().left
    // 	}, 800);
    // }

    // $("a[href='#!/'])").click(function(e) {
    // 	scrollSide: (jQuery(this).attr("href"));
    // 	return false;
    // });


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

	// Modal:
	$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    	});
	});

});