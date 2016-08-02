var app = angular.module("shoppingList", []);
app.controller("myCtrl", function ($scope){
	$scope.products = ["Milk", "Eggs", "Bread", "Yogurt"];
});