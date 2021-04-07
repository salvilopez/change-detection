import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { RandomUserService } from 'src/app/services/random-user.service';
import { Result } from './components/peticion-async/model/Ipet.inteface';
import { Pet } from './components/peticion-async/model/pet.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'change-detection';

  //Valor para el ejemplo de REATTACH
  live = true;

  users: Result[] = [];
  user$ = new BehaviorSubject(this.users);

  constructor(public userService: RandomUserService) {}

   ngOnInit(): void {
    this.userService.getContact().subscribe((response) => {
      let result = response as Pet;
      this.users = result.results;
      console.log(this.users);
      this.user$.next(this.users);
    });



  }
}
