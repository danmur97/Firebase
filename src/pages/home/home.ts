import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Observable<any[]>;
  constructor(public navCtrl: NavController,afDB: AngularFireDatabase) {
    this.items = afDB.list('tareas').valueChanges();
  }

}
