var app = angular.module("shoppingList", []);
app.controller("myCtrl", function ($scope){
	$scope.products = ["Milk", "Eggs", "Bread", "Yogurt"];
	$scope.addItem = function () {
		$scope.errormessage = "";
		if (!$scope.addMe) {return;}
		if ($scope.products.indexOf($scope.addMe) == -1){
			$scope.products.push($scope.addMe);
		}else {
			$scope.errormessage = "The item is already in your shopping list.";
		}
	};
	$scope.removeItem = function (x) {
		$scope.errormessage = "";
		$scope.products.splice(x, 1);
	}
});