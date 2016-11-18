(function(){
	"use strict";
	
	var app = angular
				.module("tareasResourceMock", ["ngMockE2E"]);
	
	app.run(function($httpBackend){ 
		
		   var tareas = [
		                 {
		                     "tareaId" : "1",
		                     "asignadoA" : {
		                         "usuarioId" : "1",
		                         "nombre" : "Steve Rogers",
		                         "puestoId" : "2",
		                         "imagenPequena" : "imagenes/capitan32x32.png",
		                         "imagenGrande" : "imagenes/capitan128x128.png"
		                     },
		                     "descripcion" : "Crear view para listar tareas",
		                     "estado" : "PENDIENTE",
		                     "prioridad" : "ALTA"
		                 }, {"tareaId": "2",
		                     "asignadoA" : {
		                         "usuarioId":"3",
		                         "nombre":"Tony Stark",
		                         "puestoId" : "1",
		                         "imagenPequena":"imagenes/ironman32x32.png",
		                         "imagenGrande":"imagenes/ironman128x128.png"
		                     },
		                     "descripcion" : "Crear view para crear nuevas tareas",
		                     "estado" : "PENDIENTE",
		                     "prioridad" : "BAJA" },
		                 {"tareaId": "3",
		                     "asignadoA" : {
		                         "usuarioId":"8",
		                         "nombre":"Loki Laufeyson",
		                         "puestoId" : "4",
		                         "imagenPequena":"imagenes/loki32x32.png",
		                         "imagenGrande":"imagenes/loki128x128.png"
		                     },
		                     "descripcion" : "Crear view para crear nuevas tareas",
		                     "estado" : "PROCESO",
		                     "prioridad" : "BAJA" },
		                 {"tareaId": "4",
		                     "asignadoA" : {
		                         "usuarioId":"8",
		                         "nombre":"Loki Laufeyson",
		                         "puestoId" : "4",
		                         "imagenPequena":"imagenes/loki32x32.png",
		                         "imagenGrande":"imagenes/loki128x128.png"
		                     },
		                     "descripcion" : "Crear view para crear nuevas tareas",
		                     "estado" : "HECHO",
		                     "prioridad" : "MEDIA" }];
		             
		
		var tareasUrl = "/api/tareas";
		
		$httpBackend.whenGET(tareasUrl).respond(tareas);
		$httpBackend.whenGET(/paginas/).passThrough();
		
	});
	
})();