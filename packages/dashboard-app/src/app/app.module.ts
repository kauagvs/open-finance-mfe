import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { PartnersService } from './core/services/partners.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditModalComponent } from './shared/add-edit-modal/add-edit-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PartnersComponent } from './modules/partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    AddEditModalComponent,
    PartnersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [PartnersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
