import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
const tinycolor = require('tinycolor2');

@Component({
  selector: 'app-pending-detail',
  templateUrl: './pending-detail.component.html',
  styleUrls: ['./pending-detail.component.css']
})
export class PendingDetailComponent {

  gridConfig :any[]=[];
  getColor(index : number): string {
    const baseColor = '#80babb' ; 
    const colorVariant = tinycolor(baseColor).lighten(index * 5).toString();
    console.log( " colorV ->  "  , colorVariant)
    return colorVariant;
  }

  constructor(private router : Router,private http: HttpClient){}
  ngOnInit() {
    this.http.get<any>('assets/dashboard_data.json')
      .subscribe(data => {
        this.gridConfig = data;
        console.log(this.gridConfig);
      });
  }

  openPage(itemId: number) {
    switch (itemId) {
      case 1:
        this.router.navigate(['/generalInfo']);
        break;
      case 2:
        this.router.navigate(['/table',itemId]);
        break;
      case 3:
        this.router.navigate(['/table',itemId]);
        break;
      case 4:
        this.router.navigate(['/table',itemId]);
        break;
      case 5:
        this.router.navigate(['/table',itemId]);
        break;
      case 6:
        this.router.navigate(['/table',itemId]);
        break;
      default:
        // Handle other item IDs
        this.router.navigate(['/'])
        break;
    }
  }
  
}
