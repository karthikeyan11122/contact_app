import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{
  contactId:string = ''
  contact:any
  groupId:any
  groupName:any
  constructor(private activatedrout:ActivatedRoute,private api:ApiService) {}

  ngOnInit(): void {
    this.activatedrout.params
    .subscribe((data:any)=>{
      this.contactId = data.contactId
      
    });
    //api call
    this.api.viewContact(this.contactId)
    .subscribe((data:any)=>{
      this.contact = data
      this.groupId = data.groupId
    
    //group name 
    this.api.getGroupName(this.groupId)
    subscribe((result:any)=>{
      this.groupName = result.name
    });
  });



  }

}
function subscribe(arg0: (result: any) => void) {
  throw new Error('Function not implemented.');
}

