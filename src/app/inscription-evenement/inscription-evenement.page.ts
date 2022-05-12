import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-inscription-evenement',
  templateUrl: './inscription-evenement.page.html',
  styleUrls: ['./inscription-evenement.page.scss'],
})
export class InscriptionEvenementPage implements OnInit {

  user={nom:"", prenom:"", email:""}

  Inscription: any;
  data:any;
  constructor(private router: Router, private activeRoute : ActivatedRoute, private http : HttpClient, private storage : Storage) {
      let data = this.router.getCurrentNavigation().extras.state.param1;
      if(data)
        this.data = data;

        this.storage.get('user')

      .then(
        data => {
          console.log(data);
        },
        error => console.error(error)
      );
    }
    
  logForm(e){
    this.storage.set('user', this.user)
    this.http.post("https://www.sio-savary.fr/~atrawinski/hackat-web/public/api/hackathons/evenements/"+e.id+"/inscriptionAtelier",this.user).subscribe(results => {
    this.Inscription=results;
    
    this.router.navigate(['/home']);
  })
};

  ngOnInit() {
  }

}

