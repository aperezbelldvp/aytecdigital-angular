import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contacts-model';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {

  constructor(private http: HttpClient) {
  }
  // Utilizamos HttpClient para leer y obtener los datos del data.json
  private readContacts(url: string): Observable<Contact[]> {
     return this.http.get<Contact[]>(url);
  }
  // Getter para usar el método readContacts en el componente card-list
  public getReadContacts(url: string): Observable<Contact[]> {
    return this.readContacts(url);
  }
}
