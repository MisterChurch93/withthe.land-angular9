import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './pages/company/company.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule
  ],
  providers: [
    {
      provide : LocationStrategy,
      useClass: HashLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
