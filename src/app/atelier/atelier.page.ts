import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.page.html',
  styleUrls: ['./atelier.page.scss'],
})
export class AtelierPage implements OnInit {

  Evenement: any;

  constructor(private router: Router,
    private activeRoute : ActivatedRoute, private http : HttpClient) {
      var mid=0;
      this.activeRoute.queryParams.subscribe(params =>{
        if(this.router.getCurrentNavigation().extras.state) {
         /* this.Evenement=
          this.router.getCurrentNavigation().extras.state.param1;
          */
         mid =this.router.getCurrentNavigation().extras.state.param1;
         this.http.get("http://localhost:8000/api/hackathons/"+mid+"/evenements").subscribe(results => {
          console.log(results);
          this.Evenement=results;
        });
        }
      });


  }

  ngOnInit() {
  }

}
