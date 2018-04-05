import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class FirebaseProvider {

  constructor(public http: HttpClient, public fire: AngularFireDatabase) {
   // console.log('Hello FirebaseProvider Provider');
  }

  getTareasElementos(){
    return this.fire.list('/tareasElementos/');
  }

  addTarea(name){
    this.fire.list('/tareasElementos/').push(name);
  }

  deleteTarea(id){
    this.fire.list('/tareasElementos/').remove(id);
  }


}
