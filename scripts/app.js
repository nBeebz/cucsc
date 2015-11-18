(function(){
var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.controller('AppController', function($scope) {
	$scope.someStuff = "Hello World";
})

.controller('WelcomeController',function($scope){
	$scope.someStuff = "WELCOME!"
})

.controller('EnglishController',function($scope){
	$scope.register = "Register";
	$scope.hello = "Hello, World!"

	$scope.navigation = [
		{dest: "en/about", text: "About the CUCSC" },
		{dest: "en/keynotes", text: "Keynote Speakers" },
		{dest: "en/schedule", text: "Program & Schedule" },
		{dest: "en/women", text: "Women in Computing" },
		{dest: "en/comittee", text: "About the Comittee" },
		{dest: "en/sponsors", text: "Sponsors" },
		{dest: "en/contact", text: "Contact Us" }
	];
})

.controller('FrenchController',function($scope){
	$scope.register = "Registre";
	$scope.hello = "Bonjour, La Monde!"

	$scope.navigation = [
		{dest: "en/about", text: "About the CUCSC" },
		{dest: "en/keynotes", text: "Keynote Speakers" },
		{dest: "en/schedule", text: "Program & Schedule" },
		{dest: "en/women", text: "Women in Computing" },
		{dest: "en/comittee", text: "About the Comittee" },
		{dest: "en/sponsors", text: "Sponsors" },
		{dest: "en/contact", text: "Contact Us" }
	];
})

.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider.when('/',{
		templateUrl: 'welcome.html',
		controller: 'WelcomeController'
	})
	.when('/en',{
		templateUrl: 'home.html',
		controller: 'EnglishController'
	})
	.when('/en/:page',{
		templateUrl: 'home.html',
		controller: 'EnglishController'
	})
	.when('/fr',{
		templateUrl: 'home.html',
		controller: 'FrenchController'
	})
	.when('/fr/:page',{
		templateUrl: 'home.html',
		controller: 'FrenchController'
	});
});

})();

