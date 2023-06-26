import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'alumnos-usm';

  categoria = "Plataformas Estudiantiles"

  cambiar(input: number){
    if (input == 1){
      this.categoria = "Plataformas Estudiantiles"
    }
    if (input == 2){
      this.categoria = "Recursos Campus"
    }
    if (input == 3){
      this.categoria = "Beneficios Estudiantiles"
    }
    if (input == 4){
      this.categoria = "Programas de Intercambio"
    }
    if (input == 5){
      this.categoria = "Calendario Académico"
    }
    if (input == 6){
      this.categoria = "Reglamentos y Protocolos"
    }
    if (input == 7){
      this.categoria = "Contacto"
    }
  }
}
