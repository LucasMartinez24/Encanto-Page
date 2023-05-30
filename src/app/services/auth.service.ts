import { Injectable } from '@angular/core';
import {Auth,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup,signOut,} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  loginEmailUser(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  loginGoogleUser() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  logoutUser() {
    return signOut(this.auth);
  }

}
