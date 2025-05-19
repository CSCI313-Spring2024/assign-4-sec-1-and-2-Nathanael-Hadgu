import { Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactAddComponent } from './components/contact-add/contact-add.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';



export const routes: Routes = [
    {path: '', redirectTo: 'contacts', pathMatch: 'full'},
    {path: 'contacts', component: ContactListComponent},
    {path: 'contacts/add', component: ContactAddComponent},
    {path: 'contacts/:id/edit', component: ContactEditComponent},
    {path: 'contacts/**', component: NotFoundComponent}
];
