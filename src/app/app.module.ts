import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout'
import { HttpClientModule } from '@angular/common/http';

// Material imports


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';

// component imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { InspectionDashboardComponent } from './inspection-dashboard/inspection-dashboard.component';
import { InspectionDetailComponent } from './inspection-detail/inspection-detail.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { TableComponent } from './table/table.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { PendingDashboardComponent } from './pending-dashboard/pending-dashboard.component';
import { ClaimFormComponent } from './claim-form/claim-form.component';
import { TravellingAllowanceComponent } from './travelling-allowance/travelling-allowance.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { CalculationdeclarationComponent } from './calculationdeclaration/calculationdeclaration.component';
import { PendingDetailComponent } from './pending-detail/pending-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    BottomBarComponent,
    InspectionDashboardComponent,
    InspectionDetailComponent,
    GeneralInfoComponent,
    TableComponent,
    ReportPageComponent,
    PendingDashboardComponent,
    ClaimFormComponent,
    TravellingAllowanceComponent,
    AttachmentComponent,
    CalculationdeclarationComponent,
    PendingDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
  ]
})
export class AppModule { }
