import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,FormBuilder , FormGroup , Validators,ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!:FormGroup;
  submitted = false;

  // username!: string;
  // password!: string;
  showPassword: boolean;

  ngOnInit():void{
    this.loginForm = this.fb.group({
      userName:['',[Validators.required,Validators.email]],
      passWord:['',[Validators.required]]
    })
  }

  get loginData(){
    return this.loginForm.controls;
  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  constructor( private router : Router,private fb : FormBuilder){
    this.showPassword = false;

  }
  onSubmit(){
    this.submitted = true;
    if(this.loginForm.valid){
      this.clear();
      this.loginForm.disable();
    
    console.log('Logging in...');
    // console.log('Username:', this.username);
    // console.log('Password:', this.password);
    this.router.navigate(['/pendingDashboard']);
    }
  }
  clear(){
    this.loginForm.patchValue({
      userName:'',passWord:''
    })
  }
}
