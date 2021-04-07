import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../components/peticion-async/model/pet.model';
@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }


  getContact():Observable<any>{

    return this.http.get<any>("https://randomuser.me/api/")

  }
}
