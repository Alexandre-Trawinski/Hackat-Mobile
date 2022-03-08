import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-inscription-evenement',
  templateUrl: './inscription-evenement.page.html',
  styleUrls: ['./inscription-evenement.page.scss'],
})
export class InscriptionEvenementPage implements OnInit {

  user={nom:"", prenom:"", email:""}

  Inscription: any;
  data:any;
  constructor(private router: Router,
    private activeRoute : ActivatedRoute, private http : HttpClient) {
      let data = this.router.getCurrentNavigation().extras.state.param1;
      if(data)
        this.data = data;
    }
    
  logForm(e){
    //console.log(e.id)
    //console.log(this.user);
    this.http.post("http://localhost:8000/api/hackathons/evenements/"+e.id+"/inscriptionAtelier",this.user).subscribe(results => {
    // console.log(results);
    this.Inscription=results;
    this.router.navigate(['/home']);
  })

};

  ngOnInit() {
  }

}

