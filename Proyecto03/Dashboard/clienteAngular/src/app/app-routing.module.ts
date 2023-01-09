import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CpiesComponent } from './components/cpies/cpies.component';
import { IpesComponent } from './components/ipes/ipes.component';
import { CpiusComponent } from './components/cpius/cpius.component';
import { UnenploymentComponent } from './components/unenployment/unenployment.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path: "info", component: InfoComponent },
  { path: "ipes", component: IpesComponent },
  { path: "cpius", component:CpiusComponent },
  { path: "unenployment", component: UnenploymentComponent },
  { path: "cpies", component: CpiesComponent },
  { path: "**", redirectTo: "info" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
