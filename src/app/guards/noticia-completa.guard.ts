import { NoticiaService } from './../services/noticia.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoticiaCompletaGuard implements CanActivate {

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private noticiasService: NoticiaService) {}

    canActivate(): boolean {
      if (this.noticiasService.noticiaCompleta === true){
        return true;
      }else{
        return false;
      }
  }

}
