import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

// refers to a file is not kept in the repo
// It is excluded via: .git/info/exclude
import { secrets } from './secret'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: secrets.api,
      authDomain: secrets.authDomain
    });
  }

  title = 'ang7-spa-demo';
}
