import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../app.service';
import swal from 'sweetalert2'

@Component({
	selector: 'usuarios',
	templateUrl: './usuarios.component.html'
})

export class UsuariosComponent{
	public Usuarios:any[];
	public listado_niveles_accesos: any[];

	constructor(public service:AppService){
		this.Usuarios = [];
	}

	public usuarios = {
		Cod_Usuario: "",
		Nombre_Usuario: "",
		Contrasena: "",
		Cod_Nivel: ""
	}

	ngOnInit(){
		this.get_niveles_accesos();
	}
	

	insert_usuarios(){
 	var response; 
 	this.service.insert_usuarios(this.usuarios).subscribe(
 		data => response=data,
 		err=>{
 		console.log("Error al consultar servicio");
 		},
	 	()=>{
	 		this.usuarios = {
	 			Cod_Usuario: "",
	 			Nombre_Usuario:"",
	 			Contrasena: "",
	 			Cod_Nivel: ""
	 		}

	 		swal.fire({
	 			title: 'Se ha registrado exitosamente',
	 			icon: 'success'
	 		})
	 	}
	 	);
	}

	get_niveles_accesos(){
		this.listado_niveles_accesos = [];
		var response;
		this.service.get_niveles_accesos().subscribe(
			data => response = data,
			err => {
				this.listado_niveles_accesos = [];
			},
			()=>{
				this.listado_niveles_accesos = response;
			}
		);
	}



}

