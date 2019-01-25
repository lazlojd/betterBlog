var app = angular.module('betterBlog', ['ngAnimate'])



app.controller('BlogController', ['$scope', '$http', function($scope, $http) {
	$scope.makeVisible = function(index) {
		document.getElementById("p0").style.visibility = "visible"
	}

	$scope.makeInvisible = function(index) {
		document.getElementById("p0").style.visibility = "hidden"
	}

	$scope.carData = [
		{
			"name": "2019 Chevrolet Bolt",
			"range": "238",
			"rangColor": "red",
			"horsepower": "200",
			"hpColor": "red",
			"chargeTime": "9.3 at 220V",
			"chargeTimeColor": "green",
			"acceleration": "6.5",
			"accelerationColor": "red",
			"price": "$36,620",
			"priceColor": "green",
			"image": "/images/bolt.jpg"
		},
		{
			"name": "2019 BMW i3",
			"range": "153",
			"rangColor": "red",
			"horsepower": "181",
			"hpColor": "red",
			"chargeTime": "6.5 at 220V",
			"acceleration": "7.2",
			"price": "$44,450",
			"image": "/images/bmwi3.jpg"
		},
		{
			"name": "2019 FIAT 500e",
			"range": "84",
			"rangColor": "red",
			"horsepower": "135",
			"hpColor": "red",
			"chargeTime": "4 at 220V",
			"acceleration": "6.7",
			"price": "$33,210",
			"image": "/images/fiat.jpg"
		},
		{
			"name": "2019 Kia Soul",
			"range": "111",
			"rangColor": "red",
			"horsepower": "109",
			"hpColor": "red",
			"chargeTime": "5 at 220V",
			"acceleration": "7.6",
			"price": "$33,950",
			"image": "/images/kiasoul.jpg"
		},
		{
			"name": "2019 Hyundai Ioniq EV",
			"range": "124",
			"rangColor": "red",
			"horsepower": "118",
			"hpColor": "red",
			"chargeTime": "4 at 220V",
			"acceleration": "9.7",
			"price": "$30,315",
			"image": "/images/hyundai.jpg"
		},
		{
			"name": "Lucid Air (released later this year)",
			"range": "215",
			"rangColor": "red",
			"horsepower": "400",
			"hpColor": "red",
			"chargeTime": "~4 at 220V",
			"acceleration": "2.5",
			"price": "$60,000",
			"image": "/images/lucid-air.jpg"
		},
		{
			"name": "2021 Rivian R1S",
			"range": "400",
			"rangColor": "green",
			"horsepower": "402 - 700",
			"hpColor": "black",
			"chargeTime": "~4 at 220V",
			"acceleration": "< 3",
			"price": "$70,000",
			"image": "/images/rivian.jpg"
		},
		{
			"name": "Farraday Future ff 91",
			"rangColor": "green",
			"range": "378",
			"horsepower": "1050",
			"hpColor": "green",
			"chargeTime": "~4.5 at 220V",
			"acceleration": "2.39",
			"price": "$180,000",
			"image": "/images/ffp1.jpg"
		}
	]

	
}])