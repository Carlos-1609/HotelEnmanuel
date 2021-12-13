import {Component, OnDestroy, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm, FormControlDirective} from '@angular/forms';
import {AppService} from '../../app.service';
import Swal from 'sweetalert2'

@Component({
	selector: 'login',
	templateUrl: './login.component.html'
})

export class LoginComponent implements OnDestroy{

	@ViewChild('login_form')login_form:FormControlDirective;
	public submitted = false;
	public loading = false;
	public login_data = {
		Nombre_Usuario: "",
		Contrasena: ""
	}
			
	constructor(public service:AppService, private router:Router){
		//this.pageSettings.pageEmpty = true;
	}

	ngOnDestroy(){
		//this.pageSettings.pageEmpty = false;
	}

	aver(){
		this.router.navigateByUrl('/registro_usuarios');
		this.router.navigateByUrl('/mantenimiento_usuarios');
		//this.router.navigateByUrl('/menu');
	}

	login(){
		if(this.login_form.valid){
			this.submitted = false;
			this.loading = true;
			var response;
			var load = {
				Nombre_Usuario: this.login_data.Nombre_Usuario,
				Contrasena: this.login_data.Contrasena
			};
			console.log(load);
			this.service.login(load).subscribe(
					data => response = data,
					err => {
						if(err.status == 400){
							Swal.fire({
								title: 'Error de Autenticacion, las credenciales ingresadas son incorrectar',
								icon: 'error'
							});
						}else{
							Swal.fire({
								title: 'Error interno del servidor',
								icon: 'error'
							});
						}
						this.loading = false;
					},
					()=> {
						try{
							if(response){
								this.service.set_usuario_logueado(this.login_data.Nombre_Usuario),
								this.service.set_session(response);
								this.router.navigateByUrl('/mantenimiento_usuarios');
							}else{
								Swal.fire({
									title: 'Error interno del servidor',
									icon: 'error'
								});
								this.loading = false;
							}
							this.loading = false;
						}catch(error){
							Swal.fire({
								title: 'Error interno del servidor',
								icon: "error"
							});
							this.loading = false;
						}
					}
				);
			}else{
				this.submitted = true;
		}		
	}

	registro(){
		this.router.navigateByUrl('/registro_usuarios');
	}	
}

