import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-detail-hackathon',
  templateUrl: './detail-hackathon.page.html',
  styleUrls: ['./detail-hackathon.page.scss'],
})
export class DetailHackathonPage implements OnInit {

  constructor() { }

  ngOnInit() {
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
    this.router.navigate(['/page2'], navigationExtras);
  }

}
