import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tareasElementos: FirebaseListObservable<any[]>;
  nuevoElemento='';

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.tareasElementos = this.firebaseProvider.getTareasElementos();
  }

  añadir(){
    this.firebaseProvider.addTarea(this.nuevoElemento);
  }

  eliminar(id){
    this.firebaseProvider.deleteTarea(id);
  }

}
