import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InspectionDashboardComponent } from './inspection-dashboard/inspection-dashboard.component';
import { InspectionDetailComponent } from './inspection-detail/inspection-detail.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { component: SplashScreenComponent,path: '' },
  {    component: LoginComponent, path: 'login' },
  {  path : 'pendingDashboard', component:DashboardComponent},
  { path: 'inspectionDashboard', component: InspectionDashboardComponent},
  { path: 'inspectionDetail', component: InspectionDetailComponent},
  { path: 'generalInfo', component: GeneralInfoComponent},
  { path: 'table/:id', component: TableComponent},
  // {
  //   component: ClaimFormComponent,
  //   path: 'claimForm'
  // },
  // { path: 'travelingAllowance', component: TravellingAllowanceComponent},
  // { path: 'calculation', component: ClaimCalculationComponent},
  // { path: 'attachment', component: AttachmentComponent},
  // { path: 'report', component: ReportComponent},
  // { path: 'pendingDetail', component: PendingDetailComponent},
];

@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
