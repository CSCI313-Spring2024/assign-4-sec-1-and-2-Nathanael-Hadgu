import { Injectable } from "@angular/core";
import { contacts } from './contacts-data';
import { Contact } from "./contacts";
import { signal, Signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private _contacts = signal<Contact[]>([
        { id: 1, fname: 'John', lname: 'Adams', phone: '701‑000‑1000', email: '' },
        { id: 2, fname: 'Mary', lname: 'Jane', phone: '701‑000‑1000', email: '' },
      ]);
      readonly contacts: Signal<Contact[]> = this._contacts.asReadonly();
     
      getContacts() { return this.contacts(); }
      add(contact: Contact) {
        this._contacts.update(cs => [...cs, contact]);
      }
      update(updated: Contact) {
        this._contacts.update(cs => cs.map(c => c.id === updated.id ? updated : c));
      }
      delete(id: number) {
        this._contacts.update(cs => cs.filter(c => c.id !== id));
      }
    
    
}