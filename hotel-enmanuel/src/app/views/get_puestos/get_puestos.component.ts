import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppService}  from '../../app.service';
import swal from 'sweetalert2'

@Component ({
   selector:'get_puestos',
   templateUrl: './get_puestos.component.html'
})


export class get_puestosComponent {
	public listado_puestos:any[] ;
	public listado_empleados : any[];
 
   constructor (public service:AppService ){
   this.listado_puestos=[];
   this.listado_empleados=[];
 }
    
 public puestos={
	Cod_Puesto : "",
 	Descripcion:"",
 	Salario :""
 }
 public Empleados={
    Cod_Empleado:"",
	Cod_Puesto : "",
	Nombres:"",
	Apellidos:"",
	Telefonos:"",
	Identificacion:"",
	Fecha_ingreso :"",
	Fecha_salida:"",
	salario_neto :"",

 }

 ngOnInit (){
	this.get_puestos();
	this.get_empleados();
}



   get_puestos (){
var response;
  this.service.get_puestos().subscribe(
  	data => response = data,
  	err => {
  		console.log("error al consultar servicio");
  	},
   ()=>{
   	this.listado_puestos= response;
   	console.log(response);
   }
   );
 

 }

 get_empleados (){
	var response;
	  this.service.get_empleados().subscribe(
		  data => response = data,
		  err => {
			  console.log("error al consultar servicio");
		  },
	   ()=>{
		   this.listado_empleados= response;
		   console.log(response);
	   }
	   );
	 
	
	 }



  insert_empleado (){
var response;
 this.service.insert_empleados(this.Empleados).subscribe(
    data => response =data,
    err =>{
    	console.log("Error al consultar servicio")
    },
    ()=> {
    	this.Empleados={
			Cod_Empleado:"",	
	Cod_Puesto : "",
	Nombres:"",
	Apellidos:"",
	Telefonos:"",
	Identificacion:"",
	Fecha_ingreso :"",
	Fecha_salida:"",
	salario_neto :"",
	
		};this.get_empleados();
		
     swal.fire({
		 title:'Datos insertados exitosamente',
		 text: 'exitoso',
		 icon:'success'
	 })

    	
    }

 	);

  }


delete_empleado(Cod_Empleado){
	console.log("registro a borrar: "+Cod_Empleado);
	var response;
	var load ={
		Cod_Empleado:Cod_Empleado
	}

	this.service.delete_empleados(load).subscribe(
		data=>response = data,
		err =>{
			console.log("Error al consultar servicio")
		},
		()=>{
			this.get_empleados();
		}

		);
}

Update_empleado(Cod_Empleado){
	console.log("registro a borrar: "+Cod_Empleado);
	var response;

	this.service.update_empleados(this.Empleados).subscribe(
		data=>response = data,
		err =>{
			console.log("Error al consultar servicio")
		},
		()=>{
			this.Empleados={
				Cod_Puesto : "",
				Nombres:"",
				Apellidos:"",
				Telefonos:"",
				Identificacion:"",
				Fecha_ingreso :"",
				Fecha_salida:"",
				salario_neto :"",
				Cod_Empleado: ""
					}
			this.get_empleados();
		}

		);
}

Update_puestos (Cod_puesto){
var response;
this.service.update_puestos(this.puestos).subscribe(data => response =data,
	err => {
		console.log('Error al consultar servicio');
	} ,
	() => {
this.puestos ={
	Cod_Puesto :'',
	Descripcion : '',
	Salario :''
};
  this.get_puestos();
	}
	
	);

}

		
		
	

 onPreUpdatePuestos(puestos){
this.puestos ={
	Cod_Puesto: puestos.Cod_puesto,
Descripcion: puestos.Descripcion,
Salario: puestos.Salario
}

/*onPreUpdateempleados(this.Empleados){
this.Empleados={
   Cod_Empleado: Empleados.Cod_Empleado, 


}
*/

 
}
 limpiarDatos (puestos){
	this.puestos ={ Cod_Puesto: '',
	Descripcion :'',
	Salario : ''
 } ;
}

}

