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
  /* Array de contactos para mostrar en las tarjetas */
  protected contacts: Array<Contact> = new Array<Contact>();
  /* URL de la data. En este caso del data.json */
  private urlJson: string = 'http://localhost:4200/assets/data.json';

  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {
    this.loadContacts();
  }
  /* loadContacts queda pendiente de los cambios del json con subscribe,
      filtra los contactos por aquellos que tienen nombre y apellido y
      lo guarda en el array de contactos de esta clase. */
  protected loadContacts() {
    this.contactService
      .getReadContacts(this.urlJson)
      .subscribe((contacts: Contact[]) => {
        this.contacts = contacts.filter(
          (contact) =>
            contact.first_name.length > 0 && contact.last_name.length > 0
        );
      });
  }
}
