import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

const firebaseConfig = {
  apiKey: "AIzaSyDY2VPDHZHRT_QkY2oXIVEKpSg0T5MwR-M",
  authDomain: "todo-ffcf6.firebaseapp.com",
  projectId: "todo-ffcf6",
  storageBucket: "todo-ffcf6.appspot.com",
  messagingSenderId: "560993699896",
  appId: "1:560993699896:web:a04bc0a6288e52ae8a3ecd"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
