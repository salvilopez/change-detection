import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.scss'],
  //Se añade changeDetection: Default es como no ponerlo.
  //changeDetection: ChangeDetectionStrategy.Default
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {

  //Valor que empiece en 0
  nTicks = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    //Parecido al setTimeout. Cada Segundo nTicks se incrementa en 1
    setInterval(() => {
      this.nTicks++
      console.log(`Nº Ticks: ${this.nTicks}`)
      //Aplicar MarckForCheck para que se actualice la vista
      //Si hay estrategia ONPUSH, hay que ejecutar el metodo markForCheck() para que
      //la vista muestre cada cambio
      this.changeDetectorRef.markForCheck()
    }, 1000)
  }

}
