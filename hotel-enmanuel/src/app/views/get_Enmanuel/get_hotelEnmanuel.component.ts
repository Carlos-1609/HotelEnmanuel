import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from '../../app.service';
import swal from 'sweetalert2'
@Component ({

		selector: 'get_Enmanuel',
		templateUrl: './get_hotelEnmanuel.component.html'

})

export class GetEnmanuelComponent{
	public listado_incidencias:any[];

		constructor(public service:AppService){
		this.listado_incidencias=[];
	}

		ngOnInit(){
			this.get_incidencias();
		}

	get_incidencias(){
		var responde;
		this.service.get_incidencias().subscribe(
			data=> responde=data,
			err => {
				console.log("Error al consultar servicio");
			},
			()=>{
				this.listado_incidencias=responde;
				console.log(responde);
			});}


	insert_incidencias(){
		var response;
		this.service.insert_incidencias(this.incidencia).subscribe(
			data => response = data,
			err => {
				console.log("Error al consultar servicio");
		},
		()=> {

				 this.incidencia={
				 Cod_Incidencia:"",	
				 Descripcion:""
				}
					console.log("Ingresado")
					swal.fire({
						  position: 'top-end',
						  icon: 'success',
						  title: 'Se Ingreso la incidencia',
						  showConfirmButton: false,
						  timer: 1500
						})		
			this.get_incidencias();

		 	});}

		public incidencia = {
			Cod_Incidencia:"",
			Descripcion:""
		}	

		
		UpdateIncidencia (x){

			this.incidencia={
				Cod_Incidencia:x.Cod_Incidencia,
				Descripcion:x.Descripcion
			}
		}
		LimpiarIncidencia(x){

			this.incidencia={
				Cod_Incidencia:"",
				Descripcion:""
			}
		}



		update_incidencia(codigoincidencia){
			var response;
			 var load = {
   			     Descripcion : this.incidencia.Descripcion,
    		   	 codigoincidencia : codigoincidencia
    					  };
			this.service.Update_incidencia(this.incidencia).subscribe(
				data=>response=data,
				err=> {
					console.log("Error al consultar servicio");
				},
				()=>{
						this.incidencia={
						Cod_Incidencia:"",
						Descripcion:""
						}

					swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Se Modifico correctamente',
					showConfirmButton: false,
					timer: 1500
					})


					this.get_incidencias();
		});}



    delete_incidencias(cod_incidencia) {
    	console.log('Registro a borrar: ' + cod_incidencia)
      var response;
      var load = { Cod_Incidencia : cod_incidencia};
      this.service.Delete_incidencia(load).subscribe(
        data => response = data,
        err => {
          console.log('Error al consultar servicio :(');
        },
        () => {

				swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Se elimino correctamente',
				showConfirmButton: false,
				timer: 1500
				})

          this.get_incidencias();
        });}



}
