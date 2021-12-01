import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  ListeHackathons: any;
  email="";
  isconnected=0;

  constructor(private http: HttpClient, private router: Router, private activeRoute: ActivatedRoute,private nativeStorage: Storage) {
   /* this.nativeStorage.create()get('user')
  .then(
    data => {
      console.log(data);
     this.isconnected=data.connected;
     this.email = data.user.nom;
    },
    error => console.error(error)
  );*/

    this.http.get("http://localhost:8000/api/hackathons").subscribe(results => {
      console.log(results);
      this.ListeHackathons=results; 
    
    });
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
       this.email=this.router.getCurrentNavigation().extras.state.param1;
      }
    });
   
  }

  ClickDetails(item){
    let navigationExtras: NavigationExtras = {
      state: {
      param1: item
      }
    }
    this.router.navigate(['/detail-hackathon'], navigationExtras);
  }

  MonClickLogin()
  {
    this.router.navigate(['/form-login']);
  }
} 
