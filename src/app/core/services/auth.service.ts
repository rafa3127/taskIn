import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  errors: any = {
    "auth/network-request-failed": "La aplicación no pudo conectarse con el servidor. Revisa tu conexión a internet",
    "auth/email-already-in-use": "Ya hay una cuenta registrada con este email",
    "auth/weak-password": "La contraseña es demasiado debil. Debe tener al menos 6 caracteres",
    "auth/invalid-email": "El email ingresado no es válido",
    "auth/user-not-found": "El email ingresado no está registrado. Verifíca los datos",
    "auth/wrong-password": "Contraseña incorrecta. Verifíca los datos"
  }

  userData: any = {}

  constructor(
    public afs: AngularFirestore,  
    public afAuth: AngularFireAuth,
    public router: Router,  
    public utilities: UtilitiesService
  ) { 
    
  this.afAuth.authState.subscribe(user => {
    if (user) {
      this.userData = user;
      localStorage.setItem('user', JSON.stringify(this.userData));
      utilities.jsonConverter(localStorage.getItem('user'))
      return user
    } else {
      return false
    }})
  }

  SignIn(email:string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }

  SignUp(email:string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
  }
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['auth']);
    })
  }

  SetUserData(user: User | any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  getUserData(){
    return this.utilities.jsonConverter(localStorage.getItem('user'))
  }

}
