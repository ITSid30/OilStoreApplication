import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ProductOverviewComponent } from './modules/product-overview/product-overview.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { EditProductComponent } from './modules/edit-product/edit-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DeleteProductComponent } from './modules/delete-product/delete-product.component';
import { AddProductComponent } from './modules/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductOverviewComponent,
    HomePageComponent,
    EditProductComponent,
    DeleteProductComponent,
    AddProductComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    ProductOverviewComponent
  ]
})
export class AppModule { }
