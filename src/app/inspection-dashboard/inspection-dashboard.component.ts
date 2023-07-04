import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
const tinycolor = require('tinycolor2');
@Component({
  selector: 'app-inspection-dashboard',
  templateUrl: './inspection-dashboard.component.html',
  styleUrls: ['./inspection-dashboard.component.css']
})
export class InspectionDashboardComponent {
  constructor(private router : Router,private http: HttpClient){}
  gridConfig: any[] =[]; 
  getColor(index : number): string {
    const baseColor = '#b4d2ee'; // Replace with your desired base color
    const colorVariant = tinycolor(baseColor).lighten(index * 5).toString();
    console.log( " colorV ->  "  , colorVariant)
    return colorVariant;
  }
  navigateToDashboard(){
    this.router.navigate(['/inspectionDetail'])
  }
  ngOnInit() {
    this.http.get<any>('assets/data.json')
      .subscribe(data => {
        this.gridConfig = data;
      });
  }
}
