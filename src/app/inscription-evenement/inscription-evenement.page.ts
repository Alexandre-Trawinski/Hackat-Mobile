import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';


@Component({
  selector: 'app-inscription-evenement',
  templateUrl: './inscription-evenement.page.html',
  styleUrls: ['./inscription-evenement.page.scss'],
})
export class InscriptionEvenementPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
