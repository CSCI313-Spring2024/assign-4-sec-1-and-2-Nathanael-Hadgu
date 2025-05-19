import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { DataService } from '../../data-service';
import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-contact-add',
  imports: [BrowserModule, ReactiveFormsModule],
  templateUrl: './contact-add.component.html',
  styleUrl: './contact-add.component.css'
})
export class ContactAddComponent {
    form: FormGroup;
  
    constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
    ) 
    {
      this.form = this.fb.group({
        fName: ['', Validators.required],
        lName: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.email],
        });
    }
  
    onSubmit() {
    if (this.form.invalid) return;
    const newContact = {
      id: Date.now(),
      ...this.form.value
    };
    this.dataService.add(newContact);
    this.router.navigate(['/contacts']);
    }
  
    onCancel() {
    this.router.navigate(['/contacts']);
    }
  
}
