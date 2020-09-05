import { ModalService } from 'src/app/services/modal.service';
import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit {


  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  pagina1(){
    this.modalService.pagina1();
  }

  // tslint:disable-next-line: typedef
pagina2(){
  this.modalService.pagina2();
  }

  // tslint:disable-next-line: typedef
  pagina3(){
    this.modalService.pagina3();
  }

  // tslint:disable-next-line: typedef
  cerrarTec(){
    this.modalService.cerrarTec();

  }

  cerrarSobreMi(){
    this.modalService.cerrarSobreMi();
  }

}
