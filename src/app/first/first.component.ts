import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  show = false;
  color = 'darkorchid';

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
}
