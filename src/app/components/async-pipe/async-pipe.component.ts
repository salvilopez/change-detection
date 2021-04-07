import { Component, Input, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';


@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent implements OnInit {

  @Input() item$: Observable<number[]> = of()

  listaNumeros: number[] = []

  constructor() { }

  ngOnInit(): void {
    //Para tener la lista real hay que hacer la subscripcion
    this.item$.subscribe(numeros => {
      this.listaNumeros = numeros
    })
  }

}
