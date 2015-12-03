angular.module("ecommerceApp").controller("productsEditCtrl", function($scope, productsService){

	$scope.showProducts = function(){
		productsService.getProducts().then(function(data){
			$scope.products = data;
		})
	}();

	$scope.addProd = function(newProd){
		if(($scope.newProd.title) && ($scope.newProd.description) && ($scope.newProd.price)){
			productsService.addProduct(newProd).then(function(){
				$scope.newProd.title = '';
				$scope.newProd.desc = '';
				$scope.newProd.price = '';
			})
		} else {
			alert("All fields required.")
		}
	};

	$scope.editProd = function(){
		productsService.editProduct($scope.selectedProd._id, $scope.selectedProd).then(function(){
			$scope.selectedProd = '';
		})
	};

	$scope.deleteProd = function(){
		productsService.deleteProduct($scope.selectedProd._id).then(function(){
			$scope.selectedProd = '';
		})
	}

});