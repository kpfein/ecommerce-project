angular.module("ecommerceApp", ["ui.router"])

.config(function($urlRouterProvider, $stateProvider){

	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state("home", {
			url: "/",
			templateUrl: "js/templates/homeTmpl.html",
		})
		.state("products", {
			url: "/products",
			controller: "productsCtrl",
			templateUrl: "js/templates/productsTmpl.html"
		})
		.state("admin", {
			url: "/products/admin",
			controller: "productsEditCtrl",
			templateUrl: "js/templates/productsEditTmpl.html"
		})
		.state("admin.add", {
			url: "/add",
			controller: "productsEditCtrl",
			templateUrl: "js/templates/addTmpl.html"
		})
		.state("admin.edit", {
			url: "/edit",
			controller: "productsEditCtrl",
			templateUrl: "js/templates/editTmpl.html"
		})
		.state("admin.delete", {
			url: "/delete",
			controller: "productsEditCtrl",
			templateUrl: "js/templates/deleteTmpl.html"
		})

});