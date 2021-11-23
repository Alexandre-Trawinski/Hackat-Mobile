import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient} from "@angular/common/http";
import { NavigationExtras } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.page.html',
  styleUrls: ['./form-login.page.scss'],
})
export class FormLoginPage implements OnInit {

  myForm: FormGroup;
  submitted = false;

  connexion = {login:"",password:""}
  constructor(public formBuilder: FormBuilder, private router: Router, private http:HttpClient) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      pwd : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]')]]
    })
  }

  get errorCtr() {
    return this.myForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.myForm.valid) {
      console.log('All fiels are required.')
      return false;
    } else {
      console.log(this.myForm.value)
      this.http.post("http://localhost:8000/api/participants/login", this.connexion)
    .subscribe(results=>{})
      
    }
  }
}
