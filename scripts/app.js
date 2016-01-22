(function(){
var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngSanitize']);


app.controller('WelcomeController',function($scope, $rootScope, CONFIG, Content){
	$("html").css("background","url(\"/img/landingphotoblue.jpg\") no-repeat center center fixed");
	$scope.noSidebar = true;
})

.controller('PageController',function($scope, $rootScope, $routeParams, $location, $timeout, CONFIG, Content){

	$("html").css("background", "none");
		
	var content = Content.loadContent();
	$scope.content = {};

	// Set language
	if($routeParams.lang == 'fr')
		$scope.lang = 'fr';
	else if($routeParams.lang == 'en')
		$scope.lang = 'en';

	$rootScope.lang = $scope.lang;

	// Load content
	$rootScope.pages = [];
	for (var i = content[$scope.lang].length - 1; i >= 0; i--) {
		$scope.content[content[$scope.lang][i].id] = content[$scope.lang][i];
		if(content[$scope.lang][i].id != "register")
			$rootScope.pages.push({id: content[$scope.lang][i].id, title: content[$scope.lang][i].content.title})
	};

	if($scope.content[$routeParams.page] != undefined)
		$scope.page = $scope.content[$routeParams.page].content;
	else
		$location.path("/" + $scope.lang + "/about");

	$scope.page.id = $routeParams.page;

	$timeout(function(){
  		$(".sidebar").height($(document).height());
	},1000,false);
	
})

.controller('RegisterController',function($scope, $rootScope, $routeParams, $location, $http, CONFIG, Content){
	var person = localStorage.getItem("CUCSCattendee");

	$scope.confirm = false;

	if( person == undefined)
	{
		$scope.person = {
		    fname: "",
		    lname: "",
		    email: "",
		    school: "",
		    activity: false,
		    residence: false,
		    speaker: false,
		    abstract: 
		        {
		            title: "",
		            text: "",
		            bursary: false
		        },
		    notes: "none",
		    payment: "",
		    status: "PENDING"
		};	
	}
	else
	{
		$scope.person = JSON.parse(person);
	}
	

	$scope.log = function(str)
	{
		var url = "https://api.mongolab.com/api/1/databases/sandbox/collections/cucsc?apiKey=bup2ZBWGDC-IlRrpRsjTtJqiM_QKSmKa";
		$scope.person.payment = str;
		console.log($scope.person);
		localStorage.setItem("CUCSCattendee", JSON.stringify($scope.person));

		$scope.person._id = $scope.person.email;
		$http.post(url, $scope.person);
	}

	$scope.confirmation = function(bool)
	{
		$scope.confirm = bool;
	}

	$scope.clearData = function()
	{
		localStorage.removeItem("CUCSCattendee");
		$scope.confirm = false;
		$scope.person = {
		    fname: "",
		    lname: "",
		    email: "",
		    school: "",
		    activity: false,
		    residence: false,
		    speaker: false,
		    abstract: 
		        {
		            title: "",
		            text: "",
		            bursary: false
		        },
		    notes: "none",
		    payment: "",
		    status: "PENDING"
		};
	}
})

.controller('SuccessController',function($scope, $rootScope, $routeParams, $location, CONFIG, Content){
	var person = localStorage.getItem("CUCSCattendee");

	$scope.person._id = $scope.person.email;
	$scope.person.status = "PAID";
	$http.post(url, $scope.person);
})

.controller('CancelController',function($scope, $rootScope, $routeParams, $location, CONFIG, Content){
	var person = localStorage.getItem("CUCSCattendee");

	$scope.person._id = $scope.person.email;
	$scope.person.status = "CANCELLED";
	$http.post(url, $scope.person);
})


.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider.when('/',{
		templateUrl: 'welcome.html',
		controller: 'WelcomeController'
	})
	.when('/cancel',{
		templateUrl: 'cancel.html',
		controller: 'CancelController'
	})
	.when('/success',{
		templateUrl: 'success.html',
		controller: 'SuccessController'
	})
	.when('/:lang/:page',{
		templateUrl: 'page.html',
		controller: 'PageController'
	});
	

});

})();
