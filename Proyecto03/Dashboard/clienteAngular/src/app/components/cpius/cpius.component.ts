import { Component } from '@angular/core';
import { RecursosService } from 'src/app/servicios/recursos.service';
import { Grafico } from 'src/app/interfaz/grafico';


@Component({
  selector: 'app-cpius',
  templateUrl: './cpius.component.html',
  styleUrls: ['./cpius.component.css']
})
export class CpiusComponent {

  graficos:any;

  constructor(private recursosService: RecursosService) {


  }
  ngOnInit():void {
    this.recursosService.obtenerDatos().subscribe(response => {
      this.graficos = response;
    })
  }
}
