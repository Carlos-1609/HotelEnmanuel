import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../app.service';

@Component({
	selector: 'get_niveles_accesos',
	templateUrl: './get_niveles_accesos.component.html'
})

export class GetNivelesAccesosComponent{
	public listado_niveles_accesos:any[];

	constructor(public service:AppService){
		this.listado_niveles_accesos = [];
	}

	public nivel_acceso = {
		Descripcion: ""
	}

	ngOnInit()
	{
		this.get_niveles_accesos();
	}

	get_niveles_accesos(){
		var response;
		this.service.get_niveles_accesos().subscribe(
			data => response = data,
			err => {
				console.log("Error al consultar servicio");
			},
			()=>{
				this.listado_niveles_accesos = response;
				console.log(response);
			}
		);
	}

	insert_nivel_acceso(){
 	var response; 
 	this.service.insert_nivel_acceso(this.nivel_acceso).subscribe(
 		data => response=data,
 		err=>{
 		console.log("Error al consultar servicio");
 		},
	 	()=>{
	 		this.nivel_acceso = {
	 			Descripcion:""
	 		}
	 		this.get_niveles_accesos();
	 	}
	 	);
	}

	update_nivel_acceso(Cod_Nivel){
	console.log("Registro a modificar"+ Cod_Nivel);
	console.log("Registro a modificar"+ this.nivel_acceso.Descripcion);
	var response;

	var load={
		Descripcion:this.nivel_acceso.Descripcion,
		Cod_Nivel:Cod_Nivel
	}
	this.service.update_nivel_acceso(load).subscribe(
		data=> response=data,
		err=>{
			console.log("Error al consultar servicio");
		},
		()=>{
			
			this.get_niveles_accesos();
		}
		);
	}	

	delete_nivel_acceso(Cod_Nivel){
		console.log("Registro a borrar: "+Cod_Nivel);
		var response;
		var load={
			Cod_Nivel:Cod_Nivel
		}
		this.service.delete_nivel_acceso(load).subscribe(
		data=>response=data,
		err=>{
			console.log("Error al consultar servicio");
		},
		()=>{
			this.get_niveles_accesos();
			}
		);
	}
}