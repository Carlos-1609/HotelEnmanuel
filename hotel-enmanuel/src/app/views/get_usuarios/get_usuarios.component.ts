import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../app.service';
import Swal from 'sweetalert2'

@Component({
	selector: 'get_usuarios',
	templateUrl: './get_usuarios.component.html'
})

export class GetUsuariosComponent{
	public listado_usuarios:any[];
	public listado_niveles_accesos: any[];

	constructor(public service:AppService){
		this.listado_usuarios = [];
	}

	public usuarios = {
		Cod_Usuario: "",
		Nombre_Usuario: "",
		Contrasena: "",
		Cod_Nivel: ""
	}

	public nivel_acceso = {
		Descripcion: ""
	}

	ngOnInit(){
		this.get_niveles_accesos();
		this.get_usuarios();
	}

	get_usuarios(){
		var response;
		this.service.get_usuarios().subscribe(
			data => response = data,
			err => {
				console.log("Error al consultar servicio");
			},
			()=>{
				this.listado_usuarios = response;
				console.log(response);
			}
		);
	}

	update_usuarios(Cod_Usuario) {
      var response;
      this.service.update_usuarios(this.usuarios).subscribe(
        data => response = data,
        err => {
          console.log('Error al consultar servicio');
        },
        () => {
          this.usuarios = {
            Cod_Usuario: "",
			Nombre_Usuario: "",
			Contrasena: "",
			Cod_Nivel: ""
          };
          this.get_usuarios();

          Swal.fire({
	 			title: 'Se ha modificado exitosamente',
	 			icon: 'success'
	 		})
        }
      );
    }

	delete_usuarios(Cod_Usuario){
		console.log("Registro a borrar: "+Cod_Usuario);
		var response;
		var load={
			Cod_Usuario: Cod_Usuario
		}
		this.service.delete_usuarios(load).subscribe(
		data=>response=data,
		err=>{
			console.log("Error al consultar servicio");
		},
		()=>{
			this.get_usuarios();

	 		Swal.fire({
	 			title: 'Se ha borrado exitosamente',
	 			icon: 'success'
	 		})
			}
		);
	}

	onPreUpdateUsuarios(usuarios)
	{
		this.usuarios = {
			Cod_Usuario: usuarios.Cod_Usuario,
		 	Nombre_Usuario: usuarios.Nombre_Usuario,
		 	Contrasena: usuarios.Contrasena,
		 	Cod_Nivel: usuarios.Cod_Nivel
		};
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

