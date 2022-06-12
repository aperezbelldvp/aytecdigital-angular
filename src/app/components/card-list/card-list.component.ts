import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contacts-model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  providers: [ContactsService],
})
export class CardListComponent implements OnInit {
  protected contacts: Array<Contact> = new Array<Contact>();
  private urlJson : string = 'https://api.npoint.io/81747a40d85d905c4c23';

  constructor(private contactService: ContactsService) {

  }

  ngOnInit(): void {
    this.loadContacts()
  }

  public loadContacts() {
    this.contactService.readContacts(this.urlJson).subscribe((contacts: Contact[]) => {
      this.contacts = contacts.filter(
        (contact) =>
          (contact.first_name.length > 0 && contact.last_name.length > 0)
      );
    });
  }
}
