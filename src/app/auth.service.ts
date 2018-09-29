import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import{Observable} from "rxjs/observable";
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$:Observable<firebase.User>;
  constructor(private afAuth:AngularFireAuth,private route:ActivatedRoute) {
    this.user$=afAuth.authState;
   }
   login(){
     let returenUrl=this.route.snapshot.queryParamMap.get('returnUrl') || '/';
     localStorage.setItem('returnUrl',returenUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
   }
    logout(){
      this.afAuth.auth.signOut();
    }
}
