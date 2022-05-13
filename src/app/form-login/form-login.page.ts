import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.page.html',
  styleUrls: ['./form-login.page.scss'],
})
export class FormLoginPage implements OnInit {

  myForm: FormGroup;
  submitted = false;
  isconnected=0;



  constructor(public formBuilder: FormBuilder,private router: Router,private http:HttpClient) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      pwd : ['', [Validators.required]]
    })
  }

  get errorCtr() {
    return this.myForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.myForm.valid) {
      return false;
    } else {
      this.http.get("https://www.sio-savary.fr/~atrawinski/hackat-web/public/api/participants/"+this.myForm.value.email+"/"+this.myForm.value.pwd).subscribe((data)=>{
        //this.nativeStorage.set('user', {connected: 1, user:data})
        
        this.router.navigate(['/home']);
      })
      if(this.myForm.value.email == "https://www.sio-savary.fr/~atrawinski/hackat-web/public/api/participants[{email}]" && this.myForm.value.pwd=="https://www.sio-savary.fr/~atrawinski/hackat-web/public/api/participants[{password}]"){
        //connecté
        this.router.navigate(['/home']);

      }
      else alert("login ou pwd incorrect")
      let navigationExtras: NavigationExtras = {
        state : {
        param1: this.myForm.value.email
        }
        }
        this.router.navigate(['/home'], navigationExtras);
        
    }
  }
  MonClickLogin()
  {
    this.router.navigate(['/home']);
  }
}
