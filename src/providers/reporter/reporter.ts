import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

/*
  Generated class for the ReporterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReporterProvider {
  afList: AngularFireList<any>;
  counter: number = 0;
  user = "Danmur";
  last_key:string;
  constructor(private afDB: AngularFireDatabase) {
    console.log('Hello ReporterProvider Provider');
    this.init();
  }
  init(){
    this.afList = this.afDB.list('tareas');
    // this.afList.snapshotChanges(['child_added']).subscribe(
    this.afList.stateChanges(['child_added']).subscribe(
      item =>{
        this.newObj_listener(item);
      }
    );
    // this.afList.snapshotChanges(['child_removed']).subscribe(
    this.afList.stateChanges(['child_removed']).subscribe(
      item =>{
        this.deletedObj_listener(item);
      }
    );
  }
  add(){
    this.afList.push({zA_name: "ZA_"+this.counter,user: "Danmur",id: this.counter,obj: {p1:3,p2:52},other:"XD Lol ok" });
    this.counter++;
  }
  remove(){
    if(!(this.last_key === undefined)){
      this.afList.remove(this.last_key);
    }else{
      throw "last key is undefined";
    }
  }
  newObj_listener(item:any){
    console.log('Added data!');
    console.log(item);
    console.log('-------------');
    if(item.payload.val().user == this.user){
      this.last_key = item.key;
      console.log('Last key updated to '+this.last_key);
    }
  }
  deletedObj_listener(item:any){
    console.log('Removed data 2!');
    // console.log(item);
    console.log(item);
    console.log('-------------');
  }
}
