import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AppService {
	private endpoint:string;

	constructor(private httpClient: HttpClient) {
		this.endpoint = "http://"+window.location.hostname+":8200/api";
	}

  //*****************************************HABITACIONES**************************************
  get_habitaciones():Observable<any>{
  return this.httpClient.get(this.endpoint + "/get_habitaciones",{responseType: "json"});  
  }  

	//****************************************TIPO HABITACIONES*********************************************************

	get_tipo_habitaciones():Observable<any>{
		return this.httpClient.get(this.endpoint + "/get_tipo_habitaciones", {responseType: 'json'});
	}

	insert_tipo_habitacion(load):Observable<any>{
		return this.httpClient.post(this.endpoint + "/insert_tipo_habitaciones", load, {responseType: 'json'});
	}

	delete_tipo_habitacion(load):Observable<any>{
		return this.httpClient.delete(this.endpoint + "/delete_tipo_habitaciones", {params:load, responseType: 'json' });
	}

	update_tipo_habitacion(load):Observable<any>{
		return this.httpClient.put(this.endpoint + "/update_tipo_habitaciones", load, {responseType: 'json' });
	}

	//***************************************NIVELES ACCESOS***********************************************************

	get_niveles_accesos():Observable<any>{
		return this.httpClient.get(this.endpoint + "/get_niveles_accesos", {responseType: 'json'});
	}

	insert_nivel_acceso(load):Observable<any>{
		return this.httpClient.post(this.endpoint + "/insert_niveles_accesos", load, {responseType: 'json'});
	}

	delete_nivel_acceso(load):Observable<any>{
		return this.httpClient.delete(this.endpoint + "/delete_niveles_accesos", {params:load, responseType: 'json' });
	}

	update_nivel_acceso(load):Observable<any>{
		return this.httpClient.put(this.endpoint + "/update_niveles_accesos", load, {responseType: 'json' });
	}

	//****************************************USUARIOS******************************************************************

	get_usuarios():Observable<any>{
		return this.httpClient.get(this.endpoint + "/get_usuarios", {responseType: 'json'});
	}
	
	insert_usuarios(load):Observable<any>{
		return this.httpClient.post(this.endpoint + "/insert_usuarios", load, {responseType: 'json'});
	}
	
	delete_usuarios(load):Observable<any>{
		return this.httpClient.delete(this.endpoint + "/delete_usuarios", {params:load, responseType: 'json' });
	}

	update_usuarios(load):Observable<any>{
		return this.httpClient.put(this.endpoint + "/update_usuarios", load, {responseType: 'json' });
	}

	login(payload):Observable<any>{
		return this.httpClient.post(this.endpoint + "/login",payload, {responseType: 'json'});
	}

	set_session(token){
		localStorage.setItem("userweb",JSON.stringify(token));
	}

	get_usuario_logueado(){
		if(localStorage.getItem("loguedUser"))
			return JSON.parse(localStorage.getItem("loguedUser"));
	}

	set_usuario_logueado(user){
		localStorage.setItem("loguedUser", JSON.stringify(user));
	}

//************************************NACIONALIDADES*****************************************************
  get_nacionalidades(): Observable<any> {
    return this.httpClient.get(this.endpoint + '/get_nacionalidades', { responseType: 'json'});
  }
  insert_nacionalidad(load): Observable<any> {
    return this.httpClient.post(this.endpoint + '/insertar_nacionalidades', load, {responseType: 'json'});
  }
  delete_nacionalidad(load): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/delete_nacionalidades', {params: load, responseType: 'json'});
  }
  modificar_nacionalidad(load): Observable<any> {
    return this.httpClient.put(this.endpoint + '/update_nacionalidades', load, {responseType: 'json'} );
  }

//************************************DOCUMENTOS***************************************************
  get_documentos(): Observable<any> {
    return this.httpClient.get(this.endpoint + '/get_documentos', { responseType: 'json'});
  }
  insert_documentos(load): Observable<any> {
    return this.httpClient.post(this.endpoint + '/insert_documentos', load, {responseType: 'json' });
  }
  delete_documentos(load): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/delete_documentos', {params: load, responseType: 'json' });
  }
  update_documentos(load): Observable<any> {
    return this.httpClient.put(this.endpoint + '/update_documentos', load, { responseType: 'json' });
  }

//*************************************ESTADORES***************************************************
  get_estadores(): Observable<any> {
    return this.httpClient.get(this.endpoint + '/get_estadores', {responseType: 'json'});
  }
  insert_estadores(load): Observable<any> {
    return this.httpClient.post(this.endpoint + '/insert_estadosReservacion', load, {responseType: 'json' });
  }
  delete_estadores(load): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/delete_estadosReservacion', {params: load, responseType: 'json' });
  }
  update_estadores(load): Observable<any> {
    return this.httpClient.put(this.endpoint + '/update_estadosReservacion', load, {responseType: 'json'});
  }

//*************************************INCIDENCIAS*********************************************
  get_incidencias(): Observable<any> {
    return this.httpClient.get(this.endpoint + '/mostrar_incidencia', { responseType: 'json'});
  }
  insert_incidencias(load): Observable<any> {
    return this.httpClient.post(this.endpoint + '/insert_incidencias', load, {responseType: 'json' });
  }
  Update_incidencia(load): Observable<any> {
    return this.httpClient.put(this.endpoint + '/update_incidencias', load, {responseType: 'json' });
  }
  Delete_incidencia(load): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/delete_incidencias', {params: load, responseType: 'json' });
  }

  //************************************PUESTOS**************************************************
  get_puestos(): Observable<any> {
    return this.httpClient.get(this.endpoint + '/get_puestos', { responseType: 'json'});
  }
  insert_puestos(load): Observable<any> {
    return this.httpClient.post(this.endpoint + '/insert_puestos', load , {responseType: 'json'});
  }
  delete_puestos(load): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/delete_puestos', {params: load, responseType: 'json'});
  }
  update_puestos(load): Observable<any> {
    return this.httpClient.put(this.endpoint + '/update_puestos', {params: load, responseType: 'json'});
  }

  //***************************************HOSPEDAJES************************************************
  insert_checkin(load): Observable<any> {
    return this.httpClient.post(this.endpoint + '/insert_hospedaje', load, {responseType: 'json'} );
  }
  update_checkin(load): Observable<any> {
    return this.httpClient.put(this.endpoint + '/update_hospedaje', load, {responseType: 'json'} );
  }
  delete_checkin(load): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/delete_hospedaje', {params: load, responseType: 'json'});
  }
  get_checkin(): Observable<any> {
    return this.httpClient.get(this.endpoint + '/get_hospedaje', {responseType: 'json'});
  }  

  //****************************************HUESPEDES**************************************************
  insert_huesped(load): Observable<any> {
    return this.httpClient.post(this.endpoint + '/insert_huespedes', load, {responseType: 'json'});
  }
  get_huesped(): Observable<any> {
    return this.httpClient.get(this.endpoint + '/get_huespedes', {responseType: 'json'});
  }
  update_huesped(load): Observable<any> {
    return this.httpClient.put(this.endpoint + '/update_huspedes', load, {responseType: 'json'});
  }
  delete_huesped(load): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/delete_huespedes', {params: load, responseType: 'json'});
  }

  //************************************ACOMPAÑANTES******************************************************
  insert_acompanantes(load): Observable<any> {
    return this.httpClient.post(this.endpoint + '/insert_acompanantes', load, {responseType: 'json'});
  }
  get_acompanantes(): Observable<any> {
    return this.httpClient.get(this.endpoint + '/get_acompanantes', {responseType: 'json'});
  }
  update_acompanante(load): Observable<any> {
    return this.httpClient.put(this.endpoint + '/update_acompanantes' , load, {responseType : 'json'});
  }
  delete_acompanantes(load): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/delete_acompanantes', {params: load, responseType: 'json'});
  }

  //*****************************RESERVACIONES Y DETALLE_RESERVACIONES**********************************
  get_reservaciones(): Observable<any> {
    return this.httpClient.get(this.endpoint + '/get_reservaciones', {responseType: 'json'});
  }
  get_detallereservaciones(): Observable<any> {
    return this.httpClient.get(this.endpoint + '/get_detalles_reservaciones', {responseType: 'json'});
  }
  insert_reservaciones(load): Observable<any> {
    return this.httpClient.post(this.endpoint + '/insert_reservaciones', load, {responseType: 'json' });
  }
  insert_detallereservaciones(load): Observable<any> {
    return this.httpClient.post(this.endpoint + '/insert_detalles_reservaciones', load, {responseType: 'json' });
  }
  delete_reservaciones(load): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/delete_reservaciones', {params: load, responseType: 'json' });
  }
  delete_detallereservaciones(load): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/delete_detalles_reservaciones', {params: load, responseType: 'json' });
  }
  update_reservaciones(load): Observable<any> {
    return this.httpClient.put(this.endpoint + '/update_reservaciones', load, {responseType: 'json'});
  }
  update_detallereservaciones(load): Observable<any> {
    return this.httpClient.put(this.endpoint + '/update_detalles_reservaciones', load, {responseType: 'json'});
  }

  //****************************HUESPED_INCIDENCIA Y LINCIDENCIA******************************************
  get_HuespedIncidencia(): Observable<any> {
    return this.httpClient.get(this.endpoint + '/mostrar_huespedincidencia', { responseType: 'json'});
  }
  insert_Huespedincidecia(load): Observable<any> {
    return this.httpClient.post(this.endpoint + '/insert__huespedincidencia', load, {responseType: 'json' });
  }
  Update_Huespedincidecia(load): Observable<any> {
    return this.httpClient.put(this.endpoint + '/update__huespedincidencia', load, {responseType: 'json' });
  }
  Delete_Huespedincidecia(load): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/delete__huespedincidencia', {params: load, responseType: 'json' });
  }

  get_Lincidencia(): Observable<any> {
    return this.httpClient.get(this.endpoint + '/mostrar_incidencia', { responseType: 'json'});
  }
  Delete_huespedincidecia(load): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/delete__huespedincidencia', {params: load, responseType: 'json' });
  }

  //*****************************EMPLEADOS****************************************************************

get_empleados():Observable<any>{
   return this.httpClient.get(this.endpoint+"/get_empleados",{responseType:'json'});
 }

 insert_empleados(load):Observable<any> {
 	return this.httpClient.post(this.endpoint +"/insert_empleados",load ,{responseType:'json'});
 }

 update_empleados (load):Observable<any>{
     return this.httpClient.put(this.endpoint+"/update_empleados",load,{responseType:'json'});
  }

  delete_empleados(load):Observable<any>{
   return this.httpClient.delete(this.endpoint+"/delete_empleados",{params:load,responseType:'json'});
  }

  //******************************************************************************************************
}

