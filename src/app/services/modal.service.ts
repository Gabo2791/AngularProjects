import { Injectable } from '@angular/core';
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  privacidad: boolean;
  privacidadSeleccionada: boolean;

  online: boolean;
  ojo2: boolean;

  constructor() { }

  // tslint:disable-next-line: typedef
  politicaPrivacidad() {
    this.privacidad = false;
    this.privacidadSeleccionada = true;
    $('input[type="checkbox"]').prop('checked', false);
    $('#alerta').modal('hide');
    setTimeout(() => {
      $('#privacidad').modal();
    }, 500);
  }

  // tslint:disable-next-line: typedef
  cambioPrivacidad() {
    this.privacidadSeleccionada = !this.privacidadSeleccionada;
  }

  // tslint:disable-next-line: typedef
  contacto() {
    setTimeout(() => {
      $('input[type="checkbox"]').prop('checked', false);
      this.privacidadSeleccionada = true;
    }, 100);
    $('#alerta').modal('hide');
    // Abrir modal contacto y cerrar modal alerta

    setTimeout(() => {
      $('#contacto').modal();
    }, 500);
    $(document).ready(() => {
      $('#contacto').on('shown.bs.modal', () => {
      $('#focusInput').trigger('focus');
      });
    });
  }
  // tslint:disable-next-line: typedef
  logOut(){
    this.online = false;
    this.ojo2 = true;
  }
}
