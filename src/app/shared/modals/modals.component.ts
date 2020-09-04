// import {ModalService} from '/Users/Gabriel/Desktop/Angular 9/FedericaDJ/src/app/services/modal.service';
import { Component, OnInit } from '@angular/core';
import {ModalService} from 'src/app/services/modal.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

declare let $: any;
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: []
})
export class ModalsComponent implements OnInit {

mensaje = {
  email: '',
  mensaje: ''
};

usuarioLogin = {
  nombre: 'Federica',
  password: '123'
};
  constructor(public modalService: ModalService) {
    this.modalService.privacidadSeleccionada = true;
  }

  ngOnInit(): void { }

  // tslint:disable-next-line: typedef
  politicaPrivacidad() {
    this.modalService.politicaPrivacidad();
  }

  // tslint:disable-next-line: typedef
  cambioPrivacidad() {
    this.modalService.cambioPrivacidad();
  }

  // tslint:disable-next-line: typedef
  contacto() {
    this.modalService.contacto();
  }

  // tslint:disable-next-line: typedef
  contactoFede(f: NgForm){
    if (f.invalid){
      $('#contacto').modal('hide');
      console.log(f.value);
      this.limpiarMensaje();
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire(
      {
        title: 'Todos los campos son obligatorios',
        background: 'rgb(233,233,0)',
        icon: 'error'
      });
    } else {
      $('#contacto').modal('hide');
      console.log(f.value);
      this.limpiarMensaje();
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire(
      {
        title: 'Mensaje enviado correctamente',
        background: 'rgb(233,233,0)',
        icon: 'success'
      });
    }
  }
  // tslint:disable-next-line: typedef
  limpiarMensaje() {
    this.mensaje.email = '';
    this.mensaje.mensaje = '';
  }

  // tslint:disable-next-line: typedef
  limpiarUsuario(){
    this.usuarioLogin.nombre = '';
    this.usuarioLogin.password = '';
  }
  // tslint:disable-next-line: typedef
  salirLogin(){
    $('#loginModal').modal('hide');
  }
  // tslint:disable-next-line: typedef
  login(forma: NgForm) {
    console.log(forma.value);

    if (this.usuarioLogin.nombre === 'Federica' && this.usuarioLogin.password === '123'){
      this.salirLogin();
      setTimeout(() => {
        $('.navbar-collapse').collapse('hide');
      }, 1000);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire(
      {
        title: 'Federica ONLINE',
        background: 'rgb(233,233,0)',
        icon: 'success'
      });
      this.limpiarUsuario();
      this.modalService.online = true;

    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire(
      {
        title: 'INVALID DATA',
        background: 'rgb(233,233,0)',
        icon: 'error'
      });
      $('.navbar-collapse').collapse('hide');
      this.salirLogin();
      this.limpiarUsuario();
    }
  }

  // tslint:disable-next-line: typedef

}
