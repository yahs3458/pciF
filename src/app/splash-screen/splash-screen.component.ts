import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent {
  constructor(private router : Router){}
  ngOnInit(){
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2200);
  }
}
