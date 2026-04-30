import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReposListComponent } from './components/repos-list/repos-list.component';
import { ReposDetailComponent } from './components/repos-detail/repos-detail.component';

@NgModule({
  declarations: [
    ReposListComponent,
    ReposDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ReposListComponent,
    ReposDetailComponent
  ]
})
export class RepositoriosModule {}
