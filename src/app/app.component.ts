import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCVqAZKJoP6QQXyog_nIobc32nTF562H0E",
      authDomain: "ang7-spa-demo-backend.firebaseapp.com"
    });
  }

  title = 'ang7-spa-demo';
}
