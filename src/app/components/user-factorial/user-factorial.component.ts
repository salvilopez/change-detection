
import { ChangeDetectorRef, NgZone, } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-factorial',
  templateUrl: './user-factorial.component.html',
  styleUrls: ['./user-factorial.component.scss']
})
export class UserFactorialComponent implements OnInit {
 num:number=0;
 index=0
  numRe=0
  calculo=0

  constructor(private ngZone: NgZone, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.numRe=this.num;
    this.index=0;
  }

  cmprobarFactorial(){
 this.numRe=this.num;
    this.index=0;
    window.setTimeout(() =>this.factorial(this.num), 10 )
    //console.log(this.factorial(this.num))
  }

    factorial ( numero:number):number {
      if (numero == 0) {
        return 1;
      }
    else {

      this.calculo=0
       this.calculo=numero * this.factorial(numero-1);

      console.log(numero+" * "+this.calculo)
    return this.calculo
    }
  }
















}
















