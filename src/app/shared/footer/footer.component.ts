import { ModalService } from 'src/app/services/modal.service';
import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})

export class FooterComponent implements OnInit {

  year = new Date().getFullYear();

  constructor(public modalService: ModalService) {
    this.modalService.privacidad = true;
  }

  ngOnInit(): void {
  }

// tslint:disable-next-line: typedef
whatsApp(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: true,
        customClass: {confirmButton: 'back9'}
      });

    Toast.fire(
      {
        title: '971 130 7946',
        background: 'rgb(233,233,0)'
      }
      );
    }

    // tslint:disable-next-line: typedef
    salir(){
      setTimeout(() => {
        $('#privacidad').modal('hide');
      }, 300);
    }

  // tslint:disable-next-line: typedef
  privacidad() {
    this.modalService.privacidad = true;
    $('#privacidad').modal();
  }

// tslint:disable-next-line: typedef
irAlerta() {
    $('#privacidad').modal('hide');
    setTimeout(() => {
      $('#alerta').modal();
    }, 500);
  }
}

