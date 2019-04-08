import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  show = false;
  @Input() defaultcolor = 'white';
  color = this.defaultcolor;

  nom: string;
  prenom: string;

  constructor() {
  }

  ngOnInit() {
  }


  showhide(pgphe) {
    this.show = !this.show;
  }

  changerCouleur(couleur) {
    this.color = couleur ;
  }

  setDefaultcouleur() {
    this.color = this.defaultcolor;
  }
}
