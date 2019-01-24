var app = angular.module('betterBlog', ['ngAnimate'])



app.controller('BlogController', ['$scope', '$http', function($scope, $http) {
	$scope.makeVisible = function(index) {
		document.getElementById("p0").style.visibility = "visible"
	}

	$scope.makeInvisible = function(index) {
		document.getElementById("p0").style.visibility = "hidden"
	}
}])