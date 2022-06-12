import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contacts-model';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.css'],
})
export class CardFooterComponent implements OnInit {
  /* Obtenemos el contacto desde la clase padre (card-list) */
  @Input() contactList: Contact;

  constructor() {}

  ngOnInit(): void {}
  /* showEmail redirige para enviar un mail al contacto */
  protected showEmail(): void {
    window.location.href = `mailto:${this.contactList.email}`;
  }
  /* showEmail redirige para realizar una llamada al número del contacto */
  protected showPhone(): void {
    window.open(`tel:${this.contactList.phone}`);
  }
}
