angular.module("ecommerceApp").controller("productsCtrl", function($scope, productsService){

	$scope.showProducts = function(){
		productsService.getProducts().then(function(data){
			$scope.products = data;
		})
	}();


	
});