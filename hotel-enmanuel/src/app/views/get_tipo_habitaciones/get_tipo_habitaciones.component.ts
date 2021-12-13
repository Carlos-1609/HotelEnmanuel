import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../app.service';

@Component({
	selector: 'get_tipo_habitaciones',
	templateUrl: './get_tipo_habitaciones.component.html'
})

export class GetTipoHabitacionesComponent{
	public listado_tipo_habitaciones:any[];

	constructor(public service:AppService){
		this.listado_tipo_habitaciones = [];
	}

	//public listado_tipo_habitaciones: any[];

	public tipo_habitacion = {
		Cod_Tipo: "",
		Descripcion: ""
	}

	ngOnInit()
	{
		this.get_tipo_habitaciones();
	}

	get_tipo_habitaciones(){
		var response;
		this.service.get_tipo_habitaciones().subscribe(
			data => response = data,
			err => {
				console.log("Error al consultar servicio");
			},
			()=>{
				this.listado_tipo_habitaciones = response;
				console.log(response);
			}
		);
	}

	insert_tipo_habitacion(){
 	var response; 
 	this.service.insert_tipo_habitacion(this.tipo_habitacion).subscribe(
 		data => response=data,
 		err=>{
 		console.log("Error al consultar servicio");
 		},
	 	()=>{
	 		this.tipo_habitacion = {
	 			Cod_Tipo: "",
	 			Descripcion:""
	 		}
	 		this.get_tipo_habitaciones();
	 	}
	 	);
	}

	update_tipo_habitacion(Cod_Tipo) {
      var response;
      this.service.update_tipo_habitacion(this.tipo_habitacion).subscribe(
        data => response = data,
        err => {
          console.log('Error al consultar servicio');
        },
        () => {
          this.tipo_habitacion = {
            Cod_Tipo: '',
            Descripcion: ''
          };
          this.get_tipo_habitaciones();
        }
      );
    }

	delete_tipo_habitacion(Cod_Tipo){
		console.log("Registro a borrar: "+Cod_Tipo);
		var response;
		var load={
			Cod_Tipo:Cod_Tipo
		}
		this.service.delete_tipo_habitacion(load).subscribe(
		data=>response=data,
		err=>{
			console.log("Error al consultar servicio");
		},
		()=>{
			this.get_tipo_habitaciones();
			}
		);
	}

	onPreUpdateTipoHabitaciones(tipo_habitacion)
	{
		this.tipo_habitacion = {
			Cod_Tipo: tipo_habitacion.Cod_Tipo,
			Descripcion: tipo_habitacion.Descripcion
		};
	}


}

