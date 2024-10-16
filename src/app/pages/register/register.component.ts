import { Component } from '@angular/core';
import { CrudService } from '../../shared/crud.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private crud : CrudService , private route : Router) { }

  
  registerForm = new FormGroup({
    fname : new FormControl(),
    lname : new FormControl(),
    address : new FormControl(),
    gender : new FormControl(),
    state : new FormControl(),
    city : new FormControl(),
    dob : new FormControl(),
    pincode : new FormControl(),
    course : new FormControl(),
    email : new FormControl()
  })

  registerData (){
   this.crud.savaData(this.registerForm.value).subscribe()
   alert('Data added!!!!!')
   this.registerForm.reset()
   /* this.route.navigate(['student']) */
  }
}
