import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { ContactComponent } from './contact/contact.component';
import { MissionComponent } from './mission/mission.component';
import { LegalComponent } from './legal/legal.component';

@NgModule({
  declarations: [ContactComponent, MissionComponent, LegalComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
