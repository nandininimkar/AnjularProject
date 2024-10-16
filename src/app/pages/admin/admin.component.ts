import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor (private router : Router) { }

  loginForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
  })

  adminLoggedIn(){
    let username = this.loginForm.controls['username'].value
    let password = this.loginForm.controls['password'].value

    if(username === 'ADMIN' && password === 'ADMIN@123'){
      alert('login successful')
      this.router.navigate(['student'])
    }else{
      alert('wrong username and password')
    }
  }
}
