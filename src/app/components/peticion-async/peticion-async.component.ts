import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Result } from './model/Ipet.inteface';
import { Pet } from './model/pet.model';

@Component({
  selector: 'app-peticion-async',
  templateUrl: './peticion-async.component.html',
  styleUrls: ['./peticion-async.component.scss']
})
export class PeticionAsyncComponent implements OnInit {
  @Input() item$: Observable<Result[]> =of();

  listaResult:Result[]=[]
  constructor() { }

  ngOnInit(): void {
    this.item$.subscribe(numeros => {


        this.listaResult = numeros as Result[];



    })
console.log(this.listaResult[0])


  }
}

