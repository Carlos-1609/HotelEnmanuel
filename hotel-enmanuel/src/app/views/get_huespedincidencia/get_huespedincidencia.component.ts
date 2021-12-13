import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from '../../app.service';
import swal from 'sweetalert2'
@Component ({

		selector: 'get_huespedincidencia',
		templateUrl: './get_huespedincidencia.component.html'

})


export class GethuespedincidenciaComponent{

	public listado_incidencias:any[];
	public listado_Huesped:any[];
	public listado_incidenciashuesped:any[];


		constructor(public service:AppService){
			this.listado_Huesped=[];
			this.listado_incidencias=[];
			this.listado_incidenciashuesped=[];

		}

			ngOnInit(){
			this.get_incidencias();
			this.get_huesped();	
			this.get_huespedincidencia();
		
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



	get_huesped(){
		var responde;
		this.service.get_huesped().subscribe(
			data=> responde=data,
			err => {
				console.log("Error al consultar servicio");
			},
			()=>{
				this.listado_Huesped=responde;
				console.log(responde);
			});}



	get_huespedincidencia(){
		var responde;
		this.service.get_HuespedIncidencia().subscribe(
			data=> responde=data,
			err => {
				console.log("Error al consultar servicio");
			},
			()=>{
				this.listado_incidenciashuesped=responde;
				console.log(responde);
			});}

	

		insert_huespedincidecia(){
		var response;
		console.log("Lo LEE: "+this.huespedincidencia.Cod_Incidencia);


		this.service.insert_Huespedincidecia(this.huespedincidencia).subscribe(

			data => response = data,
			err => {
				console.log("Error al consultar servicio");
		},
		()=> {

				 this.huespedincidencia={
				Cod_HistorialIncideciaHuesped:"", 	
				Cod_Incidencia:"",
				Cod_Huesped:"",
				Fecha:"",
				Descripcion:""
				}
					console.log("Ingresado")
					swal.fire({
						  position: 'top-end',
						  icon: 'success',
						  title: 'Se guardo Incidencia-Huesped',
						  showConfirmButton: false,
						  timer: 1500
						})
				 this.get_huespedincidencia();	
			
		 	});}


   	 delete_huespedincidecia(Cod_HistorialIncideciaHuesped) {
     console.log('Registro a borrar: ' + Cod_HistorialIncideciaHuesped);
      var response;
      var load = { Cod_HistorialIncideciaHuesped : Cod_HistorialIncideciaHuesped};
      this.service.Delete_huespedincidecia(load).subscribe(
        data => response = data,
        err => {
          console.log('Error al consultar servicio :(');
        },
        () => {
        						

				swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Se elimino',
				showConfirmButton: false,
				timer: 1500
				})
				 this.get_huespedincidencia();	
        });}



      preIncidenciaHuesped(x){
            this.huespedincidencia={
			Cod_HistorialIncideciaHuesped:x.Cod_HistorialIncideciaHuesped,	
			Cod_Incidencia:x.Cod_Incidencia,
			Cod_Huesped:x.Cod_Huesped,
			Fecha:x.Fecha,
			Descripcion:x.Descripcion
      		}
      }
      limpiarIncidenciaHuesped(x){
            this.huespedincidencia={
			Cod_HistorialIncideciaHuesped:"",	
			Cod_Incidencia:"",
			Cod_Huesped:"",
			Fecha:"",
			Descripcion:""
      		}
      }      

		public huespedincidencia = {
		Cod_HistorialIncideciaHuesped:"",	
		Cod_Incidencia:"",
		Cod_Huesped:"",
		Fecha:"",
		Descripcion:""
		}	



		update_incidencia(Cod_HistorialIncideciaHuesped){
			var response;
			this.service.Update_Huespedincidecia(this.huespedincidencia).subscribe(
				data=>response=data,
				err=> {
					console.log("Error al consultar servicio");
				},
				()=>{
			            this.huespedincidencia={
						Cod_HistorialIncideciaHuesped:"",	
						Cod_Incidencia:"",
						Cod_Huesped:"",
						Fecha:"",
						Descripcion:""
			      		}
					this.get_huespedincidencia();
					console.log("Modifico")
					swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Se Modifico correctamente',
					showConfirmButton: false,
					timer: 1500
					})
					 this.get_huespedincidencia();	
		});}




}