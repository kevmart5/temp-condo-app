import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {
  public = ''

  ngOnInit(): void {
    this.public = 'AppLoginComponent';
  }

}
