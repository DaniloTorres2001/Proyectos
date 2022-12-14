import { Component } from '@angular/core';
import { RecursosService } from './servicios/recursos.service';
import { Grafico } from './interfaz/grafico';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clienteAngular';

  graficos:any;

  constructor(private recursosService: RecursosService) {


  }
  ngOnInit():void {
    this.recursosService.obtenerDatos().subscribe(response => {
      this.graficos = response;
    })
  }

}
