import { group } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/MyContacts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string = 'http://localhost:3000/contacts'
  constructor(private http:HttpClient) { }

  //api call for get allcontacts
  getAllContacts():Observable<MyContact>{
   return this.http.get(this.baseUrl)
    
  }
  //function view a particular contacts
  viewContact(contactId:string){
   return this.http.get(`${this.baseUrl}/${contactId}`)
  }
  //function get a particular group

  getGroupName(groupId:string){
   return this.http.get('http://localhost:3000/groups/'+groupId)

  }
  //function for fetch all groups from 'http://localhost:3000/groups/'

  getAllGroups(){
   return this.http.get('http://localhost:3000/groups')
  }

  //function for adding new contact to server 

  addContact(contactBody:any){
   return this.http.post(this.baseUrl,contactBody)
  }
}
