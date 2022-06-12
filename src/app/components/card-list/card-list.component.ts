import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contacts-model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  providers: [ContactsService]
})
export class CardListComponent implements OnInit {

  contacts: Array<Contact> = new Array<Contact>();

  constructor(private contactService: ContactsService) {

   }

  ngOnInit(): void {
    this.contactService.readContacts().subscribe((contacts: Contact[]) => {
      this.contacts = contacts
    })
  }

  showCard(contact : Contact) : boolean {
    if(contact.first_name && contact.last_name) return true
    return false
  }


}
