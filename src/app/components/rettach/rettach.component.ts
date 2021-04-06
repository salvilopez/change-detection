import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RandomData } from 'src/app/providers/data/random-data.provider';

@Component({
  selector: 'app-rettach',
  templateUrl: './rettach.component.html',
  styleUrls: ['./rettach.component.scss'],
  //Input que recibe el componente para saber si tiene que mostrar los cambios del valor en vivo o no
  inputs:['enVivo']
})
export class RettachComponent implements OnInit {

  constructor(
    public randomDataProvider: RandomData,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  //El componente padre le pasara un valor input "enVivo" y al recibirlo se ejecuta este metodo
  set enVivo(valor: boolean) {
    if (valor) {
      //Se reacoplan para que se vean en la vista
      this.changeDetectorRef.reattach();
    } else {
      //Si no es "enVivo" se desacoplan los cambios para que no se vean en la vista
      this.changeDetectorRef.detach();
    }
  }

}
