import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {GetTipoHabitacionesComponent} from './views/get_tipo_habitaciones/get_tipo_habitaciones.component';
import {GetNivelesAccesosComponent} from './views/get_niveles_accesos/get_niveles_accesos.component';
import {UsuariosComponent} from './views/usuarios/usuarios.component';
import {GetUsuariosComponent} from './views/get_usuarios/get_usuarios.component';
import {LoginComponent} from './views/login/login.component';

//import {GetNacionalidadesComponent } from './views/get_nacionalidades/get_nacionalidades.component';
import {GetDocumentosComponent} from './views/get_documentos/get_documentos.component';
import {GetEnmanuelComponent} from './views/get_Enmanuel/get_hotelEnmanuel.component';
import {GetEstadoresComponent} from './views/get_estadores/get_estadores.component';
import {get_puestosComponent} from './views/get_puestos/get_puestos.component';
import {MenuComponent} from './views/menu/menu.component';

//import {GetCheckinHospedaje} from './views/get_checkin/get_checkin.component';
//import {GetHuespedes} from './views/get_huesped/get_huesped.component';
//import {GetAcompanante} from './views/get_acompanantes/get_acompanantes.component';
import {GetReservacionesComponent} from './views/get_reservaciones/get_reservaciones.component';
import {GetDetalleReservacionesComponent} from './views/get_DetalleReservaciones/get_DetalleReservaciones.component';
import {GethuespedincidenciaComponent} from './views/get_huespedincidencia/get_huespedincidencia.component';



const routes: Routes = [
{
	path: 'listado_tipo_habitaciones',
	component: GetTipoHabitacionesComponent
},
{
	path: 'listado_niveles_accesos',
	component: GetNivelesAccesosComponent
},
{
	path: 'registro_usuarios',
	component: UsuariosComponent
},
{
	path: 'mantenimiento_usuarios',
	component: GetUsuariosComponent
},
{
	path: 'login',
	component: LoginComponent
},
{
  path: 'menu',
  component: MenuComponent
},
/*{
    path: 'listado_nacionalidades',
    component: GetNacionalidadesComponent
},*/
{
    path: 'listado_documentos',
    component: GetDocumentosComponent
},
{
    path: 'listado_incidencia',
    component: GetEnmanuelComponent
},
{
    path: 'listado_estadores',
    component: GetEstadoresComponent
},
{
    path: 'listado_empleados',
    component: get_puestosComponent
},
/*{
    path: 'checkin',
    component: GetCheckinHospedaje
  },
  {
    path: 'listado_huesped',
    component: GetHuespedes
  },
  {
    path: 'listado_acompanantes',
    component: GetAcompanante
  },*/
  {
    path: 'listado_estadores',
    component: GetEstadoresComponent
  },
  {
    path: 'listado_reservaciones',
    component: GetReservacionesComponent
  },
  {
    path: 'listado_detalleres',
    component: GetDetalleReservacionesComponent
  },
  {
    path: 'huespedincidencia',
    component: GethuespedincidenciaComponent
  },

];

@NgModule({
	imports: [CommonModule, RouterModule. forRoot(routes)],
	exports: [RouterModule],
	declarations: []
})

export class AppRoutingModule{}