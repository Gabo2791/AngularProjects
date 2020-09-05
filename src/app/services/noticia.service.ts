import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  noticiaSel: any;
  noticiaCompleta = false;
  constructor() { }
}
