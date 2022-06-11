import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contacts-model';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.css']
})
export class CardContactComponent implements OnInit {

  @Input() contactList: Contact

  constructor() { }

  ngOnInit(): void {
  }

  showEmail(): void {
    alert(this.contactList.email)
  }

  showPhone(): void {
    alert(this.contactList.phone)
  }

}
