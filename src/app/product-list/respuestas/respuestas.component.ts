import { Component, OnInit } from '@angular/core';
import { TopBarComponent } from '../../top-bar/top-bar.component'
import { TitleChangeService } from '../../title-change.service';

@Component({
  providers:[TopBarComponent ],

  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {

  constructor(private tp: TopBarComponent, private titleChangeService: TitleChangeService) { }
  responder() {
    alert("Soporte: ¡De nada!")
  }
  
  ngOnInit() {
    this.titleChangeService.setTitle('Correo');
    
  }

}