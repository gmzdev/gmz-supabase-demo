import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, AuthComponent, AccountComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
