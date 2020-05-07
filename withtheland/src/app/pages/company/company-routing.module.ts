import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
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
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About'
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
