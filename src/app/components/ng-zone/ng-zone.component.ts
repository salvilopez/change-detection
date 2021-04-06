import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-zone',
  templateUrl: './ng-zone.component.html',
  styleUrls: ['./ng-zone.component.scss']
})
export class NgZoneComponent implements OnInit {

  // Porcentaje de progreso inicializado a 0
  progreso = 0
  //Texto para indicar si se ha calculado dentro del Angular Zone o fuera
  texto: string= ''

  //ngZone sirve para realizar operaciones fuera o dentro de Angular Zone
  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
  }

  /**
   * Metodo que sirve para incrementar el progreso hasta llegar al valor 100
   * De 0% a 100%
   * @param final Callback que termina la funcion
   */
  _incrementoProgreso(final: ()=> void ) {
    //Incrementar el progreso en 1%
    this.progreso += 1
    console.log(`Progreso actual: ${this.progreso}%`)

    //Comprobamos que el progreso no supere 100
    if (this.progreso < 100) {
      //Seguir ejecutando la función con TimeOut
      window.setTimeout(() =>this._incrementoProgreso(final), 10 )
    } else {
      //Si se llega a 100, se ejecuta el callback
      final()
    }
  }

  /**
   * Metodo que incrementa la variable progreso hasta 100 DENTRO del Angular Zone
   * Las modificaciones en la vista seran constantes y se vera cada cambio en la pantalla
   */
  procesarDentroAngularZone() {
    this.texto = 'DENTRO'
    //Reiniciamos el valor del proceso
    this.progreso = 0;
    //Realizamos el incremento
    this._incrementoProgreso(() => {
      console.log('(DENTRO DE ANGULAR ZONE) Aumento 100% Terminado')
    })
  }

   /**
   * Metodo que incrementa la variable progreso hasta 100 FUERA del Angular Zone
   * Las modificaciones en la vista NO SE REALIZARAN hasta que se indiquen y
   * entonces se veran los cambios en la pantalla
   */
    procesarFueraAngularZone() {
      this.texto = 'FUERA'
      //Reiniciamos el valor del proceso
      this.progreso = 0;
      //Implementar funcionalidad fuera de Angular Zone para que los valores entre 0 y 100 no se vean
      this.ngZone.runOutsideAngular(() => {
        //Se ejecuta fuera de Angular Zone el incremento
        this._incrementoProgreso(() => {
          //Una vez termine el incremento, se vuelve al NgZone para que se muestre el cambio de valor
          this.ngZone.run(() => {
            console.log('(FUERA DE ANGULAR ZONE) Aumento 100% Terminado')
          })
        })
      })
    }
}
