angular.module("ecommerceApp").service("productsService", function($http, $q){

	this.getProducts = function(){
		var deferred = $q.defer();
		$http({
			method: "GET",
			url: "/api/products"
		}).then(function(result){
			productsComplete = result.data;
			deferred.resolve(productsComplete);
		})
		return deferred.promise;
	};

	this.addProduct = function(newProd){
		return $http({
			method: "POST",
			url: "/api/products",
			data: newProd
		});
	};

	this.editProduct = function(id, selectedProd){
		return $http({
			method: "PUT",
			url: "/api/products/" + id,
			data: selectedProd
		})
	};

	this.deleteProduct = function(id){
		return $http({
			method: "DELETE",
			url: "/api/products/" + id
		})
	};

});






