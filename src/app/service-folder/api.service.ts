import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/MyContacts';

@Injectable({
  providedIn: 'root'
})
export class Apiservice {
  baseUe1:string = 'http://localhost:3000/contacts'

  constructor(private http:HttpClient) { }

  getAllcontacts():Observable<MyContact>{
    return this.http.get(this.baseUe1)
  }
}
