var app = angular.module('betterBlog', ['ngAnimate'])



app.controller('BlogController', ['$scope', '$http', '$window', function($scope, $http, $window) {
	$scope.entries = [[],[],[], [], []]
	$scope.click = [[], [], [], [], []]
	$scope.makeVisible = function(index) {
		
		if ($window.innerWidth > 1200)
			document.getElementById("s" + index).style.visibility = "visible"
	}

	$scope.makeInvisible = function(index) {
		// console.log("leave: s" + index + " --- " + count++)
		document.getElementById("s" + index).style.visibility = "hidden"
	}

	$scope.carData = [
		{
			"name": "2019 Chevrolet Bolt",
			"range": "238",
			"rangColor": "red",
			"horsepower": "200",
			"hpColor": "red",
			"chargeTime": "9.3 at 220V",
			"chargeTimeColor": "red",
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
			"chargeTimeColor": "green",
			"acceleration": "7.2",
			"accelerationColor": "red",
			"price": "$44,450",
			"priceColor": "green",
			"image": "/images/bmwi3.jpg"
		},
		{
			"name": "2019 FIAT 500e",
			"range": "84",
			"rangColor": "red",
			"horsepower": "135",
			"hpColor": "red",
			"chargeTime": "4 at 220V",
			"chargeTimeColor": "green",
			"acceleration": "6.7",
			"accelerationColor": "red",
			"price": "$33,210",
			"priceColor": "green",
			"image": "/images/fiat.jpg"
		},
		{
			"name": "2019 Kia Soul",
			"range": "111",
			"rangColor": "red",
			"horsepower": "109",
			"hpColor": "red",
			"chargeTime": "5 at 220V",
			"chargeTimeColor": "green",
			"acceleration": "7.6",
			"accelerationColor": "red",
			"price": "$33,950",
			"priceColor": "green",
			"image": "/images/kiasoul.jpg"
		},
		{
			"name": "2019 Hyundai Ioniq EV",
			"range": "124",
			"rangColor": "red",
			"horsepower": "118",
			"hpColor": "red",
			"chargeTime": "4 at 220V",
			"chargeTimeColor": "green",
			"acceleration": "9.7",
			"accelerationColor": "red",
			"price": "$30,315",
			"priceColor": "green",
			"image": "/images/hyundai.jpg"
		},
		{
			"name": "Lucid Air (released later this year)",
			"range": "215",
			"rangColor": "red",
			"horsepower": "400",
			"hpColor": "red",
			"chargeTime": "~4 at 220V",
			"chargeTimeColor": "green",
			"acceleration": "2.5",
			"accelerationColor": "green",
			"price": "$60,000",
			"priceColor": "green",
			"image": "/images/lucid-air.jpg"
		},
		{
			"name": "2021 Rivian R1S",
			"range": "400",
			"rangColor": "green",
			"horsepower": "402 - 700",
			"hpColor": "black",
			"chargeTime": "~4 at 220V",
			"chargeTimeColor": "green",
			"acceleration": "< 3",
			"accelerationColor": "green",
			"price": "$70,000",
			"priceColor": "green",
			"image": "/images/rivian.jpg"
		},
		{
			"name": "Farraday Future ff 91",
			"rangColor": "green",
			"range": "378",
			"horsepower": "1050",
			"hpColor": "green",
			"chargeTime": "~4.5 at 220V",
			"chargeTimeColor": "green",
			"acceleration": "2.39",
			"accelerationColor": "green",
			"price": "$180,000",
			"priceColor": "red",
			"image": "/images/ffp1.jpg"
		}
	]

	$scope.save = function(index) {

		$scope.entries[index].push($scope.notes["textS" + index])
		$scope.click[index].push(false)
		console.log($scope.entries)
	}

	$scope.clear = function(index) {
		$scope.notes["textS" + index] = ""
	}

	$scope.changeText = function(section, index) {
		$scope.click[section][index] = !$scope.click[section][index]
	}
	
	$scope.delete = function(section, index) {
		$scope.entries[section].splice(index, 1)
	}

	$scope.download = function() {
		let outputString = ""
		$scope.entries.forEach((arr, index) => {
			console.log(arr)
			outputString += "Section " + (index + 1) + " notes\n"
			arr.forEach(note => {
				outputString += "\t" + note + "\n"
			})
		})

		document.getElementById("dowload-notes").href = 'data:text/plain;charset=utf-8,'
          + encodeURIComponent(outputString);
        document.getElementById("dowload-notes").click()
	}
}])