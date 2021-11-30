import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ListeHackathons: any;
  ListeHackathonsAff: any;
  ListeVille:any;

  constructor(private http: HttpClient, private router: Router) {

    this.http.get("http://localhost:8000/api/hackathons").subscribe(results => {
      console.log(results);
      this.ListeHackathons=results; 
      this.ListeHackathonsAff=results; 
      let ville = [];
      this.ListeHackathons.forEach(element => {
        ville.push(element.ville)
      });
      this.ListeVille = Array.from(new Set(ville));
    })
  }

  onChange(e){
    console.log(e.target.value)
    this.ListeHackathonsAff=[];
    this.ListeHackathons.forEach(element => {
      if(element.ville == e.target.value)this.ListeHackathonsAff.push(element);
    });

  }

  ClickDetails(item){
    console.log(item);
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
