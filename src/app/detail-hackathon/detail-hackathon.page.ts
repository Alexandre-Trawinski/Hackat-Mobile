import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-detail-hackathon',
  templateUrl: './detail-hackathon.page.html',
  styleUrls: ['./detail-hackathon.page.scss'],
})
export class DetailHackathonPage implements OnInit {
  item = '';
  image = '';
  theme = '';
  dateDebut = '';
  dateFin = '';
  heureDebut = '';
  dateLimite = '';
  lieu = '';
  rue = '';
  ville = '';
  cp = '';
  nbPlace = '';

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private socialSharing: SocialSharing
  ) {
    this.activeRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.item = this.router.getCurrentNavigation().extras.state.param1;
      }
    });
  }

  ngOnInit() {}

  MonClickAtelier(item) {
    let navigationExtras: NavigationExtras = {
      state: {
        param1: item,
      },
    };
    this.router.navigate(['/atelier'], navigationExtras);
  }

  MonClickPartager() {
    // Share via email
    this.socialSharing
      .shareViaEmail(
        this.image,
        this.theme,
        this.dateDebut,
        this.dateFin,
        this.heureDebut,
        this.dateLimite,
        this.lieu,
        this.rue,
        this.ville
        this.cp,
        this.nbPlace
      )
      .then(() => {
        // Success!
      });
  }
}
