import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contacts-model';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.css']
})
export class CardFooterComponent implements OnInit {

  @Input() contactList: Contact

  constructor() { }

  ngOnInit(): void {
  }

  showEmail(): void {
    window.location.href = `mailto:${this.contactList.email}`
  }

  showPhone(): void {
    window.open(`tel:${this.contactList.phone}`)
  }

}
