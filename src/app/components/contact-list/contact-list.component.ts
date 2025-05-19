import { Component, computed, signal, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data-service';
import { Contact } from '../../contacts';
import { ContactCardComponent } from "../contact-card/contact-card.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  imports: [ContactCardComponent, RouterModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  contacts!: Signal<Contact[]>;

  ngOnInit() {
    this.contacts = this.contactService.contacts;
  }

  constructor(
	private contactService: DataService,
	private router: Router
  ) {}

  onEdit(contact: Contact) {
	this.router.navigate(['/contacts', contact.id, 'edit']);
  }

  onDelete(contact: Contact) {
	if (confirm(`Delete ${contact.fname} ${contact.lname}?`)) {
  	this.contactService.delete(contact.id);
	}
  }
  onAdd() {
  this.router.navigate(['/contacts/add']);
  }
}

