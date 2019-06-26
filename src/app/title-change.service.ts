import { Injectable } from '@angular/core';

@Injectable()
export class TitleChangeService {
  title = 'Quejas';

  setTitle(titulo: string) {
    this.title = titulo;
  }

  constructor() { }

}