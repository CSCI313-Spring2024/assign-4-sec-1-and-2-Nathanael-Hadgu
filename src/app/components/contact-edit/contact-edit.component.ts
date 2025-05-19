import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { DataService } from '../../data-service';
import { Contact } from '../../contacts';
import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-contact-edit',
  imports: [BrowserModule, ReactiveFormsModule],
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.css'
})
export class ContactEditComponent implements OnInit{
    form!: FormGroup;
    contactId!: number;
  
    constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: DataService,
    private router: Router
    ) {
      this.form = this.fb.group({
        fName: ['', Validators.required],
        lName: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.email],
        });
    }
  
    ngOnInit() {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));
    const contact = this.service.contacts().find(c => c.id === this.contactId);
    if (!contact) {
      this.router.navigate(['/contacts']);
      return;
    }
    this.form.patchValue(contact);
    }
  
    onSave() {
    if (this.form.invalid) return;
    const updated: Contact = {
      id: this.contactId,
      ...this.form.value
    };
    this.service.update(updated);
    this.router.navigate(['/contacts']);
    }
  
    onCancel() {
    this.router.navigate(['/contacts']);
    }
  
}
