import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactListComponent } from "./components/contact-list/contact-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment-4';
}
