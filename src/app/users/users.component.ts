import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: Array<any>;
  message: String;
  public currentUser = localStorage.getItem('username');

  constructor(private _dataService: DataService,
              private router: Router) {
    if(!localStorage.getItem("username")){
      this.router.navigate(['/login'])
    }
    console.log("constr")
    this._dataService.getUsers()
        .subscribe(res => {
          this.users = res
        });
  }
  follow(username):void{
    this._dataService.request = {username:username, follower:localStorage.getItem("username")};
    this._dataService.follow()
        .subscribe(res => {
          this.message = res
        }, error => {
          this.message = (error._body);
        });
  }
  unfollow(username):void{
    this._dataService.request = {username:username, follower:localStorage.getItem("username")};
    this._dataService.unfollow()
        .subscribe(res => {
          this.message = res
        }, error => {
          this.message = (error._body);
        });
  }

}
