import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.page.html',
  styleUrls: ['./form-login.page.scss'],
})
export class FormLoginPage implements OnInit {

  myForm: FormGroup;
  submitted = false;
  isconnected=0;



  constructor(public formBuilder: FormBuilder,private router: Router,private http:HttpClient,private nativeStorage: Storage) { }

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
    console.log("ici")
    this.submitted = true;
    if (!this.myForm.valid) {
      console.log('All fiels are required.')
      return false;
    } else {
      this.http.get("http://localhost:8000/api/participants/"+this.myForm.value.email+"/"+this.myForm.value.pwd).subscribe((data)=>{
        console.log(data)
        this.nativeStorage.set('user', {connected: 1, user:data})
        
        this.router.navigate(['/home']);
      })
      console.log(this.myForm.value)
      if(this.myForm.value.email == "http://localhost:8000/api/participants[{email}]" && this.myForm.value.pwd=="http://localhost:8000/api/participants[{password}]"){
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
