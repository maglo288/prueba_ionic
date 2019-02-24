import { Component } from '@angular/core';
import {  NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  titulo_vista_uno: String = "Vista 1";

  constructor(
    public navctr: NavController
  ){

  }

  goToVista1(){
    this.navctr.navigateForward('/vista1')
  }
}
