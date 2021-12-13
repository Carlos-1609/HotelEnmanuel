import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from '../../app.service';
import swal from 'sweetalert2'

@Component({
selector: 'get_estadores',
templateUrl: './get_estadores.component.html'

})

export class GetEstadoresComponent{
	public listado_estadores:any[];

	public estadore = {
		Cod_Estado_Reservacion:"",
		Descripcion : ""
	}

	ngOnInit(){
		this.get_estadores();
	}

	constructor(public service:AppService){	
		this.listado_estadores = [];
	}
	get_estadores(){
		var response;
		this.service.get_estadores().subscribe(
			data => response = data,
			err => {
				console.log("Error al consultar servicio");
			},
			() => {
				this.listado_estadores = response;
				console.log(response);
			}
		);
	}
	insert_estadores(){
	var response;
	this.service.insert_estadores(this.estadore).subscribe(
	 data => response = data,
	 err => {
	 console.log("Error al consultar servicio");
	 },
	 ()=> {
	 this.estadore={
	 	Cod_Estado_Reservacion:"",
		Descripcion: ""
	}
	swal.fire({
		title: "Codigo Estado Reservacion Ingresado",
		text: "Cod_Estado_Reservacion: "+response.insertId,
		icon: "success"
	})
	this.get_estadores();
	 }
	 );
	}
	delete_estadores(Cod_Estado_Reservacion){
		console.log("Registro a borrar: " + Cod_Estado_Reservacion);
		var response;
		var load={
			Cod_Estado_Reservacion:Cod_Estado_Reservacion
		}
		this.service.delete_estadores(load).subscribe(
		data => response = data,
		err => {
		console.log("Error al consultar servicio");
		},
		()=> {
		this.get_estadores();
		}
		);
	}//Fin del delete estadores
	update_estadores(Cod_Estado_Reservacion) {
      var response;
      this.service.update_estadores(this.estadore).subscribe(
        data => response = data,
        err => {
          console.log('Error al consultar servicio');
        },
        () => {
          this.estadore = {
           Cod_Estado_Reservacion: '',
           Descripcion: ''
          };
          this.get_estadores();
        }
      );
    }
	onPreUpdateEstadores(estadore){
		this.estadore={
			Cod_Estado_Reservacion:estadore.Cod_Estado_Reservacion,
			Descripcion:estadore.Descripcion
		}
	}
	 limpiarDatos(estadore) {
      this.estadore = {
        Cod_Estado_Reservacion: '',
        Descripcion: ''
      };
    }

}//Fin del Componente