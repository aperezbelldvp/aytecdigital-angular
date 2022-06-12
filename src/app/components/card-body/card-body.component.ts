import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contacts-model';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.css']
})
export class CardBodyComponent implements OnInit {

  /* Obtenemos el contacto desde la clase padre (card-list) */
  @Input() contactList : Contact

  constructor() { }

  ngOnInit(): void {
  }

}
