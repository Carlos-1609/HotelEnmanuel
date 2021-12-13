import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from '../../app.service';




@Component({
  selector: 'get_documentos',
  templateUrl: './get_documentos.component.html'

})

export class GetDocumentosComponent {
	  public listado_documentos:any[];


  /* cambios*/
    public documentos= {
    Cod_Tipodocumento:"",
    Descripcion:""
  };


  /*fin cambios*/


	     

         constructor(public service: AppService)
         {
            this.listado_documentos=[];
         }
          get_documentos(){
         	var response;
         	this.service.get_documentos().subscribe(
         		data=> response=data,
         		err => {
         			console.log("Error al consultar servicio");
         		},
         		()=>{
         			this.listado_documentos=response;
         			console.log(response);
         		}
         		);
         }

         public tipo_documentos = {
					Descripcion:""
					

	     }
		insert_documentos(){
			var response;
			this.service.insert_documentos(this.tipo_documentos).subscribe(
		 data => response = data,
		 err => {
		 console.log("Error al consultar servicio");
		 },
		  ()=> {
              this.tipo_documentos={
              	Descripcion:""
              }
              this.get_documentos();
          }
          );
	}

delete_documentos(Cod_Tipodocumento){
		console.log("Registro a borrar: " + Cod_Tipodocumento);
		var response;
		var load={
			Cod_Tipodocumento:Cod_Tipodocumento
		}
		this.service.delete_documentos(load).subscribe(
		data => response = data,
		err => {
		console.log("Error al consultar servicio");
		},
		()=> {
		this.get_documentos();
		}
		);
	   


}

update_documentos(Cod_Tipodocumento) {
      var response;
      this.service.update_documentos(this.documentos).subscribe(
        data => response = data,
        err => {
          console.log('Error al consultar servicio');
        },
        () => {
          this.documentos = {
            Cod_Tipodocumento: "",
            Descripcion: ""
          };
          this.get_documentos();
        }
      );
    }

    
     
    onPreUpdateDocumentos(documentos) {
      this.documentos = {
        Cod_Tipodocumento : documentos.Cod_Tipodocumento,
        Descripcion : documentos.Descripcion
      };
    }

    limpiarDatos(documentos) {
      this.documentos = {
        Cod_Tipodocumento: "",
        Descripcion : ""
      };
    }


  



}
