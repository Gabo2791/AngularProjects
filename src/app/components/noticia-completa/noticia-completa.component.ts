import { Router } from '@angular/router';
import { NoticiaService } from './../../services/noticia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia-completa',
  templateUrl: './noticia-completa.component.html',
  styles: [
  ]
})
export class NoticiaCompletaComponent implements OnInit {

  constructor(
    public noticiaService: NoticiaService,
    private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  // tslint:disable-next-line: typedef
  back(){
   // this.router.navigateByUrl('noticias');
   window.history.back();
  }

}
