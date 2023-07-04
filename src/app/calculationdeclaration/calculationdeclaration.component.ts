import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-calculationdeclaration',
  templateUrl: './calculationdeclaration.component.html',
  styleUrls: ['./calculationdeclaration.component.css']
})
export class CalculationdeclarationComponent {
  constructor(private router : Router){}

  navigate(){
    this.router.navigate(['/'])
  }
}
