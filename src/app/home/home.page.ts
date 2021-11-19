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

  constructor(private http: HttpClient, private router: Router) {

    this.http.get("http://localhost:8000/api/hackathons").subscribe(results => {
      console.log(results);
      this.ListeHackathons=results; 
    })
  }

  ClickDetail(item)
  {
    let navigationExtras:NavigationExtras=
    {
      state:
      {
        param1:item
      }
    };
    this.router.navigate(['/detail-hackathon'], navigationExtras);
  }
}
