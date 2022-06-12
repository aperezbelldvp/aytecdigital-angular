import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contacts-model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contact: Contact = new Contact()
  constructor(private http: HttpClient) {

   }

  readContacts(url: string): Observable<Contact[]> {
    return this.http.get<Contact[]>(url);
  }
}
