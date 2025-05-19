import { Component, computed, signal, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data-service';
import { Contact } from '../../contacts';
import { ContactCardComponent } from "../contact-card/contact-card.component";
import { RouterModule, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  imports: [ContactCardComponent, RouterModule, RouterLink, CommonModule, FormsModule],
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
  console.log("test");
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

