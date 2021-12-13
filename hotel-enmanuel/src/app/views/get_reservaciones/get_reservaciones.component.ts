import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from '../../app.service';
import swal from 'sweetalert2'

@Component({
selector: 'get_reservaciones',
templateUrl: './get_reservaciones.component.html'

})

export class GetReservacionesComponent{
	public listado_estado_reserva:any[];
	public listado_empleados:any[];
	public listado_reservaciones:any[];
	
	public reservaciones={
		Cod_Reservacion: "",
		Identidad: "",
        Cod_Estado_Reservacion: "",
        Cantidad_Adultos: "",
        Cantidad_Ninos: "",
        Fecha_Ingreso: "",
        Fecha_Salida: "",
        Cod_Empleado: "",
        Fecha_Reservacion: ""
	}
	constructor(public service:AppService){	
		this.listado_estado_reserva = [];
		this.listado_empleados = [];
		this.listado_reservaciones = [];
	}

	ngOnInit(){
	this.get_estadores();
	this.get_empleados();
	this.get_reservaciones();
	}

	get_reservaciones(){
		var response;
		this.service.get_reservaciones().subscribe(
			data => response = data,
			err => {
				console.log("Error al consultar el registro");
			},
			() => {
				this.listado_reservaciones = response;
				console.log(response);
			}
		);
	}
	
	get_estadores(){
		var response;
		this.service.get_estadores().subscribe(
			data => response = data,
			err => {
				console.log("Error al consultar el registro");
			},
			() => {
				this.listado_estado_reserva = response;
				console.log(response);
			}
		);
	}
	get_empleados(){
		var response;
		this.service.get_empleados().subscribe(
			data => response = data,
			err => {
				console.log("Error al consultar el registro");
			},
			() => {
				this.listado_empleados = response;
				console.log(response);
			}
		);
	}//fin del get estados reservacion
	insert_reservaciones(){
	var response;
	this.service.insert_reservaciones(this.reservaciones).subscribe(
	 data => response = data,
	 err => {
	 console.log("Error al consultar servicio");
	 },
	 ()=> {
	 this.reservaciones={
	 	Cod_Reservacion: "",
		Identidad: "",
        Cod_Estado_Reservacion: "",
        Cantidad_Adultos: "",
        Cantidad_Ninos: "",
        Fecha_Ingreso: "",
        Fecha_Salida: "",
        Cod_Empleado: "",
        Fecha_Reservacion: ""
	}
	swal.fire({
		title: "Reservacion Registrada",
		text: "Numero de Reservacion: "+response.insertId,
		icon: "success"
	})
	 }
	 );
	}
	delete_reservaciones(Cod_Reservacion){
		console.log("Registro a borrar: " + Cod_Reservacion);
		var response;
		var load={
			Cod_Reservacion:Cod_Reservacion
		}
		this.service.delete_reservaciones(load).subscribe(
		data => response = data,
		err => {
		console.log("Error al consultar servicio");
		},
		()=> {
		this.get_reservaciones();
		}
		);
	}
	update_reservaciones(Cod_Estado_Reservacion) {
      var response;
      this.service.update_reservaciones(this.reservaciones).subscribe(
        data => response = data,
        err => {
          console.log('Error al consultar servicio');
        },
        () => {
          this.reservaciones = {
            Cod_Reservacion: "",
			Identidad: "",
	        Cod_Estado_Reservacion: "",
	        Cantidad_Adultos: "",
	        Cantidad_Ninos: "",
	        Fecha_Ingreso: "",
	        Fecha_Salida: "",
	        Cod_Empleado: "",
	        Fecha_Reservacion: ""
          };
          this.get_reservaciones();
        }
      );
    }
	onPreUpdateReservaciones(reservaciones){
		this.reservaciones = {
            Cod_Reservacion:reservaciones.Cod_Reservacion,
			Identidad:reservaciones.Identidad,
	        Cod_Estado_Reservacion:reservaciones.Cod_Estado_Reservacion,
	        Cantidad_Adultos:reservaciones.Cantidad_Adultos,
	        Cantidad_Ninos:reservaciones.Cantidad_Ninos,
	        Fecha_Ingreso:reservaciones.Fecha_Ingreso,
	        Fecha_Salida:reservaciones.Fecha_Salida,
	        Cod_Empleado:reservaciones.Cod_Empleado,
	        Fecha_Reservacion:reservaciones.Fecha_Reservacion
        };
	}
	 limpiarDatos(reservaciones) {
      this.reservaciones = {
        Cod_Reservacion: "",
		Identidad: "",
	    Cod_Estado_Reservacion: "",
	    Cantidad_Adultos: "",
	    Cantidad_Ninos: "",
	    Fecha_Ingreso: "",
	    Fecha_Salida: "",
	    Cod_Empleado: "",
	    Fecha_Reservacion: ""
      };
    }
}//fin de la clase component