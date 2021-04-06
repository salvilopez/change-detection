import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'change-detection';

  //Valor para el ejemplo de REATTACH
  live = true

  //Lista de datos para ejemplo Async Pipe
  numeros: number[] = []
  //Subject que recibe por defento valor inicial
  numeros$ = new BehaviorSubject(this.numeros)

  /**
   * Añade a la lista de numeros
   */
  add() {
    this.numeros.push(Math.floor(Math.random() * 100) +1)
    //Emitimos a traves de next() la nueva lista con el elemento añadido
    this.numeros$.next(this.numeros)
  }
}
