import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { MissionComponent } from './mission/mission.component';
import { LegalComponent } from './legal/legal.component';

const routes: Routes = [
  {
    path: 'company',
    data: {
      title: 'Company'
    },
    children: [
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact'
        }
      },
      {
        path: 'mission',
        component: MissionComponent,
        data: {
          title: 'Mission'
        }
      },
      {
        path: 'legal',
        component: LegalComponent,
        data: {
          title: 'Legal Information'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
