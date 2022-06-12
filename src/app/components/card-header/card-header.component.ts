import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contacts-model';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.css']
})
export class CardHeaderComponent implements OnInit {

  @Input() contactList : Contact

  constructor() { }

  ngOnInit(): void {
  }

}