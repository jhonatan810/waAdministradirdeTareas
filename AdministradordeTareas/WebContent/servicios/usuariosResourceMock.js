(function(){
	"use strict";

	
	var app = angular.module("usuariosResourceMock", ["ngMockE2E"]);
	
	app.run(function($httpBackend){
		var usuarios = [];
		
		
		var usuariosUrl = "/api/usuarios";
		
		$httpBackend.whenGET(usuariosUrl).respond(usuarios);
		$httpBackend.whenGET(/paginas/).passThrough();
	})
})();
