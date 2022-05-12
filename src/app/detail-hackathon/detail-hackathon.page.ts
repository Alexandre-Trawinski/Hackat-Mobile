import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, icon } from 'leaflet';

@Component({
  selector: 'app-detail-hackathon',
  templateUrl: './detail-hackathon.page.html',
  styleUrls: ['./detail-hackathon.page.scss'],
})
export class DetailHackathonPage implements OnInit {
  item = '';
  lat:any=0.0;
  long:any=0.0;
  map: Map;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private geolocation: Geolocation, private http: HttpClient,) {
    this.activeRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.item = this.router.getCurrentNavigation().extras.state.param1;
      }
    });

    this.http
      .get('https://api-adresse.data.gouv.fr/search/?q=Lille')
      .subscribe(results => {
      });
  }

  // On recupere les coords du hackathon via une api et on les envoi dans la map
  
  



  ngOnInit() {}

  MonClickAtelier(item) {
    let navigationExtras: NavigationExtras = {
      state: {
        param1: item,
      },
    };
    this.router.navigate(['/atelier'], navigationExtras);
  }

  ionViewDidEnter() {
    this.geolocation.getCurrentPosition().then((data) => {    
      this.lat=data.coords.latitude;
      this.long=data.coords.longitude;
      return this.initMap();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  initMap() {
    // Centrer la carte sur la France
    this.map = new Map('map').setView([this.lat, this.long], 10);

    // Ajout des mentions OpenStreetMap, obligatoire
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map); 

    marker([this.lat, this.long]).addTo(this.map);

    return;
  }
}
