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
import { ReportPageComponent } from './report-page/report-page.component';
import { PendingDashboardComponent } from './pending-dashboard/pending-dashboard.component';
import { ClaimFormComponent } from './claim-form/claim-form.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { TravellingAllowanceComponent } from './travelling-allowance/travelling-allowance.component';
import { CalculationdeclarationComponent } from './calculationdeclaration/calculationdeclaration.component';
import { PendingDetailComponent } from './pending-detail/pending-detail.component';

const routes: Routes = [
  { component: SplashScreenComponent,path: '' },
  { component: LoginComponent, path: 'login' },
  { path : 'pendingDashboard', component:DashboardComponent},
  { path: 'inspectionDashboard', component: InspectionDashboardComponent},
  { path: 'inspectionDetail', component: InspectionDetailComponent},
  { path: 'generalInfo', component: GeneralInfoComponent},
  { path: 'table/:id', component: TableComponent},
  { path: 'report', component: ReportPageComponent},
  { path: 'pendingDetail', component: PendingDetailComponent},
  { path: 'pendingDashboard', component: PendingDashboardComponent},
  { component: ClaimFormComponent,path: 'claimForm'},
  { path: 'attachment', component: AttachmentComponent},
  { path: 'travelingAllowance', component: TravellingAllowanceComponent},
  { path: 'calculation', component: CalculationdeclarationComponent},
];

@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
