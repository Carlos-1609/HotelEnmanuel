import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app.router';
import {AppComponent} from './app.component';


import {GetTipoHabitacionesComponent} from './views/get_tipo_habitaciones/get_tipo_habitaciones.component';
import {GetNivelesAccesosComponent} from './views/get_niveles_accesos/get_niveles_accesos.component';
import {UsuariosComponent} from './views/usuarios/usuarios.component';
import {GetUsuariosComponent} from './views/get_usuarios/get_usuarios.component';
import {LoginComponent} from './views/login/login.component';
import {MenuComponent} from './views/menu/menu.component';
//import {GetNacionalidadesComponent} from './views/get_nacionalidades/get_nacionalidades.component';
import {GetDocumentosComponent} from './views/get_documentos/get_documentos.component';
import {GetEnmanuelComponent} from './views/get_Enmanuel/get_hotelEnmanuel.component';
import {GetEstadoresComponent} from './views/get_estadores/get_estadores.component';
import {get_puestosComponent} from './views/get_puestos/get_puestos.component';
//import {GetCheckinHospedaje} from './views/get_checkin/get_checkin.component';
//import {GetHuespedes} from './views/get_huesped/get_huesped.component';
//import {GetAcompanante} from './views/get_acompanantes/get_acompanantes.component';
import {GetReservacionesComponent} from './views/get_reservaciones/get_reservaciones.component';
import {GetDetalleReservacionesComponent} from './views/get_DetalleReservaciones/get_DetalleReservaciones.component';
import {GethuespedincidenciaComponent} from './views/get_huespedincidencia/get_huespedincidencia.component';

//import {FilterPipe} from './pipes/filter.pipe';

import {AppService} from './app.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		GetTipoHabitacionesComponent,
		GetNivelesAccesosComponent,
		UsuariosComponent,
		GetUsuariosComponent,
		LoginComponent,
		/*GetCheckinHospedaje,
	    GetHuespedes,
	    GetAcompanante,*/
	    GetReservacionesComponent,
	    GetDetalleReservacionesComponent,
	    GethuespedincidenciaComponent,
	    /*FilterPipe,
	    GetNacionalidadesComponent,*/
	    GetDocumentosComponent,
	    GetEnmanuelComponent,
	    GetEstadoresComponent,
	    get_puestosComponent,
	    MenuComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [
		AppService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }