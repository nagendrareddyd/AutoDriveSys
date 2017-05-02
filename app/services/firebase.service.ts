import { Injectable } from '@angular/core';
import { masterFirebaseConfig  } from '../api.keys';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseApp {    
 /* name: string;
  options: {};
  auth: () => firebase.auth.Auth;
  database: () => firebase.database.Database;
  messaging: () => firebase.messaging.Messaging;
  storage: () => firebase.storage.Storage;
  delete: () => firebase.Promise<any>;
*/
  constructor(){ 
      firebase.initializeApp({
            apiKey: masterFirebaseConfig.apiKey,
    	    authDomain: masterFirebaseConfig.authDomain,
            databaseURL: masterFirebaseConfig.databaseURL,
            storageBucket: masterFirebaseConfig.storageBucket,
            messagingSenderId: masterFirebaseConfig.messagingSenderId
        })
  }
}