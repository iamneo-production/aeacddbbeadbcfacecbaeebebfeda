import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FilterPipe } from "./filter.pipe";
import { CurrencyconvPipe } from './currencyconv.pipe';

@NgModule({
declarations: [
AppComponent,
FilterPipe,
CurrencyconvPipe
],
imports: [
BrowserModule,
AppRoutingModule,
FormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { } 