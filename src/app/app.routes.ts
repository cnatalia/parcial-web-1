import { Routes } from '@angular/router';
import { UsersListComponent } from './Users/components/users-list/users-list.component';
import { ReposListComponent } from './Repositorios/components/repos-list/repos-list.component';
import { ReposDetailComponent } from './Repositorios/components/repos-detail/repos-detail.component';

export const routes: Routes = [
    {path: '', component: UsersListComponent},
    {path: 'usuarios', component: UsersListComponent},
    {path: 'repositorios', component: ReposListComponent},
    {path: 'repositorios/:id', component: ReposDetailComponent}
];

