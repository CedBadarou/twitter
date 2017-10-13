import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from './user';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../form.css']
})
export class LoginComponent {

  constructor(private _dataService: DataService,
              private cookieService: CookieService,
              private app: AppComponent,
              private router:Router) {}

  model = new User('', '');
  submitted = false;
  message = "";

  onSubmit() {
    this._dataService.request = this.model
    this._dataService.login()
        .subscribe(res => {
          localStorage.setItem('username', this.model.username);
          this.submitted = true
          this.message="You are now connected !"
          AppComponent.updateUsername.next(true);
          this.cookieService.set('token', res);
          this.router.navigateByUrl("/current_user")
        },error => {
          this.message = (error._body)
        });
  }

  get diagnostic() { return JSON.stringify(this.model);}

}
