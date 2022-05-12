import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ListeHackathons: any;
  ListeHackathonsAff: any;

  ListeVille: any;
  email = '';
  isconnected = 0;

  constructor(
    private http: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private nativeStorage: Storage
  ) {
    this.http
      .get('https://www.sio-savary.fr/~atrawinski/hackat-web/public/api/hackathons')
      .subscribe((results) => {
        this.ListeHackathons = results;
        this.ListeHackathonsAff = results;
        let ville = [];
        this.ListeHackathons.forEach((element) => {
          ville.push(element.ville);
        });
        this.ListeVille = Array.from(new Set(ville));
      });
    this.activeRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.email = this.router.getCurrentNavigation().extras.state.param1;
      }
    });
  }

  //Fonction tri par ville
  onChange($event) {
    this.ListeHackathonsAff = [];
    if ($event.detail.value != 'toutesLesVilles') {
      this.ListeHackathons.forEach((villeSelectionnee) => {
        if (villeSelectionnee.ville == $event.detail.value) {
          this.ListeHackathonsAff.push(villeSelectionnee);
        }
      });
    } else {
      this.ListeHackathonsAff = this.ListeHackathons;
    }
  }

  ClickDetails(item) {
    let navigationExtras: NavigationExtras = {
      state: {
        param1: item,
      },
    };
    this.router.navigate(['/detail-hackathon'], navigationExtras);
  }

  MonClickLogin() {
    this.router.navigate(['/form-login']);
  }
}
