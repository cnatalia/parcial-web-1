import { Routes } from '@angular/router';
import { UsersListComponent } from './Users/components/users-list/users-list.component';
import { ReposListComponent } from './Repositorios/components/repos-list/repos-list.component';

export const routes: Routes = [
    {path: '', component: UsersListComponent},
    {path: 'usuarios', component: UsersListComponent},
    {path: 'repositorios', component: ReposListComponent}
];

