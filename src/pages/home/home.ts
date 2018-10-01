import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ReporterProvider } from '../../providers/reporter/reporter';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, private repoter:ReporterProvider) {
    
  }
  create(){
    this.repoter.add();
  }
  delete(){
    this.repoter.remove();
  }
}
