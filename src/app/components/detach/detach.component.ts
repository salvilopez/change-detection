import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataList } from 'src/app/providers/data/data-list.provider';

@Component({
  selector: 'app-detach',
  templateUrl: './detach.component.html',
  styleUrls: ['./detach.component.scss'],
  //Estrategia DEFAULT
  changeDetection: ChangeDetectionStrategy.Default
})
export class DetachComponent implements OnInit {

  constructor(public dataListProvider: DataList,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    //Conseguir que haya un cambio en la lista de nombre cada 5 seg, a pesar de que la lista
    //de nombres va a estar cambiando constantemente

    //1. Se realiza DETACH
    this.changeDetectorRef.detach()

    //2.Plantear intervalo que cada 5 segundos realice un detectChanges() para que coja el ultimo cambio
    setInterval(() => {
      //Se fuerza manualmente a que los cambios se comprueben y se reflejen en la vista
      this.changeDetectorRef.detectChanges()
    }, 5000)

  }

}
