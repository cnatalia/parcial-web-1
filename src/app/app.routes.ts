import { Routes } from '@angular/router';
import { UsersListComponent } from './Users/components/users-list/users-list.component';

export const routes: Routes = [
    {path: '', component: UsersListComponent},
    {path: 'usuarios', component: UsersListComponent},
];

