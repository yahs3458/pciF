import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { component: SplashScreenComponent,path: '' },
  {    component: LoginComponent, path: 'login' },
  {  path : 'pendingDashboard', component:DashboardComponent},
  // {
  //   component: ClaimFormComponent,
  //   path: 'claimForm'
  // },
  // { path: 'generalInfo', component: GeneralinformationComponent},
  // { path: 'table/:id', component: TableComponent},
  // { path: 'travelingAllowance', component: TravellingAllowanceComponent},
  // { path: 'calculation', component: ClaimCalculationComponent},
  // { path: 'attachment', component: AttachmentComponent},
  // { path: 'report', component: ReportComponent},
  // { path: 'inspectionDashboard', component: InspectionDashboardComponent},
  // { path: 'inspectionDetail', component: InspectionDetailComponent},
  // { path: 'pendingDetail', component: PendingDetailComponent},
];

@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
