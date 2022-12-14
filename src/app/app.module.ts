import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { CheckComponent } from './components/check/check.component';
import { NaviComponent } from './components/navi/navi.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { ReceiptPipePipe } from './pipes/receipt-pipe.pipe';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { CheckPipe } from './pipes/check.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import {ToastrModule} from "ngx-toastr";
import { AddReceiptComponent } from './add-receipt/add-receipt.component';
import { AddCheckComponent } from './add-check/add-check.component';



@NgModule({
  declarations: [
    AppComponent,
    ReceiptComponent,
    CheckComponent,
    NaviComponent,
    MenuComponent,
    ReceiptPipePipe,
    VatAddedPipe,
    CheckPipe,
    FilterPipePipe,
    AddReceiptComponent,
    AddCheckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
