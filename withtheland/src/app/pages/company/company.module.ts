import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';

@NgModule({
  declarations: [ContactComponent, AboutComponent, LegalComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
