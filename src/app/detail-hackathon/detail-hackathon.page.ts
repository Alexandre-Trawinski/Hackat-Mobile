import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-detail-hackathon',
  templateUrl: './detail-hackathon.page.html',
  styleUrls: ['./detail-hackathon.page.scss'],
})
export class DetailHackathonPage implements OnInit {

  item="";

  constructor(private router: Router,
    private activeRoute : ActivatedRoute) {
      this.activeRoute.queryParams.subscribe(params =>{
        if(this.router.getCurrentNavigation().extras.state) {
          this.item=
          this.router.getCurrentNavigation().extras.state.param1;
        }
      });
    }

  ngOnInit() {
  }

  MonClickAtelier(item){
    let navigationExtras: NavigationExtras = {
      state: {
      param1: item
      }
    }
    this.router.navigate(['/atelier'], navigationExtras);
  }

}
