import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminBooklistComponent } from './admin-booklist/admin-booklist.component';
import { AdminBookeditComponent } from './admin-bookedit/admin-bookedit.component';
import { AdminRatinglistComponent } from './admin-ratinglist/admin-ratinglist.component';
import { AheaderComponent } from './aheader/aheader.component';
import { AfooterComponent } from './afooter/afooter.component';
import { AdminAddbookComponent } from './admin-addbook/admin-addbook.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminBooklistComponent,
    AdminBookeditComponent,
    AdminRatinglistComponent,
    AheaderComponent,
    AfooterComponent,
    AdminAddbookComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, //We need to import within the module also
    HttpClientModule
  ]
})
export class AdminModule { }
