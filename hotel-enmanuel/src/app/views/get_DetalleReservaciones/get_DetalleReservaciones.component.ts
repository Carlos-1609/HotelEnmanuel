import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from '../../app.service';
import swal from 'sweetalert2'

@Component({
selector: 'get_detalleres',
templateUrl: './get_DetalleReservaciones.component.html'

})

export class GetDetalleReservacionesComponent{

	public listado_detallereservaciones:any[];
	public listado_habitaciones:any[];
	public listado_reservaciones:any[];

	public detalleres={
		Cod_Reservacion: "",
		Numero_Habitacion: "",
		Cod_Detalle: ""
	}

	constructor(public service:AppService){	
		this.listado_detallereservaciones = [];
		this.listado_reservaciones = [];
		this.listado_habitaciones = [];
	}
	ngOnInit(){
	this.get_detallereservaciones();
	this.get_habitaciones();
	this.get_reservaciones();
	
	}
	get_detallereservaciones(){
		var response;
		this.service.get_detallereservaciones().subscribe(
			data => response = data,
			err => {
				console.log("Error al consultar el registro");
			},
			() => {
				this.listado_detallereservaciones = response;
				console.log(response);
			}
		);
	}

	get_habitaciones(){
		var response;
		this.service.get_habitaciones().subscribe(
			data => response = data,
			err => {
				console.log("Error al consultar el registro");
			},
			() => {
				this.listado_habitaciones = response;
				console.log(response);
			}
		);
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

	insert_detallereservaciones(){
	var response;
	this.service.insert_detallereservaciones(this.detalleres).subscribe(
	 data => response = data,
	 err => {
	 console.log("Error al consultar servicio");
	 },
	 ()=> {
	 this.detalleres={
	 	Cod_Reservacion: "",
		Numero_Habitacion: "",
		Cod_Detalle: ""
	}
	swal.fire({
		title: "Detalle de Reservacion Registrada",
		icon: "success"
	})
	 }
	 );
	}

	delete_detallereservaciones(Cod_Detalle){
		console.log("Registro a borrar: " + Cod_Detalle);
		var response;
		var load={
			Cod_Detalle:Cod_Detalle
		}
		this.service.delete_detallereservaciones(load).subscribe(
		data => response = data,
		err => {
		console.log("Error al consultar servicio");
		},
		()=> {
		this.get_detallereservaciones();
		}
		);
	}

	update_detallereservaciones(Cod_Detalle) {
      var response;
      this.service.update_detallereservaciones(this.detalleres).subscribe(
        data => response = data,
        err => {
          console.log('Error al consultar servicio');
        },
        () => {
          this.detalleres = {
        	Cod_Reservacion: "",
			Numero_Habitacion: "",
			Cod_Detalle: ""
      	};
          this.get_detallereservaciones();
        }
      );
    }

    onPreUpdateDetalleReservaciones(detalleres){
		this.detalleres = {
            Cod_Reservacion:detalleres.Cod_Reservacion,
			Numero_Habitacion:detalleres.Numero_Habitacion,
			Cod_Detalle:detalleres.Cod_Detalle
        };
	}
	 limpiarDatos(detalleres) {
      this.detalleres = {
        Cod_Reservacion: "",
		Numero_Habitacion: "",
		Cod_Detalle: ""
      };
    }

}