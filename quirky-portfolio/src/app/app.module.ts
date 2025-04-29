import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'; // <-- ADD THIS LINE

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule // <-- ADD THIS LINE INSIDE IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
