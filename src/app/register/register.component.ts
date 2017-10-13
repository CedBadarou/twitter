import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from './user';
import { Router } from '@angular/router';
// import { LoginComponent } from '../login/login.component';
// ,
// private login:LoginComponent

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../form.css']
})
export class RegisterComponent {

  constructor(private _dataService: DataService,
              private router: Router) {}
  model = new User('', '', '');
  submitted = false;
  conf_pass = "";
  message = "";

  onSubmit() {
    this._dataService.request = this.model
    if(this.conf_pass == this.model.password){
      this._dataService.postUsers()
      .subscribe(res => {
        this.message = res;
        if(res =="Inserted successfully"){
          this.submitted = true;
          // this.login.model.username = this.model.username
          // this.login.model.password = this.model.password
          // this.login.onSubmit();
        }
      });
    }
    else{
      this.message = "The password and its confirmation must be the same. "
    }
  }

  get diagnostic() { return JSON.stringify(this.model);}

}
