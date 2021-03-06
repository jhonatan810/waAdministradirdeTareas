(function(){
	"use strict";
	
	var app = angular.module("AdministradordeTareas", ["ui.router","common", "tareasResourceMock"]);
	
	app.config(["$stateProvider", "$urlRouterProvider", 
	            function($stateProvider, $urlRouterProvider){
	
					$stateProvider
							.state("inicio",{
								url: "/",
								templateUrl:"paginas/bienvenidos.html"	
							})
							.state("tareas",{
								url: "/tareas",
								templateUrl:"paginas/tareas.html",
								controller: "TareasCtrl as vm"
							})
							.state("usuarios",{
								url: "/usuarios",
								templateUrl:"paginas/usuarios.html"	
							})
							.state("estadisticas",{
								url: "/estadisticas",
								templateUrl:"paginas/estadisticas.html"	
							});
		
				}]);
})();